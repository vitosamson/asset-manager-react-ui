'use strict';

var api = require('../../api');

function getList() {
  return new Promise(function(resolve, reject) {
    api('organizations').get(function(err, res) {
      if (err)
        return reject(err);

      resolve(res);
    });
  });
}

module.exports = {
  getList: getList
};
