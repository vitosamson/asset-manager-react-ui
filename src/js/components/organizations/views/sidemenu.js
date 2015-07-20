'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    actions = require('../actions'),
    store = require('../store');

var Sidemenu = React.createClass({
  mixins: [
    Reflux.listenTo(store, 'onOrgsUpdate')
  ],
  getInitialState: function() {
    return {
      orgs: []
    };
  },
  componentWillMount: function() {
    actions.list();
  },
  onOrgsUpdate: function(orgs) {
    this.setState({
      orgs: orgs
    });
  },
  render: function() {
    return (
      <div className="item">
        <i className="folder icon"></i>
        Organizations
      
        <div className="menu">
          {this.state.orgs.map(org =>
            <Link to="org" key={org.id} params={{orgId: org.id}} className="item">{org.name}</Link>
          )}
        </div>
      </div>
    );
  }
});

module.exports = Sidemenu;
