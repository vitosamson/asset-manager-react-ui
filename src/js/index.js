'use strict';

var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    TopNav = require('./components/topnav'),
    Sidemenu = require('./components/sidemenu'),
    userStore = require('./components/user/store').store,
    userActions = require('./components/user/store').actions,
    userApi = require('./components/user/api'),
    Login = require('./components/user/views/login'),
    Register = require('./components/user/views/register'),
    Account = require('./components/user/views/account'),
    Authenticated = require('./components/user/mixins').Authenticated,
    Orgs = require('./components/organizations/views/list');

var App = React.createClass({
  mixins: [Router.Navigation],
  componentDidMount: function() {
    userStore.init();
  },
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
  mixins: [Authenticated, Router.Navigation],
  componentDidMount: function() {
    userApi.me(function(err) {
      if (err) {
        userActions.logout();
        this.transitionTo('login');
      }
    }.bind(this));
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
  statics: {
    willTransitionTo: function(transition) {
      if (userStore.token)
        transition.redirect('app', {});
    }
  },
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
      <Route path='org/:orgId' name='org' handler={Orgs}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
