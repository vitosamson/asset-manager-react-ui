'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import orgStore from '../store';
import orgActions from '../actions';
import OrgCard from './card';

export default React.createClass({
  mixins: [
    Reflux.listenTo(orgStore, 'onOrgsUpdated'),
    Reflux.listenTo(orgActions.create.start, 'createNewOrg'),
    Reflux.listenTo(orgActions.create.cancel, 'cancelNewOrg')
  ],
  getInitialState: function() {
    return {
      orgs: orgStore.flatOrgs
    };
  },
  componentWillMount: function() {
    orgActions.flatList();
  },
  onOrgsUpdated: function(orgs) {
    this.setState({
      orgs: _.extend([], orgs.flatOrgs)
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
    if (orgs.length && orgs[0].id === undefined) {
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
        {orgs.map(function(org, idx) {
          return (
            <OrgCard org={org} key={idx} new={org.id === undefined}/>
          );
        })}
      </div>
    );
  }
});
