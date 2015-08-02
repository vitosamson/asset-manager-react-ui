'use strict';

var React = require('react'),
    State = require('react-router').State,
    Dropdown = require('react-semantify').Dropdown,
    Link = require('react-router').Link,
    OrgMenu = require('./organizations/views/sidemenu'),
    OrgListMenu = require('./organizations/views/listMenu'),
    OrgShowMenu = require('./organizations/views/showMenu'),
    TemplateListMenu = require('./templates/views/listMenu'),
    CategoryMenu = require('./categories/views/sidemenu'),
    CategoryListMenu = require('./categories/views/listMenu'),
    AssetShowMenu = require('./assets/views/showMenu');

var sidemenu = React.createClass({
  mixins: [
    State
  ],
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    return (
      <div className="four wide column">
        {this.isActive('orgs') ? <OrgListMenu/> : null}
        {this.isActive('org') ? <OrgShowMenu/> : null}
        {this.isActive('templates') ? <TemplateListMenu/> : null}
        {this.isActive('categories') ? <CategoryListMenu/> : null}
        {this.isActive('asset') ? <AssetShowMenu/> : null}

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
        
          <OrgMenu />

          <CategoryMenu />
        
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
