'use strict';

var api = require('../../api').base;

function get(id) {
  return new Promise(function(resolve, reject) {
    api()('assets')(id).get(function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function create(asset) {
  return new Promise(function(resolve, reject) {
    api()('assets').post(asset, function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function update(asset) {
  return new Promise(function(resolve, reject) {
    api()('assets')(asset.id).put(asset, function(err, res) {
      if (err)
        return reject(err);

      resolve(res.data);
    });
  });
}

function del(asset) {
  return new Promise(function(resolve, reject) {
    api()('assets')(asset.id).delete(function(err, res) {
      if (err)
        return reject(err);

      resolve();
    });
  });
}

module.exports = {
  get: get,
  create: create,
  update: update,
  del: del
};
