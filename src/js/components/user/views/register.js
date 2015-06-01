'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    userStore = require('../store'),
    userApi = require('../api');

var register = React.createClass({
  getInitialState: function() {
    return {
      error: {},
      user: {},
      loading: false
    };
  },
  submit: function(e) {
    e.preventDefault();
    var error = this.state.error,
        user = this.state.user;

    if (!user.email) {
      error.email = true;
      this.setState({error: error});
    }

    if (!user.firstName) {
      error.name = true;
      this.setState({error: error});
    }

    if (!user.password || user.password !== user.passwordConfirm) {
      error.password = true;
      this.setState({error: error});
    }

    if (user.email && user.firstName && user.email && user.password && user.password === user.passwordConfirm) {
      userApi.register(user)
      .success(function(data) {
        userStore.actions.login(data.token);
      }).fail(function(err) {
        console.error(err);
      });
    }
  },
  inputChange: function(e) {
    var input = e.target,
        name = input.getAttribute('name'),
        state = this.state;

    state.user[name] = input.value;
    state.error[name] = false;
    this.setState(state);
  },
  render: function() {
    var emailError = this.state.error.email,
        passwordError = this.state.error.password,
        nameError = this.state.error.name;

    var emailClass = emailError ? 'field error' : 'field',
        passwordClass = passwordError ? 'field error': 'field',
        nameClass = nameError ? 'field error' : 'field';

    return (
      <div className="ui two column centered grid">
        <div className="column">
          <form className="ui form" onSubmit={this.submit} noValidate>
            <div className="two fields">
              <div className={nameClass}>
                <label htmlFor="firstName">First name</label>
                <input required="true" type="text" id="firstName" name="firstName" onChange={this.inputChange} error={this.state.error.email} placeholder="Required"/>
              </div>
              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" onChange={this.inputChange} placeholder="Optional"/>
              </div>
            </div>
            <div className={emailClass}>
              <label htmlFor="email">Email</label>
              <input required="true" type="email" id="email" name="email" onChange={this.inputChange} error={this.state.error.email} placeholder="Required"/>
            </div>
            <div className={passwordClass}>
              <label htmlFor="password">Password</label>
              <input required="true" type="password" id="password" name="password" onChange={this.inputChange} error={this.state.error.password} placeholder="Required"/>
            </div>
            <div className={passwordClass}>
              <label htmlFor="passwordConfirm">Confirm password</label>
              <input required="true" type="password" id="passwordConfirm" name="passwordConfirm" onChange={this.inputChange} placeholder="Required"/>
            </div>
            <div className="two fields">
              <button type="submit" className="ui primary button">Register</button>
              <Link to="login" className="ui basic button">I already have an account</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = register;
