/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	// nav components
	
	var _componentsTopnav = __webpack_require__(4);
	
	var _componentsTopnav2 = _interopRequireDefault(_componentsTopnav);
	
	var _componentsSidemenu = __webpack_require__(5);
	
	var _componentsSidemenu2 = _interopRequireDefault(_componentsSidemenu);
	
	// user components
	
	var _componentsUserStore = __webpack_require__(6);
	
	var _componentsUserStore2 = _interopRequireDefault(_componentsUserStore);
	
	var _componentsUserActions = __webpack_require__(7);
	
	var _componentsUserActions2 = _interopRequireDefault(_componentsUserActions);
	
	var _componentsUserViewsLogin = __webpack_require__(8);
	
	var _componentsUserViewsLogin2 = _interopRequireDefault(_componentsUserViewsLogin);
	
	var _componentsUserViewsRegister = __webpack_require__(9);
	
	var _componentsUserViewsRegister2 = _interopRequireDefault(_componentsUserViewsRegister);
	
	var _componentsUserViewsAccount = __webpack_require__(10);
	
	var _componentsUserViewsAccount2 = _interopRequireDefault(_componentsUserViewsAccount);
	
	var _componentsUserMixins = __webpack_require__(11);
	
	// organization components
	
	var _componentsOrganizationsViewsList = __webpack_require__(12);
	
	var _componentsOrganizationsViewsList2 = _interopRequireDefault(_componentsOrganizationsViewsList);
	
	var _componentsOrganizationsViewsShow = __webpack_require__(13);
	
	var _componentsOrganizationsViewsShow2 = _interopRequireDefault(_componentsOrganizationsViewsShow);
	
	// template components
	
	var _componentsTemplatesViewsList = __webpack_require__(14);
	
	var _componentsTemplatesViewsList2 = _interopRequireDefault(_componentsTemplatesViewsList);
	
	// category components
	
	var _componentsCategoriesViewsList = __webpack_require__(15);
	
	var _componentsCategoriesViewsList2 = _interopRequireDefault(_componentsCategoriesViewsList);
	
	var _componentsCategoriesViewsShow = __webpack_require__(16);
	
	var _componentsCategoriesViewsShow2 = _interopRequireDefault(_componentsCategoriesViewsShow);
	
	// asset components
	
	var _componentsAssetsViewsNew = __webpack_require__(17);
	
	var _componentsAssetsViewsNew2 = _interopRequireDefault(_componentsAssetsViewsNew);
	
	var _componentsAssetsViewsShow = __webpack_require__(18);
	
	var _componentsAssetsViewsShow2 = _interopRequireDefault(_componentsAssetsViewsShow);
	
	var App = _react2['default'].createClass({
	  displayName: 'App',
	
	  mixins: [_reactRouter.Navigation],
	  render: function render() {
	    return _react2['default'].createElement(_reactRouter.RouteHandler, null);
	  }
	});
	
	var Dashboard = _react2['default'].createClass({
	  displayName: 'Dashboard',
	
	  render: function render() {
	    return _react2['default'].createElement('div', null);
	  }
	});
	
	var LoggedIn = _react2['default'].createClass({
	  displayName: 'LoggedIn',
	
	  mixins: [_componentsUserMixins.Authenticated, _reflux2['default'].listenTo(_componentsUserActions2['default'].logout, 'onLogout')],
	  onLogout: function onLogout(token, user) {
	    this.transitionTo('login');
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui page grid' },
	      _react2['default'].createElement(_componentsTopnav2['default'], null),
	      _react2['default'].createElement(
	        'div',
	        { className: 'row' },
	        _react2['default'].createElement(_componentsSidemenu2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { className: 'twelve wide column' },
	          _react2['default'].createElement(_reactRouter.RouteHandler, null)
	        )
	      )
	    );
	  }
	});
	
	var LoggedOut = _react2['default'].createClass({
	  displayName: 'LoggedOut',
	
	  mixins: [_componentsUserMixins.Unauthenticated],
	  render: function render() {
	    return _react2['default'].createElement(_reactRouter.RouteHandler, null);
	  }
	});
	
	var routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { handler: App },
	  _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', name: 'user', handler: LoggedOut },
	    _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'login', handler: _componentsUserViewsLogin2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'register', name: 'register', handler: _componentsUserViewsRegister2['default'] })
	  ),
	  _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/app', name: 'app', handler: LoggedIn },
	    _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'dashboard', handler: Dashboard }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'account', name: 'account', handler: _componentsUserViewsAccount2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'orgs', name: 'orgs', handler: _componentsOrganizationsViewsList2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'org/:orgId', name: 'org', handler: _componentsOrganizationsViewsShow2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'assets/new', name: 'newAsset', handler: _componentsAssetsViewsNew2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'assets/:assetId', name: 'asset', handler: _componentsAssetsViewsShow2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'templates', name: 'templates', handler: _componentsTemplatesViewsList2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'categories', name: 'categories', handler: _componentsCategoriesViewsList2['default'] }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'categories/:catId', name: 'category', handler: _componentsCategoriesViewsShow2['default'] })
	  )
	);
	
	_reactRouter2['default'].run(routes, _reactRouter2['default'].HashLocation, function (Handler) {
	  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSemantify = __webpack_require__(19);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _userStore = __webpack_require__(6);
	
	var _userStore2 = _interopRequireDefault(_userStore);
	
	var _userActions = __webpack_require__(7);
	
	var _userActions2 = _interopRequireDefault(_userActions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'topnav',
	
	  mixins: [_reflux2['default'].listenTo(_userStore2['default'], 'onUserUpdate'), _reactRouter.Navigation],
	  getInitialState: function getInitialState() {
	    return {
	      user: {}
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    _userActions2['default'].me();
	  },
	  logout: function logout() {
	    _userActions2['default'].logout();
	  },
	  onUserUpdate: function onUserUpdate(token, user) {
	    this.setState({
	      user: user
	    });
	  },
	  render: function render() {
	    var user = this.state.user;
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'row' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'sixteen wide column' },
	        _react2['default'].createElement(
	          'div',
	          { id: 'content', role: 'main' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'ui inverted large menu' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'item' },
	              'Asset Manager'
	            ),
	            _react2['default'].createElement('div', { className: 'item' }),
	            _react2['default'].createElement(
	              'div',
	              { className: 'right menu' },
	              _react2['default'].createElement(
	                _reactSemantify.Dropdown,
	                { className: 'ui item', init: true },
	                _react2['default'].createElement('i', { className: 'icon user' }),
	                user.firstName,
	                ' ',
	                user.lastName ? user.lastName : '',
	                _react2['default'].createElement(
	                  'div',
	                  { className: 'menu' },
	                  _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { to: 'account', className: 'item' },
	                    'My Account'
	                  ),
	                  _react2['default'].createElement(
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
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactSemantify = __webpack_require__(19);
	
	// organization menus
	
	var _organizationsViewsSidemenu = __webpack_require__(23);
	
	var _organizationsViewsSidemenu2 = _interopRequireDefault(_organizationsViewsSidemenu);
	
	var _organizationsViewsListMenu = __webpack_require__(24);
	
	var _organizationsViewsListMenu2 = _interopRequireDefault(_organizationsViewsListMenu);
	
	var _organizationsViewsShowMenu = __webpack_require__(25);
	
	var _organizationsViewsShowMenu2 = _interopRequireDefault(_organizationsViewsShowMenu);
	
	// template menus
	
	var _templatesViewsListMenu = __webpack_require__(26);
	
	var _templatesViewsListMenu2 = _interopRequireDefault(_templatesViewsListMenu);
	
	// category menus
	
	var _categoriesViewsSidemenu = __webpack_require__(27);
	
	var _categoriesViewsSidemenu2 = _interopRequireDefault(_categoriesViewsSidemenu);
	
	var _categoriesViewsListMenu = __webpack_require__(28);
	
	var _categoriesViewsListMenu2 = _interopRequireDefault(_categoriesViewsListMenu);
	
	// asset menus
	
	var _assetsViewsShowMenu = __webpack_require__(29);
	
	var _assetsViewsShowMenu2 = _interopRequireDefault(_assetsViewsShowMenu);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'sidemenu',
	
	  mixins: [_reactRouter.State],
	  contextTypes: {
	    router: _react2['default'].PropTypes.func
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'four wide column' },
	      this.isActive('orgs') ? _react2['default'].createElement(_organizationsViewsListMenu2['default'], null) : null,
	      this.isActive('org') ? _react2['default'].createElement(_organizationsViewsShowMenu2['default'], null) : null,
	      this.isActive('templates') ? _react2['default'].createElement(_templatesViewsListMenu2['default'], null) : null,
	      this.isActive('categories') ? _react2['default'].createElement(_categoriesViewsListMenu2['default'], null) : null,
	      this.isActive('asset') ? _react2['default'].createElement(_assetsViewsShowMenu2['default'], null) : null,
	      _react2['default'].createElement(
	        'div',
	        { className: 'ui vertical fluid menu' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'item' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'ui icon input fluid' },
	            _react2['default'].createElement('input', { type: 'search', placeholder: 'Search' }),
	            _react2['default'].createElement('i', { className: 'search icon' })
	          )
	        ),
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: 'dashboard', className: 'item' },
	          _react2['default'].createElement('i', { className: 'home icon' }),
	          'Dashboard'
	        ),
	        _react2['default'].createElement(_organizationsViewsSidemenu2['default'], null),
	        _react2['default'].createElement(_categoriesViewsSidemenu2['default'], null),
	        _react2['default'].createElement(
	          _reactSemantify.Dropdown,
	          { className: 'ui dropdown item', init: true },
	          _react2['default'].createElement('i', { className: 'icon dropdown' }),
	          'Admin',
	          _react2['default'].createElement(
	            'div',
	            { className: 'menu' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: 'orgs', className: 'item' },
	              'Organizations'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: 'templates', className: 'item' },
	              'Templates'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: 'categories', className: 'item' },
	              'Categories'
	            ),
	            _react2['default'].createElement(
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
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(7);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _api = __webpack_require__(30);
	
	var _api2 = _interopRequireDefault(_api);
	
	exports['default'] = _reflux2['default'].createStore({
	  listenables: _actions2['default'],
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
	    _api2['default'].updateToken(token);
	  },
	  onRegisterComplete: function onRegisterComplete(token, user) {
	    this.token = token;
	    this.user = user;
	    this.save();
	    _api2['default'].updateToken(token);
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
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _api = __webpack_require__(31);
	
	var _api2 = _interopRequireDefault(_api);
	
	var actions = _reflux2['default'].createActions({
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
	
	exports['default'] = actions;
	
	actions.login.preEmit = function (user) {
	  _api2['default'].login(user).then(function (res) {
	    var data = res.body();
	
	    actions.login.complete(data.token, data.user);
	  }, function (err) {
	    actions.login.error(err);
	  });
	};
	
	actions.register.preEmit = function (user) {
	  _api2['default'].register(user).then(function (res) {
	    var data = res.body();
	
	    actions.register.complete(data.token, data.user);
	  }, function (err) {
	    actions.register.error(err);
	  });
	};
	
	actions.me.preEmit = function () {
	  _api2['default'].me().then(function (res) {
	    var user = res.body().data();
	
	    actions.me.complete(user);
	  }, function (err) {
	    actions.me.error(err);
	  });
	};
	
	actions.update.preEmit = function (user) {
	  _api2['default'].update(user).then(function (res) {
	    var updatedUser = res.body();
	
	    actions.update.complete(updatedUser);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};
	
	actions.validate.preEmit = function () {
	  _api2['default'].validate()['catch'](function (err) {
	    actions.validate.error(err);
	  });
	};
	
	module.exports = actions;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _actions = __webpack_require__(7);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'login',
	
	  mixins: [_reactRouter.Navigation, _reflux2['default'].listenTo(_actions2['default'].login.complete, 'onLoginSuccess'), _reflux2['default'].listenTo(_actions2['default'].login.error, 'onLoginError')],
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
	      _actions2['default'].login(this.state.user);
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui two column centered grid' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'column' },
	        _react2['default'].createElement(
	          'form',
	          { className: formClass, onSubmit: this.submit, noValidate: true },
	          _react2['default'].createElement(
	            'div',
	            { className: 'ui error message' },
	            _react2['default'].createElement(
	              'p',
	              null,
	              formError
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: emailClass },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'email' },
	              'Email'
	            ),
	            _react2['default'].createElement('input', { required: 'true', type: 'email', id: 'email', name: 'email', onChange: this.inputChange, error: this.state.error.email })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: passwordClass },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'password' },
	              'Password'
	            ),
	            _react2['default'].createElement('input', { required: 'true', type: 'password', id: 'password', name: 'password', onChange: this.inputChange, error: this.state.error.password })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'two fields' },
	            _react2['default'].createElement(
	              'button',
	              { type: 'submit', className: btnClass },
	              'Login'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: 'register', className: 'ui basic button' },
	              'Register'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _actions = __webpack_require__(7);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'register',
	
	  mixins: [_reactRouter.Navigation, _reflux2['default'].listenTo(_actions2['default'].register.complete, 'onRegisterSuccess'), _reflux2['default'].listenTo(_actions2['default'].register.error, 'onRegisterError')],
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
	      _actions2['default'].register(this.state.user);
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui two column centered grid' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'column' },
	        _react2['default'].createElement(
	          'form',
	          { className: formClass, onSubmit: this.submit, noValidate: true },
	          _react2['default'].createElement(
	            'div',
	            { className: 'ui error message' },
	            _react2['default'].createElement(
	              'p',
	              null,
	              formError
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'two fields' },
	            _react2['default'].createElement(
	              'div',
	              { className: nameClass },
	              _react2['default'].createElement(
	                'label',
	                { htmlFor: 'firstName' },
	                'First name'
	              ),
	              _react2['default'].createElement('input', { required: 'true', type: 'text', id: 'firstName', name: 'firstName', onChange: this.inputChange, placeholder: 'Required' })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'field' },
	              _react2['default'].createElement(
	                'label',
	                { htmlFor: 'lastName' },
	                'Last name'
	              ),
	              _react2['default'].createElement('input', { type: 'text', id: 'lastName', name: 'lastName', onChange: this.inputChange, placeholder: 'Optional' })
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: emailClass },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'email' },
	              'Email'
	            ),
	            _react2['default'].createElement('input', { required: 'true', type: 'email', id: 'email', name: 'email', onChange: this.inputChange, error: this.state.error.email, placeholder: 'Required' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: passwordClass },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'password' },
	              'Password'
	            ),
	            _react2['default'].createElement('input', { required: 'true', type: 'password', id: 'password', name: 'password', onChange: this.inputChange, error: this.state.error.password, placeholder: 'Required' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: passwordClass },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'passwordConfirm' },
	              'Confirm password'
	            ),
	            _react2['default'].createElement('input', { required: 'true', type: 'password', id: 'passwordConfirm', name: 'passwordConfirm', onChange: this.inputChange, placeholder: 'Required' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'two fields' },
	            _react2['default'].createElement(
	              'button',
	              { type: 'submit', className: btnClass },
	              'Register'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: 'login', className: 'ui basic button' },
	              'I already have an account'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _classnames = __webpack_require__(43);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _store = __webpack_require__(6);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(7);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'account',
	
	  mixins: [_reflux2['default'].listenTo(_store2['default'], 'onUpdate'), _reflux2['default'].listenTo(_actions2['default'].update.error, 'onError')],
	  getInitialState: function getInitialState() {
	    return {
	      user: _store2['default'].user || {},
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
	      _actions2['default'].update(user);
	    }
	  },
	  render: function render() {
	    var user = this.state.user,
	        error = this.state.error;
	
	    var btnText = this.state.success ? 'Account updated' : 'Update account';
	
	    var btnClass = (0, _classnames2['default'])({
	      ui: true,
	      button: true,
	      primary: !this.state.loading && !this.state.success,
	      loading: this.state.loading,
	      green: this.state.success
	    });
	
	    return _react2['default'].createElement(
	      'form',
	      { className: 'ui form', onSubmit: this.onSubmit, noValidate: true },
	      _react2['default'].createElement(
	        'div',
	        { className: 'two fields' },
	        _react2['default'].createElement(
	          'div',
	          { className: error.firstName ? 'field error' : 'field' },
	          _react2['default'].createElement(
	            'label',
	            { htmlFor: 'firstName' },
	            'First name'
	          ),
	          _react2['default'].createElement('input', { required: true, type: 'text', id: 'firstName', name: 'firstName', onChange: this.inputChange, value: user.firstName, placeholder: 'Required' })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'field' },
	          _react2['default'].createElement(
	            'label',
	            { htmlFor: 'lastName' },
	            'Last name'
	          ),
	          _react2['default'].createElement('input', { type: 'text', id: 'lastName', name: 'lastName', onChange: this.inputChange, placeholder: 'Optional', value: user.lastName })
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: error.email ? 'field error' : 'field' },
	        _react2['default'].createElement(
	          'label',
	          { htmlFor: 'email' },
	          'Email'
	        ),
	        _react2['default'].createElement('input', { required: true, type: 'email', id: 'email', name: 'email', onChange: this.inputChange, value: user.email, placeholder: 'Required' })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: error.password ? 'field error' : 'field' },
	        _react2['default'].createElement(
	          'label',
	          { htmlFor: 'password' },
	          'Change password'
	        ),
	        _react2['default'].createElement('input', { type: 'password', id: 'password', name: 'password', onChange: this.inputChange })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: error.password ? 'field error' : 'field' },
	        _react2['default'].createElement(
	          'label',
	          { htmlFor: 'passwordConfirm' },
	          'Confirm new password'
	        ),
	        _react2['default'].createElement('input', { type: 'password', id: 'passwordConfirm', name: 'passwordConfirm', onChange: this.inputChange })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'field' },
	        _react2['default'].createElement(
	          'button',
	          { type: 'submit', className: btnClass },
	          btnText
	        )
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _store = __webpack_require__(6);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(7);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var Authenticated = {
	  mixins: [_reactRouter.Navigation, _reflux2['default'].listenTo(_actions2['default'].validate.error, 'onValidateError')],
	  statics: {
	    willTransitionTo: function willTransitionTo(transition) {
	      if (_store2['default'].token === null || _store2['default'].token === undefined) transition.redirect('login', {});
	      _actions2['default'].validate();
	    }
	  },
	  onValidateError: function onValidateError(err) {
	    if (err.status == 401) this.transitionTo('login');
	  }
	};
	
	exports.Authenticated = Authenticated;
	var Unauthenticated = {
	  mixins: [_reactRouter.Navigation],
	  statics: {
	    willTransitionTo: function willTransitionTo(transition) {
	      if (_store2['default'].token !== null && _store2['default'].token !== undefined) transition.redirect('app', {});
	    }
	  } };
	exports.Unauthenticated = Unauthenticated;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _lodash = __webpack_require__(20);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _store = __webpack_require__(32);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(33);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _card = __webpack_require__(34);
	
	var _card2 = _interopRequireDefault(_card);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'list',
	
	  mixins: [_reflux2['default'].listenTo(_store2['default'], 'onOrgsUpdated'), _reflux2['default'].listenTo(_actions2['default'].create.start, 'createNewOrg'), _reflux2['default'].listenTo(_actions2['default'].create.cancel, 'cancelNewOrg')],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: _store2['default'].flatOrgs
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    _actions2['default'].flatList();
	  },
	  onOrgsUpdated: function onOrgsUpdated(orgs) {
	    this.setState({
	      orgs: _lodash2['default'].extend([], orgs.flatOrgs)
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui two doubling cards' },
	      orgs.map(function (org, idx) {
	        return _react2['default'].createElement(_card2['default'], { org: org, key: idx, 'new': org.id === undefined });
	      })
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _store = __webpack_require__(32);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(33);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'show',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].get.complete, 'onOrgUpdate')],
	  contextTypes: {
	    router: _react2['default'].PropTypes.func
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
	    _actions2['default'].get(orgId);
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
	        return _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: 'org', params: { orgId: org.parent.id } },
	          _react2['default'].createElement(
	            'div',
	            { className: 'sub header' },
	            _react2['default'].createElement('i', { className: 'level up icon' }),
	            org.parent.name
	          )
	        );
	      }
	    }
	
	    var assetTable = assets.map(function (asset) {
	      return _react2['default'].createElement(
	        'tr',
	        { key: asset.id },
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: 'asset', params: { assetId: asset.id } },
	            asset.name
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          asset.description
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          asset.modified
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          asset.flagged
	        )
	      );
	    });
	
	    var noAssets = _react2['default'].createElement(
	      'tr',
	      null,
	      _react2['default'].createElement(
	        'td',
	        null,
	        'No assets'
	      )
	    );
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'ui header' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'content' },
	          org.name,
	          showParent(),
	          _react2['default'].createElement(
	            'div',
	            { className: 'sub header' },
	            org.description
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'table',
	        { className: 'ui table' },
	        _react2['default'].createElement(
	          'thead',
	          null,
	          _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
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
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _lodash = __webpack_require__(20);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _actions = __webpack_require__(35);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _store = __webpack_require__(36);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _card = __webpack_require__(41);
	
	var _card2 = _interopRequireDefault(_card);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'list',
	
	  mixins: [_reflux2['default'].listenTo(_store2['default'], 'onTemplatesUpdate'), _reflux2['default'].listenTo(_actions2['default'].create.start, 'createNewTemplate'), _reflux2['default'].listenTo(_actions2['default'].create.cancel, 'cancelNewTemplate')],
	  getInitialState: function getInitialState() {
	    return {
	      templates: _store2['default'].templates
	    };
	  },
	  onTemplatesUpdate: function onTemplatesUpdate(templates) {
	    this.setState({
	      templates: templates
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    _actions2['default'].list();
	  },
	  createNewTemplate: function createNewTemplate() {
	    var templates = _lodash2['default'].extend([], this.state.templates);
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui one cards' },
	      templates.length ? templates.map(function (template, idx) {
	        return _react2['default'].createElement(_card2['default'], { template: template, key: idx, 'new': template.id === undefined });
	      }) : ''
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _lodash = __webpack_require__(20);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _store = __webpack_require__(37);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(38);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _card = __webpack_require__(42);
	
	var _card2 = _interopRequireDefault(_card);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'list',
	
	  mixins: [_reflux2['default'].listenTo(_store2['default'], 'onCategoriesUpdated'), _reflux2['default'].listenTo(_actions2['default'].create.start, 'addNewCategory'), _reflux2['default'].listenTo(_actions2['default'].create.cancel, 'cancelNewCategory')],
	  getInitialState: function getInitialState() {
	    return {
	      categories: _store2['default'].categories
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    _actions2['default'].list();
	  },
	  onCategoriesUpdated: function onCategoriesUpdated(categories) {
	    this.setState({
	      categories: _lodash2['default'].extend([], categories)
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui two doubling cards' },
	      categories.length ? categories.map(function (cat, idx) {
	        return _react2['default'].createElement(_card2['default'], { category: cat, key: idx, 'new': cat.id === undefined });
	      }) : ''
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _actions = __webpack_require__(38);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _store = __webpack_require__(37);
	
	var _store2 = _interopRequireDefault(_store);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'show',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].get.complete, 'onCatUpdate')],
	  contextTypes: {
	    router: _react2['default'].PropTypes.func
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
	    _actions2['default'].get(catId);
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
	      return _react2['default'].createElement(
	        'tr',
	        null,
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: 'asset', params: { assetId: asset.id } },
	            asset.name
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          asset.description
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          asset.modified
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          asset.flagged
	        )
	      );
	    });
	
	    var noAssets = _react2['default'].createElement(
	      'tr',
	      null,
	      _react2['default'].createElement(
	        'td',
	        null,
	        'No assets'
	      )
	    );
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'ui header' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'content' },
	          category.name,
	          _react2['default'].createElement(
	            'div',
	            { className: 'sub header' },
	            category.description
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'table',
	        { className: 'ui table' },
	        _react2['default'].createElement(
	          'thead',
	          null,
	          _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
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
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _lodash = __webpack_require__(20);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _jQuery = __webpack_require__(21);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _classnames = __webpack_require__(43);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactSemantify = __webpack_require__(19);
	
	var _actions = __webpack_require__(39);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _organizationsStore = __webpack_require__(32);
	
	var _organizationsStore2 = _interopRequireDefault(_organizationsStore);
	
	var _organizationsActions = __webpack_require__(33);
	
	var _organizationsActions2 = _interopRequireDefault(_organizationsActions);
	
	var _templatesStore = __webpack_require__(36);
	
	var _templatesStore2 = _interopRequireDefault(_templatesStore);
	
	var _templatesActions = __webpack_require__(35);
	
	var _templatesActions2 = _interopRequireDefault(_templatesActions);
	
	var _categoriesStore = __webpack_require__(37);
	
	var _categoriesStore2 = _interopRequireDefault(_categoriesStore);
	
	var _categoriesActions = __webpack_require__(38);
	
	var _categoriesActions2 = _interopRequireDefault(_categoriesActions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'new',
	
	  mixins: [_reflux2['default'].listenTo(_organizationsStore2['default'], 'onOrgsList'), _reflux2['default'].listenTo(_templatesStore2['default'], 'onTemplatesList'), _reflux2['default'].listenTo(_categoriesStore2['default'], 'onCategoriesList'), _reflux2['default'].listenTo(_actions2['default'].create.complete, 'onAssetCreated'), _reactRouter.Navigation],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: _organizationsStore2['default'].nestedOrgs,
	      templates: _templatesStore2['default'].templates,
	      categories: _categoriesStore2['default'].categories,
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
	    _organizationsActions2['default'].list();
	    _organizationsActions2['default'].flatList();
	  },
	  getTemplates: function getTemplates() {
	    _templatesActions2['default'].list();
	  },
	  getCategories: function getCategories() {
	    _categoriesActions2['default'].list();
	  },
	  onOrgsList: function onOrgsList(orgs) {
	    this.setState({
	      orgs: orgs.nestedOrgs
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
	        org = _lodash2['default'].find(_organizationsStore2['default'].flatOrgs, function (o) {
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
	        template = _lodash2['default'].find(this.state.templates, function (tmpl) {
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
	      val = (0, _jQuery2['default'])(e.target).val();else // checkbox
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
	
	    _actions2['default'].create(this.state.asset);
	  },
	  onAssetCreated: function onAssetCreated(asset) {
	    this.transitionTo('asset', { assetId: asset.id });
	  },
	  renderField: function renderField(field, idx) {
	    var renderedField;
	
	    switch (field.fieldType) {
	      case 'text':
	        renderedField = _react2['default'].createElement('input', { type: 'text', className: 'ui input', name: field.name, onChange: this.onDataFieldChange.bind(this, field.name) });
	        break;
	      case 'select':
	        if (field.multiple) {
	          renderedField = _react2['default'].createElement(
	            'select',
	            { name: field.name, multiple: true, onChange: this.onDataFieldChange.bind(this, field.name) },
	            field.choices ? field.choices.map(function (choice, idx) {
	              return _react2['default'].createElement(
	                'option',
	                { value: choice, key: idx },
	                choice
	              );
	            }) : null
	          );
	        } else {
	          renderedField = _react2['default'].createElement(
	            _reactSemantify.Dropdown,
	            { className: 'selection', init: { onChange: this.onDataFieldChange.bind(this, field.name) } },
	            _react2['default'].createElement('div', { className: 'default text' }),
	            _react2['default'].createElement('i', { className: 'dropdown icon' }),
	            _react2['default'].createElement(
	              'div',
	              { className: 'menu' },
	              field.choices ? field.choices.map(function (choice, idx) {
	                return _react2['default'].createElement(
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
	        renderedField = _react2['default'].createElement(
	          _reactSemantify.Checkbox,
	          { init: { onChange: this.onDataFieldChange.bind(this, field.name) } },
	          _react2['default'].createElement('input', { type: 'checkbox', name: field.name }),
	          _react2['default'].createElement(
	            'label',
	            null,
	            field.name
	          )
	        );
	        break;
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'field', key: idx },
	      _react2['default'].createElement(
	        'label',
	        null,
	        field.name
	      ),
	      renderedField
	    );
	  },
	  render: function render() {
	    var fields = this.state.asset.fields;
	
	    var orgFieldClass = (0, _classnames2['default'])({
	      field: true,
	      error: this.state.error.org
	    });
	
	    var nameFieldClass = (0, _classnames2['default'])({
	      field: true,
	      error: this.state.error.name
	    });
	
	    return _react2['default'].createElement(
	      'form',
	      { className: 'ui form segment', onSubmit: this.saveAsset },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'New asset'
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: orgFieldClass },
	        _react2['default'].createElement(
	          'label',
	          null,
	          'Organization'
	        ),
	        _react2['default'].createElement(
	          _reactSemantify.Dropdown,
	          { className: 'basic button', init: { onChange: this.onOrgSelect, allowCategorySelection: true } },
	          _react2['default'].createElement(
	            'div',
	            { className: 'text' },
	            this.state.asset.organization.name || 'Select an organization'
	          ),
	          _react2['default'].createElement('i', { className: 'dropdown icon' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'menu' },
	            this.state.orgs.map(function (org, idx) {
	              return _react2['default'].createElement(OrgDropdownItem, { org: org, key: org.id });
	            })
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: nameFieldClass },
	        _react2['default'].createElement(
	          'label',
	          null,
	          'Name'
	        ),
	        _react2['default'].createElement('input', { className: 'ui input', name: 'name', onChange: this.onMetaFieldChange })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'field' },
	        _react2['default'].createElement(
	          'label',
	          null,
	          'Description'
	        ),
	        _react2['default'].createElement('input', { className: 'ui input', name: 'description', onChange: this.onMetaFieldChange })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'field' },
	        _react2['default'].createElement(
	          'label',
	          null,
	          'Category'
	        ),
	        _react2['default'].createElement(
	          _reactSemantify.Dropdown,
	          { className: 'selection', init: { onChange: this.onCategorySelect } },
	          _react2['default'].createElement('div', { className: 'default text' }),
	          _react2['default'].createElement('i', { className: 'dropdown icon' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'menu' },
	            this.state.categories.map(function (cat, idx) {
	              return _react2['default'].createElement(
	                'div',
	                { className: 'item', 'data-value': cat.id, key: idx },
	                cat.name
	              );
	            })
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'field' },
	        _react2['default'].createElement(
	          'label',
	          null,
	          'Template'
	        ),
	        _react2['default'].createElement(
	          _reactSemantify.Dropdown,
	          { className: 'selection', init: { onChange: this.onTemplateSelect } },
	          _react2['default'].createElement('div', { className: 'default text' }),
	          _react2['default'].createElement('i', { className: 'dropdown icon' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'menu' },
	            this.state.templates.map(function (tmpl, idx) {
	              return _react2['default'].createElement(
	                'div',
	                { className: 'item', 'data-value': tmpl.id, key: idx },
	                tmpl.name
	              );
	            })
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'h5',
	        { className: 'ui top attached header', style: { marginTop: 0 } },
	        'Fields'
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'ui form attached segment', style: { marginBottom: '1em' } },
	        fields ? _lodash2['default'].map(fields, this.renderField) : null,
	        _react2['default'].createElement(NewField, { newFieldName: this.newFieldName, addField: this.addField })
	      ),
	      _react2['default'].createElement(
	        'button',
	        { className: 'ui button primary', type: 'submit' },
	        'Save asset'
	      ),
	      _react2['default'].createElement(
	        'button',
	        { className: 'ui button basic', type: 'submit' },
	        'Cancel'
	      )
	    );
	  }
	});
	
	var NewField = _react2['default'].createClass({
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
	    (0, _jQuery2['default'])(el).dropdown('hide');
	  },
	  dontSubmitOnEnter: function dontSubmitOnEnter(e) {
	    if (e.keyCode == 13) e.preventDefault();
	  },
	  render: function render() {
	    var newFieldNameClass = (0, _classnames2['default'])({
	      ui: true,
	      fluid: true,
	      small: true,
	      input: true,
	      error: this.state.error.name
	    });
	
	    return _react2['default'].createElement(
	      _reactSemantify.Dropdown,
	      { className: 'floating labeled icon button basic tiny', init: { action: this.setFieldType } },
	      _react2['default'].createElement('i', { className: 'plus icon' }),
	      _react2['default'].createElement(
	        'span',
	        { className: 'text' },
	        'Add additional field'
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'menu' },
	        _react2['default'].createElement(
	          'div',
	          { className: newFieldNameClass, style: { width: 'auto' } },
	          _react2['default'].createElement('input', { type: 'text', placeholder: 'Field name', onChange: this.setFieldName, value: this.state.field.name, onKeyDown: this.dontSubmitOnEnter })
	        ),
	        _react2['default'].createElement('div', { className: 'divider' }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'header' },
	          'Field type'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'item', 'data-value': 'text' },
	          'Text'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'item', 'data-value': 'checkbox' },
	          'Checkbox'
	        )
	      )
	    );
	  }
	});
	
	var OrgDropdownItem = _react2['default'].createClass({
	  displayName: 'OrgDropdownItem',
	
	  getInitialState: function getInitialState() {
	    return {
	      org: this.props.org
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    this.setState({
	      org: props.org
	    });
	  },
	  render: function render() {
	    var org = this.props.org;
	
	    if (!org.children || !org.children.length) {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'item', 'data-value': org.id, key: org.id },
	        org.name
	      );
	    } else {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'item', key: org.id },
	        _react2['default'].createElement('i', { className: 'dropdown icon' }),
	        _react2['default'].createElement(
	          'span',
	          { className: 'text' },
	          org.name
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'menu' },
	          org.children.map(function (child) {
	            return _react2['default'].createElement(OrgDropdownItem, { org: child, key: child.id });
	          })
	        )
	      );
	    }
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _lodash = __webpack_require__(20);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _moment = __webpack_require__(22);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _actions = __webpack_require__(39);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _files = __webpack_require__(40);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'show',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].get.complete, 'onGetAsset'), _reflux2['default'].listenTo(_actions2['default'].files.upload.complete, 'onFileUpload'), _reflux2['default'].listenTo(_actions2['default'].files.del.complete, 'onFileDelete')],
	  contextTypes: {
	    router: _react2['default'].PropTypes.func
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
	
	    _actions2['default'].get(assetId);
	  },
	  onGetAsset: function onGetAsset(asset) {
	    this.setState({
	      asset: asset
	    });
	    _actions2['default'].setActiveAsset(asset);
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
	
	      var at = (0, _moment2['default'])(date),
	          cutOff = (0, _moment2['default'])().subtract(1, 'day');
	
	      if (cutOff.isBefore(at)) return at.fromNow();else return at.format('M/D/YY H:mm');
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'ui header' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'content' },
	          asset.name
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'sub header' },
	          asset.description
	        )
	      ),
	      _react2['default'].createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Info'
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'ui attached segment' },
	        _react2['default'].createElement(
	          'table',
	          { className: 'ui table' },
	          _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	              'td',
	              null,
	              'Organization'
	            ),
	            _react2['default'].createElement(
	              'td',
	              { className: 'right aligned' },
	              asset.organization.name
	            )
	          ),
	          _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	              'td',
	              null,
	              'Category'
	            ),
	            _react2['default'].createElement(
	              'td',
	              { className: 'right aligned' },
	              asset.category ? asset.category.name : ''
	            )
	          ),
	          _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	              'td',
	              null,
	              'Created'
	            ),
	            _react2['default'].createElement(
	              'td',
	              { className: 'right aligned' },
	              formatDate(asset.createdAt),
	              ' by ',
	              asset.creator.firstName,
	              ' ',
	              asset.creator.lastName
	            )
	          ),
	          _react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	              'td',
	              null,
	              'Updated'
	            ),
	            _react2['default'].createElement(
	              'td',
	              { className: 'right aligned' },
	              formatDate(asset.updatedAt)
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Data'
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'ui attached segment' },
	        _react2['default'].createElement(
	          'table',
	          { className: 'ui table' },
	          _react2['default'].createElement(
	            'thead',
	            null,
	            _react2['default'].createElement(
	              'tr',
	              null,
	              _react2['default'].createElement(
	                'th',
	                null,
	                'Field'
	              ),
	              _react2['default'].createElement(
	                'th',
	                { className: 'right aligned' },
	                'Value'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'tbody',
	            null,
	            _lodash2['default'].map(asset.fields, function (field, idx) {
	              return _react2['default'].createElement(DataField, { field: field, key: idx });
	            })
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Notes',
	        _react2['default'].createElement(
	          'button',
	          { className: 'mini ui basic button', style: { float: 'right' } },
	          'New note'
	        )
	      ),
	      _react2['default'].createElement('div', { className: 'ui attached segment' }),
	      _react2['default'].createElement(
	        'h3',
	        { className: 'ui top attached header' },
	        'Files',
	        _react2['default'].createElement(
	          'button',
	          { className: 'mini ui basic button', style: { float: 'right' }, onClick: this.toggleNewFileForm },
	          'Upload file'
	        )
	      ),
	      this.state.showNewFileForm ? _react2['default'].createElement(_files.NewFileForm, { asset: this.state.asset }) : null,
	      _react2['default'].createElement(_files.FileList, { files: asset.files })
	    );
	  }
	});
	
	var DataField = _react2['default'].createClass({
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
	      return _react2['default'].createElement(
	        'tr',
	        null,
	        _react2['default'].createElement(
	          'td',
	          null,
	          field.name
	        ),
	        _react2['default'].createElement('td', null)
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
	        if (field.value === true) value = _react2['default'].createElement('i', { className: 'checkmark icon' });else value = _react2['default'].createElement('i', { className: 'minus icon' });
	        break;
	    }
	
	    return _react2['default'].createElement(
	      'tr',
	      null,
	      _react2['default'].createElement(
	        'td',
	        null,
	        field.name
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'right aligned' },
	        value
	      )
	    );
	  }
	});
	module.exports = exports['default'];
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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactSemantify = __webpack_require__(19);
	
	var _actions = __webpack_require__(33);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _store = __webpack_require__(32);
	
	var _store2 = _interopRequireDefault(_store);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'sidemenu',
	
	  mixins: [_reflux2['default'].listenTo(_store2['default'], 'onOrgsUpdate')],
	  getInitialState: function getInitialState() {
	    return {
	      orgs: _store2['default'].nestedOrgs
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    _actions2['default'].list();
	  },
	  onOrgsUpdate: function onOrgsUpdate(orgs) {
	    this.setState({
	      orgs: orgs.nestedOrgs
	    });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'item' },
	      _react2['default'].createElement('i', { className: 'folder icon' }),
	      'Organizations',
	      _react2['default'].createElement(
	        'div',
	        { className: 'menu' },
	        this.state.orgs.map(function (org) {
	          return org.parentId === null ? _react2['default'].createElement(RootOrg, { org: org, key: org.id }) : null;
	        })
	      )
	    );
	  }
	});
	
	var RootOrg = _react2['default'].createClass({
	  displayName: 'RootOrg',
	
	  render: function render() {
	    var org = this.props.org;
	
	    if (org.children && org.children.length) {
	      return _react2['default'].createElement(OrgWithChildren, { org: org });
	    } else {
	      return _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: 'org', params: { orgId: org.id }, className: 'item' },
	        org.name
	      );
	    }
	  }
	});
	
	var OrgWithChildren = _react2['default'].createClass({
	  displayName: 'OrgWithChildren',
	
	  render: function render() {
	    var org = this.props.org,
	        children = org.children;
	
	    return _react2['default'].createElement(
	      _reactSemantify.Dropdown,
	      { className: 'item', init: true },
	      _react2['default'].createElement('i', { className: 'dropdown icon' }),
	      org.name,
	      _react2['default'].createElement(
	        'div',
	        { className: 'menu' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: 'org', params: { orgId: org.id }, className: 'item' },
	          org.name
	        ),
	        children.map(function (child) {
	          return child.children && child.children.length ? _react2['default'].createElement(OrgWithChildren, { org: child, key: child.id }) : _react2['default'].createElement(RootOrg, { org: child, key: child.id });
	        })
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(33);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'listMenu',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].create.cancel, 'enableNewBtn'), _reflux2['default'].listenTo(_actions2['default'].create.complete, 'enableNewBtn')],
	  getInitialState: function getInitialState() {
	    return {
	      disableNewBtn: false
	    };
	  },
	  createNewOrg: function createNewOrg() {
	    if (this.state.disableNewBtn) return;
	
	    _actions2['default'].create.start();
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      _react2['default'].createElement(
	        'a',
	        { onClick: this.createNewOrg, className: newBtnClass },
	        _react2['default'].createElement('i', { className: 'icon plus square' }),
	        'Add an organization'
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'showMenu',
	
	  contextTypes: {
	    router: _react2['default'].PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    return {
	      orgId: this.context.router.getCurrentParams().orgId
	    };
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: 'newAsset', query: { org: this.state.orgId }, className: 'item' },
	        _react2['default'].createElement('i', { className: 'icon plus square' }),
	        'Add an asset'
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(35);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'listMenu',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].create.cancel, 'enableNewBtn'), _reflux2['default'].listenTo(_actions2['default'].create.complete, 'enableNewBtn')],
	  getInitialState: function getInitialState() {
	    return {
	      disableNewBtn: false
	    };
	  },
	  createNewTemplate: function createNewTemplate() {
	    if (this.state.disableNewBtn) return;
	
	    _actions2['default'].create.start();
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      _react2['default'].createElement(
	        'a',
	        { onClick: this.createNewTemplate, className: newBtnClass },
	        _react2['default'].createElement('i', { className: 'icon plus square' }),
	        'Add a template'
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _actions = __webpack_require__(38);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _store = __webpack_require__(37);
	
	var _store2 = _interopRequireDefault(_store);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'sidemenu',
	
	  mixins: [_reflux2['default'].listenTo(_store2['default'], 'onCategoriesUpdated')],
	  getInitialState: function getInitialState() {
	    return {
	      categories: _store2['default'].categories
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    _actions2['default'].list();
	  },
	  onCategoriesUpdated: function onCategoriesUpdated(categories) {
	    this.setState({
	      categories: categories
	    });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'item' },
	      _react2['default'].createElement('i', { className: 'columns icon' }),
	      'Categories',
	      _react2['default'].createElement(
	        'div',
	        { className: 'menu' },
	        this.state.categories.map(function (cat) {
	          return _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: 'category', key: cat.id, params: { catId: cat.id }, className: 'item' },
	            cat.name
	          );
	        })
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(38);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'listMenu',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].create.cancel, 'enableNewBtn'), _reflux2['default'].listenTo(_actions2['default'].create.complete, 'enableNewBtn')],
	  getInitialState: function getInitialState() {
	    return {
	      disableNewBtn: false
	    };
	  },
	  createNewCategory: function createNewCategory() {
	    if (this.state.disableNewBtn) return;
	
	    _actions2['default'].create.start();
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      _react2['default'].createElement(
	        'a',
	        { onClick: this.createNewCategory, className: btnClass },
	        _react2['default'].createElement('i', { className: 'icon plus square' }),
	        'Add a category'
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactSemantify = __webpack_require__(19);
	
	var _jQuery = __webpack_require__(21);
	
	var _jQuery2 = _interopRequireDefault(_jQuery);
	
	var _actions = __webpack_require__(39);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'showMenu',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].setActiveAsset, 'onAssetSelect'), _reflux2['default'].listenTo(_actions2['default'].update.complete, 'onAssetSelect')],
	  getInitialState: function getInitialState() {
	    return {
	      asset: {}
	    };
	  },
	  contextTypes: {
	    router: _react2['default'].PropTypes.func
	  },
	  onAssetSelect: function onAssetSelect(asset) {
	    this.setState({
	      asset: asset
	    });
	  },
	  onActiveChange: function onActiveChange(val) {
	    var asset = this.state.asset;
	    asset.active = val;
	    _actions2['default'].update(asset);
	  },
	  onFlaggedChange: function onFlaggedChange(val) {
	    var asset = this.state.asset;
	    asset.flagged = val;
	    _actions2['default'].update(asset);
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui vertical fluid menu' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'item' },
	        _react2['default'].createElement(ActiveToggle, { active: this.state.asset.active, onChange: this.onActiveChange })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'item' },
	        _react2['default'].createElement(FlaggedToggle, { flagged: this.state.asset.flagged, onChange: this.onFlaggedChange })
	      )
	    );
	  }
	});
	
	var ActiveToggle = _react2['default'].createClass({
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
	    (0, _jQuery2['default'])(el).checkbox({
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
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui toggle checkbox' },
	      _react2['default'].createElement('input', { type: 'checkbox', name: 'active', checked: this.state.active }),
	      _react2['default'].createElement(
	        'label',
	        null,
	        'Active'
	      )
	    );
	  }
	});
	
	var FlaggedToggle = _react2['default'].createClass({
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
	    (0, _jQuery2['default'])(el).checkbox({
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
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui toggle checkbox' },
	      _react2['default'].createElement('input', { type: 'checkbox', name: 'flagged', checked: this.state.flagged }),
	      _react2['default'].createElement(
	        'label',
	        null,
	        'Flagged'
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	            value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _restfulJs = __webpack_require__(44);
	
	var _restfulJs2 = _interopRequireDefault(_restfulJs);
	
	var _config = __webpack_require__(45);
	
	var _config2 = _interopRequireDefault(_config);
	
	var token = window.localStorage.getItem('token');
	
	var baseApi = (0, _restfulJs2['default'])(_config2['default'].API_HOST).header('Authorization', 'Bearer ' + token).prefixUrl(_config2['default'].API_PREFIX).port(_config2['default'].API_PORT);
	
	baseApi.updateToken = function (token) {
	            baseApi.header('Authorization', 'Bearer ' + token);
	};
	
	exports['default'] = baseApi;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _api = __webpack_require__(30);
	
	var _api2 = _interopRequireDefault(_api);
	
	var userApi = {
	  base: _api2['default'].all('users'),
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
	    return _api2['default'].allUrl('login', userApi.base.url() + '/login').post(user);
	  },
	  register: function register(user) {
	    return _api2['default'].allUrl('signup', userApi.base.url() + '/signup').post(user);
	  }
	};
	
	exports['default'] = userApi;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(33);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _reflux2['default'].createStore({
	  listenables: _actions2['default'],
	  init: function init() {
	    this.nestedOrgs = [];
	    this.flatOrgs = [];
	  },
	  sort: function sort(orgs) {
	    return orgs.sort(function (a, b) {
	      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;else return 0;
	    });
	  },
	  onListComplete: function onListComplete(orgs) {
	    this.nestedOrgs = this.sort(orgs);
	    this._trigger();
	  },
	  onFlatListComplete: function onFlatListComplete(orgs) {
	    this.flatOrgs = this.sort(orgs);
	    this._trigger();
	  },
	  onCreateComplete: function onCreateComplete(org) {
	    _actions2['default'].list();
	    _actions2['default'].flatList();
	  },
	  onUpdateComplete: function onUpdateComplete(org) {
	    _actions2['default'].list();
	    _actions2['default'].flatList();
	  },
	  onDelComplete: function onDelComplete() {
	    _actions2['default'].list();
	    _actions2['default'].flatList();
	  },
	  _trigger: function _trigger() {
	    this.trigger({
	      nestedOrgs: this.nestedOrgs,
	      flatOrgs: this.flatOrgs
	    });
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _api = __webpack_require__(46);
	
	var _api2 = _interopRequireDefault(_api);
	
	var actions = _reflux2['default'].createActions({
	  list: {
	    children: ['complete', 'error']
	  },
	  flatList: {
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
	
	exports['default'] = actions;
	
	actions.list.preEmit = function () {
	  _api2['default'].all().then(function (res) {
	    var orgs = res.body().map(function (r) {
	      return r.data();
	    });
	
	    actions.list.complete(orgs);
	  }, function (err) {
	    actions.list.error(err);
	  });
	};
	
	actions.flatList.preEmit = function () {
	  _api2['default'].all({ flat: true }).then(function (res) {
	    var orgs = res.body().map(function (r) {
	      return r.data();
	    });
	
	    actions.flatList.complete(orgs);
	  }, function (err) {
	    actions.flatList.error(err);
	  });
	};
	
	actions.get.preEmit = function (orgId) {
	  _api2['default'].get(orgId).then(function (res) {
	    var org = res.body().data();
	
	    actions.get.complete(org);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};
	
	actions.create.preEmit = function (org) {
	  if (!org) return;
	
	  _api2['default'].create(org).then(function (res) {
	    var newOrg = res.body();
	
	    actions.create.complete(newOrg);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};
	
	actions.update.preEmit = function (org) {
	  _api2['default'].update(org).then(function (res) {
	    var updatedOrg = res.body();
	
	    actions.update.complete(updatedOrg);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};
	
	actions.del.preEmit = function (org) {
	  _api2['default'].del(org).then(function () {
	    actions.del.complete(org);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};
	
	module.exports = actions;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactSemantify = __webpack_require__(19);
	
	var _actions = __webpack_require__(33);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _store = __webpack_require__(32);
	
	var _store2 = _interopRequireDefault(_store);
	
	__webpack_require__(50);
	
	var _lodash = __webpack_require__(20);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'card',
	
	  mixins: [_reflux2['default'].listenTo(_store2['default'], 'onOrgsUpdate')],
	  getInitialState: function getInitialState() {
	    return {
	      org: this.props.org,
	      orgs: _store2['default'].nestedOrgs || [],
	      editing: this.props['new'],
	      editTmp: _lodash2['default'].extend({}, this.props.org),
	      error: {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      org: nextProps.org,
	      editing: nextProps['new'],
	      editTmp: _lodash2['default'].extend({}, nextProps.org),
	      error: {}
	    });
	  },
	  onOrgsUpdate: function onOrgsUpdate(orgs) {
	    this.setState({
	      orgs: orgs.nestedOrgs
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
	      editTmp: _lodash2['default'].extend({}, this.state.org),
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
	
	    _actions2['default'].del(this.state.org);
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
	
	    if (!editTmp.id) _actions2['default'].create(this.state.editTmp);else _actions2['default'].update(this.state.editTmp);
	  },
	  cancelNewOrg: function cancelNewOrg(e) {
	    _actions2['default'].create.cancel();
	  },
	  render: function render() {
	    if (!this.state.editing) return this.renderNotEditing();else return this.renderEditing();
	  },
	  renderNotEditing: function renderNotEditing() {
	    var org = this.state.org;
	
	    function showParent(org) {
	      if (org.parent) {
	        return _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement('i', { className: 'level up icon' }),
	          org.parent.name
	        );
	      }
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui card' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'content' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'header' },
	          org.name
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'meta' },
	          showParent(org),
	          org.description
	        ),
	        _react2['default'].createElement('div', { className: 'description' })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'extra content' },
	        _react2['default'].createElement(
	          _reactSemantify.Dropdown,
	          { className: 'inline right icon', init: true, style: { marginRight: '8px' } },
	          _react2['default'].createElement('i', { className: 'setting icon' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'menu' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'item', onClick: this.editOrg },
	              _react2['default'].createElement('i', { className: 'edit icon' }),
	              'Edit'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'item', onClick: this.deleteOrg },
	              _react2['default'].createElement('i', { className: 'trash icon' }),
	              'Delete'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'right floated' },
	          _react2['default'].createElement('i', { className: 'icon server' }),
	          org.assets ? org.assets.length : '0',
	          ' Assets',
	          _react2['default'].createElement(
	            'span',
	            { style: { margin: '0 4px' } },
	            '|'
	          ),
	          _react2['default'].createElement(
	            _reactRouter.Link,
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui card' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'content' },
	        _react2['default'].createElement(
	          'form',
	          { onSubmit: this.saveOrg, className: 'ui form', noValidate: true },
	          _react2['default'].createElement(
	            'div',
	            { className: nameClass },
	            _react2['default'].createElement('input', { type: 'text', placeholder: 'Name', value: editTmp.name, required: true, onChange: this.onChange, name: 'name' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'field ui small input' },
	            _react2['default'].createElement('input', { type: 'text', placeholder: 'Description', value: editTmp.description, onChange: this.onChange, name: 'description' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'field ui small input' },
	            _react2['default'].createElement(
	              _reactSemantify.Dropdown,
	              { init: { onChange: this.setParent, allowCategorySelection: true }, name: 'parent', className: 'basic button' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'default text' },
	                'Parent organization'
	              ),
	              _react2['default'].createElement('i', { className: 'dropdown icon' }),
	              _react2['default'].createElement(
	                'div',
	                { className: 'menu' },
	                orgs.map(function (org) {
	                  return _react2['default'].createElement(NewOrgParentDropdownItem, { org: org });
	                })
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: 'ui button primary small', type: 'submit' },
	            'Save organization'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: 'ui button basic small', type: 'button', onClick: editTmp.id ? this.cancelEdit : this.cancelNewOrg },
	            'Cancel'
	          )
	        )
	      )
	    );
	  }
	});
	
	var NewOrgParentDropdownItem = _react2['default'].createClass({
	  displayName: 'NewOrgParentDropdownItem',
	
	  getInitialState: function getInitialState() {
	    return {
	      org: this.props.org
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    this.setState({
	      org: props.org
	    });
	  },
	  render: function render() {
	    var org = this.props.org;
	
	    if (!org.children || !org.children.length) {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'item', 'data-value': org.id, key: org.id },
	        org.name
	      );
	    } else {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'item' },
	        _react2['default'].createElement('i', { className: 'dropdown icon' }),
	        _react2['default'].createElement(
	          'span',
	          { className: 'text' },
	          org.name
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'menu' },
	          org.children.map(function (child) {
	            return _react2['default'].createElement(NewOrgParentDropdownItem, { org: child });
	          })
	        )
	      );
	    }
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _api = __webpack_require__(47);
	
	var _api2 = _interopRequireDefault(_api);
	
	var actions = _reflux2['default'].createActions({
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
	
	exports['default'] = actions;
	
	actions.list.preEmit = function () {
	  _api2['default'].all().then(function (res) {
	    var templates = res.body().map(function (r) {
	      return r.data();
	    });
	
	    actions.list.complete(templates);
	  }, function (err) {
	    actions.list.error(err);
	  });
	};
	
	actions.get.preEmit = function (templateId) {
	  _api2['default'].get(templateId).then(function (res) {
	    var template = res.body().data();
	
	    actions.get.complete(template);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};
	
	actions.create.preEmit = function (template) {
	  if (!template) return;
	
	  _api2['default'].create(template).then(function (res) {
	    var newTemplate = res.body();
	
	    actions.create.complete(newTemplate);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};
	
	actions.update.preEmit = function (template) {
	  _api2['default'].update(template).then(function (res) {
	    var updatedTemplate = res.body();
	
	    actions.update.complete(updatedTemplate);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};
	
	actions.del.preEmit = function (template) {
	  _api2['default'].del(template).then(function () {
	    actions.del.complete(template);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(35);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _reflux2['default'].createStore({
	  listenables: _actions2['default'],
	  init: function init() {
	    this.templates = [];
	  },
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
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(38);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _reflux2['default'].createStore({
	  listenables: _actions2['default'],
	  init: function init() {
	    this.categories = [];
	  },
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
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _api = __webpack_require__(48);
	
	var _api2 = _interopRequireDefault(_api);
	
	var actions = _reflux2['default'].createActions({
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
	
	exports['default'] = actions;
	
	actions.list.preEmit = function () {
	  _api2['default'].all().then(function (res) {
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
	
	  _api2['default'].create(category).then(function (res) {
	    var newCategory = res.body();
	
	    actions.create.complete(newCategory);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};
	
	actions.get.preEmit = function (id) {
	  _api2['default'].get(id).then(function (res) {
	    var category = res.body().data();
	
	    actions.get.complete(category);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};
	
	actions.update.preEmit = function (category) {
	  _api2['default'].update(category).then(function (res) {
	    var updatedCategory = res.body();
	
	    actions.update.complete(updatedCategory);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};
	
	actions.del.preEmit = function (category) {
	  _api2['default'].del(category).then(function () {
	    actions.del.complete(category);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _api = __webpack_require__(49);
	
	var _api2 = _interopRequireDefault(_api);
	
	var actions = _reflux2['default'].createActions({
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
	
	exports['default'] = actions;
	
	actions.get.preEmit = function (id) {
	  _api2['default'].get(id).then(function (res) {
	    var asset = res.body().data();
	
	    actions.get.complete(asset);
	  }, function (err) {
	    actions.get.error(err);
	  });
	};
	
	actions.create.preEmit = function (asset) {
	  _api2['default'].create(asset).then(function (res) {
	    var newAsset = res.body();
	
	    actions.create.complete(newAsset);
	  }, function (err) {
	    actions.create.error(err);
	  });
	};
	
	actions.update.preEmit = function (asset) {
	  _api2['default'].update(asset).then(function (res) {
	    var updatedAsset = res.body();
	
	    actions.update.complete(updatedAsset);
	  }, function (err) {
	    actions.update.error(err);
	  });
	};
	
	actions.del.preEmit = function (asset) {
	  _api2['default'].del(asset).then(function () {
	    actions.del.complete(asset);
	  }, function (err) {
	    actions.del.error(err);
	  });
	};
	
	var fileActions = _reflux2['default'].createActions({
	  upload: {
	    children: ['complete', 'error']
	  },
	  del: {
	    children: ['complete', 'error']
	  }
	});
	
	fileActions.upload.preEmit = function (asset, upload) {
	  _api2['default'].files.upload(asset.id, upload).then(function (res) {
	    var file = res.body();
	
	    actions.files.upload.complete(file);
	  }, function (err) {
	    actions.files.upload.error(err);
	  });
	};
	
	fileActions.del.preEmit = function (file) {
	  _api2['default'].files.del(file.assetId, file.id).then(function () {
	    actions.files.del.complete(file);
	  }, function (err) {
	    actions.files.del.error(err);
	  });
	};
	
	actions.files = fileActions;
	
	module.exports = actions;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _actions = __webpack_require__(39);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _classnames = __webpack_require__(43);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _moment = __webpack_require__(22);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var NewFileForm = _react2['default'].createClass({
	  displayName: 'NewFileForm',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].files.upload.complete, 'onUploadComplete')],
	  getInitialState: function getInitialState() {
	    return {
	      upload: {}
	    };
	  },
	  setFileName: function setFileName(e) {
	    var name = e.target.value,
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
	
	    _actions2['default'].files.upload(this.props.asset, this.state.upload);
	  },
	  onUploadComplete: function onUploadComplete() {
	    this.setState({
	      upload: {}
	    });
	
	    this.refs.uploadForm.getDOMNode().reset();
	  },
	  render: function render() {
	    var selectFileBtnClass = (0, _classnames2['default'])('ui button', {
	      green: this.state.upload.file !== undefined
	    });
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui attached segment' },
	      _react2['default'].createElement(
	        'form',
	        { className: 'ui fluid form', onSubmit: this.uploadFile, ref: 'uploadForm' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'three fields' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'ui small input field' },
	            _react2['default'].createElement('input', { placeholder: 'Short description (optional)', maxLength: '60', type: 'text', onChange: this.setFileName, className: '' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'field' },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'file', className: selectFileBtnClass },
	              this.state.upload.file ? this.state.upload.file.name : 'Select file',
	              _react2['default'].createElement('input', { type: 'file', id: 'file', name: 'file', onChange: this.selectFile, ref: 'file', style: { display: 'none' } })
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'field' },
	            _react2['default'].createElement(
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
	
	exports.NewFileForm = NewFileForm;
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
	
	var FileList = _react2['default'].createClass({
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
	    _actions2['default'].files.del(file);
	  },
	  fileIcon: function fileIcon(file) {
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
	
	      var at = (0, _moment2['default'])(date),
	          cutOff = (0, _moment2['default'])().subtract(1, 'day');
	
	      if (cutOff.isBefore(at)) return at.fromNow();else return 'at ' + at.format('M/D/YY H:mm');
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui bottom attached segment' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'ui segments' },
	        files.map(function (file, idx) {
	          return _react2['default'].createElement(
	            'div',
	            { className: 'ui clearing segment', key: file.id || idx },
	            _react2['default'].createElement(
	              'a',
	              { href: '/' + file.path, target: '_blank' },
	              _react2['default'].createElement('i', { className: _this.fileIcon(file) }),
	              file.name || file.originalFilename
	            ),
	            _react2['default'].createElement(
	              'small',
	              { style: { float: 'right' } },
	              file.creator.firstName,
	              ' ',
	              file.creator.lastName,
	              ', ',
	              formatDate(file.createdAt),
	              _react2['default'].createElement('i', { className: 'trash outline icon', style: { marginLeft: '8px' }, onClick: _this.deleteFile.bind(_this, file) })
	            )
	          );
	        })
	      )
	    );
	  }
	});
	exports.FileList = FileList;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactSemantify = __webpack_require__(19);
	
	var _classnames = __webpack_require__(43);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _store = __webpack_require__(36);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(35);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'card',
	
	  mixins: [_reflux2['default'].listenTo(_actions2['default'].get.complete, 'getOriginalTemplate')],
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
	
	    if (editing) _actions2['default'].get(this.state.template.id);
	
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
	    _actions2['default'].create.cancel();
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
	
	    if (!template.id) _actions2['default'].create(template);else _actions2['default'].update(template);
	  },
	  deleteTemplate: function deleteTemplate() {
	    if (!window.confirm('Are you sure you want to delete this template?')) return;
	
	    _actions2['default'].del(this.state.template);
	  },
	  render: function render() {
	    if (!this.state.editing) return this.renderNotEditing();else return this.renderEditing();
	  },
	  renderDetails: function renderDetails() {
	    if (!this.state.showDetails) return;
	
	    var template = this.state.template;
	
	    return _react2['default'].createElement(
	      'table',
	      { className: 'ui table' },
	      _react2['default'].createElement(
	        'thead',
	        null,
	        _react2['default'].createElement(
	          'tr',
	          null,
	          _react2['default'].createElement(
	            'th',
	            null,
	            'Field name'
	          ),
	          _react2['default'].createElement(
	            'th',
	            null,
	            'Type'
	          ),
	          _react2['default'].createElement(
	            'th',
	            null,
	            'Choices'
	          ),
	          _react2['default'].createElement(
	            'th',
	            null,
	            'Allow multiple'
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'tbody',
	        null,
	        template.fields.map(function (field, idx) {
	          return _react2['default'].createElement(
	            'tr',
	            { key: idx },
	            _react2['default'].createElement(
	              'td',
	              null,
	              field.name
	            ),
	            _react2['default'].createElement(
	              'td',
	              null,
	              field.fieldType
	            ),
	            _react2['default'].createElement(
	              'td',
	              null,
	              field.fieldType === 'select' && field.choices.length ? field.choices.map(function (choice, idx) {
	                return _react2['default'].createElement(
	                  'div',
	                  { key: idx },
	                  choice
	                );
	              }) : '-'
	            ),
	            _react2['default'].createElement(
	              'td',
	              null,
	              field.fieldType === 'select' && field.choices.length && field.multiple ? _react2['default'].createElement('i', { className: 'check icon' }) : '-'
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
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui card' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'content' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'header' },
	          template.name
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'meta' },
	          template.description
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'description' },
	          this.renderDetails()
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'extra content' },
	        _react2['default'].createElement(
	          _reactSemantify.Dropdown,
	          { className: 'inline right icon', init: { action: 'hide' }, style: { marginRight: '8px' } },
	          _react2['default'].createElement('i', { className: 'setting icon' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'menu' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'item', onClick: this.toggleEdit },
	              _react2['default'].createElement('i', { className: 'edit icon' }),
	              'Edit'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'item', onClick: this.deleteTemplate },
	              _react2['default'].createElement('i', { className: 'trash icon' }),
	              'Delete'
	            )
	          )
	        ),
	        _react2['default'].createElement(
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
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'fields' },
	          _react2['default'].createElement('div', { className: 'one wide field' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'fourteen wide inline field' },
	            _react2['default'].createElement(
	              _reactSemantify.Checkbox,
	              { init: { onChange: this.fieldAllowMultiple.bind(this, fieldIdx) } },
	              _react2['default'].createElement('input', { type: 'checkbox', checked: field.multiple }),
	              _react2['default'].createElement(
	                'label',
	                null,
	                'Allow multiple selections'
	              )
	            )
	          ),
	          _react2['default'].createElement('div', { className: 'one wide field' })
	        ),
	        field.choices.map(function (choice, idx) {
	          return _react2['default'].createElement(
	            'div',
	            { className: 'fields', key: idx },
	            _react2['default'].createElement('div', { className: 'one wide field' }),
	            _react2['default'].createElement(
	              'div',
	              { className: 'ten wide field ui small input' },
	              _react2['default'].createElement('input', { type: 'text', placeholder: 'Choice', value: choice, onChange: _this.onChoiceChange.bind(_this, idx, fieldIdx) })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'two wide field', style: { marginTop: '7px' } },
	              _react2['default'].createElement('i', { className: 'remove icon link', onClick: _this.removeChoice.bind(_this, idx, fieldIdx) })
	            )
	          );
	        }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'fields', style: { marginBottom: 10 } },
	          _react2['default'].createElement('div', { className: 'one wide field' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'eight wide field' },
	            _react2['default'].createElement(
	              'button',
	              { className: 'ui labeled icon button basic tiny', type: 'button', onClick: this.addChoice.bind(this, fieldIdx) },
	              _react2['default'].createElement('i', { className: 'plus icon' }),
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
	        fields = template.fields;
	
	    var nameClass = (0, _classnames2['default'])({
	      field: true,
	      ui: true,
	      small: true,
	      input: true,
	      error: this.state.error.name
	    });
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui card' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'content' },
	        _react2['default'].createElement(
	          'form',
	          { onSubmit: this.saveTemplate, className: 'ui form', noValidate: true },
	          _react2['default'].createElement(
	            'div',
	            { className: nameClass },
	            _react2['default'].createElement('input', { type: 'text', placeholder: 'Name', value: template.name, required: true, onChange: this.onChange, name: 'name' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'field ui small input' },
	            _react2['default'].createElement('input', { type: 'text', placeholder: 'Description', value: template.description, onChange: this.onChange, name: 'description' })
	          ),
	          _react2['default'].createElement(
	            'h5',
	            { className: 'ui top attached header', style: { marginTop: 0 } },
	            'Fields'
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'ui attached segment', style: { marginBottom: 10 } },
	            fields.map(function (field, idx) {
	              return _react2['default'].createElement(
	                'div',
	                { key: idx },
	                _react2['default'].createElement(
	                  'div',
	                  { className: 'fields' },
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'ten wide field ui small input' },
	                    _react2['default'].createElement('input', { type: 'text', placeholder: 'Field name', value: field.name, onChange: _this2.onFieldNameChange.bind(_this2, idx) })
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'five wide field ui small input' },
	                    _react2['default'].createElement(
	                      _reactSemantify.Dropdown,
	                      { init: { onChange: _this2.onFieldTypeChange.bind(_this2, idx) }, className: 'selection fluid' },
	                      _react2['default'].createElement('i', { className: 'dropdown icon' }),
	                      _react2['default'].createElement(
	                        'div',
	                        { className: 'default text' },
	                        field.fieldType
	                      ),
	                      _react2['default'].createElement(
	                        'div',
	                        { className: 'menu' },
	                        _react2['default'].createElement(
	                          'div',
	                          { className: 'item' },
	                          'Text'
	                        ),
	                        _react2['default'].createElement(
	                          'div',
	                          { className: 'item' },
	                          'Select'
	                        ),
	                        _react2['default'].createElement(
	                          'div',
	                          { className: 'item' },
	                          'Checkbox'
	                        )
	                      )
	                    )
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'one wide field', style: { marginTop: '7px' } },
	                    _react2['default'].createElement('i', { className: 'remove icon link', onClick: _this2.removeField.bind(_this2, idx) })
	                  )
	                ),
	                _this2.renderChoices(field, idx)
	              );
	            }),
	            _react2['default'].createElement(
	              'div',
	              { className: 'field' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'eight wide field' },
	                _react2['default'].createElement(
	                  'button',
	                  { className: 'ui labeled icon button basic tiny', type: 'button', onClick: this.addField },
	                  _react2['default'].createElement('i', { className: 'plus icon' }),
	                  'Add field'
	                )
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: 'ui button primary small', type: 'submit' },
	            'Save template'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: 'ui button basic small', type: 'button', onClick: template.id ? this.toggleEdit : this.cancelNewTemplate },
	            'Cancel'
	          )
	        )
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(2);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	var _reactSemantify = __webpack_require__(19);
	
	var _reactRouter = __webpack_require__(3);
	
	var _lodash = __webpack_require__(20);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(43);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _store = __webpack_require__(37);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(38);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'card',
	
	  getInitialState: function getInitialState() {
	    return {
	      category: this.props.category,
	      editing: this.props['new'],
	      editTmp: _lodash2['default'].extend({}, this.props.category),
	      error: {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      category: nextProps.category,
	      editing: nextProps['new'],
	      editTmp: _lodash2['default'].extend({}, nextProps.category),
	      error: {}
	    });
	  },
	  setEditing: function setEditing() {
	    this.setState({
	      editing: !this.state.editing,
	      editTmp: _lodash2['default'].extend({}, this.props.category),
	      error: {}
	    });
	  },
	  cancelNew: function cancelNew() {
	    _actions2['default'].create.cancel();
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
	
	    if (editTmp.id) _actions2['default'].update(editTmp);else _actions2['default'].create(editTmp);
	  },
	  deleteCategory: function deleteCategory() {
	    _actions2['default'].del(this.state.category);
	  },
	  render: function render() {
	    return this.state.editing ? this.renderEditing() : this.renderNotEditing();
	  },
	  renderNotEditing: function renderNotEditing() {
	    var category = this.state.category;
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui card' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'content' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'header' },
	          category.name
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'meta' },
	          category.description
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'extra content' },
	        _react2['default'].createElement(
	          _reactSemantify.Dropdown,
	          { className: 'inline right icon', init: true, style: { marginRight: '8px' } },
	          _react2['default'].createElement('i', { className: 'setting icon' }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'menu' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'item', onClick: this.setEditing },
	              _react2['default'].createElement('i', { className: 'edit icon' }),
	              'Edit'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'item', onClick: this.deleteCategory },
	              _react2['default'].createElement('i', { className: 'trash icon' }),
	              'Delete'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'right floated' },
	          _react2['default'].createElement('i', { className: 'icon server' }),
	          category.assetCount,
	          ' Assets',
	          _react2['default'].createElement(
	            'span',
	            { style: { margin: '0 4px' } },
	            '|'
	          ),
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: 'category', params: { catId: category.id } },
	            'Go to asset list'
	          )
	        )
	      )
	    );
	  },
	  renderEditing: function renderEditing() {
	    var category = this.state.editTmp;
	
	    var nameClass = (0, _classnames2['default'])({
	      'field ui input small': true,
	      error: this.state.error.name
	    });
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'ui card' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'content' },
	        _react2['default'].createElement(
	          'form',
	          { onSubmit: this.saveCategory, className: 'ui form', noValidate: true },
	          _react2['default'].createElement(
	            'div',
	            { className: nameClass },
	            _react2['default'].createElement('input', { type: 'text', name: 'name', placeholder: 'Name', value: category.name, required: true, onChange: this.onFieldChange })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'field ui input small' },
	            _react2['default'].createElement('input', { type: 'text', name: 'description', placeholder: 'Description', value: category.description, onChange: this.onFieldChange })
	          ),
	          _react2['default'].createElement(
	            'button',
	            { type: 'submit', className: 'ui button primary small' },
	            'Save category'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { type: 'button', onClick: category.id ? this.setEditing : this.cancelNew, className: 'ui button basic small' },
	            'Cancel'
	          )
	        )
	      )
	    );
	  }
	});
	module.exports = exports['default'];

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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  API_HOST: 'localhost',
	  API_PORT: 3000,
	  API_PREFIX: 'v1'
	};
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _api = __webpack_require__(30);
	
	var _api2 = _interopRequireDefault(_api);
	
	var orgApi = {
	  base: _api2['default'].all('organizations'),
	  all: function all(params) {
	    return orgApi.base.getAll(params);
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
	
	exports['default'] = orgApi;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _api = __webpack_require__(30);
	
	var _api2 = _interopRequireDefault(_api);
	
	var templateApi = {
	  base: _api2['default'].all('templates'),
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
	
	exports['default'] = templateApi;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _api = __webpack_require__(30);
	
	var _api2 = _interopRequireDefault(_api);
	
	var categoryApi = {
	  base: _api2['default'].all('categories'),
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
	
	exports['default'] = categoryApi;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _api = __webpack_require__(30);
	
	var _api2 = _interopRequireDefault(_api);
	
	var assetApi = {
	  base: _api2['default'].all('assets'),
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
	      return _api2['default'].one('assets', assetId).all('files')['delete'](fileId);
	    }
	  }
	};
	
	exports['default'] = assetApi;
	
	function uploadFile(assetId, upload) {
	  var data = new FormData();
	
	  data.append('file', upload.file);
	  data.append('name', upload.name);
	
	  return _api2['default'].addRequestInterceptor(function (data, headers) {
	    headers['Content-Type'] = 'multipart/form-data';
	    return data;
	  }).one('assets', assetId).all('files').post(data);
	}
	module.exports = exports['default'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZkOTI0MDljYjU0MzVhMWFhMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVmbHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RSb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b3BuYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2lkZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdXNlci9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy91c2VyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdXNlci92aWV3cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy91c2VyL3ZpZXdzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3VzZXIvdmlld3MvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy91c2VyL21peGlucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL3ZpZXdzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy92aWV3cy9zaG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy92aWV3cy9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NhdGVnb3JpZXMvdmlld3MvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL3ZpZXdzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXNzZXRzL3ZpZXdzL25ldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hc3NldHMvdmlld3Mvc2hvdy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJTZW1hbnRpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL29yZ2FuaXphdGlvbnMvdmlld3Mvc2lkZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy92aWV3cy9saXN0TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL3ZpZXdzL3Nob3dNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy92aWV3cy9saXN0TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL3ZpZXdzL3NpZGVtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NhdGVnb3JpZXMvdmlld3MvbGlzdE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXNzZXRzL3ZpZXdzL3Nob3dNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdXNlci9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy92aWV3cy9jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NhdGVnb3JpZXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hc3NldHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hc3NldHMvdmlld3MvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGVtcGxhdGVzL3ZpZXdzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy92aWV3cy9jYXJkLmpzIiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXN0ZnVsXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90ZW1wbGF0ZXMvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NhdGVnb3JpZXMvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc05hbWVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFF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aUJBQ0EscUJBQXFCLENBQUMsVUFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQzdDLFlBQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztBQUNoRCxZQUFPLElBQUksQ0FBQztJQUNiLENBQUMsQ0FDRCxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN0QixHQUFHLENBQUMsT0FBTyxDQUFDLENBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25COzs7Ozs7O0FDakNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxLQUFJO0FBQ0o7O0FBRUEsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUEsRUFBQyIsImZpbGUiOiI2ZmQ5MjQwOWNiNTQzNWExYWEzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNmZkOTI0MDljYjU0MzVhMWFhMzFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQge1xuICBSb3V0ZUhhbmRsZXIsXG4gIFJvdXRlLFxuICBEZWZhdWx0Um91dGUsXG4gIE5hdmlnYXRpb24sXG4gIGRlZmF1bHQgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vLyBuYXYgY29tcG9uZW50c1xuaW1wb3J0IFRvcE5hdiBmcm9tICcuL2NvbXBvbmVudHMvdG9wbmF2JztcbmltcG9ydCBTaWRlbWVudSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZW1lbnUnO1xuXG4vLyB1c2VyIGNvbXBvbmVudHNcbmltcG9ydCB1c2VyU3RvcmUgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvc3RvcmUnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy91c2VyL2FjdGlvbnMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3ZpZXdzL2xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci92aWV3cy9yZWdpc3Rlcic7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbXBvbmVudHMvdXNlci92aWV3cy9hY2NvdW50JztcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZWQsIFVuYXV0aGVudGljYXRlZCB9IGZyb20gJy4vY29tcG9uZW50cy91c2VyL21peGlucyc7XG5cbi8vIG9yZ2FuaXphdGlvbiBjb21wb25lbnRzXG5pbXBvcnQgT3JncyBmcm9tICcuL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy92aWV3cy9saXN0JztcbmltcG9ydCBPcmcgZnJvbSAnLi9jb21wb25lbnRzL29yZ2FuaXphdGlvbnMvdmlld3Mvc2hvdyc7XG5cbi8vIHRlbXBsYXRlIGNvbXBvbmVudHNcbmltcG9ydCBUZW1wbGF0ZXMgZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy92aWV3cy9saXN0JztcblxuLy8gY2F0ZWdvcnkgY29tcG9uZW50c1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvdmlld3MvbGlzdCc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvdmlld3Mvc2hvdyc7XG5cbi8vIGFzc2V0IGNvbXBvbmVudHNcbmltcG9ydCBOZXdBc3NldCBmcm9tICcuL2NvbXBvbmVudHMvYXNzZXRzL3ZpZXdzL25ldyc7XG5pbXBvcnQgU2hvd0Fzc2V0IGZyb20gJy4vY29tcG9uZW50cy9hc3NldHMvdmlld3Mvc2hvdyc7XG5cbmNvbnN0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgTmF2aWdhdGlvblxuICBdLFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVIYW5kbGVyLz5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgRGFzaGJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5jb25zdCBMb2dnZWRJbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgQXV0aGVudGljYXRlZCxcbiAgICBSZWZsdXgubGlzdGVuVG8odXNlckFjdGlvbnMubG9nb3V0LCAnb25Mb2dvdXQnKVxuICBdLFxuICBvbkxvZ291dDogZnVuY3Rpb24odG9rZW4sIHVzZXIpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25UbygnbG9naW4nKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBwYWdlIGdyaWRcIj5cbiAgICAgICAgPFRvcE5hdi8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8U2lkZW1lbnUvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VsdmUgd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5jb25zdCBMb2dnZWRPdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFVuYXV0aGVudGljYXRlZFxuICBdLFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVIYW5kbGVyLz5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3Qgcm91dGVzID0gKFxuICA8Um91dGUgaGFuZGxlcj17QXBwfT5cbiAgICA8Um91dGUgcGF0aD0nLycgbmFtZT0ndXNlcicgaGFuZGxlcj17TG9nZ2VkT3V0fT5cbiAgICAgIDxEZWZhdWx0Um91dGUgbmFtZT0nbG9naW4nIGhhbmRsZXI9e0xvZ2lufS8+XG4gICAgICA8Um91dGUgcGF0aD0ncmVnaXN0ZXInIG5hbWU9J3JlZ2lzdGVyJyBoYW5kbGVyPXtSZWdpc3Rlcn0vPlxuICAgIDwvUm91dGU+XG4gICAgPFJvdXRlIHBhdGg9Jy9hcHAnIG5hbWU9J2FwcCcgaGFuZGxlcj17TG9nZ2VkSW59PlxuICAgICAgPERlZmF1bHRSb3V0ZSBuYW1lPSdkYXNoYm9hcmQnIGhhbmRsZXI9e0Rhc2hib2FyZH0vPlxuICAgICAgPFJvdXRlIHBhdGg9J2FjY291bnQnIG5hbWU9J2FjY291bnQnIGhhbmRsZXI9e0FjY291bnR9Lz5cblxuICAgICAgPFJvdXRlIHBhdGg9J29yZ3MnIG5hbWU9J29yZ3MnIGhhbmRsZXI9e09yZ3N9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPSdvcmcvOm9yZ0lkJyBuYW1lPSdvcmcnIGhhbmRsZXI9e09yZ30vPlxuXG4gICAgICA8Um91dGUgcGF0aD0nYXNzZXRzL25ldycgbmFtZT0nbmV3QXNzZXQnIGhhbmRsZXI9e05ld0Fzc2V0fS8+XG4gICAgICA8Um91dGUgcGF0aD0nYXNzZXRzLzphc3NldElkJyBuYW1lPSdhc3NldCcgaGFuZGxlcj17U2hvd0Fzc2V0fS8+XG5cbiAgICAgIDxSb3V0ZSBwYXRoPSd0ZW1wbGF0ZXMnIG5hbWU9J3RlbXBsYXRlcycgaGFuZGxlcj17VGVtcGxhdGVzfS8+XG5cbiAgICAgIDxSb3V0ZSBwYXRoPSdjYXRlZ29yaWVzJyBuYW1lPSdjYXRlZ29yaWVzJyBoYW5kbGVyPXtDYXRlZ29yaWVzfS8+XG4gICAgICA8Um91dGUgcGF0aD0nY2F0ZWdvcmllcy86Y2F0SWQnIG5hbWU9J2NhdGVnb3J5JyBoYW5kbGVyPXtDYXRlZ29yeX0vPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGU+XG4pO1xuXG5Sb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhhc2hMb2NhdGlvbiwgZnVuY3Rpb24oSGFuZGxlcikge1xuICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWZsdXg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlZmx1eFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJvdXRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RSb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncmVhY3Qtc2VtYW50aWZ5JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCB7IExpbmssIE5hdmlnYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHVzZXJTdG9yZSBmcm9tICcuL3VzZXIvc3RvcmUnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4vdXNlci9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtcbiAgICBSZWZsdXgubGlzdGVuVG8odXNlclN0b3JlLCAnb25Vc2VyVXBkYXRlJyksXG4gICAgTmF2aWdhdGlvblxuICBdLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB7fVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdXNlckFjdGlvbnMubWUoKTtcbiAgfSxcbiAgbG9nb3V0OiBmdW5jdGlvbigpIHtcbiAgICB1c2VyQWN0aW9ucy5sb2dvdXQoKTtcbiAgfSxcbiAgb25Vc2VyVXBkYXRlOiBmdW5jdGlvbih0b2tlbiwgdXNlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjogdXNlclxuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4dGVlbiB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgcm9sZT1cIm1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgbGFyZ2UgbWVudVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICBBc3NldCBNYW5hZ2VyXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJ1aSBpdGVtXCIgaW5pdD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIHVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICB7dXNlci5maXJzdE5hbWV9IHt1c2VyLmxhc3ROYW1lID8gdXNlci5sYXN0TmFtZSA6ICcnfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiYWNjb3VudFwiIGNsYXNzTmFtZT1cIml0ZW1cIj5NeSBBY2NvdW50PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCIgb25DbGljaz17dGhpcy5sb2dvdXR9PkxvZ291dDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3RvcG5hdi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0YXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncmVhY3Qtc2VtYW50aWZ5JztcblxuLy8gb3JnYW5pemF0aW9uIG1lbnVzXG5pbXBvcnQgT3JnTWVudSBmcm9tICcuL29yZ2FuaXphdGlvbnMvdmlld3Mvc2lkZW1lbnUnO1xuaW1wb3J0IE9yZ0xpc3RNZW51IGZyb20gJy4vb3JnYW5pemF0aW9ucy92aWV3cy9saXN0TWVudSc7XG5pbXBvcnQgT3JnU2hvd01lbnUgZnJvbSAnLi9vcmdhbml6YXRpb25zL3ZpZXdzL3Nob3dNZW51JztcblxuLy8gdGVtcGxhdGUgbWVudXNcbmltcG9ydCBUZW1wbGF0ZUxpc3RNZW51IGZyb20gJy4vdGVtcGxhdGVzL3ZpZXdzL2xpc3RNZW51JztcblxuLy8gY2F0ZWdvcnkgbWVudXNcbmltcG9ydCBDYXRlZ29yeU1lbnUgZnJvbSAnLi9jYXRlZ29yaWVzL3ZpZXdzL3NpZGVtZW51JztcbmltcG9ydCBDYXRlZ29yeUxpc3RNZW51IGZyb20gJy4vY2F0ZWdvcmllcy92aWV3cy9saXN0TWVudSc7XG5cbi8vIGFzc2V0IG1lbnVzXG5pbXBvcnQgQXNzZXRTaG93TWVudSBmcm9tICcuL2Fzc2V0cy92aWV3cy9zaG93TWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgU3RhdGVcbiAgXSxcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgd2lkZSBjb2x1bW5cIj5cbiAgICAgICAge3RoaXMuaXNBY3RpdmUoJ29yZ3MnKSA/IDxPcmdMaXN0TWVudS8+IDogbnVsbH1cbiAgICAgICAge3RoaXMuaXNBY3RpdmUoJ29yZycpID8gPE9yZ1Nob3dNZW51Lz4gOiBudWxsfVxuICAgICAgICB7dGhpcy5pc0FjdGl2ZSgndGVtcGxhdGVzJykgPyA8VGVtcGxhdGVMaXN0TWVudS8+IDogbnVsbH1cbiAgICAgICAge3RoaXMuaXNBY3RpdmUoJ2NhdGVnb3JpZXMnKSA/IDxDYXRlZ29yeUxpc3RNZW51Lz4gOiBudWxsfVxuICAgICAgICB7dGhpcy5pc0FjdGl2ZSgnYXNzZXQnKSA/IDxBc3NldFNob3dNZW51Lz4gOiBudWxsfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdmVydGljYWwgZmx1aWQgbWVudVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpY29uIGlucHV0IGZsdWlkXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIi8+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNlYXJjaCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgIDxMaW5rIHRvPVwiZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaG9tZSBpY29uXCI+PC9pPlxuICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgICA8T3JnTWVudSAvPlxuXG4gICAgICAgICAgPENhdGVnb3J5TWVudSAvPlxuICAgICAgICBcbiAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPVwidWkgZHJvcGRvd24gaXRlbVwiIGluaXQ9e3RydWV9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBkcm9wZG93blwiPjwvaT5cbiAgICAgICAgICAgIEFkbWluXG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwib3Jnc1wiIGNsYXNzTmFtZT1cIml0ZW1cIj5Pcmdhbml6YXRpb25zPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cInRlbXBsYXRlc1wiIGNsYXNzTmFtZT1cIml0ZW1cIj5UZW1wbGF0ZXM8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiY2F0ZWdvcmllc1wiIGNsYXNzTmFtZT1cIml0ZW1cIj5DYXRlZ29yaWVzPC9MaW5rPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+VXNlcnM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9zaWRlbWVudS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IGJhc2VBcGkgZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgUmVmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgbGlzdGVuYWJsZXM6IGFjdGlvbnMsXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubG9hZCgpO1xuICB9LFxuICBsb2FkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMudG9rZW4pO1xuICB9LFxuICBvbkxvZ2luQ29tcGxldGU6IGZ1bmN0aW9uKHRva2VuLCB1c2VyKSB7XG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgdGhpcy5zYXZlKCk7XG4gICAgYmFzZUFwaS51cGRhdGVUb2tlbih0b2tlbik7XG4gIH0sXG4gIG9uUmVnaXN0ZXJDb21wbGV0ZTogZnVuY3Rpb24odG9rZW4sIHVzZXIpIHtcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICBiYXNlQXBpLnVwZGF0ZVRva2VuKHRva2VuKTtcbiAgfSxcbiAgb25NZUNvbXBsZXRlOiBmdW5jdGlvbih1c2VyKSB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfSxcbiAgb25NZUVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0sXG4gIG9uVXBkYXRlQ29tcGxldGU6IGZ1bmN0aW9uKHVzZXIpIHtcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9LFxuICBvbkxvZ291dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2tlbiA9IHVuZGVmaW5lZDtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMudG9rZW4sIHRoaXMudXNlcik7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy91c2VyL3N0b3JlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5cbmltcG9ydCB1c2VyQXBpIGZyb20gJy4vYXBpJztcblxuY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKHtcbiAgbG9naW46IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIHJlZ2lzdGVyOiB7XG4gICAgY2hpbGRyZW46IFsnY29tcGxldGUnLCAnZXJyb3InXVxuICB9LFxuICBtZToge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfSxcbiAgdmFsaWRhdGU6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIHVwZGF0ZToge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfSxcbiAgbG9nb3V0OiB7fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XG5cbmFjdGlvbnMubG9naW4ucHJlRW1pdCA9IGZ1bmN0aW9uKHVzZXIpIHtcbiAgdXNlckFwaS5sb2dpbih1c2VyKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciBkYXRhID0gcmVzLmJvZHkoKTtcblxuICAgIGFjdGlvbnMubG9naW4uY29tcGxldGUoZGF0YS50b2tlbiwgZGF0YS51c2VyKTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5sb2dpbi5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMucmVnaXN0ZXIucHJlRW1pdCA9IGZ1bmN0aW9uKHVzZXIpIHtcbiAgdXNlckFwaS5yZWdpc3Rlcih1c2VyKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciBkYXRhID0gcmVzLmJvZHkoKTtcblxuICAgIGFjdGlvbnMucmVnaXN0ZXIuY29tcGxldGUoZGF0YS50b2tlbiwgZGF0YS51c2VyKTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5yZWdpc3Rlci5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMubWUucHJlRW1pdCA9IGZ1bmN0aW9uKCkge1xuICB1c2VyQXBpLm1lKCkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICB2YXIgdXNlciA9IHJlcy5ib2R5KCkuZGF0YSgpO1xuXG4gICAgYWN0aW9ucy5tZS5jb21wbGV0ZSh1c2VyKTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5tZS5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMudXBkYXRlLnByZUVtaXQgPSBmdW5jdGlvbih1c2VyKSB7XG4gIHVzZXJBcGkudXBkYXRlKHVzZXIpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIHVwZGF0ZWRVc2VyID0gcmVzLmJvZHkoKTtcblxuICAgIGFjdGlvbnMudXBkYXRlLmNvbXBsZXRlKHVwZGF0ZWRVc2VyKTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy51cGRhdGUuZXJyb3IoZXJyKTtcbiAgfSk7XG59O1xuXG5hY3Rpb25zLnZhbGlkYXRlLnByZUVtaXQgPSBmdW5jdGlvbigpIHtcbiAgdXNlckFwaS52YWxpZGF0ZSgpLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMudmFsaWRhdGUuZXJyb3IoZXJyKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFjdGlvbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3VzZXIvYWN0aW9ucy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCB7IExpbmssIE5hdmlnYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgTmF2aWdhdGlvbixcbiAgICBSZWZsdXgubGlzdGVuVG8odXNlckFjdGlvbnMubG9naW4uY29tcGxldGUsICdvbkxvZ2luU3VjY2VzcycpLFxuICAgIFJlZmx1eC5saXN0ZW5Ubyh1c2VyQWN0aW9ucy5sb2dpbi5lcnJvciwgJ29uTG9naW5FcnJvcicpXG4gIF0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB7fSxcbiAgICAgIHVzZXI6IHt9LFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICBvbkxvZ2luU3VjY2VzczogZnVuY3Rpb24odG9rZW4pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25UbygnYXBwJyk7XG4gIH0sXG4gIG9uTG9naW5FcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgdmFyIGVycm9yID0ge307XG5cbiAgICBpZiAoZXJyLnN0YXR1cyA9PSA0MDEpXG4gICAgICBlcnJvci5mb3JtID0gJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnO1xuICAgIGVsc2VcbiAgICAgIGVycm9yLmZvcm0gPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4nO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH0pO1xuICB9LFxuICBzdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuICAgIGlmICghdGhpcy5zdGF0ZS51c2VyLmVtYWlsKSB7XG4gICAgICBlcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogZXJyb3J9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUudXNlci5wYXNzd29yZCkge1xuICAgICAgZXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IGVycm9yfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUudXNlci5lbWFpbCAmJiB0aGlzLnN0YXRlLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjoge30sXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdXNlckFjdGlvbnMubG9naW4odGhpcy5zdGF0ZS51c2VyKTtcbiAgICB9XG4gIH0sXG4gIGlucHV0Q2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGlucHV0ID0gZS50YXJnZXQsXG4gICAgICAgIG5hbWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSxcbiAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgc3RhdGUudXNlcltuYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIHN0YXRlLmVycm9yW25hbWVdID0gZmFsc2U7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVtYWlsRXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yLmVtYWlsLFxuICAgICAgICBwYXNzd29yZEVycm9yID0gdGhpcy5zdGF0ZS5lcnJvci5wYXNzd29yZCxcbiAgICAgICAgZm9ybUVycm9yID0gdGhpcy5zdGF0ZS5lcnJvci5mb3JtO1xuXG4gICAgdmFyIGVtYWlsQ2xhc3MgPSBlbWFpbEVycm9yID8gJ2ZpZWxkIGVycm9yJyA6ICdmaWVsZCcsXG4gICAgICAgIHBhc3N3b3JkQ2xhc3MgPSBwYXNzd29yZEVycm9yID8gJ2ZpZWxkIGVycm9yJzogJ2ZpZWxkJyxcbiAgICAgICAgZm9ybUNsYXNzID0gZm9ybUVycm9yID8gJ3VpIGZvcm0gZXJyb3InIDogJ3VpIGZvcm0nLFxuICAgICAgICBidG5DbGFzcyA9IHRoaXMuc3RhdGUubG9hZGluZyA/ICd1aSBwcmltYXJ5IGJ1dHRvbiBsb2FkaW5nJyA6ICd1aSBwcmltYXJ5IGJ1dHRvbic7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0d28gY29sdW1uIGNlbnRlcmVkIGdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Zvcm1DbGFzc30gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBlcnJvciBtZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxwPntmb3JtRXJyb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1haWxDbGFzc30+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZD1cInRydWVcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2V9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yLmVtYWlsfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYXNzd29yZENsYXNzfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkPVwidHJ1ZVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZX0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3IucGFzc3dvcmR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d28gZmllbGRzXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YnRuQ2xhc3N9PkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwicmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJ1aSBiYXNpYyBidXR0b25cIj5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvdXNlci92aWV3cy9sb2dpbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCB7IExpbmssIE5hdmlnYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgTmF2aWdhdGlvbixcbiAgICBSZWZsdXgubGlzdGVuVG8odXNlckFjdGlvbnMucmVnaXN0ZXIuY29tcGxldGUsICdvblJlZ2lzdGVyU3VjY2VzcycpLFxuICAgIFJlZmx1eC5saXN0ZW5Ubyh1c2VyQWN0aW9ucy5yZWdpc3Rlci5lcnJvciwgJ29uUmVnaXN0ZXJFcnJvcicpXG4gIF0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB7fSxcbiAgICAgIHVzZXI6IHt9LFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICBvblJlZ2lzdGVyU3VjY2VzczogZnVuY3Rpb24odG9rZW4pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25UbygnYXBwJyk7XG4gIH0sXG4gIG9uUmVnaXN0ZXJFcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuICAgIGlmIChlcnIuc3RhdHVzID09IDQwMClcbiAgICAgIGVycm9yLmZvcm0gPSAnVGhhdCBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZSc7XG4gICAgZWxzZVxuICAgICAgZXJyb3IuZm9ybSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbic7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IGVycm9yLCBsb2FkaW5nOiBmYWxzZX0pO1xuICB9LFxuICBzdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcixcbiAgICAgICAgdXNlciA9IHRoaXMuc3RhdGUudXNlcjtcblxuICAgIGlmICghdXNlci5lbWFpbCkge1xuICAgICAgZXJyb3IuZW1haWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdXNlci5maXJzdE5hbWUpIHtcbiAgICAgIGVycm9yLmZpcnN0TmFtZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VyLnBhc3N3b3JkIHx8IHVzZXIucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmRDb25maXJtKSB7XG4gICAgICBlcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IGVycm9yfSk7XG5cbiAgICBpZiAodXNlci5lbWFpbCAmJiB1c2VyLmZpcnN0TmFtZSAmJiB1c2VyLmVtYWlsICYmIHVzZXIucGFzc3dvcmQgJiYgdXNlci5wYXNzd29yZCA9PT0gdXNlci5wYXNzd29yZENvbmZpcm0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHVzZXJBY3Rpb25zLnJlZ2lzdGVyKHRoaXMuc3RhdGUudXNlcik7XG4gICAgfVxuICB9LFxuICBpbnB1dENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0LFxuICAgICAgICBuYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyksXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIHN0YXRlLnVzZXJbbmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICBzdGF0ZS5lcnJvcltuYW1lXSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbWFpbEVycm9yID0gdGhpcy5zdGF0ZS5lcnJvci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmRFcnJvciA9IHRoaXMuc3RhdGUuZXJyb3IucGFzc3dvcmQsXG4gICAgICAgIG5hbWVFcnJvciA9IHRoaXMuc3RhdGUuZXJyb3IuZmlyc3ROYW1lLFxuICAgICAgICBmb3JtRXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yLmZvcm07XG5cbiAgICB2YXIgZW1haWxDbGFzcyA9IGVtYWlsRXJyb3IgPyAnZmllbGQgZXJyb3InIDogJ2ZpZWxkJyxcbiAgICAgICAgcGFzc3dvcmRDbGFzcyA9IHBhc3N3b3JkRXJyb3IgPyAnZmllbGQgZXJyb3InOiAnZmllbGQnLFxuICAgICAgICBuYW1lQ2xhc3MgPSBuYW1lRXJyb3IgPyAnZmllbGQgZXJyb3InIDogJ2ZpZWxkJyxcbiAgICAgICAgZm9ybUNsYXNzID0gZm9ybUVycm9yID8gJ3VpIGZvcm0gZXJyb3InIDogJ3VpIGZvcm0nLFxuICAgICAgICBidG5DbGFzcyA9IHRoaXMuc3RhdGUubG9hZGluZyA/ICd1aSBwcmltYXJ5IGJ1dHRvbiBsb2FkaW5nJyA6ICd1aSBwcmltYXJ5IGJ1dHRvbic7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0d28gY29sdW1uIGNlbnRlcmVkIGdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Zvcm1DbGFzc30gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBlcnJvciBtZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxwPntmb3JtRXJyb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3byBmaWVsZHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e25hbWVDbGFzc30+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQ9XCJ0cnVlXCIgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0TmFtZVwiIG5hbWU9XCJmaXJzdE5hbWVcIiBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJSZXF1aXJlZFwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgbmFtZT1cImxhc3ROYW1lXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiT3B0aW9uYWxcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1haWxDbGFzc30+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZD1cInRydWVcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2V9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yLmVtYWlsfSBwbGFjZWhvbGRlcj1cIlJlcXVpcmVkXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFzc3dvcmRDbGFzc30+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZD1cInRydWVcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2V9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yLnBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIlJlcXVpcmVkXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFzc3dvcmRDbGFzc30+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRDb25maXJtXCI+Q29uZmlybSBwYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZD1cInRydWVcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkQ29uZmlybVwiIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIiBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJSZXF1aXJlZFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d28gZmllbGRzXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YnRuQ2xhc3N9PlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwibG9naW5cIiBjbGFzc05hbWU9XCJ1aSBiYXNpYyBidXR0b25cIj5JIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy91c2VyL3ZpZXdzL3JlZ2lzdGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB1c2VyU3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFJlZmx1eC5saXN0ZW5Ubyh1c2VyU3RvcmUsICdvblVwZGF0ZScpLFxuICAgIFJlZmx1eC5saXN0ZW5Ubyh1c2VyQWN0aW9ucy51cGRhdGUuZXJyb3IsICdvbkVycm9yJylcbiAgXSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogdXNlclN0b3JlLnVzZXIgfHwge30sXG4gICAgICBlcnJvcjoge30sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgb25VcGRhdGU6IGZ1bmN0aW9uKHRva2VuLCB1c2VyKSB7XG4gICAgdmFyIHN1Y2Nlc3MgPSB1c2VyLmlkID09IHRoaXMuc3RhdGUudXNlci5pZDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG4gICAgICB9LmJpbmQodGhpcyksIDIwMDApO1xuICAgIH1cbiAgfSxcbiAgb25FcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9LFxuICBpbnB1dENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0LFxuICAgICAgICBuYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyksXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIHN0YXRlLnVzZXJbbmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICBzdGF0ZS5lcnJvcltuYW1lXSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9LFxuICBvblN1Ym1pdDogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICBlcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG5cbiAgICBpZiAoIXVzZXIuZmlyc3ROYW1lKVxuICAgICAgZXJyb3IuZmlyc3ROYW1lID0gdHJ1ZTtcblxuICAgIGlmICghdXNlci5lbWFpbClcbiAgICAgIGVycm9yLmVtYWlsID0gdHJ1ZTtcblxuICAgIGlmICh1c2VyLnBhc3N3b3JkICYmIHVzZXIucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmRDb25maXJtKVxuICAgICAgZXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IGVycm9yfSk7XG5cbiAgICBpZiAodXNlci5maXJzdE5hbWUgJiYgdXNlci5lbWFpbCAmJiAoIXVzZXIucGFzc3dvcmQgfHwgdXNlci5wYXNzd29yZCA9PSB1c2VyLnBhc3N3b3JkQ29uZmlybSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHVzZXJBY3Rpb25zLnVwZGF0ZSh1c2VyKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVzZXIgPSB0aGlzLnN0YXRlLnVzZXIsXG4gICAgICAgIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuICAgIHZhciBidG5UZXh0ID0gdGhpcy5zdGF0ZS5zdWNjZXNzID8gJ0FjY291bnQgdXBkYXRlZCcgOiAnVXBkYXRlIGFjY291bnQnO1xuXG4gICAgdmFyIGJ0bkNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgICB1aTogdHJ1ZSxcbiAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgIHByaW1hcnk6ICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgIXRoaXMuc3RhdGUuc3VjY2VzcyxcbiAgICAgIGxvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZyxcbiAgICAgIGdyZWVuOiB0aGlzLnN0YXRlLnN1Y2Nlc3NcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ1aSBmb3JtXCIgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IG5vVmFsaWRhdGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvIGZpZWxkc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlcnJvci5maXJzdE5hbWUgPyAnZmllbGQgZXJyb3InIDogJ2ZpZWxkJ30+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBuYW1lPVwiZmlyc3ROYW1lXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2V9IHZhbHVlPXt1c2VyLmZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9XCJSZXF1aXJlZFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBuYW1lPVwibGFzdE5hbWVcIiBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJPcHRpb25hbFwiIHZhbHVlPXt1c2VyLmxhc3ROYW1lfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXJyb3IuZW1haWwgPyAnZmllbGQgZXJyb3InIDogJ2ZpZWxkJ30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0Q2hhbmdlfSB2YWx1ZT17dXNlci5lbWFpbH0gcGxhY2Vob2xkZXI9XCJSZXF1aXJlZFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlcnJvci5wYXNzd29yZCA/ICdmaWVsZCBlcnJvcicgOiAnZmllbGQnfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+Q2hhbmdlIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0Q2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXJyb3IucGFzc3dvcmQgPyAnZmllbGQgZXJyb3InIDogJ2ZpZWxkJ30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZENvbmZpcm1cIj5Db25maXJtIG5ldyBwYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRDb25maXJtXCIgbmFtZT1cInBhc3N3b3JkQ29uZmlybVwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0Q2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtidG5DbGFzc30+e2J0blRleHR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy91c2VyL3ZpZXdzL2FjY291bnQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgdXNlclN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCB2YXIgQXV0aGVudGljYXRlZCA9IHtcbiAgbWl4aW5zOiBbXG4gICAgTmF2aWdhdGlvbixcbiAgICBSZWZsdXgubGlzdGVuVG8odXNlckFjdGlvbnMudmFsaWRhdGUuZXJyb3IsICdvblZhbGlkYXRlRXJyb3InKVxuICBdLFxuICBzdGF0aWNzOiB7XG4gICAgd2lsbFRyYW5zaXRpb25UbzogZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICAgICAgaWYgKHVzZXJTdG9yZS50b2tlbiA9PT0gbnVsbCB8fCB1c2VyU3RvcmUudG9rZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgdHJhbnNpdGlvbi5yZWRpcmVjdCgnbG9naW4nLCB7fSk7XG4gICAgICB1c2VyQWN0aW9ucy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfSxcbiAgb25WYWxpZGF0ZUVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICBpZiAoZXJyLnN0YXR1cyA9PSA0MDEpXG4gICAgICB0aGlzLnRyYW5zaXRpb25UbygnbG9naW4nKTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBVbmF1dGhlbnRpY2F0ZWQgPSB7XG4gIG1peGluczogW1xuICAgIE5hdmlnYXRpb25cbiAgXSxcbiAgc3RhdGljczoge1xuICAgIHdpbGxUcmFuc2l0aW9uVG86IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgIGlmICh1c2VyU3RvcmUudG9rZW4gIT09IG51bGwgJiYgdXNlclN0b3JlLnRva2VuICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHRyYW5zaXRpb24ucmVkaXJlY3QoJ2FwcCcsIHt9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy91c2VyL21peGlucy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBvcmdTdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgb3JnQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBPcmdDYXJkIGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgUmVmbHV4Lmxpc3RlblRvKG9yZ1N0b3JlLCAnb25PcmdzVXBkYXRlZCcpLFxuICAgIFJlZmx1eC5saXN0ZW5UbyhvcmdBY3Rpb25zLmNyZWF0ZS5zdGFydCwgJ2NyZWF0ZU5ld09yZycpLFxuICAgIFJlZmx1eC5saXN0ZW5UbyhvcmdBY3Rpb25zLmNyZWF0ZS5jYW5jZWwsICdjYW5jZWxOZXdPcmcnKVxuICBdLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcmdzOiBvcmdTdG9yZS5mbGF0T3Jnc1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgb3JnQWN0aW9ucy5mbGF0TGlzdCgpO1xuICB9LFxuICBvbk9yZ3NVcGRhdGVkOiBmdW5jdGlvbihvcmdzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcmdzOiBfLmV4dGVuZChbXSwgb3Jncy5mbGF0T3JncylcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlTmV3T3JnOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3JncyA9IHRoaXMuc3RhdGUub3JncztcbiAgICBvcmdzLnVuc2hpZnQoe30pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3Jnczogb3Jnc1xuICAgIH0pO1xuICB9LFxuICBjYW5jZWxOZXdPcmc6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcmdzID0gdGhpcy5zdGF0ZS5vcmdzO1xuICAgIGlmIChvcmdzLmxlbmd0aCAmJiBvcmdzWzBdLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9yZ3Muc2hpZnQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcmdzOiBvcmdzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9yZ3MgPSB0aGlzLnN0YXRlLm9yZ3M7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0d28gZG91YmxpbmcgY2FyZHNcIj5cbiAgICAgICAge29yZ3MubWFwKGZ1bmN0aW9uKG9yZywgaWR4KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxPcmdDYXJkIG9yZz17b3JnfSBrZXk9e2lkeH0gbmV3PXtvcmcuaWQgPT09IHVuZGVmaW5lZH0vPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL29yZ2FuaXphdGlvbnMvdmlld3MvbGlzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgb3JnU3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IG9yZ0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgUmVmbHV4Lmxpc3RlblRvKG9yZ0FjdGlvbnMuZ2V0LmNvbXBsZXRlLCAnb25PcmdVcGRhdGUnKVxuICBdLFxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZzoge31cbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0T3JnKCk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIC8vIGludm9rZWQgd2hlbiByZWNlaXZpbmcgbmV3IHByb3BzIC0gaS5lLiB3aGVuIG5hdmlnYXRpbmcgZnJvbSBhIGRpZmZlcmVudCBwYWdlXG4gICAgdGhpcy5nZXRPcmcoKTtcbiAgfSxcbiAgZ2V0T3JnOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3JnSWQgPSB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXJhbXMoKS5vcmdJZDtcbiAgICBvcmdBY3Rpb25zLmdldChvcmdJZCk7XG4gIH0sXG4gIG9uT3JnVXBkYXRlOiBmdW5jdGlvbihvcmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9yZzogb3JnXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9yZyA9IHRoaXMuc3RhdGUub3JnLFxuICAgICAgICBhc3NldHMgPSBvcmcuYXNzZXRzID8gb3JnLmFzc2V0cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgZWxzZSBpZiAoYS5uYW1lIDwgYi5uYW1lKVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KSA6IFtdO1xuXG4gICAgZnVuY3Rpb24gc2hvd1BhcmVudCgpIHtcbiAgICAgIGlmIChvcmcucGFyZW50KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgdG89XCJvcmdcIiBwYXJhbXM9e3tvcmdJZDogb3JnLnBhcmVudC5pZH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWIgaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImxldmVsIHVwIGljb25cIj48L2k+XG4gICAgICAgICAgICAgIHtvcmcucGFyZW50Lm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFzc2V0VGFibGUgPSBhc3NldHMubWFwKGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIga2V5PXthc3NldC5pZH0+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPExpbmsgdG89XCJhc3NldFwiIHBhcmFtcz17e2Fzc2V0SWQ6IGFzc2V0LmlkIH19PnsgYXNzZXQubmFtZSB9PC9MaW5rPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPnsgYXNzZXQuZGVzY3JpcHRpb24gfTwvdGQ+XG4gICAgICAgICAgPHRkPnsgYXNzZXQubW9kaWZpZWQgfTwvdGQ+XG4gICAgICAgICAgPHRkPnsgYXNzZXQuZmxhZ2dlZCB9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub0Fzc2V0cyA9ICg8dHI+PHRkPk5vIGFzc2V0czwvdGQ+PC90cj4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIHsgb3JnLm5hbWUgfVxuICAgICAgICAgICAgeyBzaG93UGFyZW50KCkgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWIgaGVhZGVyXCI+eyBvcmcuZGVzY3JpcHRpb24gfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ1aSB0YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCI0XCI+QXNzZXRzPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICB7IGFzc2V0cy5sZW5ndGggPiAwID8gYXNzZXRUYWJsZSA6IG5vQXNzZXRzIH1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL3ZpZXdzL3Nob3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgdGVtcGxhdGVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHRlbXBsYXRlU3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtcbiAgICBSZWZsdXgubGlzdGVuVG8odGVtcGxhdGVTdG9yZSwgJ29uVGVtcGxhdGVzVXBkYXRlJyksXG4gICAgUmVmbHV4Lmxpc3RlblRvKHRlbXBsYXRlQWN0aW9ucy5jcmVhdGUuc3RhcnQsICdjcmVhdGVOZXdUZW1wbGF0ZScpLFxuICAgIFJlZmx1eC5saXN0ZW5Ubyh0ZW1wbGF0ZUFjdGlvbnMuY3JlYXRlLmNhbmNlbCwgJ2NhbmNlbE5ld1RlbXBsYXRlJylcbiAgXSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcGxhdGVzOiB0ZW1wbGF0ZVN0b3JlLnRlbXBsYXRlc1xuICAgIH07XG4gIH0sXG4gIG9uVGVtcGxhdGVzVXBkYXRlOiBmdW5jdGlvbih0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBsYXRlczogdGVtcGxhdGVzXG4gICAgfSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdGVtcGxhdGVBY3Rpb25zLmxpc3QoKTtcbiAgfSxcbiAgY3JlYXRlTmV3VGVtcGxhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ZW1wbGF0ZXMgPSBfLmV4dGVuZChbXSwgdGhpcy5zdGF0ZS50ZW1wbGF0ZXMpO1xuICAgIHRlbXBsYXRlcy51bnNoaWZ0KHtcbiAgICAgIGZpZWxkczogW3t9XVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXNcbiAgICB9KTtcbiAgfSxcbiAgY2FuY2VsTmV3VGVtcGxhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ZW1wbGF0ZXMgPSB0aGlzLnN0YXRlLnRlbXBsYXRlcztcbiAgICBpZiAodGVtcGxhdGVzLmxlbmd0aCAmJiB0ZW1wbGF0ZXNbMF0uaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGVtcGxhdGVzLnNoaWZ0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGVtcGxhdGVzID0gdGhpcy5zdGF0ZS50ZW1wbGF0ZXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBvbmUgY2FyZHNcIj5cbiAgICAgICAge3RlbXBsYXRlcy5sZW5ndGggPyB0ZW1wbGF0ZXMubWFwKGZ1bmN0aW9uKHRlbXBsYXRlLCBpZHgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQgdGVtcGxhdGU9e3RlbXBsYXRlfSBrZXk9e2lkeH0gbmV3PXt0ZW1wbGF0ZS5pZCA9PT0gdW5kZWZpbmVkfS8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSkgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy90ZW1wbGF0ZXMvdmlld3MvbGlzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBjYXRTdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgY2F0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgUmVmbHV4Lmxpc3RlblRvKGNhdFN0b3JlLCAnb25DYXRlZ29yaWVzVXBkYXRlZCcpLFxuICAgIFJlZmx1eC5saXN0ZW5UbyhjYXRBY3Rpb25zLmNyZWF0ZS5zdGFydCwgJ2FkZE5ld0NhdGVnb3J5JyksXG4gICAgUmVmbHV4Lmxpc3RlblRvKGNhdEFjdGlvbnMuY3JlYXRlLmNhbmNlbCwgJ2NhbmNlbE5ld0NhdGVnb3J5JylcbiAgXSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2F0ZWdvcmllczogY2F0U3RvcmUuY2F0ZWdvcmllc1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY2F0QWN0aW9ucy5saXN0KCk7XG4gIH0sXG4gIG9uQ2F0ZWdvcmllc1VwZGF0ZWQ6IGZ1bmN0aW9uKGNhdGVnb3JpZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhdGVnb3JpZXM6IF8uZXh0ZW5kKFtdLCBjYXRlZ29yaWVzKVxuICAgIH0pO1xuICB9LFxuICBhZGROZXdDYXRlZ29yeTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhdGVnb3JpZXMgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXM7XG4gICAgY2F0ZWdvcmllcy51bnNoaWZ0KHt9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNcbiAgICB9KTtcbiAgfSxcbiAgY2FuY2VsTmV3Q2F0ZWdvcnk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYXRlZ29yaWVzID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzO1xuICAgIGlmIChjYXRlZ29yaWVzLmxlbmd0aCAmJiBjYXRlZ29yaWVzWzBdLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhdGVnb3JpZXMuc2hpZnQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhdGVnb3JpZXMgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0d28gZG91YmxpbmcgY2FyZHNcIj5cbiAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID8gY2F0ZWdvcmllcy5tYXAoKGNhdCwgaWR4KSA9PlxuICAgICAgICAgIDxDYXJkIGNhdGVnb3J5PXtjYXR9IGtleT17aWR4fSBuZXc9e2NhdC5pZCA9PT0gdW5kZWZpbmVkfS8+XG4gICAgICAgICkgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL3ZpZXdzL2xpc3QuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFJlZmx1eC5saXN0ZW5UbyhhY3Rpb25zLmdldC5jb21wbGV0ZSwgJ29uQ2F0VXBkYXRlJylcbiAgXSxcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRlZ29yeToge1xuICAgICAgICBhc3NldHM6IFtdXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldENhdGVnb3J5KCk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0Q2F0ZWdvcnkoKTtcbiAgfSxcbiAgZ2V0Q2F0ZWdvcnk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYXRJZCA9IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhcmFtcygpLmNhdElkO1xuICAgIGFjdGlvbnMuZ2V0KGNhdElkKTtcbiAgfSxcbiAgb25DYXRVcGRhdGU6IGZ1bmN0aW9uKGNhdCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2F0ZWdvcnk6IGNhdFxuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYXRlZ29yeSA9IHRoaXMuc3RhdGUuY2F0ZWdvcnksXG4gICAgICAgIGFzc2V0cyA9IGNhdGVnb3J5LmFzc2V0cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgZWxzZSBpZiAoYS5uYW1lIDwgYi5uYW1lKVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgIHZhciBhc3NldFRhYmxlID0gYXNzZXRzLm1hcChhc3NldCA9PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPExpbmsgdG89XCJhc3NldFwiIHBhcmFtcz17eyBhc3NldElkOiBhc3NldC5pZCB9fT57IGFzc2V0Lm5hbWUgfTwvTGluaz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD57IGFzc2V0LmRlc2NyaXB0aW9uIH08L3RkPlxuICAgICAgICAgIDx0ZD57IGFzc2V0Lm1vZGlmaWVkIH08L3RkPlxuICAgICAgICAgIDx0ZD57IGFzc2V0LmZsYWdnZWQgfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgKTtcblxuICAgIGNvbnN0IG5vQXNzZXRzID0gKDx0cj48dGQ+Tm8gYXNzZXRzPC90ZD48L3RyPik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgeyBjYXRlZ29yeS5uYW1lIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViIGhlYWRlclwiPnsgY2F0ZWdvcnkuZGVzY3JpcHRpb24gfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ1aSB0YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCI0XCI+QXNzZXRzPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICB7IGFzc2V0cy5sZW5ndGggPiAwID8gYXNzZXRUYWJsZSA6IG5vQXNzZXRzIH1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL3ZpZXdzL3Nob3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJCBmcm9tICdqUXVlcnknO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDaGVja2JveCwgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1zZW1hbnRpZnknO1xuXG5pbXBvcnQgYXNzZXRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IG9yZ1N0b3JlIGZyb20gJy4uLy4uL29yZ2FuaXphdGlvbnMvc3RvcmUnO1xuaW1wb3J0IG9yZ0FjdGlvbnMgZnJvbSAnLi4vLi4vb3JnYW5pemF0aW9ucy9hY3Rpb25zJztcbmltcG9ydCB0ZW1wbGF0ZVN0b3JlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9zdG9yZSc7XG5pbXBvcnQgdGVtcGxhdGVBY3Rpb25zIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9hY3Rpb25zJztcbmltcG9ydCBjYXRlZ29yeVN0b3JlIGZyb20gJy4uLy4uL2NhdGVnb3JpZXMvc3RvcmUnO1xuaW1wb3J0IGNhdGVnb3J5QWN0aW9ucyBmcm9tICcuLi8uLi9jYXRlZ29yaWVzL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFJlZmx1eC5saXN0ZW5UbyhvcmdTdG9yZSwgJ29uT3Jnc0xpc3QnKSxcbiAgICBSZWZsdXgubGlzdGVuVG8odGVtcGxhdGVTdG9yZSwgJ29uVGVtcGxhdGVzTGlzdCcpLFxuICAgIFJlZmx1eC5saXN0ZW5UbyhjYXRlZ29yeVN0b3JlLCAnb25DYXRlZ29yaWVzTGlzdCcpLFxuICAgIFJlZmx1eC5saXN0ZW5Ubyhhc3NldEFjdGlvbnMuY3JlYXRlLmNvbXBsZXRlLCAnb25Bc3NldENyZWF0ZWQnKSxcbiAgICBOYXZpZ2F0aW9uXG4gIF0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZ3M6IG9yZ1N0b3JlLm5lc3RlZE9yZ3MsXG4gICAgICB0ZW1wbGF0ZXM6IHRlbXBsYXRlU3RvcmUudGVtcGxhdGVzLFxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcnlTdG9yZS5jYXRlZ29yaWVzLFxuICAgICAgYXNzZXQ6IHtcbiAgICAgICAgZmllbGRzOiB7fSxcbiAgICAgICAgb3JnYW5pemF0aW9uOiB7fVxuICAgICAgfSxcbiAgICAgIGVycm9yOiB7fVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0T3JncygpO1xuICAgIHRoaXMuZ2V0VGVtcGxhdGVzKCk7XG4gICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldE9yZ3MoKTtcbiAgICB0aGlzLmdldFRlbXBsYXRlcygpO1xuICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xuICB9LFxuICBnZXRPcmdzOiBmdW5jdGlvbigpIHtcbiAgICBvcmdBY3Rpb25zLmxpc3QoKTtcbiAgICBvcmdBY3Rpb25zLmZsYXRMaXN0KCk7XG4gIH0sXG4gIGdldFRlbXBsYXRlczogZnVuY3Rpb24oKSB7XG4gICAgdGVtcGxhdGVBY3Rpb25zLmxpc3QoKTtcbiAgfSxcbiAgZ2V0Q2F0ZWdvcmllczogZnVuY3Rpb24oKSB7XG4gICAgY2F0ZWdvcnlBY3Rpb25zLmxpc3QoKTtcbiAgfSxcbiAgb25PcmdzTGlzdDogZnVuY3Rpb24ob3Jncykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3Jnczogb3Jncy5uZXN0ZWRPcmdzXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5xdWVyeS5vcmcpXG4gICAgICB0aGlzLm9uT3JnU2VsZWN0KHRoaXMucHJvcHMucXVlcnkub3JnKTtcbiAgfSxcbiAgb25UZW1wbGF0ZXNMaXN0OiBmdW5jdGlvbih0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBsYXRlczogdGVtcGxhdGVzXG4gICAgfSk7XG4gIH0sXG4gIG9uQ2F0ZWdvcmllc0xpc3Q6IGZ1bmN0aW9uKGNhdGVnb3JpZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNcbiAgICB9KTtcbiAgfSxcbiAgb25PcmdTZWxlY3Q6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBhc3NldCA9IHRoaXMuc3RhdGUuYXNzZXQsXG4gICAgICAgIG9yZyA9IF8uZmluZChvcmdTdG9yZS5mbGF0T3JncywgbyA9PiBvLmlkID09IHZhbCk7XG5cbiAgICBpZiAob3JnKSB7XG4gICAgICBhc3NldC5vcmdhbml6YXRpb24gPSBvcmc7XG4gICAgICBhc3NldC5vcmdhbml6YXRpb25JZCA9IG9yZy5pZDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhc3NldDogYXNzZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgb25DYXRlZ29yeVNlbGVjdDogZnVuY3Rpb24oY2F0SWQpIHtcbiAgICB2YXIgYXNzZXQgPSB0aGlzLnN0YXRlLmFzc2V0O1xuICAgIGFzc2V0LmNhdGVnb3J5SWQgPSBjYXRJZDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXNzZXQ6IGFzc2V0XG4gICAgfSk7XG4gIH0sXG4gIG9uVGVtcGxhdGVTZWxlY3Q6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBhc3NldCA9IHRoaXMuc3RhdGUuYXNzZXQsXG4gICAgICAgIHRlbXBsYXRlID0gXy5maW5kKHRoaXMuc3RhdGUudGVtcGxhdGVzLCB0bXBsID0+IHRtcGwuaWQgPT09IHZhbCk7XG5cbiAgICBhc3NldC5maWVsZHMgPSB7fTtcbiAgICB0ZW1wbGF0ZS5maWVsZHMubWFwKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBhc3NldC5maWVsZHNbZmllbGQubmFtZV0gPSBmaWVsZDtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXNzZXQ6IGFzc2V0XG4gICAgfSk7XG4gIH0sXG4gIG9uTWV0YUZpZWxkQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICBuYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpLFxuICAgICAgICBhc3NldCA9IHRoaXMuc3RhdGUuYXNzZXQsXG4gICAgICAgIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuICAgIGFzc2V0W25hbWVdID0gdGFyZ2V0LnZhbHVlO1xuICAgIGVycm9yW25hbWVdID0gZmFsc2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhc3NldDogYXNzZXQsXG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9KTtcbiAgfSxcbiAgb25EYXRhRmllbGRDaGFuZ2U6IGZ1bmN0aW9uKG5hbWUsIGUpIHtcbiAgICB2YXIgYXNzZXQgPSB0aGlzLnN0YXRlLmFzc2V0LFxuICAgICAgICB2YWw7XG5cbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBlKSAvLyBkcm9wZG93blxuICAgICAgdmFsID0gZTtcbiAgICBlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGUpIC8vIHRleHQgaW5wdXRcbiAgICAgIHZhbCA9ICQoZS50YXJnZXQpLnZhbCgpO1xuICAgIGVsc2UgLy8gY2hlY2tib3hcbiAgICAgIHZhbCA9ICFhc3NldC5maWVsZHNbbmFtZV0udmFsdWU7XG5cbiAgICBhc3NldC5maWVsZHNbbmFtZV0udmFsdWUgPSB2YWw7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhc3NldDogYXNzZXRcbiAgICB9KTtcbiAgfSxcbiAgYWRkRmllbGQ6IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgdmFyIGFzc2V0ID0gdGhpcy5zdGF0ZS5hc3NldDtcblxuICAgIGFzc2V0LmZpZWxkc1tmaWVsZC5uYW1lXSA9IGZpZWxkO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhc3NldDogYXNzZXRcbiAgICB9KTtcbiAgfSxcbiAgc2F2ZUFzc2V0OiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuICAgIGlmICghdGhpcy5zdGF0ZS5hc3NldC5vcmdhbml6YXRpb25JZCkge1xuICAgICAgZXJyb3Iub3JnID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZS5hc3NldC5uYW1lKSB7XG4gICAgICBlcnJvci5uYW1lID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFzc2V0QWN0aW9ucy5jcmVhdGUodGhpcy5zdGF0ZS5hc3NldCk7XG4gIH0sXG4gIG9uQXNzZXRDcmVhdGVkOiBmdW5jdGlvbihhc3NldCkge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKCdhc3NldCcsIHthc3NldElkOiBhc3NldC5pZH0pO1xuICB9LFxuICByZW5kZXJGaWVsZDogZnVuY3Rpb24oZmllbGQsIGlkeCkge1xuICAgIHZhciByZW5kZXJlZEZpZWxkO1xuXG4gICAgc3dpdGNoKGZpZWxkLmZpZWxkVHlwZSkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIHJlbmRlcmVkRmllbGQgPSAoXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidWkgaW5wdXRcIiBuYW1lPXtmaWVsZC5uYW1lfSBvbkNoYW5nZT17dGhpcy5vbkRhdGFGaWVsZENoYW5nZS5iaW5kKHRoaXMsIGZpZWxkLm5hbWUpfS8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpcGxlKSB7XG4gICAgICAgICAgcmVuZGVyZWRGaWVsZCA9IChcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT17ZmllbGQubmFtZX0gbXVsdGlwbGUgb25DaGFuZ2U9e3RoaXMub25EYXRhRmllbGRDaGFuZ2UuYmluZCh0aGlzLCBmaWVsZC5uYW1lKX0+XG4gICAgICAgICAgICAgIHtmaWVsZC5jaG9pY2VzID8gZmllbGQuY2hvaWNlcy5tYXAoKGNob2ljZSwgaWR4KSA9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2Nob2ljZX0ga2V5PXtpZHh9PnsgY2hvaWNlIH08L29wdGlvbj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbmRlcmVkRmllbGQgPSAoXG4gICAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPVwic2VsZWN0aW9uXCIgaW5pdD17e29uQ2hhbmdlOiB0aGlzLm9uRGF0YUZpZWxkQ2hhbmdlLmJpbmQodGhpcywgZmllbGQubmFtZSl9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZhdWx0IHRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAge2ZpZWxkLmNob2ljZXMgPyBmaWVsZC5jaG9pY2VzLm1hcCgoY2hvaWNlLCBpZHgpID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBkYXRhLXZhbHVlPXtjaG9pY2V9IGtleT17aWR4fT57IGNob2ljZSB9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICByZW5kZXJlZEZpZWxkID0gKFxuICAgICAgICAgIDxDaGVja2JveCBpbml0PXt7b25DaGFuZ2U6IHRoaXMub25EYXRhRmllbGRDaGFuZ2UuYmluZCh0aGlzLCBmaWVsZC5uYW1lKX19PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9e2ZpZWxkLm5hbWV9Lz5cbiAgICAgICAgICAgIDxsYWJlbD57ZmllbGQubmFtZX08L2xhYmVsPlxuICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiIGtleT17aWR4fT5cbiAgICAgICAgPGxhYmVsPntmaWVsZC5uYW1lfTwvbGFiZWw+XG4gICAgICAgIHtyZW5kZXJlZEZpZWxkfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5zdGF0ZS5hc3NldC5maWVsZHM7XG5cbiAgICB2YXIgb3JnRmllbGRDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgZmllbGQ6IHRydWUsXG4gICAgICBlcnJvcjogdGhpcy5zdGF0ZS5lcnJvci5vcmdcbiAgICB9KTtcblxuICAgIHZhciBuYW1lRmllbGRDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgZmllbGQ6IHRydWUsXG4gICAgICBlcnJvcjogdGhpcy5zdGF0ZS5lcnJvci5uYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidWkgZm9ybSBzZWdtZW50XCIgb25TdWJtaXQ9e3RoaXMuc2F2ZUFzc2V0fT5cbiAgICAgICAgPGgyPk5ldyBhc3NldDwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBvcmdGaWVsZENsYXNzIH0+XG4gICAgICAgICAgPGxhYmVsPk9yZ2FuaXphdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPERyb3Bkb3duIGNsYXNzTmFtZT1cImJhc2ljIGJ1dHRvblwiIGluaXQ9e3tvbkNoYW5nZTogdGhpcy5vbk9yZ1NlbGVjdCwgYWxsb3dDYXRlZ29yeVNlbGVjdGlvbjp0cnVlfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXNzZXQub3JnYW5pemF0aW9uLm5hbWUgfHwgJ1NlbGVjdCBhbiBvcmdhbml6YXRpb24nfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9yZ3MubWFwKChvcmcsIGlkeCkgPT5cbiAgICAgICAgICAgICAgICA8T3JnRHJvcGRvd25JdGVtIG9yZz17b3JnfSBrZXk9e29yZy5pZH0vPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBuYW1lRmllbGRDbGFzcyB9PlxuICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidWkgaW5wdXRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLm9uTWV0YUZpZWxkQ2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ1aSBpbnB1dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLm9uTWV0YUZpZWxkQ2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIiBpbml0PXt7b25DaGFuZ2U6IHRoaXMub25DYXRlZ29yeVNlbGVjdH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZhdWx0IHRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGNhdCwgaWR4KSA9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9e2NhdC5pZH0ga2V5PXtpZHh9PntjYXQubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICA8bGFiZWw+VGVtcGxhdGU8L2xhYmVsPlxuICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIiBpbml0PXt7b25DaGFuZ2U6IHRoaXMub25UZW1wbGF0ZVNlbGVjdH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZhdWx0IHRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVtcGxhdGVzLm1hcCgodG1wbCwgaWR4KSA9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9e3RtcGwuaWR9IGtleT17aWR4fT57IHRtcGwubmFtZSB9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidWkgdG9wIGF0dGFjaGVkIGhlYWRlclwiIHN0eWxlPXt7bWFyZ2luVG9wOiAwfX0+RmllbGRzPC9oNT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmb3JtIGF0dGFjaGVkIHNlZ21lbnRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzFlbSd9fT5cbiAgICAgICAgICB7IGZpZWxkcyA/IF8ubWFwKGZpZWxkcywgdGhpcy5yZW5kZXJGaWVsZCkgOiBudWxsIH1cblxuICAgICAgICA8TmV3RmllbGQgbmV3RmllbGROYW1lPXt0aGlzLm5ld0ZpZWxkTmFtZX0gYWRkRmllbGQ9e3RoaXMuYWRkRmllbGR9Lz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvbiBwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFNhdmUgYXNzZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uIGJhc2ljXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgTmV3RmllbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiB7XG4gICAgICAgIG5hbWU6ICcnXG4gICAgICB9LFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbmFtZTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBzZXRGaWVsZE5hbWU6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZmllbGQgPSB0aGlzLnN0YXRlLmZpZWxkO1xuICAgIGZpZWxkLm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpZWxkOiBmaWVsZFxuICAgIH0pO1xuICB9LFxuICBzZXRGaWVsZFR5cGU6IGZ1bmN0aW9uKHRleHQsIHR5cGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5maWVsZC5uYW1lID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgbmFtZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZmllbGQgPSB0aGlzLnN0YXRlLmZpZWxkLFxuICAgICAgICBlbCA9IHRoaXMuZ2V0RE9NTm9kZSgpO1xuXG4gICAgZmllbGQuZmllbGRUeXBlID0gdHlwZTtcblxuICAgIHRoaXMucHJvcHMuYWRkRmllbGQoZmllbGQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmllbGQ6IHtcbiAgICAgICAgbmFtZTogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKGVsKS5kcm9wZG93bignaGlkZScpO1xuICB9LFxuICBkb250U3VibWl0T25FbnRlcjogZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMTMpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5ld0ZpZWxkTmFtZUNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgICB1aTogdHJ1ZSxcbiAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgc21hbGw6IHRydWUsXG4gICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgIGVycm9yOiB0aGlzLnN0YXRlLmVycm9yLm5hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPVwiZmxvYXRpbmcgbGFiZWxlZCBpY29uIGJ1dHRvbiBiYXNpYyB0aW55XCIgaW5pdD17e2FjdGlvbjogdGhpcy5zZXRGaWVsZFR5cGV9fT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicGx1cyBpY29uXCI+PC9pPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+QWRkIGFkZGl0aW9uYWwgZmllbGQ8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtuZXdGaWVsZE5hbWVDbGFzc30gc3R5bGU9e3t3aWR0aDogJ2F1dG8nfX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZpZWxkIG5hbWVcIiBvbkNoYW5nZT17dGhpcy5zZXRGaWVsZE5hbWV9IHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkLm5hbWV9IG9uS2V5RG93bj17dGhpcy5kb250U3VibWl0T25FbnRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPkZpZWxkIHR5cGU8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJ0ZXh0XCI+VGV4dDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJjaGVja2JveFwiPkNoZWNrYm94PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgT3JnRHJvcGRvd25JdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcmc6IHRoaXMucHJvcHMub3JnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9yZzogcHJvcHMub3JnXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9yZyA9IHRoaXMucHJvcHMub3JnO1xuXG4gICAgaWYgKCFvcmcuY2hpbGRyZW4gfHwgIW9yZy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9e29yZy5pZH0ga2V5PXtvcmcuaWR9PntvcmcubmFtZX08L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17b3JnLmlkfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57b3JnLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuXG4gICAgICAgICAgICB7b3JnLmNoaWxkcmVuLm1hcChjaGlsZCA9PlxuICAgICAgICAgICAgICA8T3JnRHJvcGRvd25JdGVtIG9yZz17Y2hpbGR9IGtleT17Y2hpbGQuaWR9Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9hc3NldHMvdmlld3MvbmV3LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IGFzc2V0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IE5ld0ZpbGVGb3JtLCBGaWxlTGlzdCB9IGZyb20gJy4vZmlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFJlZmx1eC5saXN0ZW5Ubyhhc3NldEFjdGlvbnMuZ2V0LmNvbXBsZXRlLCAnb25HZXRBc3NldCcpLFxuICAgIFJlZmx1eC5saXN0ZW5Ubyhhc3NldEFjdGlvbnMuZmlsZXMudXBsb2FkLmNvbXBsZXRlLCAnb25GaWxlVXBsb2FkJyksXG4gICAgUmVmbHV4Lmxpc3RlblRvKGFzc2V0QWN0aW9ucy5maWxlcy5kZWwuY29tcGxldGUsICdvbkZpbGVEZWxldGUnKVxuICBdLFxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzc2V0OiB7XG4gICAgICAgIGZpZWxkczoge30sXG4gICAgICAgIG9yZ2FuaXphdGlvbjoge30sXG4gICAgICAgIGNhdGVnb3J5OiB7fSxcbiAgICAgICAgY3JlYXRvcjoge30sXG4gICAgICAgIGZpbGVzOiBbXVxuICAgICAgfSxcbiAgICAgIHNob3dOZXdGaWxlRm9ybTogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkgeyB0aGlzLmdldEFzc2V0KCk7IH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKCkgeyB0aGlzLmdldEFzc2V0KCk7IH0sXG4gIGdldEFzc2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXNzZXRJZCA9IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhcmFtcygpLmFzc2V0SWQ7XG5cbiAgICBhc3NldEFjdGlvbnMuZ2V0KGFzc2V0SWQpO1xuICB9LFxuICBvbkdldEFzc2V0OiBmdW5jdGlvbihhc3NldCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXNzZXQ6IGFzc2V0XG4gICAgfSk7XG4gICAgYXNzZXRBY3Rpb25zLnNldEFjdGl2ZUFzc2V0KGFzc2V0KTtcbiAgfSxcbiAgdG9nZ2xlTmV3RmlsZUZvcm06IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd05ld0ZpbGVGb3JtOiAhdGhpcy5zdGF0ZS5zaG93TmV3RmlsZUZvcm1cbiAgICB9KTtcbiAgfSxcbiAgb25GaWxlVXBsb2FkOiBmdW5jdGlvbihmaWxlKSB7XG4gICAgdmFyIGFzc2V0ID0gdGhpcy5zdGF0ZS5hc3NldDtcbiAgICBhc3NldC5maWxlcy5wdXNoKGZpbGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhc3NldDogYXNzZXQsXG4gICAgICBzaG93TmV3RmlsZUZvcm06IGZhbHNlXG4gICAgfSk7XG4gIH0sXG4gIG9uRmlsZURlbGV0ZTogZnVuY3Rpb24oZmlsZSkge1xuICAgIHZhciBhc3NldCA9IHRoaXMuc3RhdGUuYXNzZXQsXG4gICAgICAgIGlkeCA9IGFzc2V0LmZpbGVzLmluZGV4T2YoZmlsZSk7XG5cbiAgICBhc3NldC5maWxlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFzc2V0OiBhc3NldFxuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhc3NldCA9IHRoaXMuc3RhdGUuYXNzZXQ7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIGlmICghZGF0ZSkgcmV0dXJuO1xuXG4gICAgICB2YXIgYXQgPSBtb21lbnQoZGF0ZSksXG4gICAgICAgICAgY3V0T2ZmID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheScpO1xuXG4gICAgICBpZiAoY3V0T2ZmLmlzQmVmb3JlKGF0KSlcbiAgICAgICAgcmV0dXJuIGF0LmZyb21Ob3coKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGF0LmZvcm1hdCgnTS9EL1lZIEg6bW0nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgeyBhc3NldC5uYW1lIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YiBoZWFkZXJcIj5cbiAgICAgICAgICAgIHsgYXNzZXQuZGVzY3JpcHRpb24gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1aSB0b3AgYXR0YWNoZWQgaGVhZGVyXCI+SW5mbzwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYXR0YWNoZWQgc2VnbWVudFwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ1aSB0YWJsZVwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+T3JnYW5pemF0aW9uPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJpZ2h0IGFsaWduZWRcIj57IGFzc2V0Lm9yZ2FuaXphdGlvbi5uYW1lIH08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPkNhdGVnb3J5PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJpZ2h0IGFsaWduZWRcIj57IGFzc2V0LmNhdGVnb3J5ID8gYXNzZXQuY2F0ZWdvcnkubmFtZSA6ICcnIH08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPkNyZWF0ZWQ8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmlnaHQgYWxpZ25lZFwiPlxuICAgICAgICAgICAgICAgIHsgZm9ybWF0RGF0ZShhc3NldC5jcmVhdGVkQXQpIH0gYnkgeyBhc3NldC5jcmVhdG9yLmZpcnN0TmFtZSB9IHsgYXNzZXQuY3JlYXRvci5sYXN0TmFtZSB9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+VXBkYXRlZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyaWdodCBhbGlnbmVkXCI+XG4gICAgICAgICAgICAgICAgeyBmb3JtYXREYXRlKGFzc2V0LnVwZGF0ZWRBdCkgfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgdG9wIGF0dGFjaGVkIGhlYWRlclwiPkRhdGE8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGF0dGFjaGVkIHNlZ21lbnRcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidWkgdGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5GaWVsZDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInJpZ2h0IGFsaWduZWRcIj5WYWx1ZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7Xy5tYXAoYXNzZXQuZmllbGRzLCAoZmllbGQsIGlkeCkgPT5cbiAgICAgICAgICAgICAgICA8RGF0YUZpZWxkIGZpZWxkPXsgZmllbGQgfSBrZXk9eyBpZHggfS8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgey8qKlxuICAgICAgICAgICoqIE5PVEVTXG4gICAgICAgICAgKiovfVxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgdG9wIGF0dGFjaGVkIGhlYWRlclwiPlxuICAgICAgICAgIE5vdGVzXG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1pbmkgdWkgYmFzaWMgYnV0dG9uXCIgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319Pk5ldyBub3RlPC9idXR0b24+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYXR0YWNoZWQgc2VnbWVudFwiPlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgey8qKlxuICAgICAgICAgICoqIEZJTEVTXG4gICAgICAgICAgKiovfVxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgdG9wIGF0dGFjaGVkIGhlYWRlclwiPlxuICAgICAgICAgIEZpbGVzXG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1pbmkgdWkgYmFzaWMgYnV0dG9uXCIgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmV3RmlsZUZvcm19PlxuICAgICAgICAgICAgVXBsb2FkIGZpbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9oMz5cblxuICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd05ld0ZpbGVGb3JtID8gPE5ld0ZpbGVGb3JtIGFzc2V0PXt0aGlzLnN0YXRlLmFzc2V0fSAvPiA6IG51bGwgfVxuXG4gICAgICAgIDxGaWxlTGlzdCBmaWxlcz17YXNzZXQuZmlsZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgRGF0YUZpZWxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogdGhpcy5wcm9wcy5maWVsZFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWVsZDogcHJvcHMuZmllbGRcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUsXG4gICAgICAgIGZpZWxkID0gdGhpcy5zdGF0ZS5maWVsZDtcblxuICAgIGlmIChmaWVsZC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPnsgZmllbGQubmFtZSB9PC90ZD5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChmaWVsZC5maWVsZFR5cGUpIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGlmIChmaWVsZC5tdWx0aXBsZSlcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlLmpvaW4oJywgJyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB0cnVlKVxuICAgICAgICAgIHZhbHVlID0gKDxpIGNsYXNzTmFtZT1cImNoZWNrbWFyayBpY29uXCI+PC9pPik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB2YWx1ZSA9ICg8aSBjbGFzc05hbWU9XCJtaW51cyBpY29uXCI+PC9pPik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD57IGZpZWxkLm5hbWUgfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyaWdodCBhbGlnbmVkXCI+eyB2YWx1ZSB9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy92aWV3cy9zaG93LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBTZW1hbnRpZnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlNlbWFudGlmeVwiXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX1wiXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiJFwiXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gbW9tZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtb21lbnRcIlxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncmVhY3Qtc2VtYW50aWZ5JztcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFJlZmx1eC5saXN0ZW5UbyhzdG9yZSwgJ29uT3Jnc1VwZGF0ZScpXG4gIF0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZ3M6IHN0b3JlLm5lc3RlZE9yZ3NcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGFjdGlvbnMubGlzdCgpO1xuICB9LFxuICBvbk9yZ3NVcGRhdGU6IGZ1bmN0aW9uKG9yZ3MpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9yZ3M6IG9yZ3MubmVzdGVkT3Jnc1xuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm9sZGVyIGljb25cIj48L2k+XG4gICAgICAgIE9yZ2FuaXphdGlvbnNcbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5vcmdzLm1hcChvcmcgPT5cbiAgICAgICAgICAgIG9yZy5wYXJlbnRJZCA9PT0gbnVsbCA/IDxSb290T3JnIG9yZz17b3JnfSBrZXk9e29yZy5pZH0vPiA6IG51bGxcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5jb25zdCBSb290T3JnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcmcgPSB0aGlzLnByb3BzLm9yZztcblxuICAgIGlmIChvcmcuY2hpbGRyZW4gJiYgb3JnLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICg8T3JnV2l0aENoaWxkcmVuIG9yZz17b3JnfS8+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgdG89XCJvcmdcIiBwYXJhbXM9e3tvcmdJZDogb3JnLmlkfX0gY2xhc3NOYW1lPVwiaXRlbVwiPntvcmcubmFtZX08L0xpbms+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IE9yZ1dpdGhDaGlsZHJlbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3JnID0gdGhpcy5wcm9wcy5vcmcsXG4gICAgICAgIGNoaWxkcmVuID0gb3JnLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJpdGVtXCIgaW5pdD17dHJ1ZX0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgIHsgb3JnLm5hbWUgfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwib3JnXCIgcGFyYW1zPXt7b3JnSWQ6IG9yZy5pZH19IGNsYXNzTmFtZT1cIml0ZW1cIj57IG9yZy5uYW1lIH08L0xpbms+XG5cbiAgICAgICAgICB7IGNoaWxkcmVuLm1hcChjaGlsZCA9PlxuICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW4gJiYgY2hpbGQuY2hpbGRyZW4ubGVuZ3RoID8gPE9yZ1dpdGhDaGlsZHJlbiBvcmc9e2NoaWxkfSBrZXk9e2NoaWxkLmlkfS8+IDogPFJvb3RPcmcgb3JnPXtjaGlsZH0ga2V5PXtjaGlsZC5pZH0vPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy92aWV3cy9zaWRlbWVudS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcblxuaW1wb3J0IG9yZ0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgUmVmbHV4Lmxpc3RlblRvKG9yZ0FjdGlvbnMuY3JlYXRlLmNhbmNlbCwgJ2VuYWJsZU5ld0J0bicpLFxuICAgIFJlZmx1eC5saXN0ZW5UbyhvcmdBY3Rpb25zLmNyZWF0ZS5jb21wbGV0ZSwgJ2VuYWJsZU5ld0J0bicpXG4gIF0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc2FibGVOZXdCdG46IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlTmV3T3JnOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXNhYmxlTmV3QnRuKVxuICAgICAgcmV0dXJuO1xuXG4gICAgb3JnQWN0aW9ucy5jcmVhdGUuc3RhcnQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVOZXdCdG46IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgZW5hYmxlTmV3QnRuOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVOZXdCdG46IGZhbHNlXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5ld0J0bkNsYXNzID0gdGhpcy5zdGF0ZS5kaXNhYmxlTmV3QnRuID8gJ2l0ZW0gZGlzYWJsZWQnIDogJ2l0ZW0nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdmVydGljYWwgZmx1aWQgbWVudVwiPlxuICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNyZWF0ZU5ld09yZ30gY2xhc3NOYW1lPXtuZXdCdG5DbGFzc30+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBwbHVzIHNxdWFyZVwiPjwvaT5cbiAgICAgICAgICBBZGQgYW4gb3JnYW5pemF0aW9uXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL3ZpZXdzL2xpc3RNZW51LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcmdJZDogdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGFyYW1zKCkub3JnSWRcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHZlcnRpY2FsIGZsdWlkIG1lbnVcIj5cbiAgICAgICAgPExpbmsgdG89XCJuZXdBc3NldFwiIHF1ZXJ5PXt7b3JnOiB0aGlzLnN0YXRlLm9yZ0lkfX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gcGx1cyBzcXVhcmVcIj48L2k+XG4gICAgICAgICAgQWRkIGFuIGFzc2V0XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL3ZpZXdzL3Nob3dNZW51LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuXG5pbXBvcnQgdGVtcGxhdGVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFJlZmx1eC5saXN0ZW5Ubyh0ZW1wbGF0ZUFjdGlvbnMuY3JlYXRlLmNhbmNlbCwgJ2VuYWJsZU5ld0J0bicpLFxuICAgIFJlZmx1eC5saXN0ZW5Ubyh0ZW1wbGF0ZUFjdGlvbnMuY3JlYXRlLmNvbXBsZXRlLCAnZW5hYmxlTmV3QnRuJylcbiAgXSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzYWJsZU5ld0J0bjogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjcmVhdGVOZXdUZW1wbGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzYWJsZU5ld0J0bilcbiAgICAgIHJldHVybjtcblxuICAgIHRlbXBsYXRlQWN0aW9ucy5jcmVhdGUuc3RhcnQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVOZXdCdG46IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgZW5hYmxlTmV3QnRuOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVOZXdCdG46IGZhbHNlXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5ld0J0bkNsYXNzID0gdGhpcy5zdGF0ZS5kaXNhYmxlTmV3QnRuID8gJ2l0ZW0gZGlzYWJsZWQnIDogJ2l0ZW0nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdmVydGljYWwgZmx1aWQgbWVudVwiPlxuICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNyZWF0ZU5ld1RlbXBsYXRlfSBjbGFzc05hbWU9e25ld0J0bkNsYXNzfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIHBsdXMgc3F1YXJlXCI+PC9pPlxuICAgICAgICAgIEFkZCBhIHRlbXBsYXRlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy90ZW1wbGF0ZXMvdmlld3MvbGlzdE1lbnUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIFJlZmx1eC5saXN0ZW5UbyhzdG9yZSwgJ29uQ2F0ZWdvcmllc1VwZGF0ZWQnKVxuICBdLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRlZ29yaWVzOiBzdG9yZS5jYXRlZ29yaWVzXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBhY3Rpb25zLmxpc3QoKTtcbiAgfSxcbiAgb25DYXRlZ29yaWVzVXBkYXRlZDogZnVuY3Rpb24oY2F0ZWdvcmllcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1xuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiY29sdW1ucyBpY29uXCI+PC9pPlxuICAgICAgICBDYXRlZ29yaWVzXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoY2F0ID0+XG4gICAgICAgICAgICA8TGluayB0bz1cImNhdGVnb3J5XCIga2V5PXtjYXQuaWR9IHBhcmFtcz17e2NhdElkOiBjYXQuaWR9fSBjbGFzc05hbWU9XCJpdGVtXCI+e2NhdC5uYW1lfTwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL3ZpZXdzL3NpZGVtZW51LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuXG5pbXBvcnQgY2F0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtcbiAgICBSZWZsdXgubGlzdGVuVG8oY2F0QWN0aW9ucy5jcmVhdGUuY2FuY2VsLCAnZW5hYmxlTmV3QnRuJyksXG4gICAgUmVmbHV4Lmxpc3RlblRvKGNhdEFjdGlvbnMuY3JlYXRlLmNvbXBsZXRlLCAnZW5hYmxlTmV3QnRuJylcbiAgXSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzYWJsZU5ld0J0bjogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjcmVhdGVOZXdDYXRlZ29yeTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzYWJsZU5ld0J0bilcbiAgICAgIHJldHVybjtcblxuICAgIGNhdEFjdGlvbnMuY3JlYXRlLnN0YXJ0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNhYmxlTmV3QnRuOiB0cnVlXG4gICAgfSk7XG4gIH0sXG4gIGVuYWJsZU5ld0J0bjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNhYmxlTmV3QnRuOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBidG5DbGFzcyA9IHRoaXMuc3RhdGUuZGlzYWJsZU5ld0J0biA/ICdpdGVtIGRpc2FibGVkJyA6ICdpdGVtJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHZlcnRpY2FsIGZsdWlkIG1lbnVcIj5cbiAgICAgICAgPGEgb25DbGljaz17dGhpcy5jcmVhdGVOZXdDYXRlZ29yeX0gY2xhc3NOYW1lPXtidG5DbGFzc30+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBwbHVzIHNxdWFyZVwiPjwvaT5cbiAgICAgICAgICBBZGQgYSBjYXRlZ29yeVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy92aWV3cy9saXN0TWVudS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAncmVhY3Qtc2VtYW50aWZ5JztcbmltcG9ydCAkIGZyb20gJ2pRdWVyeSc7XG5cbmltcG9ydCBhc3NldEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgUmVmbHV4Lmxpc3RlblRvKGFzc2V0QWN0aW9ucy5zZXRBY3RpdmVBc3NldCwgJ29uQXNzZXRTZWxlY3QnKSxcbiAgICBSZWZsdXgubGlzdGVuVG8oYXNzZXRBY3Rpb25zLnVwZGF0ZS5jb21wbGV0ZSwgJ29uQXNzZXRTZWxlY3QnKVxuICBdLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhc3NldDoge31cbiAgICB9O1xuICB9LFxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG4gIG9uQXNzZXRTZWxlY3Q6IGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhc3NldDogYXNzZXRcbiAgICB9KTtcbiAgfSxcbiAgb25BY3RpdmVDaGFuZ2U6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBhc3NldCA9IHRoaXMuc3RhdGUuYXNzZXQ7XG4gICAgYXNzZXQuYWN0aXZlID0gdmFsO1xuICAgIGFzc2V0QWN0aW9ucy51cGRhdGUoYXNzZXQpO1xuICB9LFxuICBvbkZsYWdnZWRDaGFuZ2U6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBhc3NldCA9IHRoaXMuc3RhdGUuYXNzZXQ7XG4gICAgYXNzZXQuZmxhZ2dlZCA9IHZhbDtcbiAgICBhc3NldEFjdGlvbnMudXBkYXRlKGFzc2V0KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBmbHVpZCBtZW51XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxBY3RpdmVUb2dnbGUgYWN0aXZlPXt0aGlzLnN0YXRlLmFzc2V0LmFjdGl2ZX0gb25DaGFuZ2U9e3RoaXMub25BY3RpdmVDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxGbGFnZ2VkVG9nZ2xlIGZsYWdnZWQ9e3RoaXMuc3RhdGUuYXNzZXQuZmxhZ2dlZH0gb25DaGFuZ2U9e3RoaXMub25GbGFnZ2VkQ2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IEFjdGl2ZVRvZ2dsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IHByb3BzLmFjdGl2ZVxuICAgIH0pO1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gdGhpcy5nZXRET01Ob2RlKCk7XG4gICAgJChlbCkuY2hlY2tib3goe1xuICAgICAgb25DaGVja2VkOiB0aGlzLm9uQ2hlY2tlZCxcbiAgICAgIG9uVW5jaGVja2VkOiB0aGlzLm9uVW5jaGVja2VkLFxuICAgICAgZmlyZU9uSW5pdDogZmFsc2VcbiAgICB9KTtcbiAgfSxcbiAgb25DaGVja2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRydWUpO1xuICB9LFxuICBvblVuY2hlY2tlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShmYWxzZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdG9nZ2xlIGNoZWNrYm94XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWN0aXZlXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5hY3RpdmV9Lz5cbiAgICAgICAgPGxhYmVsPkFjdGl2ZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgRmxhZ2dlZFRvZ2dsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmxhZ2dlZDogdGhpcy5wcm9wcy5mbGFnZ2VkXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZsYWdnZWQ6IHByb3BzLmZsYWdnZWRcbiAgICB9KTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9IHRoaXMuZ2V0RE9NTm9kZSgpO1xuICAgICQoZWwpLmNoZWNrYm94KHtcbiAgICAgIG9uQ2hlY2tlZDogdGhpcy5vbkNoZWNrZWQsXG4gICAgICBvblVuY2hlY2tlZDogdGhpcy5vblVuY2hlY2tlZCxcbiAgICAgIGZpcmVPbkluaXQ6IGZhbHNlXG4gICAgfSk7XG4gIH0sXG4gIG9uQ2hlY2tlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0cnVlKTtcbiAgfSxcbiAgb25VbmNoZWNrZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZmFsc2UpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRvZ2dsZSBjaGVja2JveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZsYWdnZWRcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmZsYWdnZWR9Lz5cbiAgICAgICAgPGxhYmVsPkZsYWdnZWQ8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy92aWV3cy9zaG93TWVudS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHJlc3RmdWwgZnJvbSAncmVzdGZ1bC5qcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuY29uc3QgdG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbmNvbnN0IGJhc2VBcGkgPSByZXN0ZnVsKGNvbmZpZy5BUElfSE9TVClcbiAgICAgICAgICAgIC5oZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbilcbiAgICAgICAgICAgIC5wcmVmaXhVcmwoY29uZmlnLkFQSV9QUkVGSVgpXG4gICAgICAgICAgICAucG9ydChjb25maWcuQVBJX1BPUlQpO1xuXG5iYXNlQXBpLnVwZGF0ZVRva2VuID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgYmFzZUFwaS5oZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYXBpLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYmFzZUFwaSBmcm9tICcuLi8uLi9hcGknO1xuXG52YXIgdXNlckFwaSA9IHtcbiAgYmFzZTogYmFzZUFwaS5hbGwoJ3VzZXJzJyksXG4gIHZhbGlkYXRlOiAoKSA9PiB1c2VyQXBpLmJhc2UuZ2V0KCd2YWxpZGF0ZScpLFxuICBtZTogKCkgPT4gdXNlckFwaS5iYXNlLmdldCgnbWUnKSxcbiAgdXBkYXRlOiAoZGF0YSkgPT4gdXNlckFwaS5iYXNlLnB1dCgnbWUnLCBkYXRhKSxcbiAgbG9naW46ICh1c2VyKSA9PiBiYXNlQXBpLmFsbFVybCgnbG9naW4nLCB1c2VyQXBpLmJhc2UudXJsKCkgKyAnL2xvZ2luJykucG9zdCh1c2VyKSxcbiAgcmVnaXN0ZXI6ICh1c2VyKSA9PiBiYXNlQXBpLmFsbFVybCgnc2lnbnVwJywgdXNlckFwaS5iYXNlLnVybCgpICsgJy9zaWdudXAnKS5wb3N0KHVzZXIpXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy91c2VyL2FwaS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5uZXN0ZWRPcmdzID0gW107XG4gICAgdGhpcy5mbGF0T3JncyA9IFtdO1xuICB9LFxuICBzb3J0OiBmdW5jdGlvbihvcmdzKSB7XG4gICAgcmV0dXJuIG9yZ3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBpZiAoYS5uYW1lLnRvTG93ZXJDYXNlKCkgPiBiLm5hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBlbHNlIGlmIChhLm5hbWUudG9Mb3dlckNhc2UoKSA8IGIubmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9LFxuICBvbkxpc3RDb21wbGV0ZTogZnVuY3Rpb24ob3Jncykge1xuICAgIHRoaXMubmVzdGVkT3JncyA9IHRoaXMuc29ydChvcmdzKTtcbiAgICB0aGlzLl90cmlnZ2VyKCk7XG4gIH0sXG4gIG9uRmxhdExpc3RDb21wbGV0ZTogZnVuY3Rpb24ob3Jncykge1xuICAgIHRoaXMuZmxhdE9yZ3MgPSB0aGlzLnNvcnQob3Jncyk7XG4gICAgdGhpcy5fdHJpZ2dlcigpO1xuICB9LFxuICBvbkNyZWF0ZUNvbXBsZXRlOiBmdW5jdGlvbihvcmcpIHtcbiAgICBhY3Rpb25zLmxpc3QoKTtcbiAgICBhY3Rpb25zLmZsYXRMaXN0KCk7XG4gIH0sXG4gIG9uVXBkYXRlQ29tcGxldGU6IGZ1bmN0aW9uKG9yZykge1xuICAgIGFjdGlvbnMubGlzdCgpO1xuICAgIGFjdGlvbnMuZmxhdExpc3QoKTtcbiAgfSxcbiAgb25EZWxDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgYWN0aW9ucy5saXN0KCk7XG4gICAgYWN0aW9ucy5mbGF0TGlzdCgpO1xuICB9LFxuICBfdHJpZ2dlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50cmlnZ2VyKHtcbiAgICAgIG5lc3RlZE9yZ3M6IHRoaXMubmVzdGVkT3JncyxcbiAgICAgIGZsYXRPcmdzOiB0aGlzLmZsYXRPcmdzXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbml6YXRpb25zL3N0b3JlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5cbmltcG9ydCBvcmdBcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoe1xuICBsaXN0OiB7XG4gICAgY2hpbGRyZW46IFsnY29tcGxldGUnLCAnZXJyb3InXVxuICB9LFxuICBmbGF0TGlzdDoge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfSxcbiAgZ2V0OiB7XG4gICAgY2hpbGRyZW46IFsnY29tcGxldGUnLCAnZXJyb3InXVxuICB9LFxuICBjcmVhdGU6IHtcbiAgICBjaGlsZHJlbjogWydzdGFydCcsICdjYW5jZWwnLCAnY29tcGxldGUnLCAnZXJyb3InXVxuICB9LFxuICB1cGRhdGU6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIGRlbDoge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XG5cbmFjdGlvbnMubGlzdC5wcmVFbWl0ID0gZnVuY3Rpb24oKSB7XG4gIG9yZ0FwaS5hbGwoKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciBvcmdzID0gcmVzLmJvZHkoKS5tYXAociA9PiByLmRhdGEoKSk7XG5cbiAgICBhY3Rpb25zLmxpc3QuY29tcGxldGUob3Jncyk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMubGlzdC5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMuZmxhdExpc3QucHJlRW1pdCA9IGZ1bmN0aW9uKCkge1xuICBvcmdBcGkuYWxsKHtmbGF0OiB0cnVlfSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICB2YXIgb3JncyA9IHJlcy5ib2R5KCkubWFwKHIgPT4gci5kYXRhKCkpO1xuXG4gICAgYWN0aW9ucy5mbGF0TGlzdC5jb21wbGV0ZShvcmdzKTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5mbGF0TGlzdC5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMuZ2V0LnByZUVtaXQgPSBmdW5jdGlvbihvcmdJZCkge1xuICBvcmdBcGkuZ2V0KG9yZ0lkKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciBvcmcgPSByZXMuYm9keSgpLmRhdGEoKTtcblxuICAgIGFjdGlvbnMuZ2V0LmNvbXBsZXRlKG9yZyk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMuZ2V0LmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuYWN0aW9ucy5jcmVhdGUucHJlRW1pdCA9IGZ1bmN0aW9uKG9yZykge1xuICBpZiAoIW9yZylcbiAgICByZXR1cm47XG5cbiAgb3JnQXBpLmNyZWF0ZShvcmcpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIG5ld09yZyA9IHJlcy5ib2R5KCk7XG5cbiAgICBhY3Rpb25zLmNyZWF0ZS5jb21wbGV0ZShuZXdPcmcpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLmNyZWF0ZS5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMudXBkYXRlLnByZUVtaXQgPSBmdW5jdGlvbihvcmcpIHtcbiAgb3JnQXBpLnVwZGF0ZShvcmcpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIHVwZGF0ZWRPcmcgPSByZXMuYm9keSgpO1xuXG4gICAgYWN0aW9ucy51cGRhdGUuY29tcGxldGUodXBkYXRlZE9yZyk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMudXBkYXRlLmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuYWN0aW9ucy5kZWwucHJlRW1pdCA9IGZ1bmN0aW9uKG9yZykge1xuICBvcmdBcGkuZGVsKG9yZykudGhlbihmdW5jdGlvbigpIHtcbiAgICBhY3Rpb25zLmRlbC5jb21wbGV0ZShvcmcpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLmRlbC5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9ucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy9hY3Rpb25zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3JlYWN0LXNlbWFudGlmeSc7XG5pbXBvcnQgb3JnQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBvcmdTdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgJ2NsYXNzTmFtZXMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtcbiAgICBSZWZsdXgubGlzdGVuVG8ob3JnU3RvcmUsICdvbk9yZ3NVcGRhdGUnKSxcbiAgXSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3JnOiB0aGlzLnByb3BzLm9yZyxcbiAgICAgIG9yZ3M6IG9yZ1N0b3JlLm5lc3RlZE9yZ3MgfHwgW10sXG4gICAgICBlZGl0aW5nOiB0aGlzLnByb3BzLm5ldyxcbiAgICAgIGVkaXRUbXA6IF8uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLm9yZyksXG4gICAgICBlcnJvcjoge31cbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9yZzogbmV4dFByb3BzLm9yZyxcbiAgICAgIGVkaXRpbmc6IG5leHRQcm9wcy5uZXcsXG4gICAgICBlZGl0VG1wOiBfLmV4dGVuZCh7fSwgbmV4dFByb3BzLm9yZyksXG4gICAgICBlcnJvcjoge31cbiAgICB9KTtcbiAgfSxcbiAgb25PcmdzVXBkYXRlOiBmdW5jdGlvbihvcmdzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcmdzOiBvcmdzLm5lc3RlZE9yZ3NcbiAgICB9KTtcbiAgfSxcbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgIG5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyksXG4gICAgICAgIGVkaXRUbXAgPSB0aGlzLnN0YXRlLmVkaXRUbXAsXG4gICAgICAgIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuICAgIGVkaXRUbXBbbmFtZV0gPSB0YXJnZXQudmFsdWU7XG4gICAgZXJyb3JbbmFtZV0gPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRUbXA6IGVkaXRUbXAsXG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9KTtcbiAgfSxcbiAgc2V0UGFyZW50OiBmdW5jdGlvbihwYXJlbnQpIHtcbiAgICB2YXIgZWRpdFRtcCA9IHRoaXMuc3RhdGUuZWRpdFRtcDtcbiAgICBlZGl0VG1wLnBhcmVudElkID0gcGFyZW50O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdFRtcDogZWRpdFRtcFxuICAgIH0pO1xuICB9LFxuICBlZGl0T3JnOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRpbmc6IHRydWUsXG4gICAgICBlZGl0VG1wOiBfLmV4dGVuZCh7fSwgdGhpcy5zdGF0ZS5vcmcpLFxuICAgICAgZXJyb3I6IHt9XG4gICAgfSk7XG4gIH0sXG4gIGNhbmNlbEVkaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9KTtcbiAgfSxcbiAgZGVsZXRlT3JnOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgb3JnYW5pemF0aW9uIGFuZCBhbGwgaXRzIGFzc2V0cz8nKSlcbiAgICAgIHJldHVybjtcblxuICAgIG9yZ0FjdGlvbnMuZGVsKHRoaXMuc3RhdGUub3JnKTtcbiAgfSxcbiAgc2F2ZU9yZzogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBlZGl0VG1wID0gdGhpcy5zdGF0ZS5lZGl0VG1wLFxuICAgICAgICBlcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG5cbiAgICBpZiAoIWVkaXRUbXAubmFtZSkge1xuICAgICAgZXJyb3IubmFtZSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWVkaXRUbXAuaWQpXG4gICAgICBvcmdBY3Rpb25zLmNyZWF0ZSh0aGlzLnN0YXRlLmVkaXRUbXApO1xuICAgIGVsc2VcbiAgICAgIG9yZ0FjdGlvbnMudXBkYXRlKHRoaXMuc3RhdGUuZWRpdFRtcCk7XG4gIH0sXG4gIGNhbmNlbE5ld09yZzogZnVuY3Rpb24oZSkge1xuICAgIG9yZ0FjdGlvbnMuY3JlYXRlLmNhbmNlbCgpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5lZGl0aW5nKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTm90RWRpdGluZygpO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVkaXRpbmcoKTtcbiAgfSxcbiAgcmVuZGVyTm90RWRpdGluZzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9yZyA9IHRoaXMuc3RhdGUub3JnO1xuXG4gICAgZnVuY3Rpb24gc2hvd1BhcmVudChvcmcpIHtcbiAgICAgIGlmIChvcmcucGFyZW50KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImxldmVsIHVwIGljb25cIj48L2k+XG4gICAgICAgICAgICB7b3JnLnBhcmVudC5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtvcmcubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICAgICAgICAgIHtzaG93UGFyZW50KG9yZyl9XG5cbiAgICAgICAgICAgIHtvcmcuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50XCI+XG4gICAgICAgICAgPERyb3Bkb3duIGNsYXNzTmFtZT1cImlubGluZSByaWdodCBpY29uXCIgaW5pdD17dHJ1ZX0gc3R5bGU9e3ttYXJnaW5SaWdodDogJzhweCd9fT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNldHRpbmcgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPXt0aGlzLmVkaXRPcmd9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImVkaXQgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPXt0aGlzLmRlbGV0ZU9yZ30+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidHJhc2ggaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIHNlcnZlclwiPjwvaT5cbiAgICAgICAgICAgIHtvcmcuYXNzZXRzID8gb3JnLmFzc2V0cy5sZW5ndGggOiAnMCd9IEFzc2V0c1xuXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbjogJzAgNHB4J319Pnw8L3NwYW4+XG5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwib3JnXCIgcGFyYW1zPXt7b3JnSWQ6IG9yZy5pZH19IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICBHbyB0byBhc3NldCBsaXN0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbiAgcmVuZGVyRWRpdGluZzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVkaXRUbXAgPSB0aGlzLnN0YXRlLmVkaXRUbXAsXG4gICAgICAgIG9yZ3MgPSB0aGlzLnN0YXRlLm9yZ3MsXG4gICAgICAgIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuICAgIC8vIGRvbid0IGFsbG93IGFuIG9yZyB0byBiZSBpdHMgb3duIHBhcmVudFxuICAgIGlmIChlZGl0VG1wLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9yZ3MgPSBvcmdzLmZpbHRlcihvID0+IG8uaWQgIT09IGVkaXRUbXAuaWQpO1xuICAgIH1cblxuICAgIHZhciBuYW1lQ2xhc3MgPSBjbGFzc05hbWVzKHtcbiAgICAgIGZpZWxkOiB0cnVlLFxuICAgICAgdWk6IHRydWUsXG4gICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgIHNtYWxsOiB0cnVlLFxuICAgICAgZXJyb3I6IGVycm9yLm5hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2F2ZU9yZ30gY2xhc3NOYW1lPVwidWkgZm9ybVwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bmFtZUNsYXNzfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e2VkaXRUbXAubmFtZX0gcmVxdWlyZWQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG5hbWU9XCJuYW1lXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHVpIHNtYWxsIGlucHV0XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17ZWRpdFRtcC5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG5hbWU9XCJkZXNjcmlwdGlvblwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCB1aSBzbWFsbCBpbnB1dFwiPlxuICAgICAgICAgICAgICA8RHJvcGRvd24gaW5pdD17e29uQ2hhbmdlOiB0aGlzLnNldFBhcmVudCwgYWxsb3dDYXRlZ29yeVNlbGVjdGlvbjp0cnVlfX0gbmFtZT1cInBhcmVudFwiIGNsYXNzTmFtZT1cImJhc2ljIGJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdCB0ZXh0XCI+UGFyZW50IG9yZ2FuaXphdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIHtvcmdzLm1hcChvcmcgPT5cbiAgICAgICAgICAgICAgICAgICAgPE5ld09yZ1BhcmVudERyb3Bkb3duSXRlbSBvcmc9e29yZ30vPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b24gcHJpbWFyeSBzbWFsbFwiIHR5cGU9XCJzdWJtaXRcIj5TYXZlIG9yZ2FuaXphdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b24gYmFzaWMgc21hbGxcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZWRpdFRtcC5pZCA/IHRoaXMuY2FuY2VsRWRpdCA6IHRoaXMuY2FuY2VsTmV3T3JnfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IE5ld09yZ1BhcmVudERyb3Bkb3duSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3JnOiB0aGlzLnByb3BzLm9yZ1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcmc6IHByb3BzLm9yZ1xuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcmcgPSB0aGlzLnByb3BzLm9yZztcblxuXG4gICAgaWYgKCFvcmcuY2hpbGRyZW4gfHwgIW9yZy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGRhdGEtdmFsdWU9e29yZy5pZH0ga2V5PXtvcmcuaWR9PntvcmcubmFtZX08L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntvcmcubmFtZX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG5cbiAgICAgICAgICAgIHtvcmcuY2hpbGRyZW4ubWFwKGNoaWxkID0+XG4gICAgICAgICAgICAgIDxOZXdPcmdQYXJlbnREcm9wZG93bkl0ZW0gb3JnPXtjaGlsZH0vPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL29yZ2FuaXphdGlvbnMvdmlld3MvY2FyZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuXG5pbXBvcnQgdGVtcGxhdGVBcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoe1xuICBsaXN0OiB7XG4gICAgY2hpbGRyZW46IFsnY29tcGxldGUnLCAnZXJyb3InXVxuICB9LFxuICBnZXQ6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIGNyZWF0ZToge1xuICAgIGNoaWxkcmVuOiBbJ3N0YXJ0JywgJ2NhbmNlbCcsICdjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIHVwZGF0ZToge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfSxcbiAgZGVsOiB7XG4gICAgY2hpbGRyZW46IFsnY29tcGxldGUnLCAnZXJyb3InXVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcblxuYWN0aW9ucy5saXN0LnByZUVtaXQgPSBmdW5jdGlvbigpIHtcbiAgdGVtcGxhdGVBcGkuYWxsKCkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICB2YXIgdGVtcGxhdGVzID0gcmVzLmJvZHkoKS5tYXAociA9PiByLmRhdGEoKSk7XG5cbiAgICBhY3Rpb25zLmxpc3QuY29tcGxldGUodGVtcGxhdGVzKTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5saXN0LmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuYWN0aW9ucy5nZXQucHJlRW1pdCA9IGZ1bmN0aW9uKHRlbXBsYXRlSWQpIHtcbiAgdGVtcGxhdGVBcGkuZ2V0KHRlbXBsYXRlSWQpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gcmVzLmJvZHkoKS5kYXRhKCk7XG5cbiAgICBhY3Rpb25zLmdldC5jb21wbGV0ZSh0ZW1wbGF0ZSk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMuZ2V0LmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuYWN0aW9ucy5jcmVhdGUucHJlRW1pdCA9IGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG4gIGlmICghdGVtcGxhdGUpXG4gICAgcmV0dXJuO1xuXG4gIHRlbXBsYXRlQXBpLmNyZWF0ZSh0ZW1wbGF0ZSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICB2YXIgbmV3VGVtcGxhdGUgPSByZXMuYm9keSgpO1xuXG4gICAgYWN0aW9ucy5jcmVhdGUuY29tcGxldGUobmV3VGVtcGxhdGUpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLmNyZWF0ZS5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMudXBkYXRlLnByZUVtaXQgPSBmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZUFwaS51cGRhdGUodGVtcGxhdGUpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIHVwZGF0ZWRUZW1wbGF0ZSA9IHJlcy5ib2R5KCk7XG5cbiAgICBhY3Rpb25zLnVwZGF0ZS5jb21wbGV0ZSh1cGRhdGVkVGVtcGxhdGUpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLnVwZGF0ZS5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMuZGVsLnByZUVtaXQgPSBmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZUFwaS5kZWwodGVtcGxhdGUpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgYWN0aW9ucy5kZWwuY29tcGxldGUodGVtcGxhdGUpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLmRlbC5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy9hY3Rpb25zLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5cbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gIGxpc3RlbmFibGVzOiBhY3Rpb25zLFxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IFtdO1xuICB9LFxuICBvbkxpc3RDb21wbGV0ZTogZnVuY3Rpb24odGVtcGxhdGVzKSB7XG4gICAgdGhpcy50ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG4gICAgdGhpcy50cmlnZ2VyKHRlbXBsYXRlcyk7XG4gIH0sXG4gIG9uQ3JlYXRlQ29tcGxldGU6IGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG4gICAgdGhpcy50ZW1wbGF0ZXMudW5zaGlmdCh0ZW1wbGF0ZSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMudGVtcGxhdGVzKTtcbiAgfSxcbiAgb25VcGRhdGVDb21wbGV0ZTogZnVuY3Rpb24odGVtcGxhdGUpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICBpZiAodC5pZCA9PT0gdGVtcGxhdGUuaWQpXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcblxuICAgICAgcmV0dXJuIHQ7XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMudGVtcGxhdGVzKTtcbiAgfSxcbiAgb25EZWxDb21wbGV0ZTogZnVuY3Rpb24odGVtcGxhdGUpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5pZCAhPT0gdGVtcGxhdGUuaWQ7XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMudGVtcGxhdGVzKTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy9zdG9yZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XG4gIH0sXG4gIG9uTGlzdENvbXBsZXRlOiBmdW5jdGlvbihjYXRlZ29yaWVzKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcbiAgICB0aGlzLnRyaWdnZXIoY2F0ZWdvcmllcyk7XG4gIH0sXG4gIG9uQ3JlYXRlQ29tcGxldGU6IGZ1bmN0aW9uKGNhdCkge1xuICAgIHRoaXMuY2F0ZWdvcmllcy51bnNoaWZ0KGNhdCk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY2F0ZWdvcmllcyk7XG4gIH0sXG4gIG9uVXBkYXRlQ29tcGxldGU6IGZ1bmN0aW9uKGNhdCkge1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgaWYgKGMuaWQgPT09IGNhdC5pZClcbiAgICAgICAgcmV0dXJuIGNhdDtcblxuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY2F0ZWdvcmllcyk7XG4gIH0sXG4gIG9uRGVsQ29tcGxldGU6IGZ1bmN0aW9uKGNhdCkge1xuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UodGhpcy5jYXRlZ29yaWVzLmluZGV4T2YoY2F0KSwgMSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY2F0ZWdvcmllcyk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL3N0b3JlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgY2F0ZWdvcmllc0FwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFjdGlvbnMgPSBSZWZsdXguY3JlYXRlQWN0aW9ucyh7XG4gIGxpc3Q6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIGNyZWF0ZToge1xuICAgIGNoaWxkcmVuOiBbJ3N0YXJ0JywgJ2NvbXBsZXRlJywgJ2NhbmNlbCcsICdlcnJvciddXG4gIH0sXG4gIGdldDoge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfSxcbiAgdXBkYXRlOiB7XG4gICAgY2hpbGRyZW46IFsnY29tcGxldGUnLCAnZXJyb3InXVxuICB9LFxuICBkZWw6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuXG5hY3Rpb25zLmxpc3QucHJlRW1pdCA9IGZ1bmN0aW9uKCkge1xuICBjYXRlZ29yaWVzQXBpLmFsbCgpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIGNhdGVnb3JpZXMgPSByZXMuYm9keSgpLm1hcChyID0+IHIuZGF0YSgpKTtcblxuICAgIGFjdGlvbnMubGlzdC5jb21wbGV0ZShjYXRlZ29yaWVzKTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5saXN0LmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuYWN0aW9ucy5jcmVhdGUucHJlRW1pdCA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gIGlmICghY2F0ZWdvcnkpXG4gICAgcmV0dXJuO1xuXG4gIGNhdGVnb3JpZXNBcGkuY3JlYXRlKGNhdGVnb3J5KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciBuZXdDYXRlZ29yeSA9IHJlcy5ib2R5KCk7XG5cbiAgICBhY3Rpb25zLmNyZWF0ZS5jb21wbGV0ZShuZXdDYXRlZ29yeSk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMuY3JlYXRlLmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuYWN0aW9ucy5nZXQucHJlRW1pdCA9IGZ1bmN0aW9uKGlkKSB7XG4gIGNhdGVnb3JpZXNBcGkuZ2V0KGlkKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciBjYXRlZ29yeSA9IHJlcy5ib2R5KCkuZGF0YSgpO1xuXG4gICAgYWN0aW9ucy5nZXQuY29tcGxldGUoY2F0ZWdvcnkpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLmdldC5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMudXBkYXRlLnByZUVtaXQgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xuICBjYXRlZ29yaWVzQXBpLnVwZGF0ZShjYXRlZ29yeSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICB2YXIgdXBkYXRlZENhdGVnb3J5ID0gcmVzLmJvZHkoKTtcblxuICAgIGFjdGlvbnMudXBkYXRlLmNvbXBsZXRlKHVwZGF0ZWRDYXRlZ29yeSk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMudXBkYXRlLmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuYWN0aW9ucy5kZWwucHJlRW1pdCA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gIGNhdGVnb3JpZXNBcGkuZGVsKGNhdGVnb3J5KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIGFjdGlvbnMuZGVsLmNvbXBsZXRlKGNhdGVnb3J5KTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5kZWwuZXJyb3IoZXJyKTtcbiAgfSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2FjdGlvbnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoe1xuICBnZXQ6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIGNyZWF0ZToge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfSxcbiAgdXBkYXRlOiB7XG4gICAgY2hpbGRyZW46IFsnY29tcGxldGUnLCAnZXJyb3InXVxuICB9LFxuICBkZWw6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIGZpbGVzOiB7XG4gICAgY2hpbGRyZW46IHtcbiAgICAgIHVwbG9hZDoge1xuICAgICAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXRBY3RpdmVBc3NldDoge31cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuXG5hY3Rpb25zLmdldC5wcmVFbWl0ID0gZnVuY3Rpb24oaWQpIHtcbiAgYXBpLmdldChpZCkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICB2YXIgYXNzZXQgPSByZXMuYm9keSgpLmRhdGEoKTtcblxuICAgIGFjdGlvbnMuZ2V0LmNvbXBsZXRlKGFzc2V0KTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy5nZXQuZXJyb3IoZXJyKTtcbiAgfSk7XG59O1xuXG5hY3Rpb25zLmNyZWF0ZS5wcmVFbWl0ID0gZnVuY3Rpb24oYXNzZXQpIHtcbiAgYXBpLmNyZWF0ZShhc3NldCkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICB2YXIgbmV3QXNzZXQgPSByZXMuYm9keSgpO1xuXG4gICAgYWN0aW9ucy5jcmVhdGUuY29tcGxldGUobmV3QXNzZXQpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLmNyZWF0ZS5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMudXBkYXRlLnByZUVtaXQgPSBmdW5jdGlvbihhc3NldCkge1xuICBhcGkudXBkYXRlKGFzc2V0KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciB1cGRhdGVkQXNzZXQgPSByZXMuYm9keSgpO1xuXG4gICAgYWN0aW9ucy51cGRhdGUuY29tcGxldGUodXBkYXRlZEFzc2V0KTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgYWN0aW9ucy51cGRhdGUuZXJyb3IoZXJyKTtcbiAgfSk7XG59O1xuXG5hY3Rpb25zLmRlbC5wcmVFbWl0ID0gZnVuY3Rpb24oYXNzZXQpIHtcbiAgYXBpLmRlbChhc3NldCkudGhlbihmdW5jdGlvbigpIHtcbiAgICBhY3Rpb25zLmRlbC5jb21wbGV0ZShhc3NldCk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMuZGVsLmVycm9yKGVycik7XG4gIH0pO1xufTtcblxudmFyIGZpbGVBY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoe1xuICB1cGxvYWQ6IHtcbiAgICBjaGlsZHJlbjogWydjb21wbGV0ZScsICdlcnJvciddXG4gIH0sXG4gIGRlbDoge1xuICAgIGNoaWxkcmVuOiBbJ2NvbXBsZXRlJywgJ2Vycm9yJ11cbiAgfVxufSk7XG5cbmZpbGVBY3Rpb25zLnVwbG9hZC5wcmVFbWl0ID0gZnVuY3Rpb24oYXNzZXQsIHVwbG9hZCkge1xuICBhcGkuZmlsZXMudXBsb2FkKGFzc2V0LmlkLCB1cGxvYWQpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIGZpbGUgPSByZXMuYm9keSgpO1xuXG4gICAgYWN0aW9ucy5maWxlcy51cGxvYWQuY29tcGxldGUoZmlsZSk7XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGFjdGlvbnMuZmlsZXMudXBsb2FkLmVycm9yKGVycik7XG4gIH0pO1xufTtcblxuZmlsZUFjdGlvbnMuZGVsLnByZUVtaXQgPSBmdW5jdGlvbihmaWxlKSB7XG4gIGFwaS5maWxlcy5kZWwoZmlsZS5hc3NldElkLCBmaWxlLmlkKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIGFjdGlvbnMuZmlsZXMuZGVsLmNvbXBsZXRlKGZpbGUpO1xuICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICBhY3Rpb25zLmZpbGVzLmRlbC5lcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbmFjdGlvbnMuZmlsZXMgPSBmaWxlQWN0aW9ucztcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9hc3NldHMvYWN0aW9ucy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4JztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjb25zdCBOZXdGaWxlRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgUmVmbHV4Lmxpc3RlblRvKGFjdGlvbnMuZmlsZXMudXBsb2FkLmNvbXBsZXRlLCAnb25VcGxvYWRDb21wbGV0ZScpXG4gIF0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwbG9hZDoge31cbiAgICB9O1xuICB9LFxuICBzZXRGaWxlTmFtZTogZnVuY3Rpb24oZSkge1xuICAgIHZhciBuYW1lID0gZS50YXJnZXQudmFsdWUsXG4gICAgICAgIHVwbG9hZCA9IHRoaXMuc3RhdGUudXBsb2FkO1xuXG4gICAgdXBsb2FkLm5hbWUgPSBuYW1lO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGxvYWQ6IHVwbG9hZFxuICAgIH0pO1xuICB9LFxuICBzZWxlY3RGaWxlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlsZSA9IHRoaXMucmVmcy5maWxlLmdldERPTU5vZGUoKS5maWxlc1swXSxcbiAgICAgICAgdXBsb2FkID0gdGhpcy5zdGF0ZS51cGxvYWQ7XG5cbiAgICB1cGxvYWQuZmlsZSA9IGZpbGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwbG9hZDogdXBsb2FkXG4gICAgfSk7XG4gIH0sXG4gIHVwbG9hZEZpbGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhY3Rpb25zLmZpbGVzLnVwbG9hZCh0aGlzLnByb3BzLmFzc2V0LCB0aGlzLnN0YXRlLnVwbG9hZCk7XG4gIH0sXG4gIG9uVXBsb2FkQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBsb2FkOiB7fVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZWZzLnVwbG9hZEZvcm0uZ2V0RE9NTm9kZSgpLnJlc2V0KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGVjdEZpbGVCdG5DbGFzcyA9IGNsYXNzTmFtZXMoJ3VpIGJ1dHRvbicsIHtcbiAgICAgIGdyZWVuOiB0aGlzLnN0YXRlLnVwbG9hZC5maWxlICE9PSB1bmRlZmluZWRcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGF0dGFjaGVkIHNlZ21lbnRcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidWkgZmx1aWQgZm9ybVwiIG9uU3VibWl0PXt0aGlzLnVwbG9hZEZpbGV9IHJlZj1cInVwbG9hZEZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRocmVlIGZpZWxkc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzbWFsbCBpbnB1dCBmaWVsZFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTaG9ydCBkZXNjcmlwdGlvbiAob3B0aW9uYWwpXCIgbWF4TGVuZ3RoPVwiNjBcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnNldEZpbGVOYW1lfSBjbGFzc05hbWU9XCJcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIiBjbGFzc05hbWU9e3NlbGVjdEZpbGVCdG5DbGFzc30+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnVwbG9hZC5maWxlID8gdGhpcy5zdGF0ZS51cGxvYWQuZmlsZS5uYW1lIDogJ1NlbGVjdCBmaWxlJyB9XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdEZpbGV9IHJlZj1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvbiBwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLnVwbG9hZC5maWxlID09PSB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgIFVwbG9hZCBmaWxlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5jb25zdCBmaWxlSWNvbnMgPSB7XG4gIGltYWdlOiAnZmlsZSBpbWFnZSBvdXRsaW5lIGljb24nLFxuICB2aWRlbzogJ2ZpbGUgdmlkZW8gb3V0bGluZSBpY29uJyxcbiAgd29yZDogJ2ZpbGUgd29yZCBvdXRsaW5lIGljb24nLFxuICBleGNlbDogJ2ZpbGUgZXhjZWwgb3V0bGluZSBpY29uJyxcbiAgcG93ZXJwb2ludDogJ2ZpbGUgcG93ZXJwb2ludCBvdXRsaW5lIGljb24nLFxuICBwZGY6ICdmaWxlIHBkZiBvdXRsaW5lIGljb24nLFxuICB0ZXh0OiAnZmlsZSB0ZXh0IG91dGxpbmUgaWNvbicsXG4gIG90aGVyOiAnZmlsZSBvdXRsaW5lIGljb24nXG59O1xuXG5leHBvcnQgY29uc3QgRmlsZUxpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiB0aGlzLnByb3BzLmZpbGVzIHx8IFtdXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbGVzOiBwcm9wcy5maWxlc1xuICAgIH0pO1xuICB9LFxuICBkZWxldGVGaWxlOiBmdW5jdGlvbihmaWxlKSB7XG4gICAgYWN0aW9ucy5maWxlcy5kZWwoZmlsZSk7XG4gIH0sXG4gIGZpbGVJY29uOiBmdW5jdGlvbihmaWxlKSB7XG4gICAgdmFyIGZpbGVUeXBlID0gZmlsZS5taW1lVHlwZTtcblxuICAgIGlmICghZmlsZVR5cGUpXG4gICAgICByZXR1cm4gZmlsZUljb25zLm90aGVyO1xuXG4gICAgaWYgKGZpbGVUeXBlLmluZGV4T2YoJ2ltYWdlJykgPiAtMSlcbiAgICAgIHJldHVybiBmaWxlSWNvbnMuaW1hZ2U7XG4gICAgZWxzZSBpZiAoZmlsZVR5cGUuaW5kZXhPZigndmlkZW8nKSA+IC0xKVxuICAgICAgcmV0dXJuIGZpbGVJY29ucy52aWRlbztcbiAgICBlbHNlIGlmIChmaWxlVHlwZS5pbmRleE9mKCdtc3dvcmQnKSA+IC0xIHx8IGZpbGVUeXBlLmluZGV4T2YoJ3dvcmRwcm9jZXNzaW5nbWwnKSA+IC0xKVxuICAgICAgcmV0dXJuIGZpbGVJY29ucy53b3JkO1xuICAgIGVsc2UgaWYgKGZpbGVUeXBlLmluZGV4T2YoJ2V4Y2VsJykgPiAtMSB8fCBmaWxlVHlwZS5pbmRleE9mKCdzcHJlYWRzaGVldG1sJykgPiAtMSlcbiAgICAgIHJldHVybiBmaWxlSWNvbnMuZXhjZWw7XG4gICAgZWxzZSBpZiAoZmlsZVR5cGUuaW5kZXhPZigncG93ZXJwb2ludCcpID4gLTEgfHwgZmlsZVR5cGUuaW5kZXhPZignc3ByZWFkc2hlZXRtbCcpID4gLTEpXG4gICAgICByZXR1cm4gZmlsZUljb25zLnBvd2VycG9pbnQ7XG4gICAgZWxzZSBpZiAoZmlsZVR5cGUuaW5kZXhPZigncGRmJykgPiAtMSlcbiAgICAgIHJldHVybiBmaWxlSWNvbnMucGRmO1xuICAgIGVsc2UgaWYgKGZpbGVUeXBlLmluZGV4T2YoJ3RleHQnKSA+IC0xKVxuICAgICAgcmV0dXJuIGZpbGVJY29ucy50ZXh0O1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBmaWxlSWNvbnMub3RoZXI7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpbGVzID0gdGhpcy5zdGF0ZS5maWxlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHZhciBhTmFtZSA9IGEubmFtZSB8fCBhLm9yaWdpbmFsRmlsZW5hbWUsXG4gICAgICAgICAgYk5hbWUgPSBiLm5hbWUgfHwgYi5vcmlnaW5hbEZpbGVuYW1lO1xuXG4gICAgICBpZiAoYU5hbWUgPiBiTmFtZSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBlbHNlIGlmIChhTmFtZSA8IGJOYW1lKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICBpZiAoIWRhdGUpIHJldHVybjtcblxuICAgICAgdmFyIGF0ID0gbW9tZW50KGRhdGUpLFxuICAgICAgICAgIGN1dE9mZiA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXknKTtcblxuICAgICAgaWYgKGN1dE9mZi5pc0JlZm9yZShhdCkpXG4gICAgICAgIHJldHVybiBhdC5mcm9tTm93KCk7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAnYXQgJyArIGF0LmZvcm1hdCgnTS9EL1lZIEg6bW0nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3VpIGJvdHRvbSBhdHRhY2hlZCBzZWdtZW50Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWdtZW50c1wiPlxuICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGlkeCkgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2xlYXJpbmcgc2VnbWVudFwiIGtleT17ZmlsZS5pZCB8fCBpZHh9PlxuICAgICAgICAgICAgICA8YSBocmVmPXsnLycgKyBmaWxlLnBhdGggfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9eyB0aGlzLmZpbGVJY29uKGZpbGUpIH0+PC9pPlxuICAgICAgICAgICAgICAgIHsgZmlsZS5uYW1lIHx8IGZpbGUub3JpZ2luYWxGaWxlbmFtZSB9XG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319PlxuICAgICAgICAgICAgICAgIHsgZmlsZS5jcmVhdG9yLmZpcnN0TmFtZSB9IHsgZmlsZS5jcmVhdG9yLmxhc3ROYW1lIH0sIHsgZm9ybWF0RGF0ZShmaWxlLmNyZWF0ZWRBdCkgfVxuXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidHJhc2ggb3V0bGluZSBpY29uXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnOHB4J319IG9uQ2xpY2s9e3RoaXMuZGVsZXRlRmlsZS5iaW5kKHRoaXMsIGZpbGUpfT48L2k+XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9hc3NldHMvdmlld3MvZmlsZXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCc7XG5pbXBvcnQgeyBEcm9wZG93biwgQ2hlY2tib3ggfSBmcm9tICdyZWFjdC1zZW1hbnRpZnknO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB0ZW1wbGF0ZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB0ZW1wbGF0ZUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbXG4gICAgUmVmbHV4Lmxpc3RlblRvKHRlbXBsYXRlQWN0aW9ucy5nZXQuY29tcGxldGUsICdnZXRPcmlnaW5hbFRlbXBsYXRlJylcbiAgXSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcGxhdGU6IHRoaXMucHJvcHMudGVtcGxhdGUsXG4gICAgICBlZGl0aW5nOiB0aGlzLnByb3BzLm5ldyxcbiAgICAgIHNob3dEZXRhaWxzOiBmYWxzZSxcbiAgICAgIGVycm9yOiB7fVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcGxhdGU6IG5leHRQcm9wcy50ZW1wbGF0ZSxcbiAgICAgIGVkaXRpbmc6IG5leHRQcm9wcy5uZXdcbiAgICB9KTtcbiAgfSxcbiAgZ2V0T3JpZ2luYWxUZW1wbGF0ZTogZnVuY3Rpb24odGVtcGxhdGUpIHtcbiAgICBpZiAodGVtcGxhdGUuaWQgPT09IHRoaXMuc3RhdGUudGVtcGxhdGUuaWQpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gICAgICB9KTtcbiAgfSxcbiAgdG9nZ2xlRGV0YWlsczogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEZXRhaWxzOiAhdGhpcy5zdGF0ZS5zaG93RGV0YWlsc1xuICAgIH0pO1xuICB9LFxuICB0b2dnbGVFZGl0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZWRpdGluZyA9IHRoaXMuc3RhdGUuZWRpdGluZztcblxuICAgIGlmIChlZGl0aW5nKVxuICAgICAgdGVtcGxhdGVBY3Rpb25zLmdldCh0aGlzLnN0YXRlLnRlbXBsYXRlLmlkKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogIXRoaXMuc3RhdGUuZWRpdGluZ1xuICAgIH0pO1xuICB9LFxuICBvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgbmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSxcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlLFxuICAgICAgICBlcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG5cbiAgICB0ZW1wbGF0ZVtuYW1lXSA9IHRhcmdldC52YWx1ZTtcbiAgICBlcnJvcltuYW1lXSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfSk7XG4gIH0sXG4gIGFkZEZpZWxkOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZS5maWVsZHMpXG4gICAgICB0ZW1wbGF0ZS5maWVsZHMgPSBbe31dO1xuICAgIGVsc2VcbiAgICAgIHRlbXBsYXRlLmZpZWxkcy5wdXNoKHt9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gICAgfSk7XG4gIH0sXG4gIG9uRmllbGROYW1lQ2hhbmdlOiBmdW5jdGlvbihpZHgsIGUpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlLFxuICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgIGlmICghdGVtcGxhdGUuZmllbGRzKVxuICAgICAgdGVtcGxhdGUuZmllbGRzID0gW3t9XTtcblxuICAgIHRlbXBsYXRlLmZpZWxkc1tpZHhdLm5hbWUgPSB0YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbiAgICB9KTtcbiAgfSxcbiAgb25GaWVsZFR5cGVDaGFuZ2U6IGZ1bmN0aW9uKGlkeCwgdmFsKSB7XG4gICAgaWYgKCF2YWwpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZS5maWVsZHMpXG4gICAgICB0ZW1wbGF0ZS5maWVsZHMgPSBbe31dO1xuXG4gICAgdGVtcGxhdGUuZmllbGRzW2lkeF0uZmllbGRUeXBlID0gdmFsO1xuXG4gICAgaWYgKHZhbCA9PT0gJ3NlbGVjdCcpXG4gICAgICB0ZW1wbGF0ZS5maWVsZHNbaWR4XS5jaG9pY2VzID0gW251bGxdO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbiAgICB9KTtcbiAgfSxcbiAgZmllbGRBbGxvd011bHRpcGxlOiBmdW5jdGlvbihpZHgpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlO1xuICAgIHRlbXBsYXRlLmZpZWxkc1tpZHhdLm11bHRpcGxlID0gIXRlbXBsYXRlLmZpZWxkc1tpZHhdLm11bHRpcGxlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZUZpZWxkOiBmdW5jdGlvbihpZHgpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlO1xuICAgIHRlbXBsYXRlLmZpZWxkcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgIH0pO1xuICB9LFxuICBhZGRDaG9pY2U6IGZ1bmN0aW9uKGZpZWxkSWR4KSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5zdGF0ZS50ZW1wbGF0ZTtcbiAgICB0ZW1wbGF0ZS5maWVsZHNbZmllbGRJZHhdLmNob2ljZXMucHVzaChudWxsKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgIH0pO1xuICB9LFxuICBvbkNob2ljZUNoYW5nZTogZnVuY3Rpb24oaWR4LCBmaWVsZElkeCwgZSkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuc3RhdGUudGVtcGxhdGU7XG4gICAgdGVtcGxhdGUuZmllbGRzW2ZpZWxkSWR4XS5jaG9pY2VzW2lkeF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgIH0pO1xuICB9LFxuICByZW1vdmVDaG9pY2U6IGZ1bmN0aW9uKGlkeCwgZmllbGRJZHgpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlO1xuICAgIHRlbXBsYXRlLmZpZWxkc1tmaWVsZElkeF0uY2hvaWNlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgIH0pO1xuICB9LFxuICBjYW5jZWxOZXdUZW1wbGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGVtcGxhdGVBY3Rpb25zLmNyZWF0ZS5jYW5jZWwoKTtcbiAgfSxcbiAgc2F2ZVRlbXBsYXRlOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5zdGF0ZS50ZW1wbGF0ZSxcbiAgICAgICAgZXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZS5uYW1lKSB7XG4gICAgICBlcnJvci5uYW1lID0gdHJ1ZTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGVtcGxhdGUuZmllbGRzID0gdGVtcGxhdGUuZmllbGRzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gISF0Lm5hbWUgJiYgISF0LmZpZWxkVHlwZTtcbiAgICB9KTtcblxuICAgIGlmICghdGVtcGxhdGUuaWQpXG4gICAgICB0ZW1wbGF0ZUFjdGlvbnMuY3JlYXRlKHRlbXBsYXRlKTtcbiAgICBlbHNlXG4gICAgICB0ZW1wbGF0ZUFjdGlvbnMudXBkYXRlKHRlbXBsYXRlKTtcbiAgfSxcbiAgZGVsZXRlVGVtcGxhdGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0ZW1wbGF0ZT8nKSlcbiAgICAgIHJldHVybjtcblxuICAgIHRlbXBsYXRlQWN0aW9ucy5kZWwodGhpcy5zdGF0ZS50ZW1wbGF0ZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmVkaXRpbmcpXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJOb3RFZGl0aW5nKCk7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRWRpdGluZygpO1xuICB9LFxuICByZW5kZXJEZXRhaWxzOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd0RldGFpbHMpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ1aSB0YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZpZWxkIG5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgPHRoPkNob2ljZXM8L3RoPlxuICAgICAgICAgICAgPHRoPkFsbG93IG11bHRpcGxlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3RlbXBsYXRlLmZpZWxkcy5tYXAoKGZpZWxkLCBpZHgpID0+XG4gICAgICAgICAgICA8dHIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICA8dGQ+e2ZpZWxkLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntmaWVsZC5maWVsZFR5cGV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHtmaWVsZC5maWVsZFR5cGUgPT09ICdzZWxlY3QnICYmIGZpZWxkLmNob2ljZXMubGVuZ3RoID8gZmllbGQuY2hvaWNlcy5tYXAoKGNob2ljZSwgaWR4KSA9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+e2Nob2ljZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogJy0nfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge2ZpZWxkLmZpZWxkVHlwZSA9PT0gJ3NlbGVjdCcgJiYgZmllbGQuY2hvaWNlcy5sZW5ndGggJiYgZmllbGQubXVsdGlwbGUgPyA8aSBjbGFzc05hbWU9XCJjaGVjayBpY29uXCI+PC9pPiA6ICctJ31cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfSxcbiAgcmVuZGVyTm90RWRpdGluZzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5zdGF0ZS50ZW1wbGF0ZTtcblxuICAgIHZhciBkZXRhaWxzO1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dEZXRhaWxzKSB7XG4gICAgICBkZXRhaWxzID0gJ2Zvbyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRldGFpbHMgPSAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICB7dGVtcGxhdGUubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICAgICAgICAgIHt0ZW1wbGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJEZXRhaWxzKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIj5cbiAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPVwiaW5saW5lIHJpZ2h0IGljb25cIiBpbml0PXt7YWN0aW9uOiAnaGlkZSd9fSBzdHlsZT17e21hcmdpblJpZ2h0OiAnOHB4J319PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic2V0dGluZyBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZWRpdCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIG9uQ2xpY2s9e3RoaXMuZGVsZXRlVGVtcGxhdGV9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRyYXNoIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cblxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRGV0YWlsc30+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGV0YWlscyA/ICdIaWRlIGRldGFpbHMnIDogJ1Nob3cgZGV0YWlscyd9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4gIHJlbmRlckNob2ljZXM6IGZ1bmN0aW9uKGZpZWxkLCBmaWVsZElkeCkge1xuICAgIGlmIChmaWVsZC5maWVsZFR5cGUgJiYgZmllbGQuZmllbGRUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZSB3aWRlIGZpZWxkXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXJ0ZWVuIHdpZGUgaW5saW5lIGZpZWxkXCI+XG4gICAgICAgICAgICAgIDxDaGVja2JveCBpbml0PXt7b25DaGFuZ2U6IHRoaXMuZmllbGRBbGxvd011bHRpcGxlLmJpbmQodGhpcywgZmllbGRJZHgpfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2ZpZWxkLm11bHRpcGxlfS8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFsbG93IG11bHRpcGxlIHNlbGVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZSB3aWRlIGZpZWxkXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2ZpZWxkLmNob2ljZXMubWFwKChjaG9pY2UsIGlkeCkgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZSB3aWRlIGZpZWxkXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVuIHdpZGUgZmllbGQgdWkgc21hbGwgaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNob2ljZVwiIHZhbHVlPXtjaG9pY2V9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hvaWNlQ2hhbmdlLmJpbmQodGhpcywgaWR4LCBmaWVsZElkeCl9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvIHdpZGUgZmllbGRcIiBzdHlsZT17e21hcmdpblRvcDogJzdweCd9fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyZW1vdmUgaWNvbiBsaW5rXCIgb25DbGljaz17dGhpcy5yZW1vdmVDaG9pY2UuYmluZCh0aGlzLCBpZHgsIGZpZWxkSWR4KX0+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxMH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUgd2lkZSBmaWVsZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlaWdodCB3aWRlIGZpZWxkXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgbGFiZWxlZCBpY29uIGJ1dHRvbiBiYXNpYyB0aW55XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYWRkQ2hvaWNlLmJpbmQodGhpcywgZmllbGRJZHgpfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwbHVzIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgQWRkIGNob2ljZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9LFxuICByZW5kZXJFZGl0aW5nOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnN0YXRlLnRlbXBsYXRlLFxuICAgICAgICBmaWVsZHMgPSB0ZW1wbGF0ZS5maWVsZHM7XG5cbiAgICB2YXIgbmFtZUNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgICBmaWVsZDogdHJ1ZSxcbiAgICAgIHVpOiB0cnVlLFxuICAgICAgc21hbGw6IHRydWUsXG4gICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgIGVycm9yOiB0aGlzLnN0YXRlLmVycm9yLm5hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2F2ZVRlbXBsYXRlfSBjbGFzc05hbWU9XCJ1aSBmb3JtXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYW1lQ2xhc3N9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT17dGVtcGxhdGUubmFtZX0gcmVxdWlyZWQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG5hbWU9XCJuYW1lXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHVpIHNtYWxsIGlucHV0XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17dGVtcGxhdGUuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBuYW1lPVwiZGVzY3JpcHRpb25cIi8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInVpIHRvcCBhdHRhY2hlZCBoZWFkZXJcIiBzdHlsZT17e21hcmdpblRvcDogMH19PkZpZWxkczwvaDU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGF0dGFjaGVkIHNlZ21lbnRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fT5cbiAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpZHgpID0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbiB3aWRlIGZpZWxkIHVpIHNtYWxsIGlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGaWVsZCBuYW1lXCIgdmFsdWU9e2ZpZWxkLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uRmllbGROYW1lQ2hhbmdlLmJpbmQodGhpcywgaWR4KX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXZlIHdpZGUgZmllbGQgdWkgc21hbGwgaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaW5pdD17e29uQ2hhbmdlOiB0aGlzLm9uRmllbGRUeXBlQ2hhbmdlLmJpbmQodGhpcywgaWR4KX19IGNsYXNzTmFtZT1cInNlbGVjdGlvbiBmbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdCB0ZXh0XCI+e2ZpZWxkLmZpZWxkVHlwZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5UZXh0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlNlbGVjdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5DaGVja2JveDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lIHdpZGUgZmllbGRcIiBzdHlsZT17e21hcmdpblRvcDogJzdweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyZW1vdmUgaWNvbiBsaW5rXCIgb25DbGljaz17dGhpcy5yZW1vdmVGaWVsZC5iaW5kKHRoaXMsIGlkeCl9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hvaWNlcyhmaWVsZCwgaWR4KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVpZ2h0IHdpZGUgZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgbGFiZWxlZCBpY29uIGJ1dHRvbiBiYXNpYyB0aW55XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYWRkRmllbGR9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwbHVzIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBmaWVsZFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uIHByaW1hcnkgc21hbGxcIiB0eXBlPVwic3VibWl0XCI+U2F2ZSB0ZW1wbGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b24gYmFzaWMgc21hbGxcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGVtcGxhdGUuaWQgPyB0aGlzLnRvZ2dsZUVkaXQgOiB0aGlzLmNhbmNlbE5ld1RlbXBsYXRlfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy92aWV3cy9jYXJkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1zZW1hbnRpZnknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBjYXRTdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgY2F0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRlZ29yeTogdGhpcy5wcm9wcy5jYXRlZ29yeSxcbiAgICAgIGVkaXRpbmc6IHRoaXMucHJvcHMubmV3LFxuICAgICAgZWRpdFRtcDogXy5leHRlbmQoe30sIHRoaXMucHJvcHMuY2F0ZWdvcnkpLFxuICAgICAgZXJyb3I6IHt9XG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjYXRlZ29yeTogbmV4dFByb3BzLmNhdGVnb3J5LFxuICAgICAgZWRpdGluZzogbmV4dFByb3BzLm5ldyxcbiAgICAgIGVkaXRUbXA6IF8uZXh0ZW5kKHt9LCBuZXh0UHJvcHMuY2F0ZWdvcnkpLFxuICAgICAgZXJyb3I6IHt9XG4gICAgfSk7XG4gIH0sXG4gIHNldEVkaXRpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogIXRoaXMuc3RhdGUuZWRpdGluZyxcbiAgICAgIGVkaXRUbXA6IF8uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLmNhdGVnb3J5KSxcbiAgICAgIGVycm9yOiB7fVxuICAgIH0pO1xuICB9LFxuICBjYW5jZWxOZXc6IGZ1bmN0aW9uKCkge1xuICAgIGNhdEFjdGlvbnMuY3JlYXRlLmNhbmNlbCgpO1xuICB9LFxuICBvbkZpZWxkQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICBuYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpLFxuICAgICAgICBlZGl0VG1wID0gdGhpcy5zdGF0ZS5lZGl0VG1wLFxuICAgICAgICBlcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG5cbiAgICBlZGl0VG1wW25hbWVdID0gdGFyZ2V0LnZhbHVlO1xuICAgIGVycm9yW25hbWVdID0gZmFsc2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0VG1wOiBlZGl0VG1wLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfSk7XG4gIH0sXG4gIHNhdmVDYXRlZ29yeTogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBlZGl0VG1wID0gdGhpcy5zdGF0ZS5lZGl0VG1wLFxuICAgICAgICBlcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG5cbiAgICBpZiAoIWVkaXRUbXAubmFtZSkge1xuICAgICAgZXJyb3IubmFtZSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlZGl0VG1wLmlkKVxuICAgICAgY2F0QWN0aW9ucy51cGRhdGUoZWRpdFRtcCk7XG4gICAgZWxzZVxuICAgICAgY2F0QWN0aW9ucy5jcmVhdGUoZWRpdFRtcCk7XG4gIH0sXG4gIGRlbGV0ZUNhdGVnb3J5OiBmdW5jdGlvbigpIHtcbiAgICBjYXRBY3Rpb25zLmRlbCh0aGlzLnN0YXRlLmNhdGVnb3J5KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5lZGl0aW5nID8gdGhpcy5yZW5kZXJFZGl0aW5nKCkgOiB0aGlzLnJlbmRlck5vdEVkaXRpbmcoKTtcbiAgfSxcbiAgcmVuZGVyTm90RWRpdGluZzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhdGVnb3J5ID0gdGhpcy5zdGF0ZS5jYXRlZ29yeTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj57Y2F0ZWdvcnkubmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj57Y2F0ZWdvcnkuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiPlxuICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJpbmxpbmUgcmlnaHQgaWNvblwiIGluaXQ9e3RydWV9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc4cHgnfX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzZXR0aW5nIGljb25cIj48L2k+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgb25DbGljaz17dGhpcy5zZXRFZGl0aW5nfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJlZGl0IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgb25DbGljaz17dGhpcy5kZWxldGVDYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidHJhc2ggaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIHNlcnZlclwiPjwvaT5cbiAgICAgICAgICAgIHtjYXRlZ29yeS5hc3NldENvdW50fSBBc3NldHNcblxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW46ICcwIDRweCd9fT58PC9zcGFuPlxuXG4gICAgICAgICAgICA8TGluayB0bz1cImNhdGVnb3J5XCIgcGFyYW1zPXt7Y2F0SWQ6IGNhdGVnb3J5LmlkfX0+XG4gICAgICAgICAgICAgIEdvIHRvIGFzc2V0IGxpc3RcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuICByZW5kZXJFZGl0aW5nOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmVkaXRUbXA7XG5cbiAgICB2YXIgbmFtZUNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgICAnZmllbGQgdWkgaW5wdXQgc21hbGwnOiB0cnVlLFxuICAgICAgZXJyb3I6IHRoaXMuc3RhdGUuZXJyb3IubmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zYXZlQ2F0ZWdvcnl9IGNsYXNzTmFtZT1cInVpIGZvcm1cIiBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e25hbWVDbGFzc30+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e2NhdGVnb3J5Lm5hbWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgdWkgaW5wdXQgc21hbGxcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIHZhbHVlPXtjYXRlZ29yeS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidWkgYnV0dG9uIHByaW1hcnkgc21hbGxcIj5TYXZlIGNhdGVnb3J5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjYXRlZ29yeS5pZCA/IHRoaXMuc2V0RWRpdGluZyA6IHRoaXMuY2FuY2VsTmV3fSBjbGFzc05hbWU9XCJ1aSBidXR0b24gYmFzaWMgc21hbGxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2NhdGVnb3JpZXMvdmlld3MvY2FyZC5qc1xuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlc3RmdWw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlc3RmdWxcIlxuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIEFQSV9IT1NUOiAnbG9jYWxob3N0JyxcbiAgQVBJX1BPUlQ6IDMwMDAsXG4gIEFQSV9QUkVGSVg6ICd2MSdcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiYXNlQXBpIGZyb20gJy4uLy4uL2FwaSc7XG5cbnZhciBvcmdBcGkgPSB7XG4gIGJhc2U6IGJhc2VBcGkuYWxsKCdvcmdhbml6YXRpb25zJyksXG4gIGFsbDogKHBhcmFtcykgPT4gb3JnQXBpLmJhc2UuZ2V0QWxsKHBhcmFtcyksXG4gIGdldDogKGlkKSA9PiBvcmdBcGkuYmFzZS5nZXQoaWQpLFxuICBjcmVhdGU6IChvcmcpID0+IG9yZ0FwaS5iYXNlLnBvc3Qob3JnKSxcbiAgdXBkYXRlOiAob3JnKSA9PiBvcmdBcGkuYmFzZS5wdXQob3JnLmlkLCBvcmcpLFxuICBkZWw6IChvcmcpID0+IG9yZ0FwaS5iYXNlLmRlbGV0ZShvcmcuaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcmdBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL29yZ2FuaXphdGlvbnMvYXBpLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYmFzZUFwaSBmcm9tICcuLi8uLi9hcGknO1xuXG5jb25zdCB0ZW1wbGF0ZUFwaSA9IHtcbiAgYmFzZTogYmFzZUFwaS5hbGwoJ3RlbXBsYXRlcycpLFxuICBhbGw6ICgpID0+IHRlbXBsYXRlQXBpLmJhc2UuZ2V0QWxsKCksXG4gIGdldDogKGlkKSA9PiB0ZW1wbGF0ZUFwaS5iYXNlLmdldChpZCksXG4gIGNyZWF0ZTogKHRlbXBsYXRlKSA9PiB0ZW1wbGF0ZUFwaS5iYXNlLnBvc3QodGVtcGxhdGUpLFxuICB1cGRhdGU6ICh0ZW1wbGF0ZSkgPT4gdGVtcGxhdGVBcGkuYmFzZS5wdXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlKSxcbiAgZGVsOiAodGVtcGxhdGUpID0+IHRlbXBsYXRlQXBpLmJhc2UuZGVsZXRlKHRlbXBsYXRlLmlkKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3RlbXBsYXRlcy9hcGkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiYXNlQXBpIGZyb20gJy4uLy4uL2FwaSc7XG5cbmNvbnN0IGNhdGVnb3J5QXBpID0ge1xuICBiYXNlOiBiYXNlQXBpLmFsbCgnY2F0ZWdvcmllcycpLFxuICBhbGw6ICgpID0+IGNhdGVnb3J5QXBpLmJhc2UuZ2V0QWxsKCksXG4gIGdldDogKGlkKSA9PiBjYXRlZ29yeUFwaS5iYXNlLmdldChpZCksXG4gIGNyZWF0ZTogKGNhdCkgPT4gY2F0ZWdvcnlBcGkuYmFzZS5wb3N0KGNhdCksXG4gIHVwZGF0ZTogKGNhdCkgPT4gY2F0ZWdvcnlBcGkuYmFzZS5wdXQoY2F0LmlkLCBjYXQpLFxuICBkZWw6IChjYXQpID0+IGNhdGVnb3J5QXBpLmJhc2UuZGVsZXRlKGNhdC5pZClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3J5QXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2FwaS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGJhc2VBcGkgZnJvbSAnLi4vLi4vYXBpJztcblxuY29uc3QgYXNzZXRBcGkgPSB7XG4gIGJhc2U6IGJhc2VBcGkuYWxsKCdhc3NldHMnKSxcbiAgYWxsOiAoKSA9PiBhc3NldEFwaS5iYXNlLmdldEFsbCgpLFxuICBnZXQ6IChpZCkgPT4gYXNzZXRBcGkuYmFzZS5nZXQoaWQpLFxuICBjcmVhdGU6IChhc3NldCkgPT4gYXNzZXRBcGkuYmFzZS5wb3N0KGFzc2V0KSxcbiAgdXBkYXRlOiAoYXNzZXQpID0+IGFzc2V0QXBpLmJhc2UucHV0KGFzc2V0LmlkLCBhc3NldCksXG4gIGRlbDogKGFzc2V0KSA9PiBhc3NldEFwaS5iYXNlLmRlbGV0ZShhc3NldC5pZCksXG4gIGZpbGVzOiB7XG4gICAgdXBsb2FkOiB1cGxvYWRGaWxlLFxuICAgIGRlbDogKGFzc2V0SWQsIGZpbGVJZCkgPT4gYmFzZUFwaS5vbmUoJ2Fzc2V0cycsIGFzc2V0SWQpLmFsbCgnZmlsZXMnKS5kZWxldGUoZmlsZUlkKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3NldEFwaTtcblxuZnVuY3Rpb24gdXBsb2FkRmlsZShhc3NldElkLCB1cGxvYWQpIHtcbiAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICBkYXRhLmFwcGVuZCgnZmlsZScsIHVwbG9hZC5maWxlKTtcbiAgZGF0YS5hcHBlbmQoJ25hbWUnLCB1cGxvYWQubmFtZSk7XG5cbiAgcmV0dXJuIGJhc2VBcGlcbiAgICAgICAgLmFkZFJlcXVlc3RJbnRlcmNlcHRvcihmdW5jdGlvbihkYXRhLCBoZWFkZXJzKSB7XG4gICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbmUoJ2Fzc2V0cycsIGFzc2V0SWQpXG4gICAgICAgIC5hbGwoJ2ZpbGVzJylcbiAgICAgICAgLnBvc3QoZGF0YSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy9hcGkuanNcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzTmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==