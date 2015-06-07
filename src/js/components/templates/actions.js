'use strict';

var Reflux = require('reflux'),
    templateApi = require('./api');

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
  templateApi.getList().then(function(res) {
    actions.list.complete(res.data);
  }, function(err) {
    actions.list.error(err);
  });
};

actions.get.preEmit = function(templateId) {
  templateApi.get(templateId).then(function(template) {
    actions.get.complete(template);
  }, function(err) {
    actions.get.error(err);
  });
};

actions.create.preEmit = function(template) {
  if (!template)
    return;

  templateApi.create(template).then(function(template) {
    actions.create.complete(template);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.update.preEmit = function(template) {
  templateApi.update(template).then(function(template) {
    actions.update.complete(template);
  }, function(err) {
    actions.update.error(err);
  });
};

actions.del.preEmit = function(template) {
  templateApi.del(template).then(function() {
    actions.del.complete(template);
  }, function(err) {
    actions.del.error(err);
  });
};

module.exports = actions;
