'use strict';

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      orgId: this.context.router.getCurrentParams().orgId
    };
  },
  render: function() {
    return (
      <div className="ui vertical fluid menu">
        <Link to="newAsset" query={{org: this.state.orgId}} className="item">
          <i className="icon plus square"></i>
          Add an asset
        </Link>
      </div>
    );
  }
});
