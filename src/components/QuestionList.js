import React, { Component } from 'react';
import propTypes from 'prop-types';
import Question from './Question';

class QuestionList extends Component {
  getQuestions = () => {
    const { questions, section, token, updateQuestions } = this.props;
    return questions.filter(obj => obj.section === section).map(question => {
      const { text, userAnswer, order, completed } = question;
      const id = question['_id'];
      return (
        <Question
          id={id}
          text={text}
          token={token}
          updateQuestions={updateQuestions}
          answered={question.completed}
          userAnswer={userAnswer}
        />
      );
    });
  };

  render() {
    return (
      <div className="questions-container">
        <ul className="question-list">{this.getQuestions()}</ul>
      </div>
    );
  }
}

QuestionList.propTypes = {
  questions: propTypes.arrayOf(propTypes.shape),
  updateQuestions: propTypes.func.isRequired,
  section: propTypes.number.isRequired,
  token: propTypes.string.isRequired
};

export default QuestionList;
