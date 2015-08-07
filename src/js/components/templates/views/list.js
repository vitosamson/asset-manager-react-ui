'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    _ = require('lodash'),
    templateActions = require('../actions'),
    templateStore = require('../store'),
    Card = require('./card');

var TemplateList = React.createClass({
  mixins: [
    Reflux.listenTo(templateStore, 'onTemplatesUpdate'),
    Reflux.listenTo(templateActions.create.start, 'createNewTemplate'),
    Reflux.listenTo(templateActions.create.cancel, 'cancelNewTemplate')
  ],
  getInitialState: function() {
    return {
      templates: templateStore.templates
    };
  },
  onTemplatesUpdate: function(templates) {
    this.setState({
      templates: templates
    });
  },
  componentWillMount: function() {
    templateActions.list();
  },
  createNewTemplate: function() {
    var templates = _.extend([], this.state.templates);
    templates.unshift({
      fields: [{}]
    });
    this.setState({
      templates: templates
    });
  },
  cancelNewTemplate: function() {
    var templates = this.state.templates;
    if (templates.length && templates[0].id === undefined) {
      templates.shift();
      this.setState({
        templates: templates
      });
    }
  },
  render: function() {
    var templates = this.state.templates;

    return (
      <div className="ui one cards">
        {templates.length ? templates.map(function(template, idx) {
          return (
            <Card template={template} key={idx} new={template.id === undefined}/>
          );
        }) : ''}
      </div>
    );
  }
});

module.exports = TemplateList;
