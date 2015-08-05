'use strict';

var Reflux = require('reflux'),
    api = require('./api'),
    $ = require('jQuery');

var actions = Reflux.createActions({
  get: {
    children: ['complete', 'error']
  },
  create: {
    children: ['complete', 'error']
  },
  update: {
    children: ['complete', 'error']
  },
  del: {
    children: ['complete', 'error']
  },
  files: {
    children: {
      upload: {
        children: ['complete', 'error']
      }
    }
  },
  setActiveAsset: {}
});

actions.get.preEmit = function(id) {
  api.get(id).then(function(res) {
    actions.get.complete(res);
  }, function(err) {
    actions.get.error(err);
  });
};

actions.create.preEmit = function(asset) {
  api.create(asset).then(function(res) {
    actions.create.complete(res);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.update.preEmit = function(asset) {
  api.update(asset).then(function(res) {
    actions.update.complete(res);
  }, function(err) {
    actions.update.error(err);
  });
};

actions.del.preEmit = function(asset) {
  api.del(asset).then(function() {
    actions.del.complete(asset);
  }, function(err) {
    actions.del.error(err);
  });
};

var fileActions = Reflux.createActions({
  upload: {
    children: ['complete', 'error']
  },
  del: {
    children: ['complete', 'error']
  }
});

fileActions.upload.preEmit = function(asset, upload) {
  api.files.upload(asset.id, upload).then(function(res) {
    actions.files.upload.complete(res);
  }, function(err) {
    actions.files.upload.error(err);
  });
};

fileActions.del.preEmit = function(file) {
  api.files.del(file.assetId, file.id).then(function() {
    actions.files.del.complete(file);
  }, function(err) {
    actions.files.del.error(err);
  });
};

actions.files = fileActions;

module.exports = actions;
