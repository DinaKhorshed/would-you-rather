import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Unanswered from "./Unanswered";
import Answered from "./Answered";

function Question(props) {
  const { QuestionID } = useParams();
  const { loggedInUser } = props;
  const question = props.questions[QuestionID];
  if (question) {
    const { optionOne, optionTwo } = question;
    const answered =
      optionOne.votes.includes(loggedInUser) ||
      optionTwo.votes.includes(loggedInUser);

    return <div>{answered ? <Answered /> : <Unanswered />}</div>;
  } else {
    return <Navigate to="/404" />;
  }
}

function mapStateToProps({ loggedInUser, questions, users }) {
  return {
    loggedInUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Question);
