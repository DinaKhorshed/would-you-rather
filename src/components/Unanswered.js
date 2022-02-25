import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/users";

function Unanswered(props) {
  const { loggedInUser, users, handleSaveQuestionAnswer } = props;
  const { QuestionID } = useParams();
  const question = props.questions[QuestionID];

  const { optionOne, optionTwo, author } = question;

  const { name, avatarImage } = users[author];
  const [answer, setAnswer] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!answer) {
      console.error("You must answer the question to submit.");
      return;
    }
    handleSaveQuestionAnswer(loggedInUser, question.id, answer);
  }

  return (
    <div className="poll">
      <div className="name-section">
        <div className="name-text">{name} asks:</div>
      </div>
      <div className="poll-bottom">
        <img src={avatarImage} alt={`Avatar of ${name}`} className="avatar" />
        <hr className="divider" />
        <div className="main-question">
          <div className="static-title">Would you rather</div>
          <div className="question-text">
            <form>
              <label>
                <input
                  type="radio"
                  name="question"
                  onChange={() => setAnswer("optionOne")}
                  checked={answer === "optionOne"}
                />
                {optionOne.text}
              </label>
            </form>
          </div>
          <div className="question-text">
            <form>
              <label>
                <input
                  type="radio"
                  name="question"
                  onChange={() => setAnswer("optionTwo")}
                  checked={answer === "optionTwo"}
                />
                {optionTwo.text}
              </label>
            </form>
          </div>
          <button className="view-poll-button" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
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
export default connect(mapStateToProps, { handleSaveQuestionAnswer })(
  Unanswered
);
