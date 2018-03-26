import React, { Component } from 'react';
import * as HackathonAPI from '../utils/HackathonAPI';

import alert from 'sweetalert';

class Question extends Component {
  setDisabledButtons = () => {};

  getClassForSubmit = () => {
    if (this.props.answered) {
      return 'check-answer-button button-disabled';
    }
    return 'check-answer-button';
  };

  checkAnswer = event => {
    event.preventDefault();
    const { id, token, updateQuestions } = this.props;
    const userAnswer = event.target[0].value;

    HackathonAPI.checkAnswer(id, userAnswer, token)
      .then(response => {
        const { correct } = response;
        if (correct) {
          updateQuestions();
          alert('Correct!');
        } else {
          alert('Incorrect Answer!');
        }
      })
      .catch(e => {
        console.log('Wrong Answer', e);
      });
  };

  checkForPreviousAnswer = () => {
    if (this.props.userAnswer) {
      return this.props.userAnswer;
    }
    return '';
  };

  render() {
    return (
      <div className="question-container">
        <li key={this.props.id}>
          <form className="question-form" onSubmit={this.checkAnswer}>
            <h3>{this.props.text}</h3>
            <input
              type="text"
              name="question"
              disabled={this.props.answered}
              placeholder={this.checkForPreviousAnswer()}
            />
            <input
              className="check-answer-button"
              type="submit"
              disabled={this.props.answered}
            />
          </form>
        </li>
      </div>
    );
  }
}

export default Question;
