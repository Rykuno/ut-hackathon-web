import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import propTypes from 'prop-types';
import alert from 'sweetalert';
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

  isLoggedIn = () => {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
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
          <Tabs id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Server 1">
              <QuestionList
                questions={this.state.questions}
                section={1}
                token={this.state.token}
                updateQuestions={this.updateStateFromAPI}
              />
            </Tab>
            <Tab eventKey={2} title="Server 2">
              <QuestionList
                questions={this.state.questions}
                section={2}
                token={this.state.token}
                updateQuestions={this.updateStateFromAPI}
              />
            </Tab>
            <Tab eventKey={3} title="Server 3">
              Tab 3 content
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
