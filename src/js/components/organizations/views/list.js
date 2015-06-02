'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    orgStore = require('../store').store,
    orgApi = require('../api');

var OrgList = React.createClass({
  mixins: [Reflux.connect(orgStore, 'orgs')],
  getInitialState: function() {
    return {
      orgs: orgStore.orgs || []
    };
  },
  render: function() {
    function showParent(org) {
      if (org.parent) {
        return (
          <div>
            <i className="icon child"></i>
            {org.parent.name}
          </div>
        );
      }
    }

    return (
      <div className="ui two doubling cards">
        {this.state.orgs.map(function(org, idx) {
          return (
            <div className="ui card">
              <div className="content">
                <div className="header">
                  {org.name}
                </div>
                <div className="meta">
                  {org.description}

                  {showParent(org)}
                </div>
                <div className="description">
                </div>
              </div>
              <div className="extra content">
                <i className="icon server"></i>
                {org.assets ? org.assets.length : '0'} Assets

                <a className="right floated">
                  Go to asset list
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = OrgList;
