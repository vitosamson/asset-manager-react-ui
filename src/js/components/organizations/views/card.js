'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    Dropdown = require('react-semantify').Dropdown,
    orgActions = require('../actions'),
    orgStore = require('../store'),
    classNames = require('classnames');

var OrgCard = React.createClass({
  mixins: [
    Reflux.listenTo(orgStore, 'onOrgsUpdate'),
  ],
  getInitialState: function() {
    return {
      org: this.props.org,
      orgs: orgStore.orgs || [],
      editing: this.props.new,
      error: {}
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      org: nextProps.org,
      editing: nextProps.new
    });
  },
  onOrgsUpdate: function(orgs) {
    this.setState({
      orgs: orgs
    });
  },
  onChange: function(e) {
    var target = e.target,
        name = target.getAttribute('name'),
        org = this.state.org,
        error = this.state.error;

    org[name] = target.value;
    error[name] = false;
    this.setState({
      org: org,
      error: error
    });
  },
  setParent: function(parent) {
    var org = this.state.org;
    org.parent = parent;
    this.setState({
      org: org
    });
  },
  saveOrg: function(e) {
    e.preventDefault();

    var org = this.state.org,
        error = this.state.error;

    if (!org.name) {
      error.name = true;
      this.setState({
        error: error
      });
    }
    else {
      orgActions.create(this.state.org);
    }
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
          <i className="icon server"></i>
          {org.assets ? org.assets.length : '0'} Assets

          <Link to="org" params={{orgId: org._id}} className="right floated">
            Go to asset list
          </Link>
        </div>
      </div>
    );
  },
  renderEditing: function() {
    var org = this.state.org,
        orgs = this.state.orgs,
        error = this.state.error;

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
              <input type="text" placeholder="Name" value={org.name} required onChange={this.onChange} name="name"/>
            </div>
            <div className="field ui small input">
              <input type="text" placeholder="Description" value={org.description} onChange={this.onChange} name="description"/>
            </div>
            <div className="field ui small input">
              <Dropdown init={{onChange: this.setParent}} name="parent" className="search selection fluid">
                <div className="default text">Parent organization</div>
                <i className="dropdown icon"></i>
            
                <div className="menu">
                  {orgs.map(function(org, idx) {
                    return (
                      <div className="item" data-value={org._id} key={idx}>{org.name}</div>
                    );
                  })}
                </div>
              </Dropdown>
            </div>
            <button className="ui button primary small" type="submit">Save organization</button>
            <button className="ui button basic small" type="button" onClick={this.cancelNewOrg}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = OrgCard;
