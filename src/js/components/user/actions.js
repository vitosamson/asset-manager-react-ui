'use strict';

import Reflux from 'reflux';

import userApi from './api';

const actions = Reflux.createActions({
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

export default actions;

actions.login.preEmit = function(user) {
  userApi.login(user).then(function(res) {
    var data = res.body();

    actions.login.complete(data.token, data.user);
  }, function(err) {
    actions.login.error(err);
  });
};

actions.register.preEmit = function(user) {
  userApi.register(user).then(function(res) {
    var data = res.body();

    actions.register.complete(data.token, data.user);
  }, function(err) {
    actions.register.error(err);
  });
};

actions.me.preEmit = function() {
  userApi.me().then(function(res) {
    var user = res.body().data();

    actions.me.complete(user);
  }, function(err) {
    actions.me.error(err);
  });
};

actions.update.preEmit = function(user) {
  userApi.update(user).then(function(res) {
    var updatedUser = res.body();

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
