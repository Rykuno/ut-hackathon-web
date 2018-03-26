import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';

const SplashPage = (props) => (
  <div>
    <Header />
    <NavBar />
    <Link className="login-button" to="/login">
      Login
    </Link>
  </div>
);

export default SplashPage;
