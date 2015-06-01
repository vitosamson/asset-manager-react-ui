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
    Authenticated = require('./components/user/mixins').Authenticated;

var App = React.createClass({
  mixins: [Router.Navigation],
  componentDidMount: function() {
    userStore.init();
    userStore.listen(function(token) {
      if (!token)
        this.transitionTo('login');
      else
        this.transitionTo('app');
    }.bind(this));
  },
  render: function() {
    return (
      <Router.RouteHandler/>
    );
  }
});

var LoggedIn = React.createClass({
  mixins: [Authenticated],
  componentDidMount: function() {
    userApi.me();
  },
  render: function() {
    return (
      <div className="ui page grid">
        <TopNav/>

        <div className="row">
          <Sidemenu/>

          <Router.RouteHandler/>
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
      <Route path='account' name='account' handler={LoggedIn}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
