'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Dropdown = require('react-semantify').Dropdown,
    Link = require('react-router').Link,
    catStore = require('../store'),
    catActions = require('../actions'),
    _ = require('lodash'),
    classNames = require('classnames');

var Card = React.createClass({
  getInitialState: function() {
    return {
      category: this.props.category,
      editing: this.props.new
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      category: nextProps.category,
      editing: nextProps.new,
      editTmp: _.extend({}, nextProps.category),
      error: {}
    });
  },
  setEditing: function() {
    this.setState({
      editing: !this.state.editing,
      editTmp: _.assign({}, this.props.category)
    });
  },
  cancelNew: function() {
    catActions.create.cancel();
  },
  onFieldChange: function(e) {
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
  saveCategory: function(e) {
    e.preventDefault();

    var editTmp = this.state.editTmp,
        error = this.state.error;

    if (!editTmp.name) {
      error.name = true;
      this.setState({ error: error });
      return;
    }

    if (editTmp.id)
      catActions.update(editTmp);
    else
      catActions.create(editTmp);
  },
  deleteCategory: function() {
    catActions.del(this.state.category);
  },
  render: function() {
    return this.state.editing ? this.renderEditing() : this.renderNotEditing();
  },
  renderNotEditing: function() {
    var category = this.state.category;

    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{category.name}</div>
          <div className="meta">{category.description}</div>
        </div>

        <div className="extra content">
          <Dropdown className="inline right icon" init={true} style={{marginRight: '8px'}}>
            <i className="setting icon"></i>
            <div className="menu">
              <div className="item" onClick={this.setEditing}>
                <i className="edit icon"></i>
                Edit
              </div>
              <div className="item" onClick={this.deleteCategory}>
                <i className="trash icon"></i>
                Delete
              </div>
            </div>
          </Dropdown>

          <div className="right floated">
            <i className="icon server"></i>
            {category.assetCount} Assets

            <span style={{margin: '0 4px'}}>|</span>

            <Link to="org" params={{orgId: category.id}} className="">
              Go to asset list
            </Link>
          </div>
        </div>
      </div>
    );
  },
  renderEditing: function() {
    var category = this.state.editTmp;

    var nameClass = classNames({
      'field ui input small': true,
      error: this.state.error.name
    });

    return (
      <div className="ui card">
        <div className="content">
          <form onSubmit={this.saveCategory} className="ui form" noValidate>
            <div className={nameClass}>
              <input type="text" name="name" placeholder="Name" value={category.name} required onChange={this.onFieldChange} />
            </div>
            <div className="field ui input small">
              <input type="text" name="description" placeholder="Description" value={category.description} onChange={this.onFieldChange} />
            </div>
            <button type="submit" className="ui button primary small">Save category</button>
            <button type="button" onClick={category.id ? this.setEditing : this.cancelNew} className="ui button basic small">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Card;
