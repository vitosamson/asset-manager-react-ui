'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Checkbox = require('react-semantify').Checkbox,
    $ = require('jQuery'),
    assetActions = require('../actions');

var Menu = React.createClass({
  mixins: [
    Reflux.listenTo(assetActions.setActiveAsset, 'onAssetSelect'),
    Reflux.listenTo(assetActions.update.complete, 'onAssetSelect')
  ],
  getInitialState: function() {
    return {
      asset: {}
    };
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  onAssetSelect: function(asset) {
    this.setState({
      asset: asset
    });
  },
  onActiveChange: function(val) {
    var asset = this.state.asset;
    asset.active = val;
    assetActions.update(asset);
  },
  onFlaggedChange: function(val) {
    var asset = this.state.asset;
    asset.flagged = val;
    assetActions.update(asset);
  },
  render: function() {
    return (
      <div className="ui vertical fluid menu">
        <div className="item">
          <ActiveToggle active={this.state.asset.active} onChange={this.onActiveChange}/>
        </div>
        <div className="item">
          <FlaggedToggle flagged={this.state.asset.flagged} onChange={this.onFlaggedChange}/>
        </div>
      </div>
    );
  }
});

var ActiveToggle = React.createClass({
  getInitialState: function() {
    return {
      active: this.props.active
    };
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      active: props.active
    });
  },
  componentDidMount: function() {
    var el = this.getDOMNode();
    $(el).checkbox({
      onChecked: this.onChecked,
      onUnchecked: this.onUnchecked,
      fireOnInit: false
    });
  },
  onChecked: function() {
    this.props.onChange(true);
  },
  onUnchecked: function() {
    this.props.onChange(false);
  },
  render: function() {
    return (
      <div className="ui toggle checkbox">
        <input type="checkbox" name="active" checked={this.state.active}/>
        <label>Active</label>
      </div>
    );
  }
});

var FlaggedToggle = React.createClass({
  getInitialState: function() {
    return {
      flagged: this.props.flagged
    };
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      flagged: props.flagged
    });
  },
  componentDidMount: function() {
    var el = this.getDOMNode();
    $(el).checkbox({
      onChecked: this.onChecked,
      onUnchecked: this.onUnchecked,
      fireOnInit: false
    });
  },
  onChecked: function() {
    this.props.onChange(true);
  },
  onUnchecked: function() {
    this.props.onChange(false);
  },
  render: function() {
    return (
      <div className="ui toggle checkbox">
        <input type="checkbox" name="flagged" checked={this.state.flagged}/>
        <label>Flagged</label>
      </div>
    );
  }
});

module.exports = Menu;
