'use strict';

var restful = require('restful.js'),
    config = require('./config'),
    token = window.localStorage.getItem('token');

var baseApi = restful(config.API_HOST)
            .header('Authorization', 'Bearer ' + token)
            .prefixUrl(config.API_PREFIX)
            .port(config.API_PORT);

baseApi.updateToken = function(token) {
  baseApi.header('Authorization', 'Bearer ' + token);
};

module.exports = baseApi;
