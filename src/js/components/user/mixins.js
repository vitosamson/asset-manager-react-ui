'use strict';

var userStore = require('./store').userStore,
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
