'use strict';

var Reflux = require('reflux'),
    actions = require('./actions');

var orgStore = Reflux.createStore({
  listenables: actions,
  init: function() {
    this.orgs = [];
  },
  onListComplete: function(orgs) {
    this.orgs = orgs;
    this.trigger(orgs);
  },
  onCreateComplete: function(org) {
    this.orgs.unshift(org);
    this.trigger(this.orgs);
  },
  onUpdateComplete: function(org) {
    this.orgs = this.orgs.map(function(o) {
      if (o.id === org.id)
        return org;

      return o;
    });
    this.trigger(this.orgs);
  },
  onDelComplete: function(org) {
    this.orgs = this.orgs.filter(function(o) {
      return o.id !== org.id;
    });
    this.trigger(this.orgs);
  }
});

module.exports = orgStore;
