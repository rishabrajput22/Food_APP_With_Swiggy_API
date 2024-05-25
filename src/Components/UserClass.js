import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        id: "0",
      },
    };

    console.log(this.props.name + "Child constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Compdid mount");

    const data = await fetch("https://api.github.com/users/rishabrajput22");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("compnent did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log(this.props.name + "Child Render called");

    const { name, id, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h2>Location : {id}</h2>
        <h2>Number : 8421318335</h2>
      </div>
    );
  }
}

export default UserClass;
