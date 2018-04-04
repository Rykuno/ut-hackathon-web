import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';

const About = () => (
  <div>
    <Header />
    <NavBar />
    <Jumbotron className="jumbotron-background">
      <h1 className="white-text" id="white-text">
        About
      </h1>
      <p className="white-text">
        This year will have a focus on ethical hacking and penetration testing.
        The goal of the teams is to gather intel and report codes found for
        points rather than exploiting vulnerabilities to eliminate opposing
        teams. The winning team will be the one with the most points at the end
        of the event or the first to get all available points. As penetration
        testers, teams will not have to secure their own systems against
        attackers but are discouraged from “taking down” systems.
      </p>
      <p>
        <Link className="login-button" to="/rules">
          Read the Rules
        </Link>
      </p>
    </Jumbotron>
  </div>
);

export default About;
