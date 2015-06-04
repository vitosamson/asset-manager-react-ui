'use strict';

var api = require('../../api').base;

/**
 * Validates current auth token
 */
function validate(cb) {
  return new Promise(function(resolve, reject) {
    api()('users')('validate').get(function(err) {
      if (err)
        return reject(err);
    });
  });
}

function login(user) {
  return new Promise(function(resolve, reject) {
    api()('users')('login').post(user, function(err, data) {
      if (err)
        return reject(err);
      resolve(data);
    });
  });
}

function register(user) {
  return new Promise(function(resolve, reject) {
    api()('users')('signup').post(user, function(err, data) {
      if (err)
        return reject(err);
      resolve(data);
    });
  });
}

function me() {
  return new Promise(function(resolve, reject) {
    api()('users')('me').get(function(err, data) {
      if (err)
        return reject(err);
      resolve(data);
    });
  });
}

function update(user) {
  return new Promise(function(resolve, reject) {
    api()('users')('me').put(user, function(err, data) {
      if (err)
        return reject(err);
      resolve(data);
    });
  });
}

module.exports = {
  validate: validate,
  login: login,
  register: register,
  me: me,
  update: update
};
