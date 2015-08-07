'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    actions = require('../actions'),
    store = require('../store');

var Sidemenu = React.createClass({
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

module.exports = Sidemenu;
