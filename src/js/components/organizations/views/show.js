'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    orgStore = require('../store').store,
    orgApi = require('../api');

var OrgShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      org: {}
    };
  },
  componentDidMount: function() {
    // invoked once upon initial rendering
    this.getOrg();
  },
  componentWillReceiveProps: function() {
    // invoked when receiving new props - i.e. when navigating from a different page
    this.getOrg();
  },
  getOrg: function() {
    var orgId = this.context.router.getCurrentParams().orgId;
    orgApi.get(orgId).then(function(org) {
      this.setState({
        org: org
      });
    }.bind(this), function(err) {
      console.error(err);
    });
  },
  render: function() {
    var org = this.state.org,
        assets = org.assets ? org.assets.sort() : [];

    function showParent() {
      if (org.parent) {
        return (
          <Link to="org" params={{orgId: org.parent._id}}>
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
              <th colspan="4">Assets</th>
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
