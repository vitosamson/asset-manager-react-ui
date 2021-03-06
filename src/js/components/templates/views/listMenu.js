'use strict';

import React from 'react';
import Reflux from 'reflux';

import templateActions from '../actions';

export default React.createClass({
  mixins: [
    Reflux.listenTo(templateActions.create.cancel, 'enableNewBtn'),
    Reflux.listenTo(templateActions.create.complete, 'enableNewBtn')
  ],
  getInitialState: function() {
    return {
      disableNewBtn: false
    };
  },
  createNewTemplate: function() {
    if (this.state.disableNewBtn)
      return;

    templateActions.create.start();
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
    var newBtnClass = this.state.disableNewBtn ? 'item disabled' : 'item';

    return (
      <div className="ui vertical fluid menu">
        <a onClick={this.createNewTemplate} className={newBtnClass}>
          <i className="icon plus square"></i>
          Add a template
        </a>
      </div>
    );
  }
});
