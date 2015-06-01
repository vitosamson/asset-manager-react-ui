'use strict';

var userStore = require('./store').store,
    userApi = require('./api');

var Authenticated = {
  statics: {
    willTransitionTo: function(transition) {
      if (!userStore.token)
        transition.redirect('login', {});
    }
  }
};

module.exports = {
  Authenticated: Authenticated
};
