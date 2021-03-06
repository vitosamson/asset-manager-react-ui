'use strict';

import Reflux from 'reflux';

import actions from './actions';

export default Reflux.createStore({
  listenables: actions,
  init: function() {
    this.categories = [];
  },
  onListComplete: function(categories) {
    this.categories = categories;
    this.trigger(categories);
  },
  onCreateComplete: function(cat) {
    this.categories.unshift(cat);
    this.trigger(this.categories);
  },
  onUpdateComplete: function(cat) {
    this.categories = this.categories.map(function(c) {
      if (c.id === cat.id)
        return cat;

      return c;
    });
    this.trigger(this.categories);
  },
  onDelComplete: function(cat) {
    this.categories.splice(this.categories.indexOf(cat), 1);
    this.trigger(this.categories);
  }
});
