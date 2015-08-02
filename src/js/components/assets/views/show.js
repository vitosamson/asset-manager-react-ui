'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    assetActions = require('../actions');

var Asset = React.createClass({
  mixins: [
    Reflux.listenTo(assetActions.get.complete, 'onGetAsset')
  ],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      asset: {}
    };
  },
  componentWillMount: function() { this.getAsset(); },
  componentWillReceiveProps: function() { this.getAsset(); },
  getAsset: function() {
    var assetId = this.context.router.getCurrentParams().assetId;

    assetActions.get(assetId);
  },
  onGetAsset: function(asset) {
    this.setState({
      asset: asset
    });
  },
  render: function() {
    return (
      <div>{this.state.asset.name}</div>
    );
  }
});

module.exports = Asset;
