'use strict';

var React = require('react'),
    Router = require('react-router'),
    TopNav = require('./components/topnav'),
    Sidemenu = require('./components/sidemenu');

var App = React.createClass({
  render: function() {
    console.log(this.props);
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

var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="twelve wide column">Welcome</div>
    );
  }
});

var routes = (
  <Router.Route path='/' handler={App}>
    <Router.DefaultRoute handler={Dashboard} name='dashboard'/>
  </Router.Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
