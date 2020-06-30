import React, { Component } from "react";

class ActivityRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount() {
    const url = "http://127.0.0.1:5000/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ items: data[0] });
  }
  render() {
    const { isLoaded, items } = this.state;

    console.log(items);

    const authStye = {
      color: "black",
      backgroundColor: "#f5f5f5",
      width: "100%",
      height: "80vh",
      alighnContent: "center",
      paddingTop: "25vh",
      marginTop: "5vh",
      textAlign: "center",
      boxShadow: "5px 5px 5px #9E9E9E",
      margin: "10 10 0 0",
    };
    return (
      <div style={authStye}>
        <h1> Activity</h1>
        <h2>{items["activity"]} </h2>
        <img
          style={{ paddingTop: "5vh" }}
          width="200"
          src="https://www.freepnglogos.com/uploads/running-png/silhouette-running-run-vector-graphic-pixabay-11.png"
          alt=""
        />
      </div>
    );
  }
}

export default ActivityRecognition;
