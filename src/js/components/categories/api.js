'use strict';

import baseApi from '../../api';

const categoryApi = {
  base: baseApi.all('categories'),
  all: () => categoryApi.base.getAll(),
  get: (id) => categoryApi.base.get(id),
  create: (cat) => categoryApi.base.post(cat),
  update: (cat) => categoryApi.base.put(cat.id, cat),
  del: (cat) => categoryApi.base.delete(cat.id)
};

export default categoryApi;
