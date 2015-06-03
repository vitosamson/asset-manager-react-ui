'use strict';

var Reflux = require('reflux'),
    orgApi = require('./api');

var actions = Reflux.createActions({
  list: {
    children: ['complete', 'error']
  },
  get: {
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

module.exports = actions;
