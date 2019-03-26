import React, { Component } from "react";
import ReactDOM from "react-dom";
import robot from "./robot";

class App extends Component {
  state = {
    title: "",
    browserWSEndpoint: "ws://127.0.0.1:4000",
    url: "https://example.com"
  };
  componentDidMount() {
    // this.fetchTitle();
  }
  fetchTitle = async () => {
    const { browserWSEndpoint, url } = this.state;
    const title = await robot({
      browserWSEndpoint,
      url
    });
    this.setState({ title });
  };
  changeValue = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <div className="container">
          <input
            onChange={this.changeValue}
            value={this.state.browserWSEndpoint}
            name="browserWSEndpoint"
          />
          <input
            onChange={this.changeValue}
            value={this.state.url}
            name="url"
          />
          <button onClick={this.fetchTitle}>Get Title</button>
          <h1>{this.state.title}</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
