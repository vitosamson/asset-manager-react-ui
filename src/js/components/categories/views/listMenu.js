'use strict';

import React from 'react';
import Reflux from 'reflux';

import catActions from '../actions';

export default React.createClass({
  mixins: [
    Reflux.listenTo(catActions.create.cancel, 'enableNewBtn'),
    Reflux.listenTo(catActions.create.complete, 'enableNewBtn')
  ],
  getInitialState: function() {
    return {
      disableNewBtn: false
    };
  },
  createNewCategory: function() {
    if (this.state.disableNewBtn)
      return;

    catActions.create.start();
    this.setState({
      disableNewBtn: true
    });
  },
  enableNewBtn: function() {
    this.setState({
      disableNewBtn: false
    });
  },
  render: function() {
    var btnClass = this.state.disableNewBtn ? 'item disabled' : 'item';

    return (
      <div className="ui vertical fluid menu">
        <a onClick={this.createNewCategory} className={btnClass}>
          <i className="icon plus square"></i>
          Add a category
        </a>
      </div>
    );
  }
});
