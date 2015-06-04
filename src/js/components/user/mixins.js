'use strict';

var userStore = require('./store'),
    Navigation = require('react-router').Navigation,
    Reflux = require('reflux'),
    userActions = require('./actions');

var Authenticated = {
  mixins: [
    Navigation,
    Reflux.listenTo(userActions.validate.error, 'onValidateError')
  ],
  statics: {
    willTransitionTo: function(transition) {
      if (userStore.token === null || userStore.token === undefined)
        transition.redirect('login', {});
      userActions.validate();
    }
  },
  onValidateError: function(err) {
    if (err.status == 401)
      this.transitionTo('login');
  }
};

var Unauthenticated = {
  mixins: [
    Navigation
  ],
  statics: {
    willTransitionTo: function(transition) {
      if (userStore.token !== null && userStore.token !== undefined)
        transition.redirect('app', {});
    }
  },
};

module.exports = {
  Authenticated: Authenticated,
  Unauthenticated: Unauthenticated
};
