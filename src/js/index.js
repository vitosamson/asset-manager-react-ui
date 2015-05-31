'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div id="content" role="main">
        Asset manager
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
