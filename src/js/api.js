'use strict';

var fermata = require('fermata'),
    config = require('./config');

// sets up an API template - base url, headers, json parsing
function registerPlugin(token) {
  fermata.registerPlugin('base', function(transport, name, key) {
    this.base = config.API_BASE;

    return function(req, cb) {
      req.headers.Authorization = 'Bearer ' + token;

      // don't transform FormData requests (used for file uploads)
      if (req.data && !(req.data instanceof FormData)) {
        req.headers['Content-Type'] = 'application/json';
        req.data = JSON.stringify(req.data);
      }

      return transport(req, function(err, res) {
        if (res.status !== 200)
          err = res;
        else if (res === null)
          err = {status: 500};
        else {
          try {
            res.data = JSON.parse(res.data);
          } catch(e) {
            // no data to parse
          }
        }

        cb(err, res);
      });
    };
  });
}

registerPlugin(localStorage.getItem('token'));

module.exports = {
  base: fermata.base,
  register: registerPlugin
};
