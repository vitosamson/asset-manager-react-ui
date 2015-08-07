'use strict';

var baseApi = require('../../api');

var orgApi = {
  base: baseApi.all('organizations'),
  all: () => orgApi.base.getAll(),
  get: (id) => orgApi.base.get(id),
  create: (org) => orgApi.base.post(org),
  update: (org) => orgApi.base.put(org.id, org),
  del: (org) => orgApi.base.delete(org.id)
};

module.exports = orgApi;
