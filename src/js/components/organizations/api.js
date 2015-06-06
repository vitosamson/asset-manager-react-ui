'use strict';

var api = require('../../api').base;

function getList() {
  return new Promise(function(resolve, reject) {
    api()('organizations').get(function(err, res) {
      if (err)
        return reject(err);

      resolve(res);
    });
  });
}

function get(id) {
  return new Promise(function(resolve, reject) {
    api()('organizations')(id).get(function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function create(org) {
  return new Promise(function(resolve, reject) {
    api()('organizations').post(org, function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function update(org) {
  return new Promise(function(resolve, reject) {
    api()('organizations')(org._id).put(org, function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function del(org) {
  return new Promise(function(resolve, reject) {
    api()('organizations')(org._id).delete(function(err, res) {
      if (err)
        return reject(err);

      resolve();
    });
  });
}

module.exports = {
  getList: getList,
  get: get,
  create: create,
  update: update,
  del: del
};
