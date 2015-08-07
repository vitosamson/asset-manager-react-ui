'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    Dropdown = require('react-semantify').Dropdown,
    orgActions = require('../actions'),
    orgStore = require('../store'),
    classNames = require('classnames'),
    _ = require('lodash');

var OrgCard = React.createClass({
  mixins: [
    Reflux.listenTo(orgStore, 'onOrgsUpdate'),
  ],
  getInitialState: function() {
    return {
      org: this.props.org,
      orgs: orgStore.nestedOrgs || [],
      editing: this.props.new,
      editTmp: _.extend({}, this.props.org),
      error: {}
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      org: nextProps.org,
      editing: nextProps.new,
      editTmp: _.extend({}, nextProps.org),
      error: {}
    });
  },
  onOrgsUpdate: function(orgs) {
    this.setState({
      orgs: orgs.nestedOrgs
    });
  },
  onChange: function(e) {
    var target = e.target,
        name = target.getAttribute('name'),
        editTmp = this.state.editTmp,
        error = this.state.error;

    editTmp[name] = target.value;
    error[name] = false;
    this.setState({
      editTmp: editTmp,
      error: error
    });
  },
  setParent: function(parent) {
    var editTmp = this.state.editTmp;
    editTmp.parentId = parent;
    this.setState({
      editTmp: editTmp
    });
  },
  editOrg: function() {
    this.setState({
      editing: true,
      editTmp: _.extend({}, this.state.org),
      error: {}
    });
  },
  cancelEdit: function() {
    this.setState({
      editing: false
    });
  },
  deleteOrg: function() {
    if (!window.confirm('Are you sure you want to delete this organization and all its assets?'))
      return;

    orgActions.del(this.state.org);
  },
  saveOrg: function(e) {
    e.preventDefault();

    var editTmp = this.state.editTmp,
        error = this.state.error;

    if (!editTmp.name) {
      error.name = true;
      this.setState({
        error: error
      });
      return;
    }

    if (!editTmp.id)
      orgActions.create(this.state.editTmp);
    else
      orgActions.update(this.state.editTmp);
  },
  cancelNewOrg: function(e) {
    orgActions.create.cancel();
  },
  render: function() {
    if (!this.state.editing)
      return this.renderNotEditing();
    else
      return this.renderEditing();
  },
  renderNotEditing: function() {
    var org = this.state.org;

    function showParent(org) {
      if (org.parent) {
        return (
          <div>
            <i className="level up icon"></i>
            {org.parent.name}
          </div>
        );
      }
    }

    return (
      <div className="ui card">
        <div className="content">
          <div className="header">
            {org.name}
          </div>
          <div className="meta">
            {showParent(org)}

            {org.description}
          </div>
          <div className="description">
          </div>
        </div>
        <div className="extra content">
          <Dropdown className="inline right icon" init={true} style={{marginRight: '8px'}}>
            <i className="setting icon"></i>
            <div className="menu">
              <div className="item" onClick={this.editOrg}>
                <i className="edit icon"></i>
                Edit
              </div>
              <div className="item" onClick={this.deleteOrg}>
                <i className="trash icon"></i>
                Delete
              </div>
            </div>
          </Dropdown>

          <div className="right floated">
            <i className="icon server"></i>
            {org.assets ? org.assets.length : '0'} Assets

            <span style={{margin: '0 4px'}}>|</span>

            <Link to="org" params={{orgId: org.id}} className="">
              Go to asset list
            </Link>
          </div>
        </div>
      </div>
    );
  },
  renderEditing: function() {
    var editTmp = this.state.editTmp,
        orgs = this.state.orgs,
        error = this.state.error;

    // don't allow an org to be its own parent
    if (editTmp.id !== undefined) {
      orgs = orgs.filter(o => o.id !== editTmp.id);
    }

    var nameClass = classNames({
      field: true,
      ui: true,
      input: true,
      small: true,
      error: error.name
    });

    return (
      <div className="ui card">
        <div className="content">
          <form onSubmit={this.saveOrg} className="ui form" noValidate>
            <div className={nameClass}>
              <input type="text" placeholder="Name" value={editTmp.name} required onChange={this.onChange} name="name"/>
            </div>
            <div className="field ui small input">
              <input type="text" placeholder="Description" value={editTmp.description} onChange={this.onChange} name="description"/>
            </div>
            <div className="field ui small input">
              <Dropdown init={{onChange: this.setParent, allowCategorySelection:true}} name="parent" className="basic button">
                <div className="default text">Parent organization</div>
                <i className="dropdown icon"></i>
            
                <div className="menu">
                  {orgs.map(org =>
                    <NewOrgParentDropdownItem org={org}/>
                  )}
                </div>
              </Dropdown>
            </div>
            <button className="ui button primary small" type="submit">Save organization</button>
            <button className="ui button basic small" type="button" onClick={editTmp.id ? this.cancelEdit : this.cancelNewOrg}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
});

var NewOrgParentDropdownItem = React.createClass({
  getInitialState: function() {
    return {
      org: this.props.org
    };
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      org: props.org
    });
  },
  render: function() {
    var org = this.props.org;


    if (!org.children || !org.children.length) {
      return (
        <div className="item" data-value={org.id} key={org.id}>{org.name}</div>
      );
    } else {
      return (
        <div className="item">
          <i className="dropdown icon"></i>
          <span className="text">{org.name}</span>
          <div className="menu">

            {org.children.map(child =>
              <NewOrgParentDropdownItem org={child}/>
            )}
          </div>
        </div>
      );
    }
  }
});

module.exports = OrgCard;
