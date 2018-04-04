import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import Header from './Header';
import NavBar from './NavBar';

const SplashPage = props => (
  <div>
    <Header />
    <NavBar histroy={props.history} />
    <Jumbotron className="jumbotron-background">
      <h1 className="white-text" id="white-text">
        Welcome to the 2018 Hackathon!
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
      <p className="white-text">
        To get started, go ahead and scan over the rules section of this website
        since failure to obey the set rules could result in disqualification.
        Once finished, use the login and password you recieved from an admin to
        access your dashboard.
      </p>
      <p className="white-text">
        The Dashboard is where you will progress through a series of questions
        and sections trying to accumulate as many points your team can. Each
        section has a set amount of questions each worth a different point
        value. The Scoreboard will display each teams progress thoughout the
        event. Be sure to form a strategy and communicate with your team with
        who's working on what.
      </p>
      <p className="white-text">
        All submitted answers, number of attempts, progress, time of completion,
        and other data will be recorded and viewed by admins live throughout the
        event to ensure a fairplay environment.
      </p>
      <p className="white-text">Let the Games Begin!</p>
      <p>
        <Link className="login-button" to="/rules">
          Read the Rules
        </Link>
      </p>
    </Jumbotron>
  </div>
);

export default SplashPage;
