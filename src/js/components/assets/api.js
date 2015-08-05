'use strict';

var api = require('../../api').base,
    fermata = require('fermata');

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

function uploadFile(assetId, upload) {
  var data = new FormData();

  data.append('file', upload.file);
  data.append('name', upload.name);

  return new Promise(function(resolve, reject) {
    api()('assets')(assetId)('files').post(data, function(err, res) {
      if (err) return reject(err);

      resolve(res.data);
    });
  });
}

function deleteFile(assetId, fileId) {
  return new Promise(function(resolve, reject) {
    api()('assets')(assetId)('files')(fileId).delete(function(err, res) {
      if (err) return reject(err);

      resolve();
    });
  });
}

module.exports = {
  get: get,
  create: create,
  update: update,
  del: del,
  files: {
    upload: uploadFile,
    del: deleteFile
  }
};
