import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">
        <h2 style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Realtime Passive WiFi Sensing
        </h2>
      </div>
    );
  }
}

export default NavBar;