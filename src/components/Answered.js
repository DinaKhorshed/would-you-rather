import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Result from "./Result";

function Answered(props) {
  const { loggedInUser, users } = props;
  const { QuestionID } = useParams();
  const question = props.questions[QuestionID];

  const { optionOne, optionTwo, author } = question;
  const { name, avatarImage } = users[author];

  function totalVotes() {
    return optionOne.votes.length + optionTwo.votes.length;
  }

  return (
    <div className="result-card">
      <div className="name-section">
        <div className="name-text">Asked by {name}</div>
      </div>
      <div className="poll-bottom">
        <img src={avatarImage} alt={`Avatar of ${name}`} className="avatar" />
        <hr className="divider" />
        <div className="main-question">
          <div className="static-title">Results:</div>
          <div className="question-text">
            <Result
              loggedInUser={loggedInUser}
              text={optionOne.text}
              votes={optionOne.votes}
              totalVotes={totalVotes()}
            />
          </div>
          <div className="question-text">
            <Result
              loggedInUser={loggedInUser}
              text={optionTwo.text}
              votes={optionTwo.votes}
              totalVotes={totalVotes()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ loggedInUser, questions, users }) {
  return {
    loggedInUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Answered);
