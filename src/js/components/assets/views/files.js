'use strict';

import React from 'react';
import Reflux from 'reflux';
import actions from '../actions';
import classNames from 'classnames';
import moment from 'moment';

export const NewFileForm = React.createClass({
  mixins: [
    Reflux.listenTo(actions.files.upload.complete, 'onUploadComplete')
  ],
  getInitialState: function() {
    return {
      upload: {}
    };
  },
  setFileName: function(e) {
    var name = e.target.value,
        upload = this.state.upload;

    upload.name = name;

    this.setState({
      upload: upload
    });
  },
  selectFile: function() {
    var file = this.refs.file.getDOMNode().files[0],
        upload = this.state.upload;

    upload.file = file;

    this.setState({
      upload: upload
    });
  },
  uploadFile: function(e) {
    e.preventDefault();

    actions.files.upload(this.props.asset, this.state.upload);
  },
  onUploadComplete: function() {
    this.setState({
      upload: {}
    });

    this.refs.uploadForm.getDOMNode().reset();
  },
  render: function() {
    var selectFileBtnClass = classNames('ui button', {
      green: this.state.upload.file !== undefined
    });

    return (
      <div className="ui attached segment">
        <form className="ui fluid form" onSubmit={this.uploadFile} ref="uploadForm">
          <div className="three fields">
            <div className="ui small input field">
              <input placeholder="Short description (optional)" maxLength="60" type="text" onChange={this.setFileName} className=""/>
            </div>

            <div className="field">
              <label htmlFor="file" className={selectFileBtnClass}>
                { this.state.upload.file ? this.state.upload.file.name : 'Select file' }

                <input type="file" id="file" name="file" onChange={this.selectFile} ref="file" style={{display: 'none'}} />
              </label>
            </div>

            <div className="field">
              <button className="ui button primary" type="submit" disabled={this.state.upload.file === undefined}>
                Upload file
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

const fileIcons = {
  image: 'file image outline icon',
  video: 'file video outline icon',
  word: 'file word outline icon',
  excel: 'file excel outline icon',
  powerpoint: 'file powerpoint outline icon',
  pdf: 'file pdf outline icon',
  text: 'file text outline icon',
  other: 'file outline icon'
};

export const FileList = React.createClass({
  getInitialState: function() {
    return {
      files: this.props.files || []
    };
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      files: props.files
    });
  },
  deleteFile: function(file) {
    actions.files.del(file);
  },
  fileIcon: function(file) {
    var fileType = file.mimeType;

    if (!fileType)
      return fileIcons.other;

    if (fileType.indexOf('image') > -1)
      return fileIcons.image;
    else if (fileType.indexOf('video') > -1)
      return fileIcons.video;
    else if (fileType.indexOf('msword') > -1 || fileType.indexOf('wordprocessingml') > -1)
      return fileIcons.word;
    else if (fileType.indexOf('excel') > -1 || fileType.indexOf('spreadsheetml') > -1)
      return fileIcons.excel;
    else if (fileType.indexOf('powerpoint') > -1 || fileType.indexOf('spreadsheetml') > -1)
      return fileIcons.powerpoint;
    else if (fileType.indexOf('pdf') > -1)
      return fileIcons.pdf;
    else if (fileType.indexOf('text') > -1)
      return fileIcons.text;
    else
      return fileIcons.other;
  },
  render: function() {
    var files = this.state.files.sort(function(a, b) {
      var aName = a.name || a.originalFilename,
          bName = b.name || b.originalFilename;

      if (aName > bName)
        return 1;
      else if (aName < bName)
        return -1;
      else
        return 0;
    });

    function formatDate(date) {
      if (!date) return;

      var at = moment(date),
          cutOff = moment().subtract(1, 'day');

      if (cutOff.isBefore(at))
        return at.fromNow();
      else
        return 'at ' + at.format('M/D/YY H:mm');
    }

    return (
      <div className='ui bottom attached segment'>
        <div className="ui segments">
          {files.map((file, idx) =>
            <div className="ui clearing segment" key={file.id || idx}>
              <a href={'/' + file.path } target="_blank">
                <i className={ this.fileIcon(file) }></i>
                { file.name || file.originalFilename }
              </a>

              <small style={{float: 'right'}}>
                { file.creator.firstName } { file.creator.lastName }, { formatDate(file.createdAt) }

                <i className="trash outline icon" style={{marginLeft: '8px'}} onClick={this.deleteFile.bind(this, file)}></i>
              </small>
            </div>
          )}
        </div>
      </div>
    );
  }
});
