'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    Reflux = require('reflux'),
    orgStore = require('../store'),
    orgActions = require('../actions');

var OrgList = React.createClass({
  mixins: [
    Reflux.listenTo(orgStore, 'onOrgsUpdated')
  ],
  getInitialState: function() {
    return {
      orgs: orgStore.orgs || []
    };
  },
  componentWillMount: function() {
    orgActions.list();
  },
  onOrgsUpdated: function(orgs) {
    this.setState({
      orgs: orgs
    });
  },
  render: function() {
    function showParent(org) {
      if (org.parent) {
        return (
          <div>
            <i className="level up icon"></i>
            {org.parent.name}
          </div>
        );
      }
    }

    return (
      <div className="ui two doubling cards">
        {this.state.orgs.map(function(org, idx) {
          return (
            <div className="ui card" key={org._id}>
              <div className="content">
                <div className="header">
                  {org.name}
                </div>
                <div className="meta">
                  {showParent(org)}

                  {org.description}
                </div>
                <div className="description">
                </div>
              </div>
              <div className="extra content">
                <i className="icon server"></i>
                {org.assets ? org.assets.length : '0'} Assets

                <Link to="org" params={{orgId: org._id}} className="right floated">
                  Go to asset list
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = OrgList;
