'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    _ = require('lodash'),
    orgStore = require('../store'),
    orgActions = require('../actions'),
    OrgCard = require('./card');

var OrgList = React.createClass({
  mixins: [
    Reflux.listenTo(orgStore, 'onOrgsUpdated'),
    Reflux.listenTo(orgActions.create.start, 'createNewOrg'),
    Reflux.listenTo(orgActions.create.cancel, 'cancelNewOrg')
  ],
  getInitialState: function() {
    return {
      orgs: []
    };
  },
  componentWillMount: function() {
    orgActions.list();
  },
  onOrgsUpdated: function(orgs) {
    this.setState({
      orgs: _.extend([], orgs)
    });
  },
  createNewOrg: function() {
    var orgs = this.state.orgs;
    orgs.unshift({});
    this.setState({
      orgs: orgs
    });
  },
  cancelNewOrg: function() {
    var orgs = this.state.orgs;
    if (orgs.length && orgs[0]._id === undefined) {
      orgs.shift();
      this.setState({
        orgs: orgs
      });
    }
  },
  render: function() {
    var orgs = this.state.orgs;

    return (
      <div className="ui two doubling cards">
        {orgs.length ? orgs.map(function(org, idx) {
          return (
            <OrgCard org={org} key={idx} new={org._id === undefined}/>
          );
        }) : ''}
      </div>
    );
  }
});

module.exports = OrgList;
