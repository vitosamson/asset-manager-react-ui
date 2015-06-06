'use strict';

var Reflux = require('reflux'),
    orgApi = require('./api');

var actions = Reflux.createActions({
  list: {
    children: ['complete', 'error']
  },
  get: {
    children: ['complete', 'error']
  },
  create: {
    children: ['start', 'cancel', 'complete', 'error']
  },
  update: {
    children: ['complete', 'error']
  },
  del: {
    children: ['complete', 'error']
  }
});

actions.list.preEmit = function() {
  orgApi.getList().then(function(res) {
    actions.list.complete(res.data);
  }, function(err) {
    actions.list.error(err);
  });
};

actions.get.preEmit = function(orgId) {
  orgApi.get(orgId).then(function(org) {
    actions.get.complete(org);
  }, function(err) {
    actions.get.error(err);
  });
};

actions.create.preEmit = function(org) {
  if (!org)
    return;

  orgApi.create(org).then(function(org) {
    actions.create.complete(org);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.update.preEmit = function(org) {
  orgApi.update(org).then(function(org) {
    actions.update.complete(org);
  }, function(err) {
    actions.update.error(err);
  });
};

actions.del.preEmit = function(org) {
  orgApi.del(org).then(function() {
    actions.del.complete(org);
  }, function(err) {
    actions.del.error(err);
  });
};

module.exports = actions;
