'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import moment from 'moment';

import assetActions from '../actions';
import { NewFileForm, FileList } from './files';

export default React.createClass({
  mixins: [
    Reflux.listenTo(assetActions.get.complete, 'onGetAsset'),
    Reflux.listenTo(assetActions.files.upload.complete, 'onFileUpload'),
    Reflux.listenTo(assetActions.files.del.complete, 'onFileDelete')
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
        creator: {},
        files: []
      },
      showNewFileForm: false
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
  toggleNewFileForm: function() {
    this.setState({
      showNewFileForm: !this.state.showNewFileForm
    });
  },
  onFileUpload: function(file) {
    var asset = this.state.asset;
    asset.files.push(file);

    this.setState({
      asset: asset,
      showNewFileForm: false
    });
  },
  onFileDelete: function(file) {
    var asset = this.state.asset,
        idx = asset.files.indexOf(file);

    asset.files.splice(idx, 1);
    this.setState({
      asset: asset
    });
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
              <td className="right aligned">{ asset.category ? asset.category.name : '' }</td>
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


        {/**
          ** NOTES
          **/}
        <h3 className="ui top attached header">
          Notes

          <button className="mini ui basic button" style={{float: 'right'}}>New note</button>
        </h3>
        <div className="ui attached segment">

        </div>


        {/**
          ** FILES
          **/}
        <h3 className="ui top attached header">
          Files

          <button className="mini ui basic button" style={{float: 'right'}} onClick={this.toggleNewFileForm}>
            Upload file
          </button>
        </h3>

        { this.state.showNewFileForm ? <NewFileForm asset={this.state.asset} /> : null }

        <FileList files={asset.files} />
      </div>
    );
  }
});

const DataField = React.createClass({
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
        if (field.multiple)
          value = field.value.join(', ');
        else
          value = field.value;
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
