'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    _ = require('lodash'),
    moment = require('moment'),
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
      asset: {
        fields: {},
        organization: {},
        category: {},
        creator: {}
      }
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
    assetActions.setActiveAsset(asset);
  },
  render: function() {
    var asset = this.state.asset;

    function formatDate(date) {
      if (!date) return;

      var at = moment(date),
          cutOff = moment().subtract(1, 'day');

      if (cutOff.isBefore(at))
        return at.fromNow();
      else
        return at.format('M/D/YY H:mm');
    }

    return (
      <div>
        <h1 className="ui header">
          <div className="content">
            { asset.name }
          </div>
          <div className="sub header">
            { asset.description }
          </div>
        </h1>

        <h3 className="ui top attached header">Info</h3>
        <div className="ui attached segment">
          <table className="ui table">
            <tr>
              <td>Organization</td>
              <td className="right aligned">{ asset.organization.name }</td>
            </tr>
            <tr>
              <td>Category</td>
              <td className="right aligned">{ asset.category.name }</td>
            </tr>
            <tr>
              <td>Created</td>
              <td className="right aligned">
                { formatDate(asset.createdAt) } by { asset.creator.firstName } { asset.creator.lastName }
              </td>
            </tr>
            <tr>
              <td>Updated</td>
              <td className="right aligned">
                { formatDate(asset.updatedAt) }
              </td>
            </tr>
          </table>
        </div>

        <h3 className="ui top attached header">Data</h3>
        <div className="ui attached segment">
          <table className="ui table">
            <thead>
              <tr>
                <th>Field</th>
                <th className="right aligned">Value</th>
              </tr>
            </thead>
            <tbody>
              {_.map(asset.fields, (field, idx) =>
                <DataField field={ field } key={ idx }/>
              )}
            </tbody>
          </table>
        </div>

        <h3 className="ui top attached header">Notes</h3>
        <div className="ui attached segment">

        </div>

        <h3 className="ui top attached header">Files</h3>
        <div className="ui attached segment">

        </div>
      </div>
    );
  }
});

var DataField = React.createClass({
  getInitialState: function() {
    return {
      field: this.props.field
    };
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      field: props.field
    });
  },
  render: function() {
    var value,
        field = this.state.field;

    if (field.value === undefined) {
      return (
        <tr>
          <td>{ field.name }</td>
          <td></td>
        </tr>
      );
    }

    switch (field.fieldType) {
      case 'text':
        value = field.value;
        break;
      case 'select':
        value = field.value.join(', ');
        break;
      case 'checkbox':
        if (field.value === true)
          value = (<i className="checkmark icon"></i>);
        else
          value = (<i className="minus icon"></i>);
        break;
    }

    return (
      <tr>
        <td>{ field.name }</td>
        <td className="right aligned">{ value }</td>
      </tr>
    );
  }
});

module.exports = Asset;
