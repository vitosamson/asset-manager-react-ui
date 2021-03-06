'use strict';

import baseApi from '../../api';

var orgApi = {
  base: baseApi.all('organizations'),
  all: (params) => orgApi.base.getAll(params),
  get: (id) => orgApi.base.get(id),
  create: (org) => orgApi.base.post(org),
  update: (org) => orgApi.base.put(org.id, org),
  del: (org) => orgApi.base.delete(org.id)
};

export default orgApi;
