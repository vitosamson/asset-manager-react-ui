'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Dropdown = require('react-semantify').Dropdown,
    Link = require('react-router').Link,
    orgStore = require('./organizations/store').store;

var sidemenu = React.createClass({
  mixins: [Reflux.connect(orgStore, 'orgs')],
  getInitialState: function() {
    return {
      orgs: orgStore.orgs || []
    };
  },
  render: function() {
    return (
      <div className="four wide column">
        <div className="ui vertical fluid menu">
          <div className="item">
            <div className="ui icon input">
              <input type="search" placeholder="Search"/>
              <i className="search icon"></i>
            </div>
          </div>
        
          <Link to="dashboard" className="item">
            <i className="home icon"></i>
            Dashboard
          </Link>
        
          <div className="item">
            <i className="folder icon"></i>
            Organizations
        
            <div className="menu">
              {this.state.orgs.map(function(org) {
                return (
                  <Link to="org" key={org._id} params={{orgId: org._id}} className="item">{org.name}</Link>
                );
              })}
            </div>
          </div>
        
          <Dropdown className="ui dropdown item" init={true}>
            <i className="icon dropdown"></i>
            Admin
        
            <div className="menu">
              <Link to="orgs" className="item">Organizations</Link>
              <a className="item">Templates</a>
              <a className="item">Users</a>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
});

module.exports = sidemenu;
