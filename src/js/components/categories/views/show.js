'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    actions = require('../actions'),
    store = require('../store');

var Show = React.createClass({
  mixins: [
    Reflux.listenTo(actions.get.complete, 'onCatUpdate')
  ],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      category: {
        assets: []
      }
    };
  },
  componentWillMount: function() {
    this.getCategory();
  },
  componentWillReceiveProps: function() {
    this.getCategory();
  },
  getCategory: function() {
    var catId = this.context.router.getCurrentParams().catId;
    actions.get(catId);
  },
  onCatUpdate: function(cat) {
    this.setState({
      category: cat
    });
  },
  render: function() {
    var category = this.state.category,
        assets = category.assets.sort(function(a, b) {
          if (a.name > b.name)
            return 1;
          else if (a.name < b.name)
            return -1;
          else
            return 0;
        });

    var assetTable = assets.map(asset =>
        <tr>
          <td>
            <Link to="asset" params={{ assetId: asset.id }}>{ asset.name }</Link>
          </td>
          <td>{ asset.description }</td>
          <td>{ asset.modified }</td>
          <td>{ asset.flagged }</td>
        </tr>
    );

    var noAssets = (<tr><td>No assets</td></tr>);

    return (
      <div>
        <h1 className="ui header">
          <div className="content">
            { category.name }
            <div className="sub header">{ category.description }</div>
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
      </div>
    );
  }
});

module.exports = Show;
