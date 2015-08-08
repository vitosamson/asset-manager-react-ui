'use strict';

import React from 'react';
import { State, Link } from 'react-router';
import { Dropdown } from 'react-semantify';

// organization menus
import OrgMenu from './organizations/views/sidemenu';
import OrgListMenu from './organizations/views/listMenu';
import OrgShowMenu from './organizations/views/showMenu';

// template menus
import TemplateListMenu from './templates/views/listMenu';

// category menus
import CategoryMenu from './categories/views/sidemenu';
import CategoryListMenu from './categories/views/listMenu';

// asset menus
import AssetShowMenu from './assets/views/showMenu';

export default React.createClass({
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
