'use strict';

var Reflux = require('reflux'),
    userApi = require('./api');

var actions = Reflux.createActions({
  login: {
    children: ['complete', 'error']
  },
  register: {
    children: ['complete', 'error']
  },
  me: {
    children: ['complete', 'error']
  },
  validate: {
    children: ['complete', 'error']
  },
  update: {
    children: ['complete', 'error']
  },
  logout: {}
});

actions.login.preEmit = function(user) {
  userApi.login(user).then(function(res) {
    actions.login.complete(res.data.token, res.data.user);
  }, function(err) {
    actions.login.error(err);
  });
};

actions.register.preEmit = function(user) {
  userApi.register(user).then(function(res) {
    actions.register.complete(res.data.token, res.data.user);
  }, function(err) {
    actions.register.error(err);
  });
};

actions.me.preEmit = function() {
  userApi.me().then(function(user) {
    actions.me.complete(user);
  }, function(err) {
    actions.me.error(err);
  });
};

actions.update.preEmit = function(user) {
  userApi.update(user).then(function(updatedUser) {
    actions.update.complete(updatedUser);
  }, function(err) {
    actions.update.error(err);
  });
};

actions.validate.preEmit = function() {
  userApi.validate().catch(function(err) {
    actions.validate.error(err);
  });
};

module.exports = actions;
