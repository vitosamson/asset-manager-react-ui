'use strict';

var React = require('react'),
    Dropdown = require('react-semantify').Dropdown,
    Reflux = require('reflux'),
    Navigation = require('react-router').Navigation,
    Link = require('react-router').Link,
    userStore = require('./user/store'),
    userActions = require('./user/actions');

var topNav = React.createClass({
  mixins: [
    Reflux.listenTo(userStore, 'onUserUpdate'),
    Navigation
  ],
  getInitialState: function() {
    return {
      user: {}
    };
  },
  componentWillMount: function() {
    userActions.me();
  },
  logout: function() {
    userActions.logout();
  },
  onUserUpdate: function(token, user) {
    this.setState({
      user: user
    });
  },
  render: function() {
    var user = this.state.user;
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
                  {user.firstName} {user.lastName ? user.lastName : ''}
          
                  <div className="menu">
                    <Link to="account" className="item">My Account</Link>
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
