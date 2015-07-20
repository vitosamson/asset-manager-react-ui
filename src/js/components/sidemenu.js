'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    State = require('react-router').State,
    Dropdown = require('react-semantify').Dropdown,
    Link = require('react-router').Link,
    orgStore = require('./organizations/store'),
    orgActions = require('./organizations/actions'),
    OrgListMenu = require('./organizations/views/list/listMenu'),
    TemplateListMenu = require('./templates/views/listMenu'),
    categoryStore = require('./categories/store'),
    categoryActions = require('./categories/actions'),
    CategoryListMenu = require('./categories/views/listMenu');

var sidemenu = React.createClass({
  mixins: [
    Reflux.listenTo(orgStore, 'onOrgsUpdate'),
    Reflux.listenTo(categoryStore, 'onCategoriesUpdate'),
    State
  ],
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      orgs: orgStore.orgs || [],
      categories: []
    };
  },
  componentWillMount: function() {
    orgActions.list();
    categoryActions.list();
  },
  onOrgsUpdate: function(orgs) {
    this.setState({
      orgs: orgs
    });
  },
  onCategoriesUpdate: function(cats) {
    this.setState({
      categories: cats
    });
  },
  render: function() {
    return (
      <div className="four wide column">
        {this.isActive('orgs') ? <OrgListMenu/> : null}
        {this.isActive('templates') ? <TemplateListMenu/> : null}
        {this.isActive('categories') ? <CategoryListMenu/> : null}

        <div className="ui vertical fluid menu">
          <div className="item">
            <div className="ui icon input fluid">
              <input type="search" placeholder="Search"/>
              <i className="search icon"></i>
            </div>
          </div>
        
          <Link to="dashboard" className="item">
            <i className="home icon"></i>
            Dashboard
          </Link>
        
          <div className="item">
            <i className="folder icon"></i>
            Organizations
        
            <div className="menu">
              {this.state.orgs.map(function(org) {
                return (
                  <Link to="org" key={org.id} params={{orgId: org.id}} className="item">{org.name}</Link>
                );
              })}
            </div>
          </div>

          <div className="item">
            <i className="columns icon"></i>
            Categories

            <div className="menu">
              {this.state.categories.map(cat =>
                <Link to="org" key={cat.id} params={{orgId: cat.id}} className="item">{cat.name}</Link>
              )}
            </div>
          </div>
        
          <Dropdown className="ui dropdown item" init={true}>
            <i className="icon dropdown"></i>
            Admin
        
            <div className="menu">
              <Link to="orgs" className="item">Organizations</Link>
              <Link to="templates" className="item">Templates</Link>
              <Link to="categories" className="item">Categories</Link>
              <a className="item">Users</a>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
});

module.exports = sidemenu;
