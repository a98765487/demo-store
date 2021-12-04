import React, { Fragment } from "react";
import ReactDOM from "react-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <div>
          <label>Email</label>
          <input type="text" placeholder="Please enter Email" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" placeholder="Please enter Password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
