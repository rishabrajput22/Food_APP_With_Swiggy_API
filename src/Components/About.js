import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor called");
  }

  componentDidMount() {
    // console.log("Parent Compdid mount");

  }

  render() {
    // console.log("Parent Render called");

    return (
      <div>
        <h1>About me, I'm fun.</h1>
        {/* <User name={"Rishab Rajput's Function"} /> */}

        <UserClass name={"Rishab "} location={"Hyderabad"} />
      </div>
    );
  }
}

export default About;
