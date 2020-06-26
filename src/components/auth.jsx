import React, { Component } from "react";
class Autheticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount() {
    const url = "http://127.0.0.1:5000/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ items: data[0]});
  }
  render() {
    const { isLoaded, items } = this.state;

    const authStye = {
      color: "black",
      backgroundColor: "#f5f5f5",
      width: "100%",
      height: "20%",
      alighnContent: "center",
      paddingTop: "5vh",
      marginTop: "5vh",
      textAlign: "center",
      boxShadow: "5px 5px 5px #9E9E9E",
      margin: "5 0 0 0",
    };
    return (
      <div style={authStye}>
        <h1> User: </h1>
        <h2>{items["user"]} </h2>
      </div>
    );
  }
}

export default Autheticate;
