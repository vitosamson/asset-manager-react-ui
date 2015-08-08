'use strict';

import React from 'react';
import Reflux from 'reflux';
import classNames from 'classnames';

import userStore from '../store';
import userActions from '../actions';

export default React.createClass({
  mixins: [
    Reflux.listenTo(userStore, 'onUpdate'),
    Reflux.listenTo(userActions.update.error, 'onError')
  ],
  getInitialState: function() {
    return {
      user: userStore.user || {},
      error: {},
      loading: false,
      success: false
    };
  },
  onUpdate: function(token, user) {
    var success = user.id == this.state.user.id;

    this.setState({
      user: user,
      success: success,
      loading: false
    });

    if (success) {
      setTimeout(function() {
        this.setState({success: false});
      }.bind(this), 2000);
    }
  },
  onError: function(err) {
    console.error(err);
  },
  inputChange: function(e) {
    var input = e.target,
        name = input.getAttribute('name'),
        state = this.state;

    state.user[name] = input.value;
    state.error[name] = false;
    this.setState(state);
  },
  onSubmit: function(e) {
    e.preventDefault();

    var user = this.state.user,
        error = this.state.error;

    if (!user.firstName)
      error.firstName = true;

    if (!user.email)
      error.email = true;

    if (user.password && user.password !== user.passwordConfirm)
      error.password = true;

    this.setState({error: error});

    if (user.firstName && user.email && (!user.password || user.password == user.passwordConfirm)) {
      this.setState({
        loading: true
      });
      userActions.update(user);
    }
  },
  render: function() {
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

    return (
      <form className="ui form" onSubmit={this.onSubmit} noValidate>
        <div className="two fields">
          <div className={error.firstName ? 'field error' : 'field'}>
            <label htmlFor="firstName">First name</label>
            <input required type="text" id="firstName" name="firstName" onChange={this.inputChange} value={user.firstName} placeholder="Required"/>
          </div>
          <div className="field">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" onChange={this.inputChange} placeholder="Optional" value={user.lastName}/>
          </div>
        </div>
        <div className={error.email ? 'field error' : 'field'}>
          <label htmlFor="email">Email</label>
          <input required type="email" id="email" name="email" onChange={this.inputChange} value={user.email} placeholder="Required"/>
        </div>
        <div className={error.password ? 'field error' : 'field'}>
          <label htmlFor="password">Change password</label>
          <input type="password" id="password" name="password" onChange={this.inputChange}/>
        </div>
        <div className={error.password ? 'field error' : 'field'}>
          <label htmlFor="passwordConfirm">Confirm new password</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" onChange={this.inputChange}/>
        </div>
        <div className="field">
          <button type="submit" className={btnClass}>{btnText}</button>
        </div>
      </form>
    );
  }
});
