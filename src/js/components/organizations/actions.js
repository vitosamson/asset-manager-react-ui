'use strict';

import Reflux from 'reflux';

import orgApi from './api';

const actions = Reflux.createActions({
  list: {
    children: ['complete', 'error']
  },
  flatList: {
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

export default actions;

actions.list.preEmit = function() {
  orgApi.all().then(function(res) {
    var orgs = res.body().map(r => r.data());

    actions.list.complete(orgs);
  }, function(err) {
    actions.list.error(err);
  });
};

actions.flatList.preEmit = function() {
  orgApi.all({flat: true}).then(function(res) {
    var orgs = res.body().map(r => r.data());

    actions.flatList.complete(orgs);
  }, function(err) {
    actions.flatList.error(err);
  });
};

actions.get.preEmit = function(orgId) {
  orgApi.get(orgId).then(function(res) {
    var org = res.body().data();

    actions.get.complete(org);
  }, function(err) {
    actions.get.error(err);
  });
};

actions.create.preEmit = function(org) {
  if (!org)
    return;

  orgApi.create(org).then(function(res) {
    var newOrg = res.body();

    actions.create.complete(newOrg);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.update.preEmit = function(org) {
  orgApi.update(org).then(function(res) {
    var updatedOrg = res.body();

    actions.update.complete(updatedOrg);
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
