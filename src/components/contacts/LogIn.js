import React, { Component } from "react";
import { connect } from "react-redux";

import TextInputGroup from "../layout/TextInputGroup";
import { logIn } from "../../actions/contactActions";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    if (username !== "agjelos") {
      this.setState({ errors: { username: "Username is wrong" } });
      return;
    }

    if (password !== "1234") {
      this.setState({ errors: { password: "Password is wrong" } });
      return;
    }

    const user = { username, password };

    this.props.logIn(user);
    // this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Log In Please..</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Username"
              name="username"
              placeholder="Enter Username(agjelos)"
              value={username}
              onChange={this.onChange}
              error={errors.username}
            />
            <TextInputGroup
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password(1234)"
              value={password}
              onChange={this.onChange}
              error={errors.password}
            />
            <input
              type="submit"
              value="LogIn"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { logIn })(LogIn);
