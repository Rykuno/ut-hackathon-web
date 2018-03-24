import React, { Component } from 'react';
import alert from 'sweetalert';
import propTypes from 'prop-types';
import * as HackathonAPI from '../utils/HackathonAPI';

import Header from './Header';

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;

    HackathonAPI.login(username, password)
      .then(res => {
        const { history, configureAuth } = this.props;
        configureAuth(res.user.username, res.user['_id'], res.token);
        history.push('/dashboard');
      })
      .catch(() => {
        alert('Incorrect username or password ');
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="login-form-container">
          <h2 className="login-h2-tag">Login</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input
              type="image"
              alt="Submit"
              value="Submit"
              src="https://cdn.discordapp.com/attachments/408739428236918784/421754996493778958/HackAThon-SubmitButton-Default.gif"
            />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  configureAuth: propTypes.func.isRequired,
  history: propTypes.object.isRequired
};

export default Login;
