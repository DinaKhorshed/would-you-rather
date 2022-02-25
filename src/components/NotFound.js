import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        The Page you Are Looking for is not found, Please{" "}
        <div>
          {" "}
          <Link to="/"> Go To HomePage</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
