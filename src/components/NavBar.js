import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as HackathonAPI from '../utils/HackathonAPI';
import alert from 'sweetalert';

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
                <NavItem eventKey={2} href="/about">
                  About
                </NavItem>
                <NavDropdown eventKey={3} title="Rules" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight onSelect={this.handleSelect}>
                <Navbar.Text>
                  Signed in as: <Navbar.Link href="#">Team 1</Navbar.Link>
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
              <NavItem eventKey={2} href="/about">
                About
              </NavItem>
              <NavDropdown eventKey={3} title="Rules" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
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

    HackathonAPI.logout(token)
      .then(data => {
        console.log('test logout Feature');
        console.log('Getting here');
        localStorage.removeItem('token');
        alert('Logout Successful!');
        this.props.history.push('/');
      })
      .catch();
  };

  render() {
    return <div>{this.getRightText()}</div>;
  }
}

export default NavBar;
