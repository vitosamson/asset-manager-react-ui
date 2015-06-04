'use strict';

var Reflux = require('reflux'),
    actions = require('./actions'),
    baseApi = require('../../api');

var store = Reflux.createStore({
  listenables: actions,
  init: function() {
    this.load();
  },
  load: function() {
    this.token = localStorage.getItem('token');
    this.trigger(this.token);
  },
  onLoginComplete: function(token, user) {
    this.token = token;
    this.user = user;
    this.save();
  },
  onRegisterComplete: function(token, user) {
    this.token = token;
    this.user = user;
    this.save();
  },
  onMeComplete: function(user) {
    this.user = user.data;
    this.save();
  },
  onMeError: function(err) {
    console.error(err);
  },
  onUpdateComplete: function(user) {
    this.user = user.data;
    this.save();
  },
  onLogout: function() {
    this.token = null;
    this.save();
  },
  save: function() {
    localStorage.setItem('token', this.token);
    this.trigger(this.token, this.user);
  }
});

module.exports = store;
