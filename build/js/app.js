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
	    TopNav = __webpack_require__(3),
	    Sidemenu = __webpack_require__(4);

	var App = React.createClass({
	  displayName: 'App',

	  render: function render() {
	    console.log(this.props);
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

	var Dashboard = React.createClass({
	  displayName: 'Dashboard',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'twelve wide column' },
	      'Welcome'
	    );
	  }
	});

	var routes = React.createElement(
	  Router.Route,
	  { path: '/', handler: App },
	  React.createElement(Router.DefaultRoute, { handler: Dashboard, name: 'dashboard' })
	);

	Router.run(routes, Router.HistoryLocation, function (Handler) {
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
	    Dropdown = __webpack_require__(5).Dropdown;

	var topNav = React.createClass({
	  displayName: 'topNav',

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
	                    { className: 'item' },
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
	    Dropdown = __webpack_require__(5).Dropdown,
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

	module.exports = Semantify;

/***/ }
/******/ ]);