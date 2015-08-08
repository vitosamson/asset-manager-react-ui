'use strict';

import React from 'react';
import Reflux from 'reflux';

import orgActions from '../actions';

export default React.createClass({
  mixins: [
    Reflux.listenTo(orgActions.create.cancel, 'enableNewBtn'),
    Reflux.listenTo(orgActions.create.complete, 'enableNewBtn')
  ],
  getInitialState: function() {
    return {
      disableNewBtn: false
    };
  },
  createNewOrg: function() {
    if (this.state.disableNewBtn)
      return;

    orgActions.create.start();
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
        <a onClick={this.createNewOrg} className={newBtnClass}>
          <i className="icon plus square"></i>
          Add an organization
        </a>
      </div>
    );
  }
});
