'use strict';

var api = require('../../api').base;

function getList() {
  return new Promise(function(resolve, reject) {
    api()('templates').get(function(err, res) {
      if (err)
        return reject(err);

      resolve(res);
    });
  });
}

function get(id) {
  return new Promise(function(resolve, reject) {
    api()('templates')(id).get(function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function create(template) {
  return new Promise(function(resolve, reject) {
    api()('templates').post(template, function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function update(template) {
  return new Promise(function(resolve, reject) {
    api()('templates')(template.id).put(template, function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function del(template) {
  return new Promise(function(resolve, reject) {
    api()('templates')(template.id).delete(function(err, res) {
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
