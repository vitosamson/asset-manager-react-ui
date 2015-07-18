'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    orgStore = require('../store'),
    orgActions = require('../actions');

var OrgShow = React.createClass({
  mixins: [
    Reflux.listenTo(orgActions.get.complete, 'onOrgUpdate')
  ],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      org: {}
    };
  },
  componentWillMount: function() {
    this.getOrg();
  },
  componentWillReceiveProps: function() {
    // invoked when receiving new props - i.e. when navigating from a different page
    this.getOrg();
  },
  getOrg: function() {
    var orgId = this.context.router.getCurrentParams().orgId;
    orgActions.get(orgId);
  },
  onOrgUpdate: function(org) {
    this.setState({
      org: org
    });
  },
  render: function() {
    var org = this.state.org,
        assets = org.assets ? org.assets.sort() : [];

    function showParent() {
      if (org.parent) {
        return (
          <Link to="org" params={{orgId: org.parent.id}}>
            <div className="sub header">
              <i className="level up icon"></i>
              {org.parent.name}
            </div>
          </Link>
        );
      }
    }

    var assetTable = assets.map(function(asset) {
      return (
        <tr>
          <td>{ asset.name }</td>
          <td>{ asset.description }</td>
          <td>{ asset.modified }</td>
          <td>{ asset.flagged }</td>
        </tr>
      );
    });

    var noAssets = (<tr><td>No assets</td></tr>);

    return (
      <div>
        <h1 className="ui header">
          <div className="content">
            { org.name }
            { showParent() }
            <div className="sub header">{ org.description }</div>
          </div>
        </h1>

        <table className="ui table">
          <thead>
            <tr>
              <th colSpan="4">Assets</th>
            </tr>
          </thead>
          { assets.length > 0 ? assetTable : noAssets }
        </table>

        <div className="ui labeled icon button">
          <i className="add square icon"></i>
          Add new asset
        </div>
      </div>
    );
  }
});

module.exports = OrgShow;
