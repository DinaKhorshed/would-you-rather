import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/loggedInUser";

function Nav(props) {
  function getAuthedUserAvatarURL() {
    const user = props.users[props.loggedInUser];
    if (typeof user === "object")
      return typeof user === "object" ? user.avatarImage : null;
  }

  function getName() {
    const { users, loggedInUser } = props;
    return users[loggedInUser].name;
  }

  function signOut() {
    props.dispatch(setAuthedUser(""));
  }

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeclassname="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeclassname="active">
            Leader Board
          </NavLink>
        </li>
        {props.loggedInUser && (
          <div className="nav-user">
            <li className="welcome center">Hello, {getName()}</li>
            <li>
            <img className="nav-avatar" alt= {`${getName()} Avatar`} src={getAuthedUserAvatarURL()} />
            </li>
            <li>
              <NavLink
                to="/"
                activeclassname="active"
                onClick={() => signOut()}
              >
                Logout
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

function mapStateToProps({ loggedInUser, users }) {
  return {
    loggedInUser,
    users,
  };
}

export default connect(mapStateToProps)(Nav);
