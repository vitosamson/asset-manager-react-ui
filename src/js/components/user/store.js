'use strict';

var Reflux = require('reflux');

var userActions = Reflux.createActions([
  'login',
  'logout'
]);

var userStore = Reflux.createStore({
  init: function() {
    this.load();
    this.listenToMany(userActions);
  },
  onLogin: function(token) {
    this.token = token;
    this.save();
    this.trigger(this.token);
  },
  onLogout: function() {
    this.token = null;
    this.save();
    this.trigger(this.token);
  },
  save: function() {
    if (this.token)
      localStorage.setItem('token', this.token);
    else
      localStorage.removeItem('token');
  },
  load: function() {
    this.token = localStorage.getItem('token');
  }
});

module.exports = {
  userStore: userStore,
  userActions: userActions
};
