import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import propTypes from 'prop-types';
import * as HackathonAPI from '../utils/HackathonAPI';
import Header from './Header';
import QuestionList from './QuestionList';
import NavBar from './NavBar';

class Dashboard extends Component {
  state = {
    questions: [],
    token: ''
  };

  componentWillMount() {
    if (this.props.token) {
      localStorage.setItem('token', this.props.token);
      localStorage.setItem('username', this.props.username)
      this.setState({
        token: this.props.token
      });
    } else {
      this.setState({
        token: localStorage.getItem('token')
      });
    }
  }
  componentDidMount() {
    this.updateStateFromAPI();
  }

  setQuestionShowState = section => {
    const sectionArray = this.state.questions.filter(
      obj => obj.section === section
    );
    const questionCount = sectionArray.filter(obj => obj.completed === true);
    return questionCount.length + 1;
  };

  isLoggedIn = () => {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  };

  updateStateFromAPI = () => {
    HackathonAPI.getQuestions(this.state.token)
      .then(res => {
        this.setState({
          questions: res.Questions
        });
      })
      .catch(() => {
        localStorage.removeItem('token');
        this.props.history.push('/login');
      });
  };

  render() {
    return (
      <div>
        <Header />
        <NavBar history={this.props.history} />
        <div className="tab-and-question-container">
          <br />
          <br />
          <br />
          <Tabs id="uncontrolled-tab-example" onClick={this.updateStateFromAPI}>
            <Tab eventKey={1} title="Server 1">
              <QuestionList
                questions={this.state.questions}
                section={1}
                show={this.setQuestionShowState(1)}
                token={this.state.token}
                updateQuestions={this.updateStateFromAPI}
              />
            </Tab>
            <Tab eventKey={2} title="Server 2">
              <QuestionList
                questions={this.state.questions}
                section={2}
                token={this.state.token}
                show={this.setQuestionShowState(2)}
                updateQuestions={this.updateStateFromAPI}
              />
            </Tab>
            <Tab eventKey={3} title="Server 3">
              <QuestionList
                questions={this.state.questions}
                section={3}
                token={this.state.token}
                show={this.setQuestionShowState(3)}
                updateQuestions={this.updateStateFromAPI}
              />
            </Tab>
            <Tab eventKey={4} title="Server 4">
              <QuestionList
                questions={this.state.questions}
                section={4}
                token={this.state.token}
                show={this.setQuestionShowState(4)}
                updateQuestions={this.updateStateFromAPI}
              />
            </Tab>
            <Tab eventKey={5} title="Server 5">
              <QuestionList
                questions={this.state.questions}
                section={5}
                token={this.state.token}
                show={this.setQuestionShowState(5)}
                updateQuestions={this.updateStateFromAPI}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  username: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  token: propTypes.string.isRequired
};

export default Dashboard;
