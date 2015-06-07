'use strict';

var Reflux = require('reflux'),
    actions = require('./actions');

var templateStore = Reflux.createStore({
  listenables: actions,
  onListComplete: function(templates) {
    this.templates = templates;
    this.trigger(templates);
  },
  onCreateComplete: function(template) {
    this.templates.unshift(template);
    this.trigger(this.templates);
  },
  onUpdateComplete: function(template) {
    this.templates = this.templates.map(function(t) {
      if (t._id === template._id)
        return template;

      return t;
    });
    this.trigger(this.templates);
  },
  onDelComplete: function(template) {
    this.templates = this.templates.filter(function(t) {
      return t._id !== template._id;
    });
    this.trigger(this.templates);
  }
});

module.exports = templateStore;
