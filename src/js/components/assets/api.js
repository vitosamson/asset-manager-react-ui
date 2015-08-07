'use strict';

var baseApi = require('../../api');

var assetApi = {
  base: baseApi.all('assets'),
  all: () => assetApi.base.getAll(),
  get: (id) => assetApi.base.get(id),
  create: (asset) => assetApi.base.post(asset),
  update: (asset) => assetApi.base.put(asset.id, asset),
  del: (asset) => assetApi.base.delete(asset.id),
  files: {
    upload: uploadFile,
    del: (assetId, fileId) => baseApi.one('assets', assetId).all('files').delete(fileId)
  }
};

function uploadFile(assetId, upload) {
  var data = new FormData();

  data.append('file', upload.file);
  data.append('name', upload.name);

  return baseApi
        .addRequestInterceptor(function(data, headers) {
          headers['Content-Type'] = 'multipart/form-data';
          return data;
        })
        .one('assets', assetId)
        .all('files')
        .post(data);
}

module.exports = assetApi;
