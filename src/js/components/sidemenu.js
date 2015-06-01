'use strict';

var React = require('react'),
    Dropdown = require('react-semantify').Dropdown,
    Link = require('react-router').Link;

var sidemenu = React.createClass({
  render: function() {
    return (
      <div className="four wide column">
        <div className="ui vertical fluid menu">
          <div className="item">
            <div className="ui icon input">
              <input type="search" placeholder="Search"/>
              <i className="search icon"></i>
            </div>
          </div>
        
          <Link to="app" className="item">
            <i className="home icon"></i>
            Dashboard
          </Link>
        
          <div className="item">
            <i className="folder icon"></i>
            Organizations
        
            <div className="menu">
              <a className="item">Foo</a>
              <a className="item">Bar</a>
              <a className="item">Baz</a>
            </div>
          </div>
        
          <Dropdown className="ui dropdown item" init={true}>
            <i className="icon dropdown"></i>
            Admin
        
            <div className="menu">
              <a className="item">Organizations</a>
              <a className="item">Templates</a>
              <a className="item">Users</a>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
});

module.exports = sidemenu;
