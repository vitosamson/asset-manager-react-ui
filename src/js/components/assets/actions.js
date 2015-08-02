'use strict';

var Reflux = require('reflux'),
    api = require('./api');

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
  }
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

module.exports = actions;
