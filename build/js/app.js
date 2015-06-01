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
	    userStore = __webpack_require__(5).store,
	    userActions = __webpack_require__(5).actions,
	    userApi = __webpack_require__(6),
	    Login = __webpack_require__(7),
	    Register = __webpack_require__(8),
	    Account = __webpack_require__(9),
	    Authenticated = __webpack_require__(10).Authenticated;

	var App = React.createClass({
	  displayName: 'App',

	  mixins: [Router.Navigation],
	  componentDidMount: function componentDidMount() {
	    userStore.init();
	  },
	  render: function render() {
	    return React.createElement(Router.RouteHandler, null);
	  }
	});

	var LoggedIn = React.createClass({
	  displayName: 'LoggedIn',

	  mixins: [Authenticated, Router.Navigation],
	  componentDidMount: function componentDidMount() {
	    userApi.me((function (err) {
	      if (err) {
	        userActions.logout();
	        this.transitionTo('login');
	      }
	    }).bind(this));
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
	  React.createElement(
	    Route,
	    { path: '/app', name: 'app', handler: LoggedIn },
	    React.createElement(Route, { path: 'account', name: 'account', handler: Account })
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

	module.exports = ReactRouter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';

	var React = __webpack_require__(1),
	    Dropdown = __webpack_require__(11).Dropdown,
	    Reflux = __webpack_require__(12),
	    Navigation = __webpack_require__(2).Navigation,
	    Link = __webpack_require__(2).Link,
	    userStore = __webpack_require__(5);

	var topNav = React.createClass({
	  displayName: 'topNav',

	  mixins: [Reflux.listenTo(userStore.store, 'onUserUpdate'), Navigation],
	  getInitialState: function getInitialState() {
	    return {
	      user: userStore.store.user || {}
	    };
	  },
	  logout: function logout() {
	    userStore.actions.logout();
	    setImmediate((function () {
	      this.transitionTo('login');
	    }).bind(this));
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Dropdown = __webpack_require__(11).Dropdown,
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

	var Reflux = __webpack_require__(12);

	var userActions = Reflux.createActions(['login', 'logout', 'update']);

	var userStore = Reflux.createStore({
	  init: function init() {
	    this.load();
	    this.listenToMany(userActions);
	  },
	  onLogin: function onLogin(token, user) {
	    this.token = token;
	    this.user = user;
	    this.save();
	    this.trigger(this.token, this.user);
	  },
	  onLogout: function onLogout() {
	    this.token = null;
	    this.save();
	    this.trigger(this.token, this.user);
	  },
	  onUpdate: function onUpdate(user) {
	    if (user) this.user = user;
	    this.trigger(this.token, this.user);
	  },
	  save: function save() {
	    if (this.token) localStorage.setItem('token', this.token);else localStorage.removeItem('token');
	  },
	  load: function load() {
	    this.token = localStorage.getItem('token');
	  }
	});

	module.exports = {
	  store: userStore,
	  actions: userActions
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(13),
	    userStore = __webpack_require__(5),
	    basePath = __webpack_require__(14).API_BASE;

	basePath = basePath + 'users/';
	var paths = {
	  validate: basePath + 'validate',
	  login: basePath + 'login',
	  register: basePath + 'signup',
	  me: basePath + 'me'
	};

	/**
	 * Validates current auth token
	 */
	function validate(cb) {
	  $.ajax({
	    url: paths.validate,
	    type: 'GET',
	    headers: {
	      'Authorization': 'Bearer ' + userStore.store.token
	    }
	  }).success(function (data) {
	    userStore.actions.login(data.token);
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

	function me(cb) {
	  $.ajax({
	    url: paths.me,
	    type: 'GET',
	    headers: {
	      'Authorization': 'Bearer ' + userStore.store.token
	    }
	  }).success(function (data) {
	    userStore.actions.update(data);
	  }).fail(function (err) {
	    cb(err);
	  });
	}

	function update(user) {
	  return $.ajax({
	    url: paths.me,
	    type: 'PUT',
	    headers: {
	      'Authorization': 'Bearer ' + userStore.store.token,
	      'Content-Type': 'application/json'
	    },
	    data: JSON.stringify(user)
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';

	var React = __webpack_require__(1),
	    Link = __webpack_require__(2).Link,
	    Navigation = __webpack_require__(2).Navigation,
	    userStore = __webpack_require__(5),
	    userApi = __webpack_require__(6);

	var login = React.createClass({
	  displayName: 'login',

	  mixins: [Navigation],
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
	        userApi.login(this.state.user).then((function (data) {
	          userStore.actions.login(data.token, data.user);
	          setImmediate((function () {
	            this.transitionTo('app');
	          }).bind(this));
	        }).bind(this), (function (err) {
	          if (err.status == 401) error.form = 'Invalid email or password';else error.form = 'Something went wrong, please try again';
	          this.setState({ error: error, loading: false });
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';

	var React = __webpack_require__(1),
	    Link = __webpack_require__(2).Link,
	    Navigation = __webpack_require__(2).Navigation,
	    userStore = __webpack_require__(5),
	    userApi = __webpack_require__(6);

	var register = React.createClass({
	  displayName: 'register',

	  mixins: [Navigation],
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
	    }

	    if (!user.firstName) {
	      error.firstName = true;
	    }

	    if (!user.password || user.password !== user.passwordConfirm) {
	      error.password = true;
	    }

	    this.setState({ error: error });

	    if (user.email && user.firstName && user.email && user.password && user.password === user.passwordConfirm) {
	      this.setState({ loading: true });
	      userApi.register(user).success((function (data) {
	        userStore.actions.login(data.token);
	        setImmediate((function () {
	          this.transitionTo('app');
	        }).bind(this));
	      }).bind(this)).fail((function (err) {
	        if (err.status == 400) error.form = 'That email is already in use';else error.form = 'Something went wrong, please try again';
	        this.setState({ error: error, loading: false });
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(12),
	    Link = __webpack_require__(2).Link,
	    userStore = __webpack_require__(5),
	    userApi = __webpack_require__(6);

	var Account = React.createClass({
	  displayName: 'Account',

	  mixins: [Reflux.listenTo(userStore.store, 'onUserUpdate')],
	  getInitialState: function getInitialState() {
	    return {
	      user: userStore.store.user || {},
	      error: {},
	      loading: false,
	      success: false
	    };
	  },
	  onUserUpdate: function onUserUpdate(token, user) {
	    this.setState({
	      user: user
	    });
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
	      this.setState({ loading: true });
	      userApi.update(user).success((function (updatedUser) {
	        userStore.actions.update(updatedUser);
	        this.setState({ success: true, loading: false });

	        setTimeout((function () {
	          this.setState({ success: false });
	        }).bind(this), 2000);
	      }).bind(this)).fail(function (err) {
	        console.error(err);
	      });
	    }
	  },
	  render: function render() {
	    var user = this.state.user,
	        error = this.state.error;

	    var btnClass = this.state.success ? 'ui green button' : this.state.loading ? 'ui primary button loading' : 'ui primary button',
	        btnText = this.state.success ? 'Account updated' : 'Update account';

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var userStore = __webpack_require__(5).store,
	    userApi = __webpack_require__(6);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Semantify;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Reflux;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = $;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  API_BASE: 'http://localhost:3000/v1/'
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(16).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate, __webpack_require__(15).clearImmediate))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);