import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import Question from './Question';

class QuestionList extends Component {
  state = {
    showQuestion: 1
  };

  getQuestions = () => {
    const {
      questions, section, token, updateQuestions
    } = this.props;
    return questions.filter(obj => obj.section === section).map(question => {
      const {
        text, userAnswer, order, completed
      } = question;
      const { show } = this.props;
      const id = question._id;
      if (order <= show) {
        return (
          <li key={text}>
            <Question
              id={id}
              text={text}
              token={token}
              updateQuestions={updateQuestions}
              answered={completed}
              userAnswer={userAnswer}
              showNextQuestion={this.showNextQuestion}
            />
          </li>
        );
      }
      return null;
    });
  };

  showNextQuestion = () => {
    this.setState({ showQuestion: this.state.showQuestion + 1 });
  };

  percentComplete = () => {
    const { questions, show } = this.props;

    if (show === 1) {
      return 0;
    }
    const sectionQuestions = questions.filter(obj => obj.section === this.props.section);
    return Math.round((show - 1) / sectionQuestions.length * 100);
  };

  numberOfQuestions = () => {
    const { questions, section } = this.props;
    return questions.filter(obj => obj.section === section).length;
  };

  render() {
    return (
      <div className="questions-container">
        <br />
        <ProgressBar
          max={this.numberOfQuestions()}
          now={this.props.show - 1}
          label={`${this.percentComplete()}%`}
          striped
          active
          bsStyle="success"
        />
        <ul className="question-list">{this.getQuestions()}</ul>
      </div>
    );
  }
}

QuestionList.propTypes = {
  questions: propTypes.arrayOf(propTypes.shape),
  updateQuestions: propTypes.func.isRequired,
  section: propTypes.number.isRequired,
  token: propTypes.string.isRequired,
  show: propTypes.number.isRequired
};

export default QuestionList;
