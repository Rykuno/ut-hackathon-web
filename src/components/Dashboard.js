import React, { Component } from 'react';
import propTypes from 'prop-types';
import alert from 'sweetalert';
import * as HackathonAPI from '../utils/HackathonAPI';

import Header from './Header';
import QuestionList from './QuestionList';

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
        alert('Session has timed out, Please log back in.');
        this.props.history.push('/login');
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="tab-and-question-container">
          <div className="tablink-container">
            <button className="tablink">Sever 1</button>
            <button className="tablink">Sever 2</button>
            <button className="tablink">Server 3</button>
            <button className="tablink">Server 4</button>
          </div>
          <br />
          <br />
          <br />
          <QuestionList
            questions={this.state.questions}
            section={1}
            token={this.state.token}
            updateQuestions={this.updateStateFromAPI}
          />
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
