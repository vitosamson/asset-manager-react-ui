'use strict';

import Reflux from 'reflux';

import actions from './actions';
import baseApi from '../../api';

export default Reflux.createStore({
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
    baseApi.updateToken(token);
  },
  onRegisterComplete: function(token, user) {
    this.token = token;
    this.user = user;
    this.save();
    baseApi.updateToken(token);
  },
  onMeComplete: function(user) {
    this.user = user;
    this.save();
  },
  onMeError: function(err) {
    console.error(err);
  },
  onUpdateComplete: function(user) {
    this.user = user;
    this.save();
  },
  onLogout: function() {
    this.token = undefined;
    localStorage.removeItem('token');
  },
  save: function() {
    localStorage.setItem('token', this.token);
    this.trigger(this.token, this.user);
  }
});
