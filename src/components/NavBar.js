import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as HackathonAPI from '../utils/HackathonAPI';

class NavBar extends Component {
  getRightText = () => {
    const isLoggedIn = localStorage.getItem('token');

    if (isLoggedIn) {
      return (
        <div>
          <Navbar inverse collapseOnSelect onSelect={this.handleSelect}>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Home</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/dashboard">
                  Dashboard
                </NavItem>
                <NavItem eventKey={2} href="/rules">
                  Rules
                </NavItem>
              </Nav>
              <Nav pullRight onSelect={this.handleSelect}>
                <Navbar.Text>
                  Signed in as:{' '}
                  <Navbar.Link href="#">
                    {localStorage.getItem('username')}
                  </Navbar.Link>
                </Navbar.Text>
                <NavItem eventKey={2} onClick={this.logUserOut}>
                  Logout
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>;
        </div>
      );
    }

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/dashboard">
                Dashboard
              </NavItem>
              <NavItem eventKey={2} href="/rules">
                Rules
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="/login">
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  };

  logUserOut = () => {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    HackathonAPI.logout(token)
      .then(data => {
        localStorage.removeItem('token');
        this.props.history.push('/');
      })
      .catch();
  };

  render() {
    return <div>{this.getRightText()}</div>;
  }
}

export default NavBar;
