import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass name={"Rishab "} location={"Hyderabad"} />
      </div>
    );
  }
}

export default About;
