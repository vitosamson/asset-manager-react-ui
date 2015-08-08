'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';

import actions from '../actions';
import store from '../store';

export default React.createClass({
  mixins: [
    Reflux.listenTo(store, 'onCategoriesUpdated')
  ],
  getInitialState: function() {
    return {
      categories: store.categories
    };
  },
  componentWillMount: function() {
    actions.list();
  },
  onCategoriesUpdated: function(categories) {
    this.setState({
      categories: categories
    });
  },
  render: function() {
    return (
      <div className="item">
        <i className="columns icon"></i>
        Categories

        <div className="menu">
          {this.state.categories.map(cat =>
            <Link to="category" key={cat.id} params={{catId: cat.id}} className="item">{cat.name}</Link>
          )}
        </div>
      </div>
    );
  }
});
