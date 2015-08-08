'use strict';

import Reflux from 'reflux';

import templateApi from './api';

const actions = Reflux.createActions({
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

export default actions;

actions.list.preEmit = function() {
  templateApi.all().then(function(res) {
    var templates = res.body().map(r => r.data());

    actions.list.complete(templates);
  }, function(err) {
    actions.list.error(err);
  });
};

actions.get.preEmit = function(templateId) {
  templateApi.get(templateId).then(function(res) {
    var template = res.body().data();

    actions.get.complete(template);
  }, function(err) {
    actions.get.error(err);
  });
};

actions.create.preEmit = function(template) {
  if (!template)
    return;

  templateApi.create(template).then(function(res) {
    var newTemplate = res.body();

    actions.create.complete(newTemplate);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.update.preEmit = function(template) {
  templateApi.update(template).then(function(res) {
    var updatedTemplate = res.body();

    actions.update.complete(updatedTemplate);
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
