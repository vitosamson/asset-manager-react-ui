'use strict';

var Reflux = require('reflux'),
    orgApi = require('./api');

var orgActions = Reflux.createActions([
  'create',
  'update',
  'destroy'
]);

var orgStore = Reflux.createStore({
  listenables: orgActions,
  init: function() {
    orgApi.getList().then(function(orgs) {
      this.orgs = orgs.data;
      this.trigger(orgs.data);
    }.bind(this));
  }
});

module.exports = {
  actions: orgActions,
  store: orgStore
};
