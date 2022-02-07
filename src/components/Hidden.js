import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";
import { Link } from "react-router-dom";

class Hidden extends Component {
  questionAnswered(question, loggedInUser) {
    const { optionOne, optionTwo } = question;
    return (
      optionOne.votes.includes(loggedInUser) ||
      optionTwo.votes.includes(loggedInUser)
    );
  }

  render() {
    const { question, QuestionID } = this.props;
    const { optionOne } = question;
    const { name, avatarImage } = question.author;
    return (
      <div className="question">
        <div className="name-section">
          <div className="q-name name-text">{name} asks:</div>
        </div>
        <div className="question-bottom">
          <img src={avatarImage} alt={`Avatar of ${name}`} className="avatar" />
          <hr className="divider" />
          <div className="main-question">
            <div className="static-title">Would you rather</div>
            <div className="question-text">
              ...{optionOne.text.slice(0, 15)}...
            </div>
            <Link to={`/question/${QuestionID}`}>
              <button className="view-poll-button">View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser, users, questions }, props) {
  const question = questions[props.QuestionID];
  const { optionOne, optionTwo } = question;
  const formatObject = {
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    author: users[question.author],
  };
  return {
    loggedInUser,
    question: formatQuestion(formatObject),
  };
}

export default connect(mapStateToProps)(Hidden);
