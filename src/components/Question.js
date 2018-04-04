import React, { Component } from 'react';
import propTypes from 'prop-types';
import alert from 'sweetalert';
import * as HackathonAPI from '../utils/HackathonAPI';
import { getRandomCorrectPhrase, getRandomIncorrectPhrase } from '../utils/phrases';

class Question extends Component {
  setDisabledButtons = () => {};

  getClassForSubmit = () => {
    const { answered } = this.props;
    if (answered) {
      return 'check-answer-button button-disabled';
    }
    return 'check-answer-button';
  };

  checkAnswer = event => {
    event.preventDefault();
    const {
      id, token, updateQuestions, showNextQuestion
    } = this.props;
    const userAnswer = event.target[0].value;

    HackathonAPI.checkAnswer(id, userAnswer, token)
      .then(response => {
        const { correct, message } = response;

        if (message) {
          alert(message);
          return;
        }

        if (correct) {
          updateQuestions();
          alert('Good job!', 'You clicked the button!', 'success').then(() => {
            showNextQuestion();
          });
        } else {
          alert({
            title: 'Incorrect!',
            text: 'Nope, try again.',
            icon: 'error'
          });
        }
      })
      .catch(e => {
        alert('Error', e, 'failure');
      });
  };

  checkForPreviousAnswer = () => {
    const { userAnswer } = this.props;
    if (userAnswer) {
      return userAnswer;
    }
    return '';
  };

  render() {
    const { text } = this.props;

    return (
      <div className="question-container">
        <form className="question-form" onSubmit={this.checkAnswer}>
          <h3>{text}</h3>
          <input
            type="text"
            name="question"
            disabled={this.props.answered}
            placeholder={this.checkForPreviousAnswer()}
          />
          <input className="check-answer-button" type="submit" disabled={this.props.answered} />
        </form>
      </div>
    );
  }
}

Question.defaultProps = {
  userAnswer: ''
};

Question.propTypes = {
  id: propTypes.string.isRequired,
  token: propTypes.string.isRequired,
  answered: propTypes.bool.isRequired,
  text: propTypes.string.isRequired,
  userAnswer: propTypes.string,
  updateQuestions: propTypes.func.isRequired,
  showNextQuestion: propTypes.func.isRequired
};

export default Question;
