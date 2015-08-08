'use strict';

import Reflux from 'reflux';
import { Navigation } from 'react-router';

import userStore from './store';
import userActions from './actions';

export var Authenticated = {
  mixins: [
    Navigation,
    Reflux.listenTo(userActions.validate.error, 'onValidateError')
  ],
  statics: {
    willTransitionTo: function(transition) {
      if (userStore.token === null || userStore.token === undefined)
        transition.redirect('login', {});
      userActions.validate();
    }
  },
  onValidateError: function(err) {
    if (err.status == 401)
      this.transitionTo('login');
  }
};

export var Unauthenticated = {
  mixins: [
    Navigation
  ],
  statics: {
    willTransitionTo: function(transition) {
      if (userStore.token !== null && userStore.token !== undefined)
        transition.redirect('app', {});
    }
  },
};
