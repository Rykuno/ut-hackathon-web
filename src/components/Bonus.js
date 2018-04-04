import React from 'react';
import { Button } from 'react-bootstrap';
import image from '../images/openInNotepad.jpg';

const Bonus = () => (
  <div>
    <h4 className="white-text">
      <i>
        If an assessment asks students to evaluate and create but our instruction asks only that
        they remember and comprehend, then we've taken a wrong direction.
      </i>
    </h4>
    <p />
    <h4 className="white-text">-Mike Fisher</h4>

    <p className="white-text">
      Below is your first clue, this is not apart of the official hackathon but should you have the spare
      time, there is a challenge and reward awaiting.
    </p>

    <img src={image} alt="#" />
  </div>
);

export default Bonus;
