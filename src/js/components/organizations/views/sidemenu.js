'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import { Dropdown } from 'react-semantify';

import actions from '../actions';
import store from '../store';

export default React.createClass({
  mixins: [
    Reflux.listenTo(store, 'onOrgsUpdate')
  ],
  getInitialState: function() {
    return {
      orgs: store.nestedOrgs
    };
  },
  componentWillMount: function() {
    actions.list();
  },
  onOrgsUpdate: function(orgs) {
    this.setState({
      orgs: orgs.nestedOrgs
    });
  },
  render: function() {
    return (
      <div className="item">
        <i className="folder icon"></i>
        Organizations
      
        <div className="menu">
          {this.state.orgs.map(org =>
            org.parentId === null ? <RootOrg org={org} key={org.id}/> : null
          )}
        </div>
      </div>
    );
  }
});

const RootOrg = React.createClass({
  render: function() {
    var org = this.props.org;

    if (org.children && org.children.length) {
      return (<OrgWithChildren org={org}/>);
    } else {
      return (
        <Link to="org" params={{orgId: org.id}} className="item">{org.name}</Link>
      );
    }
  }
});

const OrgWithChildren = React.createClass({
  render: function() {
    var org = this.props.org,
        children = org.children;

    return (
      <Dropdown className="item" init={true}>
        <i className="dropdown icon"></i>
        { org.name }

        <div className="menu">
          <Link to="org" params={{orgId: org.id}} className="item">{ org.name }</Link>

          { children.map(child =>
            child.children && child.children.length ? <OrgWithChildren org={child} key={child.id}/> : <RootOrg org={child} key={child.id}/>
          )}
        </div>
      </Dropdown>
    );
  }
});
