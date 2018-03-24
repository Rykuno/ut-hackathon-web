import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const SplashPage = () => (
  <div>
    <Header />
    <Link className="login-button" to="/login">Login</Link>
  </div>
);

export default SplashPage;
