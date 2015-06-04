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

module.exports = {
  getList: getList,
  get: get
};
