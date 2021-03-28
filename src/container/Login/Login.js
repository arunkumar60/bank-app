import React, { Component, Fragment } from "react";
import "./Login.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    auth: "",
  };
  handleUsername = (event) => {
    this.setState({ username: event.target.value });
    this.setState({ auth: true });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
    this.setState({ auth: true });
  };

  checkLogin = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.history.push("/accountDetails");
    } else {
      this.setState({ auth: false });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="login-form">
          <form>
            <h2 className="text-center">Log in</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required="required"
                onChange={this.handleUsername}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
                onChange={this.handlePassword}
              />
            </div>
            <div className="form-group">
              <div
                className="btn btn-primary btn-block"
                onClick={this.checkLogin}
              >
                Log in
              </div>
            </div>
            {this.state.auth === false ? (
              <div className="warning">Wrong credentials</div>
            ) : null}
          </form>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Login);
