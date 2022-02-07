import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/loggedInUser";

const SELECT = "Select Your Username";

function Login(props) {
  const [selectedUser, setSelectedUser] = useState(SELECT);
  const [userId, setUserId] = useState(null);

  function switchUser(e) {
    const id = e.target.value;
    setUserId(id);
    const user = props.users[id].name;
    setSelectedUser(user);
  }

  function signIn() {
    if (selectedUser === SELECT) return;
    props.dispatch(setAuthedUser(userId));
  }

  function listUsers(users) {
    return Object.keys(users).map((id) => {
      const user = users[id];
      return (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      );
    });
  }

  return (
    <div className="container box">
      <div className="container box">
        <div className="react-logo">
          <img
            className="react-logo"
            src="https://miro.medium.com/max/1200/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg"
            alt=""
          />
        </div>
        <select
          value={selectedUser}
          name="users"
          id="user-select"
          onChange={(e) => switchUser(e)}
        >
          <option key="0" value="Select Your Username">
            {selectedUser}
          </option>
          {listUsers(props.users)}
        </select>
        <button className="sign-in-button" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default connect()(Login);
