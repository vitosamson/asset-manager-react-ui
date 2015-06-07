'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Router = require('react-router'),
    Route = Router.Route,
    TopNav = require('./components/topnav'),
    Sidemenu = require('./components/sidemenu'),
    userStore = require('./components/user/store'),
    userActions = require('./components/user/actions'),
    Login = require('./components/user/views/login'),
    Register = require('./components/user/views/register'),
    Account = require('./components/user/views/account'),
    UserMixins = require('./components/user/mixins'),
    Orgs = require('./components/organizations/views/list'),
    Org = require('./components/organizations/views/show'),
    Templates = require('./components/templates/views/list');

var App = React.createClass({
  mixins: [
    Router.Navigation
  ],
  render: function() {
    return (
      <Router.RouteHandler/>
    );
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <div></div>
    );
  }
});

var LoggedIn = React.createClass({
  mixins: [
    UserMixins.Authenticated,
    Reflux.listenTo(userActions.logout, 'onLogout')
  ],
  onLogout: function(token, user) {
    this.transitionTo('login');
  },
  render: function() {
    return (
      <div className="ui page grid">
        <TopNav/>

        <div className="row">
          <Sidemenu/>

          <div className="twelve wide column">
            <Router.RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

var LoggedOut = React.createClass({
  mixins: [
    UserMixins.Unauthenticated
  ],
  render: function() {
    return (
      <Router.RouteHandler/>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route path='/' name='user' handler={LoggedOut}>
      <Router.DefaultRoute name='login' handler={Login}/>
      <Route path='register' name='register' handler={Register}/>
    </Route>
    <Route path='/app' name='app' handler={LoggedIn}>
      <Router.DefaultRoute name='dashboard' handler={Dashboard}/>
      <Route path='account' name='account' handler={Account}/>

      <Route path='orgs' name='orgs' handler={Orgs}/>
      <Route path='org/:orgId' name='org' handler={Org}/>

      <Route path='templates' name='templates' handler={Templates}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
