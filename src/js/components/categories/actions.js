'use strict';

var Reflux = require('reflux'),
    categoriesApi = require('./api');

var actions = Reflux.createActions({
  list: {
    children: ['complete', 'error']
  },
  create: {
    children: ['start', 'complete', 'cancel', 'error']
  },
  get: {
    children: ['complete', 'error']
  },
  update: {
    children: ['complete', 'error']
  },
  del: {
    children: ['complete', 'error']
  }
});

actions.list.preEmit = function() {
  categoriesApi.all().then(function(res) {
    var categories = res.body().map(r => r.data());

    actions.list.complete(categories);
  }, function(err) {
    actions.list.error(err);
  });
};

actions.create.preEmit = function(category) {
  if (!category)
    return;

  categoriesApi.create(category).then(function(res) {
    var newCategory = res.body();

    actions.create.complete(newCategory);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.get.preEmit = function(id) {
  categoriesApi.get(id).then(function(res) {
    var category = res.body().data();

    actions.get.complete(category);
  }, function(err) {
    actions.get.error(err);
  });
};

actions.update.preEmit = function(category) {
  categoriesApi.update(category).then(function(res) {
    var updatedCategory = res.body();

    actions.update.complete(updatedCategory);
  }, function(err) {
    actions.update.error(err);
  });
};

actions.del.preEmit = function(category) {
  categoriesApi.del(category).then(function() {
    actions.del.complete(category);
  }, function(err) {
    actions.del.error(err);
  });
};

module.exports = actions;
