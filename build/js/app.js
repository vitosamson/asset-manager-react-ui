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
	    Org = __webpack_require__(13),
	    Templates = __webpack_require__(14),
	    Categories = __webpack_require__(15),
	    Category = __webpack_require__(16),
	    NewAsset = __webpack_require__(17),
	    ShowAsset = __webpack_require__(18);

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
	    React.createElement(Route, { path: 'org/:orgId', name: 'org', handler: Org }),
	    React.createElement(Route, { path: 'assets/new', name: 'newAsset', handler: NewAsset }),
	    React.createElement(Route, { path: 'assets/:assetId', name: 'asset', handler: ShowAsset }),
	    React.createElement(Route, { path: 'templates', name: 'templates', handler: Templates }),
	    React.createElement(Route, { path: 'categories', name: 'categories', handler: Categories }),
	    React.createElement(Route, { path: 'categories/:catId', name: 'category', handler: Category })
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
	    Dropdown = __webpack_require__(19).Dropdown,
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
	    State = __webpack_require__(3).State,
	    Dropdown = __webpack_require__(19).Dropdown,
	    Link = __webpack_require__(3).Link,
	    OrgMenu = __webpack_require__(23),
	    OrgListMenu = __webpack_require__(24),
	    OrgShowMenu = __webpack_require__(25),
	    TemplateListMenu = __webpack_require__(26),
	    CategoryMenu = __webpack_require__(27),
	    CategoryListMenu = __webpack_require__(28),
	    AssetShowMenu = __webpack_require__(29);

	var sidemenu = React.createClass({
	  displayName: 'sidemenu',

	  mixins: [State],
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'four wide column' },
	      this.isActive('orgs') ? React.createElement(OrgListMenu, null) : null,
	      this.isActive('org') ? React.createElement(OrgShowMenu, null) : null,
	      this.isActive('templates') ? React.createElement(TemplateListMenu, null) : null,
	      this.isActive('categories') ? React.createElement(CategoryListMenu, null) : null,
	      this.isActive('asset') ? React.createElement(AssetShowMenu, null) : null,
	      React.createElement(
	        'div',
	        { className: 'ui vertical fluid menu' },
	        React.createElement(
	          'div',
	          { className: 'item' },
	          React.createElement(
	            'div',
	            { className: 'ui icon input fluid' },
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
	        React.createElement(OrgMenu, null),
	        React.createElement(CategoryMenu, null),
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
	              Link,
	              { to: 'templates', className: 'item' },
	              'Templates'
	            ),
	            React.createElement(
	              Link,
	              { to: 'categories', className: 'item' },
	              'Categories'
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
	    baseApi = __webpack_require__(30);

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
	    baseApi.updateToken(token);
	  },
	  onRegisterComplete: function onRegisterComplete(token, user) {
	    this.token = token;
	    this.user = user;
	    this.save();
	    baseApi.updateToken(token);
	  },
	  onMeComplete: function onMeComplete(user) {
	    this.user = user;
	    this.save();
	  },
	  onMeError: function onMeError(err) {
	    console.error(err);
	  },
	  onUpdateComplete: function onUpdateComplete(user) {
	    this.user = user;
	    this.save();
	  },
	  onLogout: function onLogout() {
	    this.token = undefined;
	    localStorage.removeItem('token');
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
	    userApi = __webpack_require__(31);

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
	    var data = res.body();

	    actions.login.complete(data.token, data.user);
	  }, function (err) {
	    actions.login.error(err);
	  });
	};

	actions.register.preEmit = function (user) {
	  userApi.register(user).then(function (res) {
	    var data = res.body();

	    actions.register.complete(data.token, data.user);
	  }, function (err) {
	    actions.register.error(err);
	  });
	};

	actions.me.preEmit = function () {
	  userApi.me().then(function (res) {
	    var user = res.body().data();

	    actions.me.complete(user);
	  }, function (err) {
	    actions.me.error(err);
	  });
	};

	actions.update.preEmit = function (user) {
	  userApi.update(user).then(function (res) {
	    var updatedUser = res.body();

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
	    userActions = __webpack_require__(7);

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
	    userActions = __webpack_require__(7);

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
	    classNames = __webpack_require__(43);

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
	    var success = user.id == this.state.user.id;

	    this.setState({
	      user: user,
	      success: success,
	      loading: false
	    });

	    if (success) {
	      setTimeout((function () {
	        this.setState({ success: false });
	      }).bind(this), 2000);
	    }
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
	    Reflux = __webpack_require__(2),
	    _ = __webpack_require__(20),
	    orgStore = __webpack_require__(32),
	    orgActions = __webpack_require__(33),
	    OrgCard = __webpack_require__(34);

	var OrgList = React.createClass({
	  displayName: 'OrgList',

	  mixins: [Reflux.listenTo(orgStore, 'onOrgsUpdated'), Reflux.listenTo(orgActions.create.start, 'createNewOrg'), Reflux.listenTo(orgActions.create.cancel, 'cancelNewOrg')],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: []
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    orgActions.list();
	  },
	  onOrgsUpdated: function onOrgsUpdated(orgs) {
	    this.setState({
	      orgs: _.extend([], orgs)
	    });
	  },
	  createNewOrg: function createNewOrg() {
	    var orgs = this.state.orgs;
	    orgs.unshift({});
	    this.setState({
	      orgs: orgs
	    });
	  },
	  cancelNewOrg: function cancelNewOrg() {
	    var orgs = this.state.orgs;
	    if (orgs.length && orgs[0].id === undefined) {
	      orgs.shift();
	      this.setState({
	        orgs: orgs
	      });
	    }
	  },
	  render: function render() {
	    var orgs = this.state.orgs;

	    return React.createElement(
	      'div',
	      { className: 'ui two doubling cards' },
	      orgs.length ? orgs.map(function (org, idx) {
	        return React.createElement(OrgCard, { org: org, key: idx, 'new': org.id === undefined });
	      }) : ''
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
	    orgStore = __webpack_require__(32),
	    orgActions = __webpack_require__(33);

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
	        assets = org.assets ? org.assets.sort(function (a, b) {
	      if (a.name > b.name) return 1;else if (a.name < b.name) return -1;else return 0;
	    }) : [];

	    function showParent() {
	      if (org.parent) {
	        return React.createElement(
	          Link,
	          { to: 'org', params: { orgId: org.parent.id } },
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
	        { key: asset.id },
	        React.createElement(
	          'td',
	          null,
	          React.createElement(
	            Link,
	            { to: 'asset', params: { assetId: asset.id } },
	            asset.name
	          )
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
	      )
	    );
	  }
	});

	module.exports = OrgShow;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    _ = __webpack_require__(20),
	    templateActions = __webpack_require__(35),
	    templateStore = __webpack_require__(39),
	    Card = __webpack_require__(40);

	var TemplateList = React.createClass({
	  displayName: 'TemplateList',

	  mixins: [Reflux.listenTo(templateStore, 'onTemplatesUpdate'), Reflux.listenTo(templateActions.create.start, 'createNewTemplate'), Reflux.listenTo(templateActions.create.cancel, 'cancelNewTemplate')],
	  getInitialState: function getInitialState() {
	    return {
	      templates: []
	    };
	  },
	  onTemplatesUpdate: function onTemplatesUpdate(templates) {
	    this.setState({
	      templates: templates
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    templateActions.list();
	  },
	  createNewTemplate: function createNewTemplate() {
	    var templates = _.extend([], this.state.templates);
	    templates.unshift({
	      fields: [{}]
	    });
	    this.setState({
	      templates: templates
	    });
	  },
	  cancelNewTemplate: function cancelNewTemplate() {
	    var templates = this.state.templates;
	    if (templates.length && templates[0].id === undefined) {
	      templates.shift();
	      this.setState({
	        templates: templates
	      });
	    }
	  },
	  render: function render() {
	    var templates = this.state.templates;

	    return React.createElement(
	      'div',
	      { className: 'ui one cards' },
	      templates.length ? templates.map(function (template, idx) {
	        return React.createElement(Card, { template: template, key: idx, 'new': template.id === undefined });
	      }) : ''
	    );
	  }
	});

	module.exports = TemplateList;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    _ = __webpack_require__(20),
	    catStore = __webpack_require__(41),
	    catActions = __webpack_require__(36),
	    Card = __webpack_require__(42);

	var List = React.createClass({
	  displayName: 'List',

	  mixins: [Reflux.listenTo(catStore, 'onCategoriesUpdated'), Reflux.listenTo(catActions.create.start, 'addNewCategory'), Reflux.listenTo(catActions.create.cancel, 'cancelNewCategory')],
	  getInitialState: function getInitialState() {
	    return {
	      categories: []
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    catActions.list();
	  },
	  onCategoriesUpdated: function onCategoriesUpdated(categories) {
	    this.setState({
	      categories: _.extend([], categories)
	    });
	  },
	  addNewCategory: function addNewCategory() {
	    var categories = this.state.categories;
	    categories.unshift({});
	    this.setState({
	      categories: categories
	    });
	  },
	  cancelNewCategory: function cancelNewCategory() {
	    var categories = this.state.categories;
	    if (categories.length && categories[0].id === undefined) {
	      categories.shift();
	      this.setState({
	        categories: categories
	      });
	    }
	  },
	  render: function render() {
	    var categories = this.state.categories;

	    return React.createElement(
	      'div',
	      { className: 'ui two doubling cards' },
	      categories.length ? categories.map(function (cat, idx) {
	        return React.createElement(Card, { category: cat, key: idx, 'new': cat.id === undefined });
	      }) : ''
	    );
	  }
	});

	module.exports = List;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Link = __webpack_require__(3).Link,
	    actions = __webpack_require__(36),
	    store = __webpack_require__(41);

	var Show = React.createClass({
	  displayName: 'Show',

	  mixins: [Reflux.listenTo(actions.get.complete, 'onCatUpdate')],
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    return {
	      category: {
	        assets: []
	      }
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.getCategory();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    this.getCategory();
	  },
	  getCategory: function getCategory() {
	    var catId = this.context.router.getCurrentParams().catId;
	    actions.get(catId);
	  },
	  onCatUpdate: function onCatUpdate(cat) {
	    this.setState({
	      category: cat
	    });
	  },
	  render: function render() {
	    var category = this.state.category,
	        assets = category.assets.sort(function (a, b) {
	      if (a.name > b.name) return 1;else if (a.name < b.name) return -1;else return 0;
	    });

	    var assetTable = assets.map(function (asset) {
	      return React.createElement(
	        'tr',
	        null,
	        React.createElement(
	          'td',
	          null,
	          React.createElement(
	            Link,
	            { to: 'asset', params: { assetId: asset.id } },
	            asset.name
	          )
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
	          category.name,
	          React.createElement(
	            'div',
	            { className: 'sub header' },
	            category.description
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
	      )
	    );
	  }
	});

	module.exports = Show;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Navigation = __webpack_require__(3).Navigation,
	    _ = __webpack_require__(20),
	    $ = __webpack_require__(21),
	    classNames = __webpack_require__(43),
	    Dropdown = __webpack_require__(19).Dropdown,
	    Checkbox = __webpack_require__(19).Checkbox,
	    assetActions = __webpack_require__(37),
	    orgActions = __webpack_require__(33),
	    templateActions = __webpack_require__(35),
	    categoryActions = __webpack_require__(36);

	var NewAsset = React.createClass({
	  displayName: 'NewAsset',

	  mixins: [Reflux.listenTo(orgActions.list.complete, 'onOrgsList'), Reflux.listenTo(templateActions.list.complete, 'onTemplatesList'), Reflux.listenTo(categoryActions.list.complete, 'onCategoriesList'), Reflux.listenTo(assetActions.create.complete, 'onAssetCreated'), Navigation],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: [],
	      templates: [],
	      categories: [],
	      asset: {
	        fields: {},
	        organization: {}
	      },
	      error: {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    this.getOrgs();
	    this.getTemplates();
	    this.getCategories();
	  },
	  componentDidMount: function componentDidMount() {
	    this.getOrgs();
	    this.getTemplates();
	    this.getCategories();
	  },
	  getOrgs: function getOrgs() {
	    orgActions.list();
	  },
	  getTemplates: function getTemplates() {
	    templateActions.list();
	  },
	  getCategories: function getCategories() {
	    categoryActions.list();
	  },
	  onOrgsList: function onOrgsList(orgs) {
	    this.setState({
	      orgs: orgs
	    });

	    if (this.props.query.org) this.onOrgSelect(this.props.query.org);
	  },
	  onTemplatesList: function onTemplatesList(templates) {
	    this.setState({
	      templates: templates
	    });
	  },
	  onCategoriesList: function onCategoriesList(categories) {
	    this.setState({
	      categories: categories
	    });
	  },
	  onOrgSelect: function onOrgSelect(val) {
	    var asset = this.state.asset,
	        org = _.find(this.state.orgs, function (o) {
	      return o.id == val;
	    });

	    if (org) {
	      asset.organization = org;
	      asset.organizationId = org.id;
	      this.setState({
	        asset: asset
	      });
	    }
	  },
	  onCategorySelect: function onCategorySelect(catId) {
	    var asset = this.state.asset;
	    asset.categoryId = catId;

	    this.setState({
	      asset: asset
	    });
	  },
	  onTemplateSelect: function onTemplateSelect(val) {
	    var asset = this.state.asset,
	        template = _.find(this.state.templates, function (tmpl) {
	      return tmpl.id === val;
	    });

	    asset.fields = {};
	    template.fields.map(function (field) {
	      asset.fields[field.name] = field;
	    });

	    this.setState({
	      asset: asset
	    });
	  },
	  onMetaFieldChange: function onMetaFieldChange(e) {
	    var target = e.target,
	        name = target.getAttribute('name'),
	        asset = this.state.asset,
	        error = this.state.error;

	    asset[name] = target.value;
	    error[name] = false;
	    this.setState({
	      asset: asset,
	      error: error
	    });
	  },
	  onDataFieldChange: function onDataFieldChange(name, e) {
	    var asset = this.state.asset,
	        val;

	    if ('string' === typeof e) // dropdown
	      val = e;else if ('object' === typeof e) // text input
	      val = $(e.target).val();else // checkbox
	      val = !asset.fields[name].value;

	    asset.fields[name].value = val;
	    this.setState({
	      asset: asset
	    });
	  },
	  addField: function addField(field) {
	    var asset = this.state.asset;

	    asset.fields[field.name] = field;

	    this.setState({
	      asset: asset
	    });
	  },
	  saveAsset: function saveAsset(e) {
	    e.preventDefault();

	    var error = this.state.error;

	    if (!this.state.asset.organizationId) {
	      error.org = true;
	      this.setState({
	        error: error
	      });
	      return;
	    }

	    if (!this.state.asset.name) {
	      error.name = true;
	      this.setState({
	        error: error
	      });
	      return;
	    }

	    assetActions.create(this.state.asset);
	  },
	  onAssetCreated: function onAssetCreated(asset) {
	    this.transitionTo('asset', { assetId: asset.id });
	  },
	  renderField: function renderField(field, idx) {
	    var renderedField;

	    switch (field.fieldType) {
	      case 'text':
	        renderedField = React.createElement('input', { type: 'text', className: 'ui input', name: field.name, onChange: this.onDataFieldChange.bind(this, field.name) });
	        break;
	      case 'select':
	        if (field.multiple) {
	          renderedField = React.createElement(
	            'select',
	            { name: field.name, multiple: true, onChange: this.onDataFieldChange.bind(this, field.name) },
	            field.choices ? field.choices.map(function (choice, idx) {
	              return React.createElement(
	                'option',
	                { value: choice, key: idx },
	                choice
	              );
	            }) : null
	          );
	        } else {
	          renderedField = React.createElement(
	            Dropdown,
	            { className: 'selection', init: { onChange: this.onDataFieldChange.bind(this, field.name) } },
	            React.createElement('div', { className: 'default text' }),
	            React.createElement('i', { className: 'dropdown icon' }),
	            React.createElement(
	              'div',
	              { className: 'menu' },
	              field.choices ? field.choices.map(function (choice, idx) {
	                return React.createElement(
	                  'div',
	                  { className: 'item', 'data-value': choice, key: idx },
	                  choice
	                );
	              }) : null
	            )
	          );
	        }
	        break;
	      case 'checkbox':
	        renderedField = React.createElement(
	          Checkbox,
	          { init: { onChange: this.onDataFieldChange.bind(this, field.name) } },
	          React.createElement('input', { type: 'checkbox', name: field.name }),
	          React.createElement(
	            'label',
	            null,
	            field.name
	          )
	        );
	        break;
	    }

	    return React.createElement(
	      'div',
	      { className: 'field', key: idx },
	      React.createElement(
	        'label',
	        null,
	        field.name
	      ),
	      renderedField
	    );
	  },
	  render: function render() {
	    var fields = this.state.asset.fields;

	    var orgFieldClass = classNames({
	      field: true,
	      error: this.state.error.org
	    });

	    var nameFieldClass = classNames({
	      field: true,
	      error: this.state.error.name
	    });

	    return React.createElement(
	      'form',
	      { className: 'ui form', onSubmit: this.saveAsset },
	      React.createElement(
	        'h2',
	        null,
	        'New asset'
	      ),
	      React.createElement(
	        'div',
	        { className: orgFieldClass },
	        React.createElement(
	          'label',
	          null,
	          'Organization'
	        ),
	        React.createElement(
	          Dropdown,
	          { className: 'selection', init: { onChange: this.onOrgSelect } },
	          React.createElement(
	            'div',
	            { className: 'default text' },
	            this.state.asset.organization.name
	          ),
	          React.createElement('i', { className: 'dropdown icon' }),
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            this.state.orgs.map(function (org, idx) {
	              return React.createElement(
	                'div',
	                { className: 'item', 'data-value': org.id, key: idx },
	                org.name
	              );
	            })
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: nameFieldClass },
	        React.createElement(
	          'label',
	          null,
	          'Name'
	        ),
	        React.createElement('input', { className: 'ui input', name: 'name', onChange: this.onMetaFieldChange })
	      ),
	      React.createElement(
	        'div',
	        { className: 'field' },
	        React.createElement(
	          'label',
	          null,
	          'Description'
	        ),
	        React.createElement('input', { className: 'ui input', name: 'description', onChange: this.onMetaFieldChange })
	      ),
	      React.createElement(
	        'div',
	        { className: 'field' },
	        React.createElement(
	          'label',
	          null,
	          'Category'
	        ),
	        React.createElement(
	          Dropdown,
	          { className: 'selection', init: { onChange: this.onCategorySelect } },
	          React.createElement('div', { className: 'default text' }),
	          React.createElement('i', { className: 'dropdown icon' }),
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            this.state.categories.map(function (cat, idx) {
	              return React.createElement(
	                'div',
	                { className: 'item', 'data-value': cat.id, key: idx },
	                cat.name
	              );
	            })
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'field' },
	        React.createElement(
	          'label',
	          null,
	          'Template'
	        ),
	        React.createElement(
	          Dropdown,
	          { className: 'selection', init: { onChange: this.onTemplateSelect } },
	          React.createElement('div', { className: 'default text' }),
	          React.createElement('i', { className: 'dropdown icon' }),
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            this.state.templates.map(function (tmpl, idx) {
	              return React.createElement(
	                'div',
	                { className: 'item', 'data-value': tmpl.id, key: idx },
	                tmpl.name
	              );
	            })
	          )
	        )
	      ),
	      React.createElement(
	        'h5',
	        { className: 'ui top attached header', style: { marginTop: 0 } },
	        'Fields'
	      ),
	      React.createElement(
	        'div',
	        { className: 'ui form attached segment', style: { marginBottom: '1em' } },
	        fields ? _.map(fields, this.renderField) : null,
	        React.createElement(NewField, { newFieldName: this.newFieldName, addField: this.addField })
	      ),
	      React.createElement(
	        'button',
	        { className: 'ui button primary', type: 'submit' },
	        'Save asset'
	      ),
	      React.createElement(
	        'button',
	        { className: 'ui button basic', type: 'submit' },
	        'Cancel'
	      )
	    );
	  }
	});

	var NewField = React.createClass({
	  displayName: 'NewField',

	  getInitialState: function getInitialState() {
	    return {
	      field: {
	        name: ''
	      },
	      error: {
	        name: false
	      }
	    };
	  },
	  setFieldName: function setFieldName(e) {
	    var field = this.state.field;
	    field.name = e.target.value;
	    this.setState({
	      field: field
	    });
	  },
	  setFieldType: function setFieldType(text, type) {
	    if (this.state.field.name === '') {
	      this.setState({
	        error: {
	          name: true
	        }
	      });
	      return;
	    }

	    var field = this.state.field,
	        el = this.getDOMNode();

	    field.fieldType = type;

	    this.props.addField(field);
	    this.setState({
	      field: {
	        name: ''
	      }
	    });
	    $(el).dropdown('hide');
	  },
	  dontSubmitOnEnter: function dontSubmitOnEnter(e) {
	    if (e.keyCode == 13) e.preventDefault();
	  },
	  render: function render() {
	    var newFieldNameClass = classNames({
	      ui: true,
	      fluid: true,
	      small: true,
	      input: true,
	      error: this.state.error.name
	    });

	    return React.createElement(
	      Dropdown,
	      { className: 'floating labeled icon button basic tiny', init: { action: this.setFieldType } },
	      React.createElement('i', { className: 'plus icon' }),
	      React.createElement(
	        'span',
	        { className: 'text' },
	        'Add additional field'
	      ),
	      React.createElement(
	        'div',
	        { className: 'menu' },
	        React.createElement(
	          'div',
	          { className: newFieldNameClass, style: { width: 'auto' } },
	          React.createElement('input', { type: 'text', placeholder: 'Field name', onChange: this.setFieldName, value: this.state.field.name, onKeyDown: this.dontSubmitOnEnter })
	        ),
	        React.createElement('div', { className: 'divider' }),
	        React.createElement(
	          'div',
	          { className: 'header' },
	          'Field type'
	        ),
	        React.createElement(
	          'div',
	          { className: 'item', 'data-value': 'text' },
	          'Text'
	        ),
	        React.createElement(
	          'div',
	          { className: 'item', 'data-value': 'checkbox' },
	          'Checkbox'
	        )
	      )
	    );
	  }
	});

	module.exports = NewAsset;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    _ = __webpack_require__(20),
	    moment = __webpack_require__(22),
	    assetActions = __webpack_require__(37),
	    Files = __webpack_require__(38);

	var Asset = React.createClass({
	  displayName: 'Asset',

	  mixins: [Reflux.listenTo(assetActions.get.complete, 'onGetAsset'), Reflux.listenTo(assetActions.files.upload.complete, 'onFileUpload'), Reflux.listenTo(assetActions.files.del.complete, 'onFileDelete')],
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    return {
	      asset: {
	        fields: {},
	        organization: {},
	        category: {},
	        creator: {},
	        files: []
	      },
	      showNewFileForm: false
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.getAsset();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    this.getAsset();
	  },
	  getAsset: function getAsset() {
	    var assetId = this.context.router.getCurrentParams().assetId;

	    assetActions.get(assetId);
	  },
	  onGetAsset: function onGetAsset(asset) {
	    this.setState({
	      asset: asset
	    });
	    assetActions.setActiveAsset(asset);
	  },
	  toggleNewFileForm: function toggleNewFileForm() {
	    this.setState({
	      showNewFileForm: !this.state.showNewFileForm
	    });
	  },
	  onFileUpload: function onFileUpload(file) {
	    var asset = this.state.asset;
	    asset.files.push(file);

	    this.setState({
	      asset: asset,
	      showNewFileForm: false
	    });
	  },
	  onFileDelete: function onFileDelete(file) {
	    var asset = this.state.asset,
	        idx = asset.files.indexOf(file);

	    asset.files.splice(idx, 1);
	    this.setState({
	      asset: asset
	    });
	  },
	  render: function render() {
	    var asset = this.state.asset;

	    function formatDate(date) {
	      if (!date) return;

	      var at = moment(date),
	          cutOff = moment().subtract(1, 'day');

	      if (cutOff.isBefore(at)) return at.fromNow();else return at.format('M/D/YY H:mm');
	    }

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        { className: 'ui header' },
	        React.createElement(
	          'div',
	          { className: 'content' },
	          asset.name
	        ),
	        React.createElement(
	          'div',
	          { className: 'sub header' },
	          asset.description
	        )
	      ),
	      React.createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Info'
	      ),
	      React.createElement(
	        'div',
	        { className: 'ui attached segment' },
	        React.createElement(
	          'table',
	          { className: 'ui table' },
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              'Organization'
	            ),
	            React.createElement(
	              'td',
	              { className: 'right aligned' },
	              asset.organization.name
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              'Category'
	            ),
	            React.createElement(
	              'td',
	              { className: 'right aligned' },
	              asset.category.name
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              'Created'
	            ),
	            React.createElement(
	              'td',
	              { className: 'right aligned' },
	              formatDate(asset.createdAt),
	              ' by ',
	              asset.creator.firstName,
	              ' ',
	              asset.creator.lastName
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              'Updated'
	            ),
	            React.createElement(
	              'td',
	              { className: 'right aligned' },
	              formatDate(asset.updatedAt)
	            )
	          )
	        )
	      ),
	      React.createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Data'
	      ),
	      React.createElement(
	        'div',
	        { className: 'ui attached segment' },
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
	                null,
	                'Field'
	              ),
	              React.createElement(
	                'th',
	                { className: 'right aligned' },
	                'Value'
	              )
	            )
	          ),
	          React.createElement(
	            'tbody',
	            null,
	            _.map(asset.fields, function (field, idx) {
	              return React.createElement(DataField, { field: field, key: idx });
	            })
	          )
	        )
	      ),
	      React.createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Notes',
	        React.createElement(
	          'button',
	          { className: 'mini ui basic button', style: { float: 'right' } },
	          'New note'
	        )
	      ),
	      React.createElement('div', { className: 'ui attached segment' }),
	      React.createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Files',
	        React.createElement(
	          'button',
	          { className: 'mini ui basic button', style: { float: 'right' }, onClick: this.toggleNewFileForm },
	          'Upload file'
	        )
	      ),
	      this.state.showNewFileForm ? React.createElement(Files.NewFileForm, { asset: this.state.asset }) : null,
	      React.createElement(Files.FileList, { files: asset.files })
	    );
	  }
	});

	var DataField = React.createClass({
	  displayName: 'DataField',

	  getInitialState: function getInitialState() {
	    return {
	      field: this.props.field
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    this.setState({
	      field: props.field
	    });
	  },
	  render: function render() {
	    var value,
	        field = this.state.field;

	    if (field.value === undefined) {
	      return React.createElement(
	        'tr',
	        null,
	        React.createElement(
	          'td',
	          null,
	          field.name
	        ),
	        React.createElement('td', null)
	      );
	    }

	    switch (field.fieldType) {
	      case 'text':
	        value = field.value;
	        break;
	      case 'select':
	        if (field.multiple) value = field.value.join(', ');else value = field.value;
	        break;
	      case 'checkbox':
	        if (field.value === true) value = React.createElement('i', { className: 'checkmark icon' });else value = React.createElement('i', { className: 'minus icon' });
	        break;
	    }

	    return React.createElement(
	      'tr',
	      null,
	      React.createElement(
	        'td',
	        null,
	        field.name
	      ),
	      React.createElement(
	        'td',
	        { className: 'right aligned' },
	        value
	      )
	    );
	  }
	});

	module.exports = Asset;
	/**
	 ** NOTES
	 **/ /**
	      ** FILES
	      **/

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Semantify;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = _;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = $;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = moment;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Link = __webpack_require__(3).Link,
	    actions = __webpack_require__(33),
	    store = __webpack_require__(32);

	var Sidemenu = React.createClass({
	  displayName: 'Sidemenu',

	  mixins: [Reflux.listenTo(store, 'onOrgsUpdate')],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: []
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    actions.list();
	  },
	  onOrgsUpdate: function onOrgsUpdate(orgs) {
	    this.setState({
	      orgs: orgs
	    });
	  },
	  render: function render() {
	    return React.createElement(
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
	            { to: 'org', key: org.id, params: { orgId: org.id }, className: 'item' },
	            org.name
	          );
	        })
	      )
	    );
	  }
	});

	module.exports = Sidemenu;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    orgActions = __webpack_require__(33);

	var ListMenu = React.createClass({
	  displayName: 'ListMenu',

	  mixins: [Reflux.listenTo(orgActions.create.cancel, 'enableNewBtn'), Reflux.listenTo(orgActions.create.complete, 'enableNewBtn')],
	  getInitialState: function getInitialState() {
	    return {
	      disableNewBtn: false
	    };
	  },
	  createNewOrg: function createNewOrg() {
	    if (this.state.disableNewBtn) return;

	    orgActions.create.start();
	    this.setState({
	      disableNewBtn: true
	    });
	  },
	  enableNewBtn: function enableNewBtn() {
	    this.setState({
	      disableNewBtn: false
	    });
	  },
	  render: function render() {
	    var newBtnClass = this.state.disableNewBtn ? 'item disabled' : 'item';

	    return React.createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      React.createElement(
	        'a',
	        { onClick: this.createNewOrg, className: newBtnClass },
	        React.createElement('i', { className: 'icon plus square' }),
	        'Add an organization'
	      )
	    );
	  }
	});

	module.exports = ListMenu;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Link = __webpack_require__(3).Link;

	var ShowMenu = React.createClass({
	  displayName: 'ShowMenu',

	  contextTypes: {
	    router: React.PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    return {
	      orgId: this.context.router.getCurrentParams().orgId
	    };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      React.createElement(
	        Link,
	        { to: 'newAsset', query: { org: this.state.orgId }, className: 'item' },
	        React.createElement('i', { className: 'icon plus square' }),
	        'Add an asset'
	      )
	    );
	  }
	});

	module.exports = ShowMenu;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    templateActions = __webpack_require__(35);

	var ListMenu = React.createClass({
	  displayName: 'ListMenu',

	  mixins: [Reflux.listenTo(templateActions.create.cancel, 'enableNewBtn'), Reflux.listenTo(templateActions.create.complete, 'enableNewBtn')],
	  getInitialState: function getInitialState() {
	    return {
	      disableNewBtn: false
	    };
	  },
	  createNewTemplate: function createNewTemplate() {
	    if (this.state.disableNewBtn) return;

	    templateActions.create.start();
	    this.setState({
	      disableNewBtn: true
	    });
	  },
	  enableNewBtn: function enableNewBtn() {
	    this.setState({
	      disableNewBtn: false
	    });
	  },
	  render: function render() {
	    var newBtnClass = this.state.disableNewBtn ? 'item disabled' : 'item';

	    return React.createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      React.createElement(
	        'a',
	        { onClick: this.createNewTemplate, className: newBtnClass },
	        React.createElement('i', { className: 'icon plus square' }),
	        'Add a template'
	      )
	    );
	  }
	});

	module.exports = ListMenu;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Link = __webpack_require__(3).Link,
	    actions = __webpack_require__(36),
	    store = __webpack_require__(41);

	var Sidemenu = React.createClass({
	  displayName: 'Sidemenu',

	  mixins: [Reflux.listenTo(store, 'onCategoriesUpdated')],
	  getInitialState: function getInitialState() {
	    return {
	      categories: []
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    actions.list();
	  },
	  onCategoriesUpdated: function onCategoriesUpdated(categories) {
	    this.setState({
	      categories: categories
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'item' },
	      React.createElement('i', { className: 'columns icon' }),
	      'Categories',
	      React.createElement(
	        'div',
	        { className: 'menu' },
	        this.state.categories.map(function (cat) {
	          return React.createElement(
	            Link,
	            { to: 'category', key: cat.id, params: { catId: cat.id }, className: 'item' },
	            cat.name
	          );
	        })
	      )
	    );
	  }
	});

	module.exports = Sidemenu;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    catActions = __webpack_require__(36);

	var Menu = React.createClass({
	  displayName: 'Menu',

	  mixins: [Reflux.listenTo(catActions.create.cancel, 'enableNewBtn'), Reflux.listenTo(catActions.create.complete, 'enableNewBtn')],
	  getInitialState: function getInitialState() {
	    return {
	      disableNewBtn: false
	    };
	  },
	  createNewCategory: function createNewCategory() {
	    if (this.state.disableNewBtn) return;

	    catActions.create.start();
	    this.setState({
	      disableNewBtn: true
	    });
	  },
	  enableNewBtn: function enableNewBtn() {
	    this.setState({
	      disableNewBtn: false
	    });
	  },
	  render: function render() {
	    var btnClass = this.state.disableNewBtn ? 'item disabled' : 'item';

	    return React.createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      React.createElement(
	        'a',
	        { onClick: this.createNewCategory, className: btnClass },
	        React.createElement('i', { className: 'icon plus square' }),
	        'Add a category'
	      )
	    );
	  }
	});

	module.exports = Menu;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Checkbox = __webpack_require__(19).Checkbox,
	    $ = __webpack_require__(21),
	    assetActions = __webpack_require__(37);

	var Menu = React.createClass({
	  displayName: 'Menu',

	  mixins: [Reflux.listenTo(assetActions.setActiveAsset, 'onAssetSelect'), Reflux.listenTo(assetActions.update.complete, 'onAssetSelect')],
	  getInitialState: function getInitialState() {
	    return {
	      asset: {}
	    };
	  },
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	  onAssetSelect: function onAssetSelect(asset) {
	    this.setState({
	      asset: asset
	    });
	  },
	  onActiveChange: function onActiveChange(val) {
	    var asset = this.state.asset;
	    asset.active = val;
	    assetActions.update(asset);
	  },
	  onFlaggedChange: function onFlaggedChange(val) {
	    var asset = this.state.asset;
	    asset.flagged = val;
	    assetActions.update(asset);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      React.createElement(
	        'div',
	        { className: 'item' },
	        React.createElement(ActiveToggle, { active: this.state.asset.active, onChange: this.onActiveChange })
	      ),
	      React.createElement(
	        'div',
	        { className: 'item' },
	        React.createElement(FlaggedToggle, { flagged: this.state.asset.flagged, onChange: this.onFlaggedChange })
	      )
	    );
	  }
	});

	var ActiveToggle = React.createClass({
	  displayName: 'ActiveToggle',

	  getInitialState: function getInitialState() {
	    return {
	      active: this.props.active
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    this.setState({
	      active: props.active
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    var el = this.getDOMNode();
	    $(el).checkbox({
	      onChecked: this.onChecked,
	      onUnchecked: this.onUnchecked,
	      fireOnInit: false
	    });
	  },
	  onChecked: function onChecked() {
	    this.props.onChange(true);
	  },
	  onUnchecked: function onUnchecked() {
	    this.props.onChange(false);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'ui toggle checkbox' },
	      React.createElement('input', { type: 'checkbox', name: 'active', checked: this.state.active }),
	      React.createElement(
	        'label',
	        null,
	        'Active'
	      )
	    );
	  }
	});

	var FlaggedToggle = React.createClass({
	  displayName: 'FlaggedToggle',

	  getInitialState: function getInitialState() {
	    return {
	      flagged: this.props.flagged
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    this.setState({
	      flagged: props.flagged
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    var el = this.getDOMNode();
	    $(el).checkbox({
	      onChecked: this.onChecked,
	      onUnchecked: this.onUnchecked,
	      fireOnInit: false
	    });
	  },
	  onChecked: function onChecked() {
	    this.props.onChange(true);
	  },
	  onUnchecked: function onUnchecked() {
	    this.props.onChange(false);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'ui toggle checkbox' },
	      React.createElement('input', { type: 'checkbox', name: 'flagged', checked: this.state.flagged }),
	      React.createElement(
	        'label',
	        null,
	        'Flagged'
	      )
	    );
	  }
	});

	module.exports = Menu;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var restful = __webpack_require__(44),
	    config = __webpack_require__(45),
	    token = window.localStorage.getItem('token');

	var baseApi = restful(config.API_HOST).header('Authorization', 'Bearer ' + token).prefixUrl(config.API_PREFIX).port(config.API_PORT);

	baseApi.updateToken = function (token) {
	            baseApi.header('Authorization', 'Bearer ' + token);
	};

	module.exports = baseApi;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var api = __webpack_require__(30).base;

	var restful = __webpack_require__(44),
	    config = __webpack_require__(45),
	    baseApi = __webpack_require__(30);

	var userApi = {
	  base: baseApi.all('users'),
	  validate: function validate() {
	    return userApi.base.get('validate');
	  },
	  me: function me() {
	    return userApi.base.get('me');
	  },
	  update: function update(data) {
	    return userApi.base.put('me', data);
	  },
	  login: function login(user) {
	    return baseApi.allUrl('login', userApi.base.url() + '/login').post(user);
	  },
	  register: function register(user) {
	    return baseApi.allUrl('signup', userApi.base.url() + '/signup').post(user);
	  }
	};

	module.exports = userApi;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    actions = __webpack_require__(33);

	var orgStore = Reflux.createStore({
	  listenables: actions,
	  onListComplete: function onListComplete(orgs) {
	    this.orgs = orgs;
	    this.trigger(orgs);
	  },
	  onCreateComplete: function onCreateComplete(org) {
	    this.orgs.unshift(org);
	    this.trigger(this.orgs);
	  },
	  onUpdateComplete: function onUpdateComplete(org) {
	    this.orgs = this.orgs.map(function (o) {
	      if (o.id === org.id) return org;

	      return o;
	    });
	    this.trigger(this.orgs);
	  },
	  onDelComplete: function onDelComplete(org) {
	    this.orgs = this.orgs.filter(function (o) {
	      return o.id !== org.id;
	    });
	    this.trigger(this.orgs);
	  }
	});

	module.exports = orgStore;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    orgApi = __webpack_require__(46);

	var actions = Reflux.createActions({
	  list: {
	    children: ['complete', 'error']
	  },
	  get: {
	    children: ['complete', 'error']
	  },
	  create: {
	    children: ['start', 'cancel', 'complete', 'error']
	  },
	  update: {
	    children: ['complete', 'error']
	  },
	  del: {
	    children: ['complete', 'error']
	  }
	});

	actions.list.preEmit = function () {
	  orgApi.all().then(function (res) {
	    var orgs = res.body().map(function (r) {
	      return r.data();
	    });

	    actions.list.complete(orgs);
	  }, function (err) {
	    actions.list.error(err);
	  });
	};

	actions.get.preEmit = function (orgId) {
	  orgApi.get(orgId).then(function (res) {
	    var org = res.body().data();

	    actions.get.complete(org);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};

	actions.create.preEmit = function (org) {
	  if (!org) return;

	  orgApi.create(org).then(function (res) {
	    var newOrg = res.body();

	    actions.create.complete(newOrg);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};

	actions.update.preEmit = function (org) {
	  orgApi.update(org).then(function (res) {
	    var updatedOrg = res.body();

	    actions.update.complete(updatedOrg);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};

	actions.del.preEmit = function (org) {
	  orgApi.del(org).then(function () {
	    actions.del.complete(org);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};

	module.exports = actions;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Link = __webpack_require__(3).Link,
	    Dropdown = __webpack_require__(19).Dropdown,
	    orgActions = __webpack_require__(33),
	    orgStore = __webpack_require__(32),
	    classNames = __webpack_require__(43),
	    _ = __webpack_require__(20);

	var OrgCard = React.createClass({
	  displayName: 'OrgCard',

	  mixins: [Reflux.listenTo(orgStore, 'onOrgsUpdate')],
	  getInitialState: function getInitialState() {
	    return {
	      org: this.props.org,
	      orgs: orgStore.orgs || [],
	      editing: this.props['new'],
	      editTmp: _.extend({}, this.props.org),
	      error: {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      org: nextProps.org,
	      editing: nextProps['new'],
	      editTmp: _.extend({}, nextProps.org),
	      error: {}
	    });
	  },
	  onOrgsUpdate: function onOrgsUpdate(orgs) {
	    this.setState({
	      orgs: orgs
	    });
	  },
	  onChange: function onChange(e) {
	    var target = e.target,
	        name = target.getAttribute('name'),
	        editTmp = this.state.editTmp,
	        error = this.state.error;

	    editTmp[name] = target.value;
	    error[name] = false;
	    this.setState({
	      editTmp: editTmp,
	      error: error
	    });
	  },
	  setParent: function setParent(parent) {
	    var editTmp = this.state.editTmp;
	    editTmp.parentId = parent;
	    this.setState({
	      editTmp: editTmp
	    });
	  },
	  editOrg: function editOrg() {
	    this.setState({
	      editing: true,
	      editTmp: _.extend({}, this.state.org),
	      error: {}
	    });
	  },
	  cancelEdit: function cancelEdit() {
	    this.setState({
	      editing: false
	    });
	  },
	  deleteOrg: function deleteOrg() {
	    if (!window.confirm('Are you sure you want to delete this organization and all its assets?')) return;

	    orgActions.del(this.state.org);
	  },
	  saveOrg: function saveOrg(e) {
	    e.preventDefault();

	    var editTmp = this.state.editTmp,
	        error = this.state.error;

	    if (!editTmp.name) {
	      error.name = true;
	      this.setState({
	        error: error
	      });
	      return;
	    }

	    if (!editTmp.id) orgActions.create(this.state.editTmp);else orgActions.update(this.state.editTmp);
	  },
	  cancelNewOrg: function cancelNewOrg(e) {
	    orgActions.create.cancel();
	  },
	  render: function render() {
	    if (!this.state.editing) return this.renderNotEditing();else return this.renderEditing();
	  },
	  renderNotEditing: function renderNotEditing() {
	    var org = this.state.org;

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
	      { className: 'ui card' },
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
	        React.createElement(
	          Dropdown,
	          { className: 'inline right icon', init: true, style: { marginRight: '8px' } },
	          React.createElement('i', { className: 'setting icon' }),
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            React.createElement(
	              'div',
	              { className: 'item', onClick: this.editOrg },
	              React.createElement('i', { className: 'edit icon' }),
	              'Edit'
	            ),
	            React.createElement(
	              'div',
	              { className: 'item', onClick: this.deleteOrg },
	              React.createElement('i', { className: 'trash icon' }),
	              'Delete'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'right floated' },
	          React.createElement('i', { className: 'icon server' }),
	          org.assets ? org.assets.length : '0',
	          ' Assets',
	          React.createElement(
	            'span',
	            { style: { margin: '0 4px' } },
	            '|'
	          ),
	          React.createElement(
	            Link,
	            { to: 'org', params: { orgId: org.id }, className: '' },
	            'Go to asset list'
	          )
	        )
	      )
	    );
	  },
	  renderEditing: function renderEditing() {
	    var editTmp = this.state.editTmp,
	        orgs = this.state.orgs,
	        error = this.state.error;

	    // don't allow an org to be its own parent
	    if (editTmp.id !== undefined) {
	      orgs = orgs.filter(function (o) {
	        return o.id !== editTmp.id;
	      });
	    }

	    var nameClass = classNames({
	      field: true,
	      ui: true,
	      input: true,
	      small: true,
	      error: error.name
	    });

	    return React.createElement(
	      'div',
	      { className: 'ui card' },
	      React.createElement(
	        'div',
	        { className: 'content' },
	        React.createElement(
	          'form',
	          { onSubmit: this.saveOrg, className: 'ui form', noValidate: true },
	          React.createElement(
	            'div',
	            { className: nameClass },
	            React.createElement('input', { type: 'text', placeholder: 'Name', value: editTmp.name, required: true, onChange: this.onChange, name: 'name' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'field ui small input' },
	            React.createElement('input', { type: 'text', placeholder: 'Description', value: editTmp.description, onChange: this.onChange, name: 'description' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'field ui small input' },
	            React.createElement(
	              Dropdown,
	              { init: { onChange: this.setParent }, name: 'parent', className: 'search selection fluid' },
	              React.createElement(
	                'div',
	                { className: 'default text' },
	                'Parent organization'
	              ),
	              React.createElement('i', { className: 'dropdown icon' }),
	              React.createElement(
	                'div',
	                { className: 'menu' },
	                orgs.map(function (org, idx) {
	                  return React.createElement(
	                    'div',
	                    { className: 'item', 'data-value': org.id, key: idx },
	                    org.name
	                  );
	                })
	              )
	            )
	          ),
	          React.createElement(
	            'button',
	            { className: 'ui button primary small', type: 'submit' },
	            'Save organization'
	          ),
	          React.createElement(
	            'button',
	            { className: 'ui button basic small', type: 'button', onClick: editTmp.id ? this.cancelEdit : this.cancelNewOrg },
	            'Cancel'
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = OrgCard;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    templateApi = __webpack_require__(47);

	var actions = Reflux.createActions({
	  list: {
	    children: ['complete', 'error']
	  },
	  get: {
	    children: ['complete', 'error']
	  },
	  create: {
	    children: ['start', 'cancel', 'complete', 'error']
	  },
	  update: {
	    children: ['complete', 'error']
	  },
	  del: {
	    children: ['complete', 'error']
	  }
	});

	actions.list.preEmit = function () {
	  templateApi.all().then(function (res) {
	    var templates = res.body().map(function (r) {
	      return r.data();
	    });

	    actions.list.complete(templates);
	  }, function (err) {
	    actions.list.error(err);
	  });
	};

	actions.get.preEmit = function (templateId) {
	  templateApi.get(templateId).then(function (res) {
	    var template = res.body().data();

	    actions.get.complete(template);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};

	actions.create.preEmit = function (template) {
	  if (!template) return;

	  templateApi.create(template).then(function (res) {
	    var newTemplate = res.body();

	    actions.create.complete(newTemplate);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};

	actions.update.preEmit = function (template) {
	  templateApi.update(template).then(function (res) {
	    var updatedTemplate = res.body();

	    actions.update.complete(updatedTemplate);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};

	actions.del.preEmit = function (template) {
	  templateApi.del(template).then(function () {
	    actions.del.complete(template);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};

	module.exports = actions;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    categoriesApi = __webpack_require__(48);

	var actions = Reflux.createActions({
	  list: {
	    children: ['complete', 'error']
	  },
	  create: {
	    children: ['start', 'complete', 'cancel', 'error']
	  },
	  get: {
	    children: ['complete', 'error']
	  },
	  update: {
	    children: ['complete', 'error']
	  },
	  del: {
	    children: ['complete', 'error']
	  }
	});

	actions.list.preEmit = function () {
	  categoriesApi.all().then(function (res) {
	    var categories = res.body().map(function (r) {
	      return r.data();
	    });

	    actions.list.complete(categories);
	  }, function (err) {
	    actions.list.error(err);
	  });
	};

	actions.create.preEmit = function (category) {
	  if (!category) return;

	  categoriesApi.create(category).then(function (res) {
	    var newCategory = res.body();

	    actions.create.complete(newCategory);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};

	actions.get.preEmit = function (id) {
	  categoriesApi.get(id).then(function (res) {
	    var category = res.body().data();

	    actions.get.complete(category);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};

	actions.update.preEmit = function (category) {
	  categoriesApi.update(category).then(function (res) {
	    var updatedCategory = res.body();

	    actions.update.complete(updatedCategory);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};

	actions.del.preEmit = function (category) {
	  categoriesApi.del(category).then(function () {
	    actions.del.complete(category);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};

	module.exports = actions;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    api = __webpack_require__(49),
	    $ = __webpack_require__(21);

	var actions = Reflux.createActions({
	  get: {
	    children: ['complete', 'error']
	  },
	  create: {
	    children: ['complete', 'error']
	  },
	  update: {
	    children: ['complete', 'error']
	  },
	  del: {
	    children: ['complete', 'error']
	  },
	  files: {
	    children: {
	      upload: {
	        children: ['complete', 'error']
	      }
	    }
	  },
	  setActiveAsset: {}
	});

	actions.get.preEmit = function (id) {
	  api.get(id).then(function (res) {
	    var asset = res.body().data();

	    actions.get.complete(asset);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};

	actions.create.preEmit = function (asset) {
	  api.create(asset).then(function (res) {
	    var newAsset = res.body();

	    actions.create.complete(newAsset);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};

	actions.update.preEmit = function (asset) {
	  api.update(asset).then(function (res) {
	    var updatedAsset = res.body();

	    actions.update.complete(updatedAsset);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};

	actions.del.preEmit = function (asset) {
	  api.del(asset).then(function () {
	    actions.del.complete(asset);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};

	var fileActions = Reflux.createActions({
	  upload: {
	    children: ['complete', 'error']
	  },
	  del: {
	    children: ['complete', 'error']
	  }
	});

	fileActions.upload.preEmit = function (asset, upload) {
	  api.files.upload(asset.id, upload).then(function (res) {
	    var file = res.body();

	    actions.files.upload.complete(file);
	  }, function (err) {
	    actions.files.upload.error(err);
	  });
	};

	fileActions.del.preEmit = function (file) {
	  api.files.del(file.assetId, file.id).then(function () {
	    actions.files.del.complete(file);
	  }, function (err) {
	    actions.files.del.error(err);
	  });
	};

	actions.files = fileActions;

	module.exports = actions;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    actions = __webpack_require__(37),
	    $ = __webpack_require__(21),
	    classNames = __webpack_require__(43),
	    moment = __webpack_require__(22);

	var NewFileForm = React.createClass({
	  displayName: 'NewFileForm',

	  mixins: [Reflux.listenTo(actions.files.upload.complete, 'onUploadComplete')],
	  getInitialState: function getInitialState() {
	    return {
	      upload: {}
	    };
	  },
	  setFileName: function setFileName(e) {
	    var name = $(e.target).val(),
	        upload = this.state.upload;

	    upload.name = name;

	    this.setState({
	      upload: upload
	    });
	  },
	  selectFile: function selectFile() {
	    var file = this.refs.file.getDOMNode().files[0],
	        upload = this.state.upload;

	    upload.file = file;

	    this.setState({
	      upload: upload
	    });
	  },
	  uploadFile: function uploadFile(e) {
	    e.preventDefault();

	    actions.files.upload(this.props.asset, this.state.upload);
	  },
	  onUploadComplete: function onUploadComplete() {
	    this.setState({
	      upload: {}
	    });

	    this.refs.uploadForm.getDOMNode().reset();
	  },
	  render: function render() {
	    var selectFileBtnClass = classNames('ui button', {
	      green: this.state.upload.file !== undefined
	    });

	    return React.createElement(
	      'div',
	      { className: 'ui attached segment' },
	      React.createElement(
	        'form',
	        { className: 'ui fluid form', onSubmit: this.uploadFile, ref: 'uploadForm' },
	        React.createElement(
	          'div',
	          { className: 'three fields' },
	          React.createElement(
	            'div',
	            { className: 'ui small input field' },
	            React.createElement('input', { placeholder: 'Short description (optional)', maxLength: '60', type: 'text', onChange: this.setFileName, className: '' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'field' },
	            React.createElement(
	              'label',
	              { htmlFor: 'file', className: selectFileBtnClass },
	              this.state.upload.file ? this.state.upload.file.name : 'Select file',
	              React.createElement('input', { type: 'file', id: 'file', name: 'file', onChange: this.selectFile, ref: 'file', style: { display: 'none' } })
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'field' },
	            React.createElement(
	              'button',
	              { className: 'ui button primary', type: 'submit', disabled: this.state.upload.file === undefined },
	              'Upload file'
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var FileList = React.createClass({
	  displayName: 'FileList',

	  getInitialState: function getInitialState() {
	    return {
	      files: this.props.files || []
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    this.setState({
	      files: props.files
	    });
	  },
	  deleteFile: function deleteFile(file) {
	    actions.files.del(file);
	  },
	  fileIcon: function fileIcon(file) {
	    var fileIcons = {
	      image: 'file image outline icon',
	      video: 'file video outline icon',
	      word: 'file word outline icon',
	      excel: 'file excel outline icon',
	      powerpoint: 'file powerpoint outline icon',
	      pdf: 'file pdf outline icon',
	      text: 'file text outline icon',
	      other: 'file outline icon'
	    };

	    var fileType = file.mimeType;

	    if (!fileType) return fileIcons.other;

	    if (fileType.indexOf('image') > -1) return fileIcons.image;else if (fileType.indexOf('video') > -1) return fileIcons.video;else if (fileType.indexOf('msword') > -1 || fileType.indexOf('wordprocessingml') > -1) return fileIcons.word;else if (fileType.indexOf('excel') > -1 || fileType.indexOf('spreadsheetml') > -1) return fileIcons.excel;else if (fileType.indexOf('powerpoint') > -1 || fileType.indexOf('spreadsheetml') > -1) return fileIcons.powerpoint;else if (fileType.indexOf('pdf') > -1) return fileIcons.pdf;else if (fileType.indexOf('text') > -1) return fileIcons.text;else return fileIcons.other;
	  },
	  render: function render() {
	    var _this = this;

	    var files = this.state.files.sort(function (a, b) {
	      var aName = a.name || a.originalFilename,
	          bName = b.name || b.originalFilename;

	      if (aName > bName) return 1;else if (aName < bName) return -1;else return 0;
	    });

	    function formatDate(date) {
	      if (!date) return;

	      var at = moment(date),
	          cutOff = moment().subtract(1, 'day');

	      if (cutOff.isBefore(at)) return at.fromNow();else return 'at ' + at.format('M/D/YY H:mm');
	    }

	    return React.createElement(
	      'div',
	      { className: 'ui bottom attached segment' },
	      React.createElement(
	        'div',
	        { className: 'ui segments' },
	        files.map(function (file, idx) {
	          return React.createElement(
	            'div',
	            { className: 'ui clearing segment', key: file.id || idx },
	            React.createElement(
	              'a',
	              { href: '/' + file.path, target: '_blank' },
	              React.createElement('i', { className: _this.fileIcon(file) }),
	              file.name || file.originalFilename
	            ),
	            React.createElement(
	              'small',
	              { style: { float: 'right' } },
	              file.creator.firstName,
	              ' ',
	              file.creator.lastName,
	              ', ',
	              formatDate(file.createdAt),
	              React.createElement('i', { className: 'trash outline icon', style: { marginLeft: '8px' }, onClick: _this.deleteFile.bind(_this, file) })
	            )
	          );
	        })
	      )
	    );
	  }
	});

	module.exports = {
	  NewFileForm: NewFileForm,
	  FileList: FileList
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    actions = __webpack_require__(35);

	var templateStore = Reflux.createStore({
	  listenables: actions,
	  onListComplete: function onListComplete(templates) {
	    this.templates = templates;
	    this.trigger(templates);
	  },
	  onCreateComplete: function onCreateComplete(template) {
	    this.templates.unshift(template);
	    this.trigger(this.templates);
	  },
	  onUpdateComplete: function onUpdateComplete(template) {
	    this.templates = this.templates.map(function (t) {
	      if (t.id === template.id) return template;

	      return t;
	    });
	    this.trigger(this.templates);
	  },
	  onDelComplete: function onDelComplete(template) {
	    this.templates = this.templates.filter(function (t) {
	      return t.id !== template.id;
	    });
	    this.trigger(this.templates);
	  }
	});

	module.exports = templateStore;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Dropdown = __webpack_require__(19).Dropdown,
	    Checkbox = __webpack_require__(19).Checkbox,
	    templateStore = __webpack_require__(39),
	    templateActions = __webpack_require__(35),
	    classNames = __webpack_require__(50);

	var templateCard = React.createClass({
	  displayName: 'templateCard',

	  mixins: [Reflux.listenTo(templateActions.get.complete, 'getOriginalTemplate')],
	  getInitialState: function getInitialState() {
	    return {
	      template: this.props.template,
	      editing: this.props['new'],
	      showDetails: false,
	      error: {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      template: nextProps.template,
	      editing: nextProps['new']
	    });
	  },
	  getOriginalTemplate: function getOriginalTemplate(template) {
	    if (template.id === this.state.template.id) this.setState({
	      template: template
	    });
	  },
	  toggleDetails: function toggleDetails(e) {
	    e.preventDefault();
	    this.setState({
	      showDetails: !this.state.showDetails
	    });
	  },
	  toggleEdit: function toggleEdit() {
	    var editing = this.state.editing;

	    if (editing) templateActions.get(this.state.template.id);

	    this.setState({
	      editing: !this.state.editing
	    });
	  },
	  onChange: function onChange(e) {
	    var target = e.target,
	        name = target.getAttribute('name'),
	        template = this.state.template,
	        error = this.state.error;

	    template[name] = target.value;
	    error[name] = false;
	    this.setState({
	      template: template,
	      error: error
	    });
	  },
	  addField: function addField() {
	    var template = this.state.template;

	    if (!template.fields) template.fields = [{}];else template.fields.push({});

	    this.setState({
	      template: template
	    });
	  },
	  onFieldNameChange: function onFieldNameChange(idx, e) {
	    var template = this.state.template,
	        target = e.target;

	    if (!template.fields) template.fields = [{}];

	    template.fields[idx].name = target.value;
	    this.setState({
	      template: template
	    });
	  },
	  onFieldTypeChange: function onFieldTypeChange(idx, val) {
	    if (!val) return;

	    var template = this.state.template;

	    if (!template.fields) template.fields = [{}];

	    template.fields[idx].fieldType = val;

	    if (val === 'select') template.fields[idx].choices = [null];

	    this.setState({
	      template: template
	    });
	  },
	  fieldAllowMultiple: function fieldAllowMultiple(idx) {
	    var template = this.state.template;
	    template.fields[idx].multiple = !template.fields[idx].multiple;
	    this.setState({
	      template: template
	    });
	  },
	  removeField: function removeField(idx) {
	    var template = this.state.template;
	    template.fields.splice(idx, 1);
	    this.setState({
	      template: template
	    });
	  },
	  addChoice: function addChoice(fieldIdx) {
	    var template = this.state.template;
	    template.fields[fieldIdx].choices.push(null);
	    this.setState({
	      template: template
	    });
	  },
	  onChoiceChange: function onChoiceChange(idx, fieldIdx, e) {
	    var template = this.state.template;
	    template.fields[fieldIdx].choices[idx] = e.target.value;
	    this.setState({
	      template: template
	    });
	  },
	  removeChoice: function removeChoice(idx, fieldIdx) {
	    var template = this.state.template;
	    template.fields[fieldIdx].choices.splice(idx, 1);
	    this.setState({
	      template: template
	    });
	  },
	  cancelNewTemplate: function cancelNewTemplate() {
	    templateActions.create.cancel();
	  },
	  saveTemplate: function saveTemplate(e) {
	    e.preventDefault();

	    var template = this.state.template,
	        error = this.state.error;

	    if (!template.name) {
	      error.name = true;

	      this.setState({
	        error: error
	      });
	      return;
	    }

	    template.fields = template.fields.filter(function (t) {
	      return !!t.name && !!t.fieldType;
	    });

	    if (!template.id) templateActions.create(template);else templateActions.update(template);
	  },
	  deleteTemplate: function deleteTemplate() {
	    if (!window.confirm('Are you sure you want to delete this template?')) return;

	    templateActions.del(this.state.template);
	  },
	  render: function render() {
	    if (!this.state.editing) return this.renderNotEditing();else return this.renderEditing();
	  },
	  renderDetails: function renderDetails() {
	    if (!this.state.showDetails) return;

	    var template = this.state.template;

	    return React.createElement(
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
	            null,
	            'Field name'
	          ),
	          React.createElement(
	            'th',
	            null,
	            'Type'
	          ),
	          React.createElement(
	            'th',
	            null,
	            'Choices'
	          ),
	          React.createElement(
	            'th',
	            null,
	            'Allow multiple'
	          )
	        )
	      ),
	      React.createElement(
	        'tbody',
	        null,
	        template.fields.map(function (field, idx) {
	          return React.createElement(
	            'tr',
	            { key: idx },
	            React.createElement(
	              'td',
	              null,
	              field.name
	            ),
	            React.createElement(
	              'td',
	              null,
	              field.fieldType
	            ),
	            React.createElement(
	              'td',
	              null,
	              field.fieldType === 'select' && field.choices.length ? field.choices.map(function (choice, idx) {
	                return React.createElement(
	                  'div',
	                  { key: idx },
	                  choice
	                );
	              }) : '-'
	            ),
	            React.createElement(
	              'td',
	              null,
	              field.fieldType === 'select' && field.choices.length && field.multiple ? React.createElement('i', { className: 'check icon' }) : '-'
	            )
	          );
	        })
	      )
	    );
	  },
	  renderNotEditing: function renderNotEditing() {
	    var template = this.state.template;

	    var details;
	    if (this.state.showDetails) {
	      details = 'foo';
	    } else {
	      details = '';
	    }

	    return React.createElement(
	      'div',
	      { className: 'ui card' },
	      React.createElement(
	        'div',
	        { className: 'content' },
	        React.createElement(
	          'div',
	          { className: 'header' },
	          template.name
	        ),
	        React.createElement(
	          'div',
	          { className: 'meta' },
	          template.description
	        ),
	        React.createElement(
	          'div',
	          { className: 'description' },
	          this.renderDetails()
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'extra content' },
	        React.createElement(
	          Dropdown,
	          { className: 'inline right icon', init: { action: 'hide' }, style: { marginRight: '8px' } },
	          React.createElement('i', { className: 'setting icon' }),
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            React.createElement(
	              'div',
	              { className: 'item', onClick: this.toggleEdit },
	              React.createElement('i', { className: 'edit icon' }),
	              'Edit'
	            ),
	            React.createElement(
	              'div',
	              { className: 'item', onClick: this.deleteTemplate },
	              React.createElement('i', { className: 'trash icon' }),
	              'Delete'
	            )
	          )
	        ),
	        React.createElement(
	          'a',
	          { href: '#', className: 'right floated', onClick: this.toggleDetails },
	          this.state.showDetails ? 'Hide details' : 'Show details'
	        )
	      )
	    );
	  },
	  renderChoices: function renderChoices(field, fieldIdx) {
	    var _this = this;

	    if (field.fieldType && field.fieldType.toLowerCase() === 'select') {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: 'fields' },
	          React.createElement('div', { className: 'one wide field' }),
	          React.createElement(
	            'div',
	            { className: 'fourteen wide inline field' },
	            React.createElement(
	              Checkbox,
	              { init: { onChange: this.fieldAllowMultiple.bind(this, fieldIdx) } },
	              React.createElement('input', { type: 'checkbox', checked: field.multiple }),
	              React.createElement(
	                'label',
	                null,
	                'Allow multiple selections'
	              )
	            )
	          ),
	          React.createElement('div', { className: 'one wide field' })
	        ),
	        field.choices.map(function (choice, idx) {
	          return React.createElement(
	            'div',
	            { className: 'fields', key: idx },
	            React.createElement('div', { className: 'one wide field' }),
	            React.createElement(
	              'div',
	              { className: 'ten wide field ui small input' },
	              React.createElement('input', { type: 'text', placeholder: 'Choice', value: choice, onChange: _this.onChoiceChange.bind(_this, idx, fieldIdx) })
	            ),
	            React.createElement(
	              'div',
	              { className: 'two wide field', style: { marginTop: '7px' } },
	              React.createElement('i', { className: 'remove icon link', onClick: _this.removeChoice.bind(_this, idx, fieldIdx) })
	            )
	          );
	        }),
	        React.createElement(
	          'div',
	          { className: 'fields', style: { marginBottom: 10 } },
	          React.createElement('div', { className: 'one wide field' }),
	          React.createElement(
	            'div',
	            { className: 'eight wide field' },
	            React.createElement(
	              'button',
	              { className: 'ui labeled icon button basic tiny', type: 'button', onClick: this.addChoice.bind(this, fieldIdx) },
	              React.createElement('i', { className: 'plus icon' }),
	              'Add choice'
	            )
	          )
	        )
	      );
	    }
	  },
	  renderEditing: function renderEditing() {
	    var _this2 = this;

	    var template = this.state.template,
	        fields = template.fields,
	        self = this;

	    var nameClass = classNames({
	      field: true,
	      ui: true,
	      small: true,
	      input: true,
	      error: this.state.error.name
	    });

	    return React.createElement(
	      'div',
	      { className: 'ui card' },
	      React.createElement(
	        'div',
	        { className: 'content' },
	        React.createElement(
	          'form',
	          { onSubmit: this.saveTemplate, className: 'ui form', noValidate: true },
	          React.createElement(
	            'div',
	            { className: nameClass },
	            React.createElement('input', { type: 'text', placeholder: 'Name', value: template.name, required: true, onChange: this.onChange, name: 'name' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'field ui small input' },
	            React.createElement('input', { type: 'text', placeholder: 'Description', value: template.description, onChange: this.onChange, name: 'description' })
	          ),
	          React.createElement(
	            'h5',
	            { className: 'ui top attached header', style: { marginTop: 0 } },
	            'Fields'
	          ),
	          React.createElement(
	            'div',
	            { className: 'ui attached segment', style: { marginBottom: 10 } },
	            fields.map(function (field, idx) {
	              return React.createElement(
	                'div',
	                { key: idx },
	                React.createElement(
	                  'div',
	                  { className: 'fields' },
	                  React.createElement(
	                    'div',
	                    { className: 'ten wide field ui small input' },
	                    React.createElement('input', { type: 'text', placeholder: 'Field name', value: field.name, onChange: _this2.onFieldNameChange.bind(_this2, idx) })
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'five wide field ui small input' },
	                    React.createElement(
	                      Dropdown,
	                      { init: { onChange: _this2.onFieldTypeChange.bind(_this2, idx) }, className: 'selection fluid' },
	                      React.createElement('i', { className: 'dropdown icon' }),
	                      React.createElement(
	                        'div',
	                        { className: 'default text' },
	                        field.fieldType
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'menu' },
	                        React.createElement(
	                          'div',
	                          { className: 'item' },
	                          'Text'
	                        ),
	                        React.createElement(
	                          'div',
	                          { className: 'item' },
	                          'Select'
	                        ),
	                        React.createElement(
	                          'div',
	                          { className: 'item' },
	                          'Checkbox'
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'one wide field', style: { marginTop: '7px' } },
	                    React.createElement('i', { className: 'remove icon link', onClick: _this2.removeField.bind(_this2, idx) })
	                  )
	                ),
	                _this2.renderChoices(field, idx)
	              );
	            }),
	            React.createElement(
	              'div',
	              { className: 'field' },
	              React.createElement(
	                'div',
	                { className: 'eight wide field' },
	                React.createElement(
	                  'button',
	                  { className: 'ui labeled icon button basic tiny', type: 'button', onClick: this.addField },
	                  React.createElement('i', { className: 'plus icon' }),
	                  'Add field'
	                )
	              )
	            )
	          ),
	          React.createElement(
	            'button',
	            { className: 'ui button primary small', type: 'submit' },
	            'Save template'
	          ),
	          React.createElement(
	            'button',
	            { className: 'ui button basic small', type: 'button', onClick: template.id ? this.toggleEdit : this.cancelNewTemplate },
	            'Cancel'
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = templateCard;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(2),
	    actions = __webpack_require__(36);

	var store = Reflux.createStore({
	  listenables: actions,
	  onListComplete: function onListComplete(categories) {
	    this.categories = categories;
	    this.trigger(categories);
	  },
	  onCreateComplete: function onCreateComplete(cat) {
	    this.categories.unshift(cat);
	    this.trigger(this.categories);
	  },
	  onUpdateComplete: function onUpdateComplete(cat) {
	    this.categories = this.categories.map(function (c) {
	      if (c.id === cat.id) return cat;

	      return c;
	    });
	    this.trigger(this.categories);
	  },
	  onDelComplete: function onDelComplete(cat) {
	    this.categories.splice(this.categories.indexOf(cat), 1);
	    this.trigger(this.categories);
	  }
	});

	module.exports = store;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Reflux = __webpack_require__(2),
	    Dropdown = __webpack_require__(19).Dropdown,
	    Link = __webpack_require__(3).Link,
	    catStore = __webpack_require__(41),
	    catActions = __webpack_require__(36),
	    _ = __webpack_require__(20),
	    classNames = __webpack_require__(43);

	var Card = React.createClass({
	  displayName: 'Card',

	  getInitialState: function getInitialState() {
	    return {
	      category: this.props.category,
	      editing: this.props['new'],
	      editTmp: _.extend({}, this.props.category),
	      error: {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      category: nextProps.category,
	      editing: nextProps['new'],
	      editTmp: _.extend({}, nextProps.category),
	      error: {}
	    });
	  },
	  setEditing: function setEditing() {
	    this.setState({
	      editing: !this.state.editing,
	      editTmp: _.extend({}, this.props.category),
	      error: {}
	    });
	  },
	  cancelNew: function cancelNew() {
	    catActions.create.cancel();
	  },
	  onFieldChange: function onFieldChange(e) {
	    var target = e.target,
	        name = target.getAttribute('name'),
	        editTmp = this.state.editTmp,
	        error = this.state.error;

	    editTmp[name] = target.value;
	    error[name] = false;
	    this.setState({
	      editTmp: editTmp,
	      error: error
	    });
	  },
	  saveCategory: function saveCategory(e) {
	    e.preventDefault();

	    var editTmp = this.state.editTmp,
	        error = this.state.error;

	    if (!editTmp.name) {
	      error.name = true;
	      this.setState({ error: error });
	      return;
	    }

	    if (editTmp.id) catActions.update(editTmp);else catActions.create(editTmp);
	  },
	  deleteCategory: function deleteCategory() {
	    catActions.del(this.state.category);
	  },
	  render: function render() {
	    return this.state.editing ? this.renderEditing() : this.renderNotEditing();
	  },
	  renderNotEditing: function renderNotEditing() {
	    var category = this.state.category;

	    return React.createElement(
	      'div',
	      { className: 'ui card' },
	      React.createElement(
	        'div',
	        { className: 'content' },
	        React.createElement(
	          'div',
	          { className: 'header' },
	          category.name
	        ),
	        React.createElement(
	          'div',
	          { className: 'meta' },
	          category.description
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'extra content' },
	        React.createElement(
	          Dropdown,
	          { className: 'inline right icon', init: true, style: { marginRight: '8px' } },
	          React.createElement('i', { className: 'setting icon' }),
	          React.createElement(
	            'div',
	            { className: 'menu' },
	            React.createElement(
	              'div',
	              { className: 'item', onClick: this.setEditing },
	              React.createElement('i', { className: 'edit icon' }),
	              'Edit'
	            ),
	            React.createElement(
	              'div',
	              { className: 'item', onClick: this.deleteCategory },
	              React.createElement('i', { className: 'trash icon' }),
	              'Delete'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'right floated' },
	          React.createElement('i', { className: 'icon server' }),
	          category.assetCount,
	          ' Assets',
	          React.createElement(
	            'span',
	            { style: { margin: '0 4px' } },
	            '|'
	          ),
	          React.createElement(
	            Link,
	            { to: 'category', params: { catId: category.id } },
	            'Go to asset list'
	          )
	        )
	      )
	    );
	  },
	  renderEditing: function renderEditing() {
	    var category = this.state.editTmp;

	    var nameClass = classNames({
	      'field ui input small': true,
	      error: this.state.error.name
	    });

	    return React.createElement(
	      'div',
	      { className: 'ui card' },
	      React.createElement(
	        'div',
	        { className: 'content' },
	        React.createElement(
	          'form',
	          { onSubmit: this.saveCategory, className: 'ui form', noValidate: true },
	          React.createElement(
	            'div',
	            { className: nameClass },
	            React.createElement('input', { type: 'text', name: 'name', placeholder: 'Name', value: category.name, required: true, onChange: this.onFieldChange })
	          ),
	          React.createElement(
	            'div',
	            { className: 'field ui input small' },
	            React.createElement('input', { type: 'text', name: 'description', placeholder: 'Description', value: category.description, onChange: this.onFieldChange })
	          ),
	          React.createElement(
	            'button',
	            { type: 'submit', className: 'ui button primary small' },
	            'Save category'
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', onClick: category.id ? this.setEditing : this.cancelNew, className: 'ui button basic small' },
	            'Cancel'
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Card;

/***/ },
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = restful;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  API_HOST: 'localhost',
	  API_PORT: 3000,
	  API_PREFIX: 'v1'
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseApi = __webpack_require__(30);

	var orgApi = {
	  base: baseApi.all('organizations'),
	  all: function all() {
	    return orgApi.base.getAll();
	  },
	  get: function get(id) {
	    return orgApi.base.get(id);
	  },
	  create: function create(org) {
	    return orgApi.base.post(org);
	  },
	  update: function update(org) {
	    return orgApi.base.put(org.id, org);
	  },
	  del: function del(org) {
	    return orgApi.base['delete'](org.id);
	  }
	};

	module.exports = orgApi;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseApi = __webpack_require__(30);

	var templateApi = {
	  base: baseApi.all('templates'),
	  all: function all() {
	    return templateApi.base.getAll();
	  },
	  get: function get(id) {
	    return templateApi.base.get(id);
	  },
	  create: function create(template) {
	    return templateApi.base.post(template);
	  },
	  update: function update(template) {
	    return templateApi.base.put(template.id, template);
	  },
	  del: function del(template) {
	    return templateApi.base['delete'](template.id);
	  }
	};

	module.exports = templateApi;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseApi = __webpack_require__(30);

	var categoryApi = {
	  base: baseApi.all('categories'),
	  all: function all() {
	    return categoryApi.base.getAll();
	  },
	  get: function get(id) {
	    return categoryApi.base.get(id);
	  },
	  create: function create(cat) {
	    return categoryApi.base.post(cat);
	  },
	  update: function update(cat) {
	    return categoryApi.base.put(cat.id, cat);
	  },
	  del: function del(cat) {
	    return categoryApi.base['delete'](cat.id);
	  }
	};

	module.exports = categoryApi;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseApi = __webpack_require__(30);

	var assetApi = {
	  base: baseApi.all('assets'),
	  all: function all() {
	    return assetApi.base.getAll();
	  },
	  get: function get(id) {
	    return assetApi.base.get(id);
	  },
	  create: function create(asset) {
	    return assetApi.base.post(asset);
	  },
	  update: function update(asset) {
	    return assetApi.base.put(asset.id, asset);
	  },
	  del: function del(asset) {
	    return assetApi.base['delete'](asset.id);
	  },
	  files: {
	    upload: uploadFile,
	    del: function del(assetId, fileId) {
	      return baseApi.one('assets', assetId).all('files')['delete'](fileId);
	    }
	  }
	};

	function uploadFile(assetId, upload) {
	  var data = new FormData();

	  data.append('file', upload.file);
	  data.append('name', upload.name);

	  return baseApi.addRequestInterceptor(function (data, headers) {
	    headers['Content-Type'] = 'multipart/form-data';
	    return data;
	  }).one('assets', assetId).all('files').post(data);
	}

	module.exports = assetApi;

/***/ },
/* 50 */
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


/***/ }
/******/ ]);