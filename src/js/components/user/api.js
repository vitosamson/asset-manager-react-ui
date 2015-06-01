'use strict';

var $ = require('jQuery'),
    userStore = require('./store'),
    basePath = require('../../config').API_BASE;

basePath = basePath + 'users/';
var paths = {
  validate: basePath + 'validate',
  login: basePath + 'login',
  register: basePath + 'signup'
};

/**
 * Validates current auth token
 */
function validate(cb) {
  $.ajax({
    url: paths.validate,
    type: 'GET',
    headers: {
      'Authorization': 'Bearer ' + userStore.userStore.token
    }
  })
  .success(function(data) {
    userStore.userActions.login(data.token);
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

module.exports = {
  validate: validate,
  login: login,
  register: register
};
