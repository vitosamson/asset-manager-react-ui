'use strict';

import Reflux from 'reflux';
import api from './api';

const actions = Reflux.createActions({
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

export default actions;

actions.get.preEmit = function(id) {
  api.get(id).then(function(res) {
    var asset = res.body().data();

    actions.get.complete(asset);
  }, function(err) {
    actions.get.error(err);
  });
};

actions.create.preEmit = function(asset) {
  api.create(asset).then(function(res) {
    var newAsset = res.body();

    actions.create.complete(newAsset);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.update.preEmit = function(asset) {
  api.update(asset).then(function(res) {
    var updatedAsset = res.body();

    actions.update.complete(updatedAsset);
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
    var file = res.body();

    actions.files.upload.complete(file);
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
