import React, { Component } from "react";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization, AuthUserContext } from "../Session";

class Account extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <h1>Account Page</h1>
            <p>Email: {authUser.email}</p>
            <PasswordChangeForm />
            <PasswordChangeForm />
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
