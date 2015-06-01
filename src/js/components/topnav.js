'use strict';
var React = require('react'),
    Dropdown = require('react-semantify').Dropdown,
    userStore = require('./user/store');

var topNav = React.createClass({
  logout: function() {
    userStore.userActions.logout();
  },
  render: function() {
    return (
      <div className="row">
        <div className="sixteen wide column">
          <div id="content" role="main">
            <div className="ui inverted large menu">
              <div className="item">
                Asset Manager
              </div>
              <div className="item">
                
              </div>
              <div className="right menu">
                <Dropdown className="ui item" init={true}>
                  <i className="icon user"></i>
                  Vito LaVilla
          
                  <div className="menu">
                    <a className="item">My Account</a>
                    <a className="item" onClick={this.logout}>Logout</a>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = topNav;
