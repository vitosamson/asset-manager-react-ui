'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    _ = require('lodash'),
    catStore = require('../store'),
    catActions = require('../actions'),
    Card = require('./card');

var List = React.createClass({
  mixins: [
    Reflux.listenTo(catStore, 'onCategoriesUpdated'),
    Reflux.listenTo(catActions.create.start, 'addNewCategory'),
    Reflux.listenTo(catActions.create.cancel, 'cancelNewCategory')
  ],
  getInitialState: function() {
    return {
      categories: []
    };
  },
  componentWillMount: function() {
    catActions.list();
  },
  onCategoriesUpdated: function(categories) {
    this.setState({
      categories: _.extend([], categories)
    });
  },
  addNewCategory: function() {
    var categories = this.state.categories;
    categories.unshift({});
    this.setState({
      categories: categories
    });
  },
  cancelNewCategory: function() {
    var categories = this.state.categories;
    if (categories.length && categories[0].id === undefined) {
      categories.shift();
      this.setState({
        categories: categories
      });
    }
  },
  render: function() {
    var categories = this.state.categories;

    return (
      <div className="ui two doubling cards">
        {categories.length ? categories.map((cat, idx) =>
          <Card category={cat} key={idx} new={cat.id === undefined}/>
        ) : ''}
      </div>
    );
  }
});

module.exports = List;
