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
	    Reflux = __webpack_require__(2),
	    Router = __webpack_require__(3),
	    Route = Router.Route,
	    TopNav = __webpack_require__(4),
	    Sidemenu = __webpack_require__(5),
	    userStore = __webpack_require__(6),
	    userActions = __webpack_require__(7),
	    Login = __webpack_require__(8),
	    Register = __webpack_require__(9),
	    Account = __webpack_require__(10),
	    UserMixins = __webpack_require__(11),
	    Orgs = __webpack_require__(12),
	    Org = __webpack_require__(13);

	var App = React.createClass({
	  displayName: 'App',

	  mixins: [Router.Navigation],
	  render: function render() {
	    return React.createElement(Router.RouteHandler, null);
	  }
	});

	var Dashboard = React.createClass({
	  displayName: 'Dashboard',

	  render: function render() {
	    return React.createElement('div', null);
	  }
	});

	var LoggedIn = React.createClass({
	  displayName: 'LoggedIn',

	  mixins: [UserMixins.Authenticated, Reflux.listenTo(userActions.logout, 'onLogout')],
	  onLogout: function onLogout(token, user) {
	    this.transitionTo('login');
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'ui page grid' },
	      React.createElement(TopNav, null),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(Sidemenu, null),
	        React.createElement(
	          'div',
	          { className: 'twelve wide column' },
	          React.createElement(Router.RouteHandler, null)
	        )
	      )
	    );
	  }
	});

	var LoggedOut = React.createClass({
	  displayName: 'LoggedOut',

	  mixins: [UserMixins.Unauthenticated],
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
	  React.createElement(
	    Route,
	    { path: '/app', name: 'app', handler: LoggedIn },
	    React.createElement(Router.DefaultRoute, { name: 'dashboard', handler: Dashboard }),
	    React.createElement(Route, { path: 'account', name: 'account', handler: Account }),
	    React.createElement(Route, { path: 'orgs', name: 'orgs', handler: Orgs }),
	    React.createElement(Route, { path: 'org/:orgId', name: 'org', handler: Org })
	  )
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

	module.exports = Reflux;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = ReactRouter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Dropdown = __webpack_require__(14).Dropdown,
	    Reflux = __webpack_require__(2),
	    Navigation = __webpack_require__(3).Navigation,
	    Link = __webpack_require__(3).Link,
	    userStore = __webpack_require__(6),
	    userActions = __webpack_require__(7);

	var topNav = React.createClass({
	  displayName: 'topNav',

	  mixins: [Reflux.listenTo(userStore, 'onUserUpdate'), Navigation],
	  getInitialState: function getInitialState() {
	    return {
	      user: {}
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    userActions.me();
	  },
	  logout: function logout() {
	    userActions.logout();
	  },
	  onUserUpdate: function onUserUpdate(token, user) {
	    this.setState({
	      user: user
	    });
	  },
	  render: function render() {
	    var user = this.state.user;
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
	                user.firstName,
	                ' ',
	                user.lastName ? user.lastName : '',
	                React.createElement(
	                  'div',
	                  { className: 'menu' },
	                  React.createElement(
	                    Link,
	                    { to: 'account', className: 'item' },
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Dropdown = __webpack_require__(14).Dropdown,
	    Link = __webpack_require__(3).Link,
	    orgStore = __webpack_require__(16),
	    orgActions = __webpack_require__(17);

	var sidemenu = React.createClass({
	  displayName: 'sidemenu',

	  mixins: [Reflux.listenTo(orgStore, 'onOrgsUpdate')],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: orgStore.orgs || []
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    orgActions.list();
	  },
	  onOrgsUpdate: function onOrgsUpdate(orgs) {
	    this.setState({
	      orgs: orgs
	    });
	  },
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
	          { to: 'dashboard', className: 'item' },
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
	            this.state.orgs.map(function (org) {
	              return React.createElement(
	                Link,
	                { to: 'org', key: org._id, params: { orgId: org._id }, className: 'item' },
	                org.name
	              );
	            })
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
	              Link,
	              { to: 'orgs', className: 'item' },
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    actions = __webpack_require__(7),
	    baseApi = __webpack_require__(18);

	var store = Reflux.createStore({
	  listenables: actions,
	  init: function init() {
	    this.load();
	  },
	  load: function load() {
	    this.token = localStorage.getItem('token');
	    this.trigger(this.token);
	  },
	  onLoginComplete: function onLoginComplete(token, user) {
	    this.token = token;
	    this.user = user;
	    this.save();
	  },
	  onRegisterComplete: function onRegisterComplete(token, user) {
	    this.token = token;
	    this.user = user;
	    this.save();
	  },
	  onMeComplete: function onMeComplete(user) {
	    this.user = user.data;
	    this.save();
	  },
	  onMeError: function onMeError(err) {
	    console.error(err);
	  },
	  onUpdateComplete: function onUpdateComplete(user) {
	    this.user = user.data;
	    this.save();
	  },
	  onLogout: function onLogout() {
	    this.token = null;
	    this.save();
	  },
	  save: function save() {
	    localStorage.setItem('token', this.token);
	    this.trigger(this.token, this.user);
	  }
	});

	module.exports = store;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    userApi = __webpack_require__(15);

	var actions = Reflux.createActions({
	  login: {
	    children: ['complete', 'error']
	  },
	  register: {
	    children: ['complete', 'error']
	  },
	  me: {
	    children: ['complete', 'error']
	  },
	  validate: {
	    children: ['complete', 'error']
	  },
	  update: {
	    children: ['complete', 'error']
	  },
	  logout: {}
	});

	actions.login.preEmit = function (user) {
	  userApi.login(user).then(function (res) {
	    actions.login.complete(res.data.token, res.data.user);
	  }, function (err) {
	    actions.login.error(err);
	  });
	};

	actions.register.preEmit = function (user) {
	  userApi.register(user).then(function (res) {
	    actions.register.complete(res.data.token, res.data.user);
	  }, function (err) {
	    actions.register.error(err);
	  });
	};

	actions.me.preEmit = function () {
	  userApi.me().then(function (user) {
	    actions.me.complete(user);
	  }, function (err) {
	    actions.me.error(err);
	  });
	};

	actions.update.preEmit = function (user) {
	  userApi.update(user).then(function (updatedUser) {
	    actions.update.complete(updatedUser);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};

	actions.validate.preEmit = function () {
	  userApi.validate()['catch'](function (err) {
	    actions.validate.error(err);
	  });
	};

	module.exports = actions;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Link = __webpack_require__(3).Link,
	    Navigation = __webpack_require__(3).Navigation,
	    userActions = __webpack_require__(7),
	    baseApi = __webpack_require__(18);

	var login = React.createClass({
	  displayName: 'login',

	  mixins: [Navigation, Reflux.listenTo(userActions.login.complete, 'onLoginSuccess'), Reflux.listenTo(userActions.login.error, 'onLoginError')],
	  getInitialState: function getInitialState() {
	    return {
	      error: {},
	      user: {},
	      loading: false
	    };
	  },
	  onLoginSuccess: function onLoginSuccess(token) {
	    baseApi.register(token);
	    this.transitionTo('app');
	  },
	  onLoginError: function onLoginError(err) {
	    var error = {};

	    if (err.status == 401) error.form = 'Invalid email or password';else error.form = 'Something went wrong, please try again';

	    this.setState({
	      loading: false,
	      error: error
	    });
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
	        error: {},
	        loading: true
	      });
	      userActions.login(this.state.user);
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
	        formError = this.state.error.form;

	    var emailClass = emailError ? 'field error' : 'field',
	        passwordClass = passwordError ? 'field error' : 'field',
	        formClass = formError ? 'ui form error' : 'ui form',
	        btnClass = this.state.loading ? 'ui primary button loading' : 'ui primary button';

	    return React.createElement(
	      'div',
	      { className: 'ui two column centered grid' },
	      React.createElement(
	        'div',
	        { className: 'column' },
	        React.createElement(
	          'form',
	          { className: formClass, onSubmit: this.submit, noValidate: true },
	          React.createElement(
	            'div',
	            { className: 'ui error message' },
	            React.createElement(
	              'p',
	              null,
	              formError
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
	              { type: 'submit', className: btnClass },
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Link = __webpack_require__(3).Link,
	    Navigation = __webpack_require__(3).Navigation,
	    userActions = __webpack_require__(7),
	    baseApi = __webpack_require__(18);

	var register = React.createClass({
	  displayName: 'register',

	  mixins: [Navigation, Reflux.listenTo(userActions.register.complete, 'onRegisterSuccess'), Reflux.listenTo(userActions.register.error, 'onRegisterError')],
	  getInitialState: function getInitialState() {
	    return {
	      error: {},
	      user: {},
	      loading: false
	    };
	  },
	  onRegisterSuccess: function onRegisterSuccess(token) {
	    baseApi.register(token);
	    this.transitionTo('app');
	  },
	  onRegisterError: function onRegisterError(err) {
	    var error = this.state.error;

	    if (err.status == 400) error.form = 'That email is already in use';else error.form = 'Something went wrong, please try again';
	    this.setState({ error: error, loading: false });
	  },
	  submit: function submit(e) {
	    e.preventDefault();
	    var error = this.state.error,
	        user = this.state.user;

	    if (!user.email) {
	      error.email = true;
	    }

	    if (!user.firstName) {
	      error.firstName = true;
	    }

	    if (!user.password || user.password !== user.passwordConfirm) {
	      error.password = true;
	    }

	    this.setState({ error: error });

	    if (user.email && user.firstName && user.email && user.password && user.password === user.passwordConfirm) {
	      this.setState({
	        loading: true
	      });
	      userActions.register(this.state.user);
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
	        nameError = this.state.error.firstName,
	        formError = this.state.error.form;

	    var emailClass = emailError ? 'field error' : 'field',
	        passwordClass = passwordError ? 'field error' : 'field',
	        nameClass = nameError ? 'field error' : 'field',
	        formClass = formError ? 'ui form error' : 'ui form',
	        btnClass = this.state.loading ? 'ui primary button loading' : 'ui primary button';

	    return React.createElement(
	      'div',
	      { className: 'ui two column centered grid' },
	      React.createElement(
	        'div',
	        { className: 'column' },
	        React.createElement(
	          'form',
	          { className: formClass, onSubmit: this.submit, noValidate: true },
	          React.createElement(
	            'div',
	            { className: 'ui error message' },
	            React.createElement(
	              'p',
	              null,
	              formError
	            )
	          ),
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
	              React.createElement('input', { required: 'true', type: 'text', id: 'firstName', name: 'firstName', onChange: this.inputChange, placeholder: 'Required' })
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
	              { type: 'submit', className: btnClass },
	              'Register'
	            ),
	            React.createElement(
	              Link,
	              { to: 'login', className: 'ui basic button' },
	              'I already have an account'
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = register;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    userStore = __webpack_require__(6),
	    userActions = __webpack_require__(7),
	    classNames = __webpack_require__(19);

	var Account = React.createClass({
	  displayName: 'Account',

	  mixins: [Reflux.listenTo(userStore, 'onUpdate'), Reflux.listenTo(userActions.update.error, 'onError')],
	  getInitialState: function getInitialState() {
	    return {
	      user: userStore.user || {},
	      error: {},
	      loading: false,
	      success: false
	    };
	  },
	  onUpdate: function onUpdate(token, user) {
	    var success = user._id == this.state.user._id;

	    this.setState({
	      user: user,
	      success: success,
	      loading: false
	    });

	    if (success) setTimeout((function () {
	      this.setState({ success: false });
	    }).bind(this), 2000);
	  },
	  onError: function onError(err) {
	    console.error(err);
	  },
	  inputChange: function inputChange(e) {
	    var input = e.target,
	        name = input.getAttribute('name'),
	        state = this.state;

	    state.user[name] = input.value;
	    state.error[name] = false;
	    this.setState(state);
	  },
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();

	    var user = this.state.user,
	        error = this.state.error;

	    if (!user.firstName) error.firstName = true;

	    if (!user.email) error.email = true;

	    if (user.password && user.password !== user.passwordConfirm) error.password = true;

	    this.setState({ error: error });

	    if (user.firstName && user.email && (!user.password || user.password == user.passwordConfirm)) {
	      this.setState({
	        loading: true
	      });
	      userActions.update(user);
	    }
	  },
	  render: function render() {
	    var user = this.state.user,
	        error = this.state.error;

	    var btnText = this.state.success ? 'Account updated' : 'Update account';

	    var btnClass = classNames({
	      ui: true,
	      button: true,
	      primary: !this.state.loading && !this.state.success,
	      loading: this.state.loading,
	      green: this.state.success
	    });

	    return React.createElement(
	      'form',
	      { className: 'ui form', onSubmit: this.onSubmit, noValidate: true },
	      React.createElement(
	        'div',
	        { className: 'two fields' },
	        React.createElement(
	          'div',
	          { className: error.firstName ? 'field error' : 'field' },
	          React.createElement(
	            'label',
	            { htmlFor: 'firstName' },
	            'First name'
	          ),
	          React.createElement('input', { required: true, type: 'text', id: 'firstName', name: 'firstName', onChange: this.inputChange, value: user.firstName, placeholder: 'Required' })
	        ),
	        React.createElement(
	          'div',
	          { className: 'field' },
	          React.createElement(
	            'label',
	            { htmlFor: 'lastName' },
	            'Last name'
	          ),
	          React.createElement('input', { type: 'text', id: 'lastName', name: 'lastName', onChange: this.inputChange, placeholder: 'Optional', value: user.lastName })
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: error.email ? 'field error' : 'field' },
	        React.createElement(
	          'label',
	          { htmlFor: 'email' },
	          'Email'
	        ),
	        React.createElement('input', { required: true, type: 'email', id: 'email', name: 'email', onChange: this.inputChange, value: user.email, placeholder: 'Required' })
	      ),
	      React.createElement(
	        'div',
	        { className: error.password ? 'field error' : 'field' },
	        React.createElement(
	          'label',
	          { htmlFor: 'password' },
	          'Change password'
	        ),
	        React.createElement('input', { type: 'password', id: 'password', name: 'password', onChange: this.inputChange })
	      ),
	      React.createElement(
	        'div',
	        { className: error.password ? 'field error' : 'field' },
	        React.createElement(
	          'label',
	          { htmlFor: 'passwordConfirm' },
	          'Confirm new password'
	        ),
	        React.createElement('input', { type: 'password', id: 'passwordConfirm', name: 'passwordConfirm', onChange: this.inputChange })
	      ),
	      React.createElement(
	        'div',
	        { className: 'field' },
	        React.createElement(
	          'button',
	          { type: 'submit', className: btnClass },
	          btnText
	        )
	      )
	    );
	  }
	});

	module.exports = Account;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var userStore = __webpack_require__(6),
	    Navigation = __webpack_require__(3).Navigation,
	    Reflux = __webpack_require__(2),
	    userActions = __webpack_require__(7);

	var Authenticated = {
	  mixins: [Navigation, Reflux.listenTo(userActions.validate.error, 'onValidateError')],
	  statics: {
	    willTransitionTo: function willTransitionTo(transition) {
	      if (userStore.token === null || userStore.token === undefined) transition.redirect('login', {});
	      userActions.validate();
	    }
	  },
	  onValidateError: function onValidateError(err) {
	    if (err.status == 401) this.transitionTo('login');
	  }
	};

	var Unauthenticated = {
	  mixins: [Navigation],
	  statics: {
	    willTransitionTo: function willTransitionTo(transition) {
	      if (userStore.token !== null && userStore.token !== undefined) transition.redirect('app', {});
	    }
	  } };

	module.exports = {
	  Authenticated: Authenticated,
	  Unauthenticated: Unauthenticated
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Link = __webpack_require__(3).Link,
	    Reflux = __webpack_require__(2),
	    orgStore = __webpack_require__(16),
	    orgActions = __webpack_require__(17);

	var OrgList = React.createClass({
	  displayName: 'OrgList',

	  mixins: [Reflux.listenTo(orgStore, 'onOrgsUpdated')],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: orgStore.orgs || []
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    orgActions.list();
	  },
	  onOrgsUpdated: function onOrgsUpdated(orgs) {
	    this.setState({
	      orgs: orgs
	    });
	  },
	  render: function render() {
	    function showParent(org) {
	      if (org.parent) {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement('i', { className: 'level up icon' }),
	          org.parent.name
	        );
	      }
	    }

	    return React.createElement(
	      'div',
	      { className: 'ui two doubling cards' },
	      this.state.orgs.map(function (org, idx) {
	        return React.createElement(
	          'div',
	          { className: 'ui card', key: org._id },
	          React.createElement(
	            'div',
	            { className: 'content' },
	            React.createElement(
	              'div',
	              { className: 'header' },
	              org.name
	            ),
	            React.createElement(
	              'div',
	              { className: 'meta' },
	              showParent(org),
	              org.description
	            ),
	            React.createElement('div', { className: 'description' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'extra content' },
	            React.createElement('i', { className: 'icon server' }),
	            org.assets ? org.assets.length : '0',
	            ' Assets',
	            React.createElement(
	              Link,
	              { to: 'org', params: { orgId: org._id }, className: 'right floated' },
	              'Go to asset list'
	            )
	          )
	        );
	      })
	    );
	  }
	});

	module.exports = OrgList;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Link = __webpack_require__(3).Link,
	    orgStore = __webpack_require__(16),
	    orgActions = __webpack_require__(17);

	var OrgShow = React.createClass({
	  displayName: 'OrgShow',

	  mixins: [Reflux.listenTo(orgActions.get.complete, 'onOrgUpdate')],
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    return {
	      org: {}
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.getOrg();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // invoked when receiving new props - i.e. when navigating from a different page
	    this.getOrg();
	  },
	  getOrg: function getOrg() {
	    var orgId = this.context.router.getCurrentParams().orgId;
	    orgActions.get(orgId);
	  },
	  onOrgUpdate: function onOrgUpdate(org) {
	    this.setState({
	      org: org
	    });
	  },
	  render: function render() {
	    var org = this.state.org,
	        assets = org.assets ? org.assets.sort() : [];

	    function showParent() {
	      if (org.parent) {
	        return React.createElement(
	          Link,
	          { to: 'org', params: { orgId: org.parent._id } },
	          React.createElement(
	            'div',
	            { className: 'sub header' },
	            React.createElement('i', { className: 'level up icon' }),
	            org.parent.name
	          )
	        );
	      }
	    }

	    var assetTable = assets.map(function (asset) {
	      return React.createElement(
	        'tr',
	        null,
	        React.createElement(
	          'td',
	          null,
	          asset.name
	        ),
	        React.createElement(
	          'td',
	          null,
	          asset.description
	        ),
	        React.createElement(
	          'td',
	          null,
	          asset.modified
	        ),
	        React.createElement(
	          'td',
	          null,
	          asset.flagged
	        )
	      );
	    });

	    var noAssets = React.createElement(
	      'tr',
	      null,
	      React.createElement(
	        'td',
	        null,
	        'No assets'
	      )
	    );

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        { className: 'ui header' },
	        React.createElement(
	          'div',
	          { className: 'content' },
	          org.name,
	          showParent(),
	          React.createElement(
	            'div',
	            { className: 'sub header' },
	            org.description
	          )
	        )
	      ),
	      React.createElement(
	        'table',
	        { className: 'ui table' },
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'th',
	              { colSpan: '4' },
	              'Assets'
	            )
	          )
	        ),
	        assets.length > 0 ? assetTable : noAssets
	      ),
	      React.createElement(
	        'div',
	        { className: 'ui labeled icon button' },
	        React.createElement('i', { className: 'add square icon' }),
	        'Add new asset'
	      )
	    );
	  }
	});

	module.exports = OrgShow;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Semantify;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var api = __webpack_require__(18).base;

	/**
	 * Validates current auth token
	 */
	function validate(cb) {
	  return new Promise(function (resolve, reject) {
	    api()('users')('validate').get(function (err) {
	      if (err) return reject(err);
	    });
	  });
	}

	function login(user) {
	  return new Promise(function (resolve, reject) {
	    api()('users')('login').post(user, function (err, data) {
	      if (err) return reject(err);
	      resolve(data);
	    });
	  });
	}

	function register(user) {
	  return new Promise(function (resolve, reject) {
	    api()('users')('signup').post(user, function (err, data) {
	      if (err) return reject(err);
	      resolve(data);
	    });
	  });
	}

	function me() {
	  return new Promise(function (resolve, reject) {
	    api()('users')('me').get(function (err, data) {
	      if (err) return reject(err);
	      resolve(data);
	    });
	  });
	}

	function update(user) {
	  return new Promise(function (resolve, reject) {
	    api()('users')('me').put(user, function (err, data) {
	      if (err) return reject(err);
	      resolve(data);
	    });
	  });
	}

	module.exports = {
	  validate: validate,
	  login: login,
	  register: register,
	  me: me,
	  update: update
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    actions = __webpack_require__(17);

	var orgStore = Reflux.createStore({
	  listenables: actions,
	  onListComplete: function onListComplete(orgs) {
	    this.orgs = orgs;
	    this.trigger(orgs);
	  }
	});

	module.exports = orgStore;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    orgApi = __webpack_require__(21);

	var actions = Reflux.createActions({
	  list: {
	    children: ['complete', 'error']
	  },
	  get: {
	    children: ['complete', 'error']
	  }
	});

	actions.list.preEmit = function () {
	  orgApi.getList().then(function (res) {
	    actions.list.complete(res.data);
	  }, function (err) {
	    actions.list.error(err);
	  });
	};

	actions.get.preEmit = function (orgId) {
	  orgApi.get(orgId).then(function (org) {
	    actions.get.complete(org);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};

	module.exports = actions;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fermata = __webpack_require__(20),
	    config = __webpack_require__(22);

	// sets up an API template - base url, headers, json parsing
	function registerPlugin(token) {
	  fermata.registerPlugin('base', function (transport, name, key) {
	    this.base = config.API_BASE;

	    return function (req, cb) {
	      req.headers.Authorization = 'Bearer ' + token;
	      req.headers['Content-Type'] = 'application/json';
	      req.data = JSON.stringify(req.data);

	      return transport(req, function (err, res) {
	        if (res.status !== 200) err = res;else if (res === null) err = { status: 500 };else {
	          try {
	            res.data = JSON.parse(res.data);
	          } catch (e) {}
	        }

	        cb(err, res);
	      });
	    };
	  });
	}

	registerPlugin(localStorage.getItem('token'));

	module.exports = {
	  base: fermata.base,
	  register: registerPlugin
	};

	// no data to parse

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = fermata;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var api = __webpack_require__(18).base;

	function getList() {
	  return new Promise(function (resolve, reject) {
	    api()('organizations').get(function (err, res) {
	      if (err) return reject(err);

	      resolve(res);
	    });
	  });
	}

	function get(id) {
	  return new Promise(function (resolve, reject) {
	    api()('organizations')(id).get(function (err, res) {
	      if (err) return reject(err);

	      resolve(res.data);
	    });
	  });
	}

	module.exports = {
	  getList: getList,
	  get: get
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  API_BASE: 'http://localhost:3000/v1'
	};

/***/ }
/******/ ]);