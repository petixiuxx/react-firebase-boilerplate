import React, { Component } from "react";
import { withAuthorization } from "../Session";

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
