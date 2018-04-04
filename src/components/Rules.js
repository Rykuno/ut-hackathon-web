import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Header from './Header';
import NavBar from './NavBar';

const Rules = () => (
  <div>
    <Header />
    <NavBar />
    <Jumbotron className="jumbotron-background">
      <h1 className="white-text" id="white-text">
        Rules
      </h1>
      <ol className="rules-list">
        <li>No external media (i.e. flash drives, floppies, discs).</li>
        <li>
          Teams that perform physical attacks will be disqualified (i.e. pulling
          power cables).
        </li>
        <li>
          Social engineering will be limited to email-based phishing attacks in
          the final event only.
        </li>
        <li>
          Taking down one of the systems you are attacking may prevent your team
          from gaining anymore points from that system.
        </li>
        <li>
          Gameplay site is not meant to be hacked. This is the site teams use to
          enter codes from systems to gain points.
        </li>
        <li>
          Teams that try to prevent other teams from participating in the event
          will be disqualified.
        </li>
        <li>
          All teams will wear designated t-shirts, at all times, during the
          competition.
        </li>
        <li>
          All teams and guests are expected to behave professionally at all
          times.
        </li>
        <li>Taunts or insults are discouraged.</li>
        <li>
          The Game Master reserves the right to modify the event at any time and
          without notification.
        </li>
      </ol>
    </Jumbotron>;
  </div>
);

export default Rules;
