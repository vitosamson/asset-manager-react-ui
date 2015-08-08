'use strict';

import baseApi from '../../api';

var userApi = {
  base: baseApi.all('users'),
  validate: () => userApi.base.get('validate'),
  me: () => userApi.base.get('me'),
  update: (data) => userApi.base.put('me', data),
  login: (user) => baseApi.allUrl('login', userApi.base.url() + '/login').post(user),
  register: (user) => baseApi.allUrl('signup', userApi.base.url() + '/signup').post(user)
};

export default userApi;
