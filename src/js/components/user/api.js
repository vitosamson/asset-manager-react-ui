'use strict';

var $ = require('jQuery'),
    userStore = require('./store'),
    basePath = require('../../config').API_BASE;

basePath = basePath + 'users/';
var paths = {
  validate: basePath + 'validate',
  login: basePath + 'login',
  register: basePath + 'signup',
  me: basePath + 'me'
};

/**
 * Validates current auth token
 */
function validate(cb) {
  $.ajax({
    url: paths.validate,
    type: 'GET',
    headers: {
      'Authorization': 'Bearer ' + userStore.store.token
    }
  })
  .success(function(data) {
    userStore.actions.login(data.token);
    cb(null);
  }).fail(function(err) {
    cb(err);
  });
}

function login(user) {
  return $.ajax({
    url: paths.login,
    type: 'POST',
    data: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function register(user) {
  return $.ajax({
    url: paths.register,
    type: 'POST',
    data: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function me(token) {
  $.ajax({
    url: paths.me,
    type: 'GET',
    headers: {
      'Authorization': 'Bearer ' + userStore.store.token
    }
  }).success(function(data) {
    userStore.actions.update(data);
  });
}

function update(user) {
  return $.ajax({
    url: paths.me,
    type: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + userStore.store.token,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(user)
  });
}

module.exports = {
  validate: validate,
  login: login,
  register: register,
  me: me,
  update: update
};
