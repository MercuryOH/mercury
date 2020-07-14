import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Landing.css";

class Landing extends Component {
  state = {};

  render() {
    return (
      <body>
        <div className="TopBar"></div>
        <div className="LeftBar"></div>
        <div className="RightBar"></div>
        <div className="MiddlePanel"></div>
      </body>
    );
  }
}

export default Landing;
