'use strict';

import React from 'react';
import Reflux from 'reflux';
import {
  RouteHandler,
  Route,
  DefaultRoute,
  Navigation,
  default as Router} from 'react-router';

// nav components
import TopNav from './components/topnav';
import Sidemenu from './components/sidemenu';

// user components
import userStore from './components/user/store';
import userActions from './components/user/actions';
import Login from './components/user/views/login';
import Register from './components/user/views/register';
import Account from './components/user/views/account';
import { Authenticated, Unauthenticated } from './components/user/mixins';

// organization components
import Orgs from './components/organizations/views/list';
import Org from './components/organizations/views/show';

// template components
import Templates from './components/templates/views/list';

// category components
import Categories from './components/categories/views/list';
import Category from './components/categories/views/show';

// asset components
import NewAsset from './components/assets/views/new';
import ShowAsset from './components/assets/views/show';

const App = React.createClass({
  mixins: [
    Navigation
  ],
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});

const Dashboard = React.createClass({
  render: function() {
    return (
      <div></div>
    );
  }
});

const LoggedIn = React.createClass({
  mixins: [
    Authenticated,
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
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

const LoggedOut = React.createClass({
  mixins: [
    Unauthenticated
  ],
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});

const routes = (
  <Route handler={App}>
    <Route path='/' name='user' handler={LoggedOut}>
      <DefaultRoute name='login' handler={Login}/>
      <Route path='register' name='register' handler={Register}/>
    </Route>
    <Route path='/app' name='app' handler={LoggedIn}>
      <DefaultRoute name='dashboard' handler={Dashboard}/>
      <Route path='account' name='account' handler={Account}/>

      <Route path='orgs' name='orgs' handler={Orgs}/>
      <Route path='org/:orgId' name='org' handler={Org}/>

      <Route path='assets/new' name='newAsset' handler={NewAsset}/>
      <Route path='assets/:assetId' name='asset' handler={ShowAsset}/>

      <Route path='templates' name='templates' handler={Templates}/>

      <Route path='categories' name='categories' handler={Categories}/>
      <Route path='categories/:catId' name='category' handler={Category}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
