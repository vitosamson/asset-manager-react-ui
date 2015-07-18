'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    _ = require('lodash'),
    $ = require('jQuery'),
    Dropdown = require('react-semantify').Dropdown,
    Checkbox = require('react-semantify').Checkbox,
    orgActions = require('../../organizations/actions'),
    templateActions = require('../../templates/actions');

var NewAsset = React.createClass({
  mixins: [
    Reflux.listenTo(orgActions.list.complete, 'onOrgsList'),
    Reflux.listenTo(orgActions.get.complete, 'onOrgGet'),
    Reflux.listenTo(templateActions.list.complete, 'onTemplatesList')
  ],
  getInitialState: function() {
    return {
      org: {},
      orgs: [],
      templates: [],
      asset: {
        fields: {}
      },
      error: {}
    };
  },
  componentWillReceiveProps: function() {
    this.getOrgs();
    this.getDefaultOrg();
    this.getTemplates();
  },
  componentDidMount: function() {
    this.getDefaultOrg();
    this.getTemplates();
  },
  getDefaultOrg: function() {
    orgActions.get(this.props.query.org);
  },
  getOrgs: function() {
    orgActions.list();
  },
  getTemplates: function() {
    templateActions.list();
  },
  onOrgGet: function(org) {
    var asset = this.state.asset;
    asset.organization = org._id;

    this.setState({
      asset: asset
    });
  },
  onOrgsList: function(orgs) {
    this.setState({
      orgs: orgs
    });
  },
  onTemplatesList: function(templates) {
    this.setState({
      templates: templates
    });
  },
  onOrgSelect: function(val) {
    var asset = this.state.asset;
    asset.organization = val;
    this.setState({
      asset: asset
    });
  },
  onTemplateSelect: function(val) {
    var asset = this.state.asset,
        template = _.find(this.state.templates, function(tmpl) {
          return tmpl._id === val;
        });

    asset.fields = {};
    template.fields.map(function(field) {
      asset.fields[field.name] = field;
    });

    this.setState({
      asset: asset
    });
  },
  onMetaFieldChange: function(e) {
    var target = e.target,
        name = target.getAttribute('name'),
        asset = this.state.asset,
        error = this.state.error;

    asset[name] = target.value;
    error[name] = false;
    this.setState({
      asset: asset,
      error: error
    });
  },
  onDataFieldChange: function(name, e) {
    var asset = this.state.asset,
        val;

    if ('string' === typeof e) // dropdown
      val = e;
    else if ('object' === typeof e) // text input
      val = $(e.target).val();
    else // checkbox
      val = !asset.fields[name].value;

    asset.fields[name].value = val;
    this.setState({
      asset: asset
    });
  },
  addField: function(type) {
    var field = {},
        asset = this.state.asset;

    switch(type) {
      case 'text':
        field.fieldType = 'text';
        break;
      case 'select-single':
        field.fieldType = 'select';
        break;
      case 'select-multiple':
        field.fieldType = 'select';
        field.multiple = true;
        break;
      case 'checkbox':
        field.fieldType = 'checkbox';
        break;
    }

    console.log(field);
    // asset.fields
  },
  renderField: function(field, idx) {
    var renderedField;

    switch(field.fieldType) {
      case 'text':
        renderedField = (
          <input type="text" className="ui input" name={field.name} onChange={this.onDataFieldChange.bind(this, field.name)}/>
        );
        break;
      case 'select':
        if (field.multiple) {
          renderedField = (
            <select name={field.name} multiple onChange={this.onDataFieldChange.bind(this, field.name)}>
              {field.choices ? field.choices.map((choice, idx) =>
                <option value={choice} key={idx}>{ choice }</option>
              ) : null}
            </select>
          );
        } else {
          renderedField = (
            <Dropdown className="selection" init={{onChange: this.onDataFieldChange.bind(this, field.name)}}>
              <div className="default text"></div>
              <i className="dropdown icon"></i>
              <div className="menu">
                {field.choices ? field.choices.map((choice, idx) =>
                  <div className="item" data-value={choice} key={idx}>{ choice }</div>
                ) : null}
              </div>
            </Dropdown>
          );
        }
        break;
      case 'checkbox':
        renderedField = (
          <Checkbox init={{onChange: this.onDataFieldChange.bind(this, field.name)}}>
            <input type="checkbox" name={field.name}/>
            <label>{field.name}</label>
          </Checkbox>
        );
        break;
    }
    
    return (
      <div className="field" key={idx}>
        <label>{field.name}</label>
        {renderedField}
      </div>
    );
  },
  render: function() {
    var fields = this.state.asset.fields;

    return (
      <form className="ui form">
        <h2>New asset</h2>

        <div className="field">
          <label>Organization</label>
          <Dropdown className="selection" init={{onChange: this.onOrgSelect}}>
            <div className="default text">{ this.state.org.name }</div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {this.state.orgs.map((org, idx) =>
                <div className='item' data-value={org._id} key={idx}>{ org.name }</div>
              )}
            </div>
          </Dropdown>
        </div>

        <div className="field">
          <label>Name</label>
          <input className="ui input" name="name" onChange={this.onMetaFieldChange}/>
        </div>

        <div className="field">
          <label>Description</label>
          <input className="ui input" name="description" onChange={this.onMetaFieldChange}/>
        </div>

        <div className="field">
          <label>Template</label>
          <Dropdown className="selection" init={{onChange: this.onTemplateSelect}}>
            <div className="default text"></div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {this.state.templates.map((tmpl, idx) =>
                <div className="item" data-value={tmpl._id} key={idx}>{ tmpl.name }</div>
              )}
            </div>
          </Dropdown>
        </div>

        <h5 className="ui top attached header" style={{marginTop: 0}}>Fields</h5>
        <div className="ui form attached segment" style={{marginBottom: '1em'}}>
          { fields ? _.map(fields, this.renderField) : null }

          <Dropdown className="floating labeled icon button basic tiny" init={{action: 'select', onChange: this.addField}}>
            <i className="plus icon"></i>
            <span className="text">Add field</span>
            <div className="menu">
              <div className="ui fluid small input" style={{width: 'auto'}}>
                <input type="text" placeholder="Field name"/>
              </div>

              <div className="header">Field type</div>

              <div className="item" data-value="text">Text</div>
              <div className="item">
                <i className="right dropdown icon"></i>
                <span className="text">Select</span>
                <div className="right menu">
                  <div className="item" data-value="select-single">Single</div>
                  <div className="item" data-value="select-multiple">Multiple</div>
                </div>
              </div>
              <div className="item" data-value="checkbox">Checkbox</div>
            </div>
          </Dropdown>
        </div>


        <button className="ui button primary" type="submit">
          Save asset
        </button>
        <button className="ui button basic" type="submit">
          Cancel
        </button>
      </form>
    );
  }
});

module.exports = NewAsset;
