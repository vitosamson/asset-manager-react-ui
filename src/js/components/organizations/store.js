'use strict';

var Reflux = require('reflux'),
    actions = require('./actions');

var orgStore = Reflux.createStore({
  listenables: actions,
  init: function() {
    this.nestedOrgs = [];
    this.flatOrgs = [];
  },
  sort: function(orgs) {
    return orgs.sort(function(a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase())
        return 1;
      else if (a.name.toLowerCase() < b.name.toLowerCase())
        return -1;
      else
        return 0;
    });
  },
  onListComplete: function(orgs) {
    this.nestedOrgs = this.sort(orgs);
    this._trigger();
  },
  onFlatListComplete: function(orgs) {
    this.flatOrgs = this.sort(orgs);
    this._trigger();
  },
  onCreateComplete: function(org) {
    actions.list();
    actions.flatList();
  },
  onUpdateComplete: function(org) {
    actions.list();
    actions.flatList();
  },
  onDelComplete: function() {
    actions.list();
    actions.flatList();
  },
  _trigger: function() {
    this.trigger({
      nestedOrgs: this.nestedOrgs,
      flatOrgs: this.flatOrgs
    });
  }
});

module.exports = orgStore;
