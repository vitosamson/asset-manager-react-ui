'use strict';

import baseApi from '../../api';

const templateApi = {
  base: baseApi.all('templates'),
  all: () => templateApi.base.getAll(),
  get: (id) => templateApi.base.get(id),
  create: (template) => templateApi.base.post(template),
  update: (template) => templateApi.base.put(template.id, template),
  del: (template) => templateApi.base.delete(template.id)
};

export default templateApi;
