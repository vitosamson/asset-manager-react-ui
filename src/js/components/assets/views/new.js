'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Navigation = require('react-router').Navigation,
    _ = require('lodash'),
    $ = require('jQuery'),
    classNames = require('classnames'),
    Dropdown = require('react-semantify').Dropdown,
    Checkbox = require('react-semantify').Checkbox,
    assetActions = require('../actions'),
    orgActions = require('../../organizations/actions'),
    templateActions = require('../../templates/actions'),
    categoryActions = require('../../categories/actions');

var NewAsset = React.createClass({
  mixins: [
    Reflux.listenTo(orgActions.list.complete, 'onOrgsList'),
    Reflux.listenTo(templateActions.list.complete, 'onTemplatesList'),
    Reflux.listenTo(categoryActions.list.complete, 'onCategoriesList'),
    Reflux.listenTo(assetActions.create.complete, 'onAssetCreated'),
    Navigation
  ],
  getInitialState: function() {
    return {
      orgs: [],
      templates: [],
      categories: [],
      asset: {
        fields: {},
        organization: {}
      },
      error: {}
    };
  },
  componentWillReceiveProps: function() {
    this.getOrgs();
    this.getTemplates();
    this.getCategories();
  },
  componentDidMount: function() {
    this.getOrgs();
    this.getTemplates();
    this.getCategories();
  },
  getOrgs: function() {
    orgActions.list();
  },
  getTemplates: function() {
    templateActions.list();
  },
  getCategories: function() {
    categoryActions.list();
  },
  onOrgsList: function(orgs) {
    this.setState({
      orgs: orgs
    });

    if (this.props.query.org)
      this.onOrgSelect(this.props.query.org);
  },
  onTemplatesList: function(templates) {
    this.setState({
      templates: templates
    });
  },
  onCategoriesList: function(categories) {
    this.setState({
      categories: categories
    });
  },
  onOrgSelect: function(val) {
    var asset = this.state.asset,
        org = _.find(this.state.orgs, o => o.id == val);

    if (org) {
      asset.organization = org;
      asset.organizationId = org.id;
      this.setState({
        asset: asset
      });
    }
  },
  onCategorySelect: function(catId) {
    var asset = this.state.asset;
    asset.categoryId = catId;

    this.setState({
      asset: asset
    });
  },
  onTemplateSelect: function(val) {
    var asset = this.state.asset,
        template = _.find(this.state.templates, tmpl => tmpl.id === val);

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
  addField: function(field) {
    var asset = this.state.asset;

    asset.fields[field.name] = field;

    this.setState({
      asset: asset
    });
  },
  saveAsset: function(e) {
    e.preventDefault();

    var error = this.state.error;

    if (!this.state.asset.organizationId) {
      error.org = true;
      this.setState({
        error: error
      });
      return;
    }

    if (!this.state.asset.name) {
      error.name = true;
      this.setState({
        error: error
      });
      return;
    }

    assetActions.create(this.state.asset);
  },
  onAssetCreated: function(asset) {
    this.transitionTo('asset', {assetId: asset.id});
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

    var orgFieldClass = classNames({
      field: true,
      error: this.state.error.org
    });

    var nameFieldClass = classNames({
      field: true,
      error: this.state.error.name
    });

    return (
      <form className="ui form" onSubmit={this.saveAsset}>
        <h2>New asset</h2>

        <div className={ orgFieldClass }>
          <label>Organization</label>
          <Dropdown className="selection" init={{onChange: this.onOrgSelect}}>
            <div className="default text">{this.state.asset.organization.name}</div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {this.state.orgs.map((org, idx) =>
                <div className='item' data-value={org.id} key={idx}>{ org.name }</div>
              )}
            </div>
          </Dropdown>
        </div>

        <div className={ nameFieldClass }>
          <label>Name</label>
          <input className="ui input" name="name" onChange={this.onMetaFieldChange}/>
        </div>

        <div className="field">
          <label>Description</label>
          <input className="ui input" name="description" onChange={this.onMetaFieldChange}/>
        </div>

        <div className="field">
          <label>Category</label>
          <Dropdown className="selection" init={{onChange: this.onCategorySelect}}>
            <div className="default text"></div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {this.state.categories.map((cat, idx) =>
                <div className="item" data-value={cat.id} key={idx}>{cat.name}</div>
              )}
            </div>
          </Dropdown>
        </div>

        <div className="field">
          <label>Template</label>
          <Dropdown className="selection" init={{onChange: this.onTemplateSelect}}>
            <div className="default text"></div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {this.state.templates.map((tmpl, idx) =>
                <div className="item" data-value={tmpl.id} key={idx}>{ tmpl.name }</div>
              )}
            </div>
          </Dropdown>
        </div>

        <h5 className="ui top attached header" style={{marginTop: 0}}>Fields</h5>
        <div className="ui form attached segment" style={{marginBottom: '1em'}}>
          { fields ? _.map(fields, this.renderField) : null }

        <NewField newFieldName={this.newFieldName} addField={this.addField}/>

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

var NewField = React.createClass({
  getInitialState: function() {
    return {
      field: {
        name: ''
      },
      error: {
        name: false
      }
    };
  },
  setFieldName: function(e) {
    var field = this.state.field;
    field.name = e.target.value;
    this.setState({
      field: field
    });
  },
  setFieldType: function(text, type) {
    if (this.state.field.name === '') {
      this.setState({
        error: {
          name: true
        }
      });
      return;
    }

    var field = this.state.field,
        el = this.getDOMNode();

    field.fieldType = type;

    this.props.addField(field);
    this.setState({
      field: {
        name: ''
      }
    });
    $(el).dropdown('hide');
  },
  dontSubmitOnEnter: function(e) {
    if (e.keyCode == 13)
      e.preventDefault();
  },
  render: function() {
    var newFieldNameClass = classNames({
      ui: true,
      fluid: true,
      small: true,
      input: true,
      error: this.state.error.name
    });

    return (
      <Dropdown className="floating labeled icon button basic tiny" init={{action: this.setFieldType}}>
        <i className="plus icon"></i>
        <span className="text">Add additional field</span>
        <div className="menu">
          <div className={newFieldNameClass} style={{width: 'auto'}}>
            <input type="text" placeholder="Field name" onChange={this.setFieldName} value={this.state.field.name} onKeyDown={this.dontSubmitOnEnter}/>
          </div>

          <div className="divider"></div>

          <div className="header">Field type</div>

          <div className="item" data-value="text">Text</div>
          <div className="item" data-value="checkbox">Checkbox</div>
        </div>
      </Dropdown>
    );
  }
});

module.exports = NewAsset;
