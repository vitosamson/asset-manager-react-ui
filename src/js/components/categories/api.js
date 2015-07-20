'use strict';

var api = require('../../api').base;

function getList() {
  return new Promise(function(resolve, reject) {
    api()('categories').get(function(err, res) {
      if (err)
        return reject(err);

      resolve(res);
    });
  });
}

function create(cat) {
  return new Promise(function(resolve, reject) {
    api()('categories').post(cat, function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function get(id) {
  return new Promise(function(resolve, reject) {
    api()('categories')(id).get(function(err, res) {
      if (err) reject(err);

      resolve(res.data);
    });
  });
}

function update(cat) {
  return new Promise(function(resolve, reject) {
    api()('categories')(cat.id).put(cat, function(err, res) {
      if (err) return reject(err);

      resolve(res.data);
    });
  });
}

function del(cat) {
  return new Promise(function(resolve, reject) {
    api()('categories')(cat.id).delete(function(err, res) {
      if (err) return reject(err);

      resolve();
    });
  });
}

module.exports = {
  getList: getList,
  create: create,
  get: get,
  update: update,
  del: del
};
