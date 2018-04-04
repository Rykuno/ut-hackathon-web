import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import SplashPage from './SplashPage';
import About from './About';
import Rules from './Rules';
import Bonus from './Bonus';
import Hidden from './Hidden';
import '../css/App.css';

class App extends Component {
  state = {
    id: '',
    username: '',
    token: ''
  };

  configureAuth = (username, id, token) => {
    this.setState({
      username,
      id,
      token
    });
  };

  isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  };

  render() {
    console.log('Navigate to /bonus');
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={({ history }) => (
            <SplashPage isLoggedIn={this.isLoggedIn()} history={history} />
          )}
        />
        <Route
          path="/login"
          render={({ history }) => (
            <Login
              configureAuth={(username, id, token) =>
                this.configureAuth(username, id, token)
              }
              history={history}
              isLoggedIn={this.isLoggedIn()}
            />
          )}
        />
        <Route
          path="/dashboard"
          render={({ history }) => (
            <Dashboard
              username={this.state.username}
              id={this.state.id}
              token={this.state.token}
              history={history}
              configureAuth={(username, id, token) =>
                this.configureAuth(username, id, token)
              }
            />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/rules" component={Rules} />
        <Route path="/bonus" component={Bonus} />
        <Route path="/akj34jl" component={Hidden} />
      </div>
    );
  }
}

export default App;
