'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    Link = require('react-router').Link,
    userStore = require('../store'),
    userApi = require('../api');

var Account = React.createClass({
  mixins: [Reflux.listenTo(userStore.store, 'onUserUpdate')],
  getInitialState: function() {
    return {
      user: userStore.store.user || {},
      error: {},
      loading: false,
      success: false
    };
  },
  onUserUpdate: function(token, user) {
    this.setState({
      user: user
    });
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
      this.setState({loading: true});
      userApi.update(user)
      .success(function(updatedUser) {
        userStore.actions.update(updatedUser);
        this.setState({success: true, loading: false});

        setTimeout(function() {
          this.setState({success: false});
        }.bind(this), 2000);
      }.bind(this)).fail(function(err) {
        console.error(err);
      });
    }
  },
  render: function() {
    var user = this.state.user,
        error = this.state.error;

    var btnClass = this.state.success ? 'ui green button' : this.state.loading ? 'ui primary button loading' : 'ui primary button',
        btnText = this.state.success ? 'Account updated' : 'Update account';

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

module.exports = Account;
