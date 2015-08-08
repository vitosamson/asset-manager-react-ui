'use strict';

import restful from 'restful.js';
import config from './config';

const token = window.localStorage.getItem('token');

const baseApi = restful(config.API_HOST)
            .header('Authorization', 'Bearer ' + token)
            .prefixUrl(config.API_PREFIX)
            .port(config.API_PORT);

baseApi.updateToken = function(token) {
  baseApi.header('Authorization', 'Bearer ' + token);
};

export default baseApi;
