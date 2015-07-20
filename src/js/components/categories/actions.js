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
  update: {
    children: ['complete', 'error']
  },
  del: {
    children: ['complete', 'error']
  }
});

actions.list.preEmit = function() {
  categoriesApi.getList().then(function(res) {
    actions.list.complete(res.data);
  }, function(err) {
    actions.list.error(err);
  });
};

actions.create.preEmit = function(category) {
  if (!category)
    return;

  categoriesApi.create(category).then(function(cat) {
    actions.create.complete(cat);
  }, function(err) {
    actions.create.error(err);
  });
};

actions.update.preEmit = function(category) {
  categoriesApi.update(category).then(function(cat) {
    actions.update.complete(cat);
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
