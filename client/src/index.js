import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "antd/dist/antd.css";
import Card from "./components/form/index";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Card />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
