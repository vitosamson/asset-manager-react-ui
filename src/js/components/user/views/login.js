'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    Navigation = require('react-router').Navigation,
    userStore = require('../store'),
    userApi = require('../api');

var login = React.createClass({
  mixins: [Navigation],
  getInitialState: function() {
    return {
      error: {},
      user: {},
      loading: false
    };
  },
  submit: function(e) {
    e.preventDefault();
    var error = this.state.error;

    if (!this.state.user.email) {
      error.email = true;
      this.setState({error: error});
    }

    if (!this.state.user.password) {
      error.password = true;
      this.setState({error: error});
    }

    if (this.state.user.email && this.state.user.password) {
      this.setState({
        error: {}
      }, function() {
        this.setState({loading: true});
        userApi.login(this.state.user).then(function(data) {
          userStore.actions.login(data.token, data.user);
          setImmediate(function() {
            this.transitionTo('app');
          }.bind(this));
        }.bind(this), function(err) {
          if (err.status == 401)
            error.form = 'Invalid email or password';
          else
            error.form = 'Something went wrong, please try again';
          this.setState({error: error, loading: false});
        }.bind(this));
      }.bind(this));
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
        formError = this.state.error.form;

    var emailClass = emailError ? 'field error' : 'field',
        passwordClass = passwordError ? 'field error': 'field',
        formClass = formError ? 'ui form error' : 'ui form',
        btnClass = this.state.loading ? 'ui primary button loading' : 'ui primary button';

    return (
      <div className="ui two column centered grid">
        <div className="column">
          <form className={formClass} onSubmit={this.submit} noValidate>
            <div className="ui error message">
              <p>{formError}</p>
            </div>
            <div className={emailClass}>
              <label htmlFor="email">Email</label>
              <input required="true" type="email" id="email" name="email" onChange={this.inputChange} error={this.state.error.email}/>
            </div>
            <div className={passwordClass}>
              <label htmlFor="password">Password</label>
              <input required="true" type="password" id="password" name="password" onChange={this.inputChange} error={this.state.error.password}/>
            </div>
            <div className="two fields">
              <button type="submit" className={btnClass}>Login</button>
              <Link to="register" className="ui basic button">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = login;