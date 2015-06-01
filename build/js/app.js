/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Router = __webpack_require__(2),
	    Route = Router.Route,
	    TopNav = __webpack_require__(3),
	    Sidemenu = __webpack_require__(4),
	    userStore = __webpack_require__(5).userStore,
	    Login = __webpack_require__(6),
	    Register = __webpack_require__(7),
	    Authenticated = __webpack_require__(8).Authenticated;

	var App = React.createClass({
	  displayName: 'App',

	  mixins: [Router.Navigation],
	  componentDidMount: function componentDidMount() {
	    userStore.listen((function (token) {
	      if (!token) this.transitionTo('login');else this.transitionTo('app');
	    }).bind(this));
	  },
	  render: function render() {
	    return React.createElement(Router.RouteHandler, null);
	  }
	});

	var LoggedIn = React.createClass({
	  displayName: 'LoggedIn',

	  mixins: [Authenticated],
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'ui page grid' },
	      React.createElement(TopNav, null),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(Sidemenu, null),
	        React.createElement(Router.RouteHandler, null)
	      )
	    );
	  }
	});

	var LoggedOut = React.createClass({
	  displayName: 'LoggedOut',

	  statics: {
	    willTransitionTo: function willTransitionTo(transition) {
	      if (userStore.token) transition.redirect('app', {});
	    }
	  },
	  render: function render() {
	    return React.createElement(Router.RouteHandler, null);
	  }
	});

	var routes = React.createElement(
	  Route,
	  { handler: App },
	  React.createElement(
	    Route,
	    { path: '/', name: 'user', handler: LoggedOut },
	    React.createElement(Router.DefaultRoute, { name: 'login', handler: Login }),
	    React.createElement(Route, { path: 'register', name: 'register', handler: Register })
	  ),
	  React.createElement(Route, { path: '/app', name: 'app', handler: LoggedIn })
	);

	Router.run(routes, Router.HashLocation, function (Handler) {
	  React.render(React.createElement(Handler, null), document.getElementById('app'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = ReactRouter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
	    Dropdown = __webpack_require__(9).Dropdown,
	    userStore = __webpack_require__(5);

	var topNav = React.createClass({
	  displayName: 'topNav',

	  logout: function logout() {
	    userStore.userActions.logout();
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'row' },
	      React.createElement(
	        'div',
	        { className: 'sixteen wide column' },
	        React.createElement(
	          'div',
	          { id: 'content', role: 'main' },
	          React.createElement(
	            'div',
	            { className: 'ui inverted large menu' },
	            React.createElement(
	              'div',
	              { className: 'item' },
	              'Asset Manager'
	            ),
	            React.createElement('div', { className: 'item' }),
	            React.createElement(
	              'div',
	              { className: 'right menu' },
	              React.createElement(
	                Dropdown,
	                { className: 'ui item', init: true },
	                React.createElement('i', { className: 'icon user' }),
	                'Vito LaVilla',
	                React.createElement(
	                  'div',
	                  { className: 'menu' },
	                  React.createElement(
	                    'a',
	                    { className: 'item' },
	                    'My Account'
	                  ),
	                  React.createElement(
	                    'a',
	                    { className: 'item', onClick: this.logout },
	                    'Logout'
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = topNav;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Dropdown = __webpack_require__(9).Dropdown,
	    Link = __webpack_require__(2).Link;

	var sidemenu = React.createClass({
	  displayName: 'sidemenu',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'four wide column' },
	      React.createElement(
	        'div',
	        { className: 'ui vertical fluid menu' },
	        React.createElement(
	          'div',
	          { className: 'item' },
	          React.createElement(
	            'div',
	            { className: 'ui icon input' },
	            React.createElement('input', { type: 'search', placeholder: 'Search' }),
	            React.createElement('i', { className: 'search icon' })
	          )
	        ),
	        React.createElement(
	          Link,
	          { to: 'app', className: 'item' },
	          React.createElement('i', { className: 'home icon' }),
	          'Dashboard'
	        ),
	        React.createElement(
	          'div',
	          { className: 'item' },
	          React.createElement('i', { className: 'folder icon' }),
	          'Organizations',
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            React.createElement(
	              'a',
	              { className: 'item' },
	              'Foo'
	            ),
	            React.createElement(
	              'a',
	              { className: 'item' },
	              'Bar'
	            ),
	            React.createElement(
	              'a',
	              { className: 'item' },
	              'Baz'
	            )
	          )
	        ),
	        React.createElement(
	          Dropdown,
	          { className: 'ui dropdown item', init: true },
	          React.createElement('i', { className: 'icon dropdown' }),
	          'Admin',
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            React.createElement(
	              'a',
	              { className: 'item' },
	              'Organizations'
	            ),
	            React.createElement(
	              'a',
	              { className: 'item' },
	              'Templates'
	            ),
	            React.createElement(
	              'a',
	              { className: 'item' },
	              'Users'
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = sidemenu;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(10);

	var userActions = Reflux.createActions(['login', 'logout']);

	var userStore = Reflux.createStore({
	  init: function init() {
	    this.load();
	    this.listenToMany(userActions);
	  },
	  onLogin: function onLogin(token) {
	    this.token = token;
	    this.save();
	    this.trigger(this.token);
	  },
	  onLogout: function onLogout() {
	    this.token = null;
	    this.save();
	    this.trigger(this.token);
	  },
	  save: function save() {
	    if (this.token) localStorage.setItem('token', this.token);else localStorage.removeItem('token');
	  },
	  load: function load() {
	    this.token = localStorage.getItem('token');
	  }
	});

	module.exports = {
	  userStore: userStore,
	  userActions: userActions
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Link = __webpack_require__(2).Link,
	    userStore = __webpack_require__(5),
	    userApi = __webpack_require__(11);

	var login = React.createClass({
	  displayName: 'login',

	  getInitialState: function getInitialState() {
	    return {
	      error: {},
	      user: {},
	      loading: false
	    };
	  },
	  submit: function submit(e) {
	    e.preventDefault();
	    var error = this.state.error;

	    if (!this.state.user.email) {
	      error.email = true;
	      this.setState({ error: error });
	    }

	    if (!this.state.user.password) {
	      error.password = true;
	      this.setState({ error: error });
	    }

	    if (this.state.user.email && this.state.user.password) {
	      this.setState({
	        error: {}
	      }, (function () {
	        this.setState({ loading: true });
	        userApi.login(this.state.user).then(function (data) {
	          userStore.userActions.login(data.token);
	        }, (function (err) {
	          console.error(err);
	        }).bind(this));
	      }).bind(this));
	    }
	  },
	  inputChange: function inputChange(e) {
	    var input = e.target,
	        name = input.getAttribute('name'),
	        state = this.state;

	    state.user[name] = input.value;
	    state.error[name] = false;
	    this.setState(state);
	  },
	  render: function render() {
	    var emailError = this.state.error.email,
	        passwordError = this.state.error.password;

	    var emailClass = emailError ? 'field error' : 'field',
	        passwordClass = passwordError ? 'field error' : 'field';

	    return React.createElement(
	      'div',
	      { className: 'ui two column centered grid' },
	      React.createElement(
	        'div',
	        { className: 'column' },
	        React.createElement(
	          'form',
	          { className: 'ui form', onSubmit: this.submit, noValidate: true },
	          React.createElement(
	            'div',
	            { className: emailClass },
	            React.createElement(
	              'label',
	              { htmlFor: 'email' },
	              'Email'
	            ),
	            React.createElement('input', { required: 'true', type: 'email', id: 'email', name: 'email', onChange: this.inputChange, error: this.state.error.email })
	          ),
	          React.createElement(
	            'div',
	            { className: passwordClass },
	            React.createElement(
	              'label',
	              { htmlFor: 'password' },
	              'Password'
	            ),
	            React.createElement('input', { required: 'true', type: 'password', id: 'password', name: 'password', onChange: this.inputChange, error: this.state.error.password })
	          ),
	          React.createElement(
	            'div',
	            { className: 'two fields' },
	            React.createElement(
	              'button',
	              { type: 'submit', className: 'ui primary button' },
	              'Login'
	            ),
	            React.createElement(
	              Link,
	              { to: 'register', className: 'ui basic button' },
	              'Register'
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = login;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Link = __webpack_require__(2).Link,
	    userStore = __webpack_require__(5),
	    userApi = __webpack_require__(11);

	var register = React.createClass({
	  displayName: 'register',

	  getInitialState: function getInitialState() {
	    return {
	      error: {},
	      user: {},
	      loading: false
	    };
	  },
	  submit: function submit(e) {
	    e.preventDefault();
	    var error = this.state.error,
	        user = this.state.user;

	    if (!user.email) {
	      error.email = true;
	      this.setState({ error: error });
	    }

	    if (!user.firstName) {
	      error.name = true;
	      this.setState({ error: error });
	    }

	    if (!user.password || user.password !== user.passwordConfirm) {
	      error.password = true;
	      this.setState({ error: error });
	    }

	    if (user.email && user.firstName && user.email && user.password && user.password === user.passwordConfirm) {
	      userApi.register(user).success(function (data) {
	        userStore.userActions.login(data.token);
	      }).fail(function (err) {
	        console.error(err);
	      });
	    }
	  },
	  inputChange: function inputChange(e) {
	    var input = e.target,
	        name = input.getAttribute('name'),
	        state = this.state;

	    state.user[name] = input.value;
	    state.error[name] = false;
	    this.setState(state);
	  },
	  render: function render() {
	    var emailError = this.state.error.email,
	        passwordError = this.state.error.password,
	        nameError = this.state.error.name;

	    var emailClass = emailError ? 'field error' : 'field',
	        passwordClass = passwordError ? 'field error' : 'field',
	        nameClass = nameError ? 'field error' : 'field';

	    return React.createElement(
	      'div',
	      { className: 'ui two column centered grid' },
	      React.createElement(
	        'div',
	        { className: 'column' },
	        React.createElement(
	          'form',
	          { className: 'ui form', onSubmit: this.submit, noValidate: true },
	          React.createElement(
	            'div',
	            { className: 'two fields' },
	            React.createElement(
	              'div',
	              { className: nameClass },
	              React.createElement(
	                'label',
	                { htmlFor: 'firstName' },
	                'First name'
	              ),
	              React.createElement('input', { required: 'true', type: 'text', id: 'firstName', name: 'firstName', onChange: this.inputChange, error: this.state.error.email, placeholder: 'Required' })
	            ),
	            React.createElement(
	              'div',
	              { className: 'field' },
	              React.createElement(
	                'label',
	                { htmlFor: 'lastName' },
	                'Last name'
	              ),
	              React.createElement('input', { type: 'text', id: 'lastName', name: 'lastName', onChange: this.inputChange, placeholder: 'Optional' })
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: emailClass },
	            React.createElement(
	              'label',
	              { htmlFor: 'email' },
	              'Email'
	            ),
	            React.createElement('input', { required: 'true', type: 'email', id: 'email', name: 'email', onChange: this.inputChange, error: this.state.error.email, placeholder: 'Required' })
	          ),
	          React.createElement(
	            'div',
	            { className: passwordClass },
	            React.createElement(
	              'label',
	              { htmlFor: 'password' },
	              'Password'
	            ),
	            React.createElement('input', { required: 'true', type: 'password', id: 'password', name: 'password', onChange: this.inputChange, error: this.state.error.password, placeholder: 'Required' })
	          ),
	          React.createElement(
	            'div',
	            { className: passwordClass },
	            React.createElement(
	              'label',
	              { htmlFor: 'passwordConfirm' },
	              'Confirm password'
	            ),
	            React.createElement('input', { required: 'true', type: 'password', id: 'passwordConfirm', name: 'passwordConfirm', onChange: this.inputChange, placeholder: 'Required' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'two fields' },
	            React.createElement(
	              'button',
	              { type: 'submit', className: 'ui primary button' },
	              'Register'
	            ),
	            React.createElement(
	              Link,
	              { to: 'login', className: 'ui basic button' },
	              'Sign in'
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = register;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var userStore = __webpack_require__(5).userStore,
	    userApi = __webpack_require__(11);

	var Authenticated = {
	  statics: {
	    willTransitionTo: function willTransitionTo(transition) {
	      if (!userStore.token) transition.redirect('login', {});
	    }
	  }
	};

	module.exports = {
	  Authenticated: Authenticated
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Semantify;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Reflux;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(12),
	    userStore = __webpack_require__(5),
	    basePath = __webpack_require__(13).API_BASE;

	basePath = basePath + 'users/';
	var paths = {
	  validate: basePath + 'validate',
	  login: basePath + 'login',
	  register: basePath + 'signup'
	};

	/**
	 * Validates current auth token
	 */
	function validate(cb) {
	  $.ajax({
	    url: paths.validate,
	    type: 'GET',
	    headers: {
	      'Authorization': 'Bearer ' + userStore.userStore.token
	    }
	  }).success(function (data) {
	    userStore.userActions.login(data.token);
	    cb(null);
	  }).fail(function (err) {
	    cb(err);
	  });
	}

	function login(user) {
	  return $.ajax({
	    url: paths.login,
	    type: 'POST',
	    data: JSON.stringify(user),
	    headers: {
	      'Content-Type': 'application/json'
	    }
	  });
	}

	function register(user) {
	  return $.ajax({
	    url: paths.register,
	    type: 'POST',
	    data: JSON.stringify(user),
	    headers: {
	      'Content-Type': 'application/json'
	    }
	  });
	}

	module.exports = {
	  validate: validate,
	  login: login,
	  register: register
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = $;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  API_BASE: 'http://localhost:3000/v1/'
	};

/***/ }
/******/ ]);