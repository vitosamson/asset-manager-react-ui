'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Dropdown = require('react-semantify').Dropdown,
    Checkbox = require('react-semantify').Checkbox,
    templateStore = require('../store'),
    templateActions = require('../actions'),
    classNames = require('classNames');

var templateCard = React.createClass({
  mixins: [
    Reflux.listenTo(templateActions.get.complete, 'getOriginalTemplate')
  ],
  getInitialState: function() {
    return {
      template: this.props.template,
      editing: this.props.new,
      showDetails: false,
      error: {}
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      template: nextProps.template,
      editing: nextProps.new
    });
  },
  getOriginalTemplate: function(template) {
    if (template._id === this.state.template._id)
      this.setState({
        template: template
      });
  },
  toggleDetails: function(e) {
    e.preventDefault();
    this.setState({
      showDetails: !this.state.showDetails
    });
  },
  toggleEdit: function() {
    var editing = this.state.editing;

    if (editing)
      templateActions.get(this.state.template._id);

    this.setState({
      editing: !this.state.editing
    });
  },
  onChange: function(e) {
    var target = e.target,
        name = target.getAttribute('name'),
        template = this.state.template,
        error = this.state.error;

    template[name] = target.value;
    error[name] = false;
    this.setState({
      template: template,
      error: error
    });
  },
  addField: function() {
    var template = this.state.template;

    if (!template.fields)
      template.fields = [{}];
    else
      template.fields.push({});

    this.setState({
      template: template
    });
  },
  onFieldNameChange: function(idx, e) {
    var template = this.state.template,
        target = e.target;

    if (!template.fields)
      template.fields = [{}];

    template.fields[idx].name = target.value;
    this.setState({
      template: template
    });
  },
  onFieldTypeChange: function(idx, val) {
    if (!val)
      return;

    var template = this.state.template;

    if (!template.fields)
      template.fields = [{}];

    template.fields[idx].fieldType = val;

    if (val === 'select')
      template.fields[idx].choices = [null];

    this.setState({
      template: template
    });
  },
  fieldAllowMultiple: function(idx) {
    var template = this.state.template;
    template.fields[idx].multiple = !template.fields[idx].multiple;
    this.setState({
      template: template
    });
  },
  removeField: function(idx) {
    var template = this.state.template;
    template.fields.splice(idx, 1);
    this.setState({
      template: template
    });
  },
  addChoice: function(fieldIdx) {
    var template = this.state.template;
    template.fields[fieldIdx].choices.push(null);
    this.setState({
      template: template
    });
  },
  onChoiceChange: function(idx, fieldIdx, e) {
    var template = this.state.template;
    template.fields[fieldIdx].choices[idx] = e.target.value;
    this.setState({
      template: template
    });
  },
  removeChoice: function(idx, fieldIdx) {
    var template = this.state.template;
    template.fields[fieldIdx].choices.splice(idx, 1);
    this.setState({
      template: template
    });
  },
  cancelNewTemplate: function() {
    templateActions.create.cancel();
  },
  saveTemplate: function(e) {
    e.preventDefault();

    var template = this.state.template,
        error = this.state.error;

    if (!template.name) {
      error.name = true;

      this.setState({
        error: error
      });
      return;
    }

    if (!template._id)
      templateActions.create(template);
    else
      templateActions.update(template);
  },
  deleteTemplate: function() {
    if (!window.confirm('Are you sure you want to delete this template?'))
      return;

    templateActions.del(this.state.template);
  },
  render: function() {
    if (!this.state.editing)
      return this.renderNotEditing();
    else
      return this.renderEditing();
  },
  renderDetails: function() {
    if (!this.state.showDetails)
      return;

    var template = this.state.template;

    return (
      <table className="ui table">
        <thead>
          <tr>
            <th>Field name</th>
            <th>Type</th>
            <th>Choices</th>
            <th>Allow multiple</th>
          </tr>
        </thead>
        <tbody>
          {template.fields.map((field, idx) =>
            <tr key={idx}>
              <td>{field.name}</td>
              <td>{field.fieldType}</td>
              <td>
                {field.fieldType === 'select' && field.choices.length ? field.choices.map((choice, idx) =>
                  <div key={idx}>{choice}</div>
                ) : '-'}
              </td>
              <td>
                {field.fieldType === 'select' && field.choices.length && field.multiple ? <i className="check icon"></i> : '-'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  },
  renderNotEditing: function() {
    var template = this.state.template;

    var details;
    if (this.state.showDetails) {
      details = 'foo';
    } else {
      details = '';
    }

    return (
      <div className="ui card">
        <div className="content">
          <div className="header">
            {template.name}
          </div>
          <div className="meta">
            {template.description}
          </div>
          <div className="description">
            {this.renderDetails()}
          </div>
        </div>
        <div className="extra content">
          <Dropdown className="inline right icon" init={{action: 'hide'}} style={{marginRight: '8px'}}>
            <i className="setting icon"></i>
            <div className="menu">
              <div className="item" onClick={this.toggleEdit}>
                <i className="edit icon"></i>
                Edit
              </div>
              <div className="item" onClick={this.deleteTemplate}>
                <i className="trash icon"></i>
                Delete
              </div>
            </div>
          </Dropdown>

          <a href="#" className="right floated" onClick={this.toggleDetails}>
            {this.state.showDetails ? 'Hide details' : 'Show details'}
          </a>
        </div>
      </div>
    );
  },
  renderChoices: function(field, fieldIdx) {
    if (field.fieldType && field.fieldType.toLowerCase() === 'select') {
      return (
        <div>
          <div className="fields">
            <div className="one wide field"></div>
            <div className="fourteen wide inline field">
              <Checkbox init={{onChange: this.fieldAllowMultiple.bind(this, fieldIdx)}}>
                <input type="checkbox" checked={field.multiple}/>
                <label>Allow multiple selections</label>
              </Checkbox>
            </div>
            <div className="one wide field"></div>
          </div>
          {field.choices.map((choice, idx) =>
            <div className="fields" key={idx}>
              <div className="one wide field"></div>
              <div className="ten wide field ui small input">
                <input type="text" placeholder="Choice" value={choice} onChange={this.onChoiceChange.bind(this, idx, fieldIdx)}/>
              </div>
              <div className="two wide field" style={{marginTop: '7px'}}>
                <i className="remove icon link" onClick={this.removeChoice.bind(this, idx, fieldIdx)}></i>
              </div>
            </div>
          )}

          <div className="fields" style={{marginBottom: 10}}>
            <div className="one wide field"></div>
            <div className="eight wide field">
              <button className="ui labeled icon button basic tiny" type="button" onClick={this.addChoice.bind(this, fieldIdx)}>
                <i className="plus icon"></i>
                Add choice
              </button>
            </div>
          </div>
        </div>
      );
    }
  },
  renderEditing: function() {
    var template = this.state.template,
        fields = template.fields,
        self = this;

    var nameClass = classNames({
      field: true,
      ui: true,
      small: true,
      input: true,
      error: this.state.error.name
    });

    return (
      <div className="ui card">
        <div className="content">
          <form onSubmit={this.saveTemplate} className="ui form" noValidate>
            <div className={nameClass}>
              <input type="text" placeholder="Name" value={template.name} required onChange={this.onChange} name="name"/>
            </div>
            <div className="field ui small input">
              <input type="text" placeholder="Description" value={template.description} onChange={this.onChange} name="description"/>
            </div>

            <h5 className="ui top attached header" style={{marginTop: 0}}>Fields</h5>
            <div className="ui attached segment" style={{marginBottom: 10}}>
              {fields.map((field, idx) =>
                <div key={idx}>
                  <div className="fields">
                    <div className="ten wide field ui small input">
                      <input type="text" placeholder="Field name" value={field.name} onChange={this.onFieldNameChange.bind(this, idx)}/>
                    </div>
                    <div className="five wide field ui small input">
                      <Dropdown init={{onChange: this.onFieldTypeChange.bind(this, idx)}} className="selection fluid">
                        <i className="dropdown icon"></i>
                        <div className="default text">{field.fieldType}</div>
                        <div className="menu">
                          <div className="item">Text</div>
                          <div className="item">Select</div>
                          <div className="item">Checkbox</div>
                        </div>
                      </Dropdown>
                    </div>
                    <div className="one wide field" style={{marginTop: '7px'}}>
                      <i className="remove icon link" onClick={this.removeField.bind(this, idx)}></i>
                    </div>

                  </div>
                  {this.renderChoices(field, idx)}
                </div>
              )}


              <div className="field">
                <div className="eight wide field">
                  <button className="ui labeled icon button basic tiny" type="button" onClick={this.addField}>
                    <i className="plus icon"></i>
                    Add field
                  </button>
                </div>
              </div>
            </div>

            <button className="ui button primary small" type="submit">Save template</button>
            <button className="ui button basic small" type="button" onClick={template._id ? this.toggleEdit : this.cancelNewTemplate}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = templateCard;
