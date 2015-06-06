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
  },
  onUpdateComplete: function(org) {
    this.orgs = this.orgs.map(function(o) {
      if (o._id === org._id)
        return org;

      return o;
    });
    this.trigger(this.orgs);
  },
  onDelComplete: function(org) {
    this.orgs = this.orgs.filter(function(o) {
      return o._id !== org._id;
    });
    this.trigger(this.orgs);
  }
});

module.exports = orgStore;
