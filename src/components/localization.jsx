import React, { Component } from "react";
class Localization extends Component {
  state = {};
  render() {
    const authStye = {
      color: "black",
      backgroundColor: "#f5f5f5",
      width: "100%",
      height: "55%",
      alighnContent: "center",
      paddingTop: "8vh",
      marginTop: "5vh",
      textAlign: "center",
      boxShadow: "5px 5px 5px #9E9E9E",
      margin: "5 0 0 0",
    };
    return (
      <div style={authStye}>
        <h1> Location : Location 1 </h1>
      </div>
    );
  }
}

export default Localization;
