'use strict';

var Reflux = require('reflux');

var userActions = Reflux.createActions([
  'login',
  'logout',
  'update'
]);

var userStore = Reflux.createStore({
  init: function() {
    this.load();
    this.listenToMany(userActions);
  },
  onLogin: function(token, user) {
    this.token = token;
    this.user = user;
    this.save();
    this.trigger(this.token, this.user);
  },
  onLogout: function() {
    this.token = null;
    this.save();
    this.trigger(this.token, this.user);
  },
  onUpdate: function(user) {
    if (user)
      this.user = user;
    this.trigger(this.token, this.user);
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
  store: userStore,
  actions: userActions
};
