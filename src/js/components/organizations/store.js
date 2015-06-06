'use strict';

var Reflux = require('reflux'),
    actions = require('./actions');

var orgStore = Reflux.createStore({
  listenables: actions,
  onListComplete: function(orgs) {
    this.orgs = orgs;
    this.trigger(orgs);
  },
  onCreateComplete: function(org) {
    this.orgs.unshift(org);
    this.trigger(this.orgs);
  }
});

module.exports = orgStore;
