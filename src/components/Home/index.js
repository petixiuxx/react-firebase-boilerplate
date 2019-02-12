import React, { Component } from "react";
import { compose } from "recompose";
import { withAuthorization, withEmailVerification } from "../Session";

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}
const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(Home);
