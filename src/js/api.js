'use strict';

var fermata = require('fermata'),
    config = require('./config'),
    userStore = require('./components/user/store').store;

// sets up an API template - base url, headers, json parsing
function registerPlugin(token) {
  fermata.registerPlugin('base', function(transport, name, key) {
    this.base = config.API_BASE;

    return function(req, cb) {
      req.headers.Authorization = 'Bearer ' + token;
      req.headers['Content-Type'] = 'application/json';
      req.data = JSON.stringify(req.data);

      return transport(req, function(err, res) {
        if (res.status !== 200)
          err = res;
        else if (res === null)
          err = {status: 500};
        else
          res.data = JSON.parse(res.data);

        cb(err, res);
      });
    };
  });
}

registerPlugin(userStore.token);

userStore.listen(registerPlugin);

module.exports = fermata.base();
