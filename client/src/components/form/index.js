import React, { Component } from "react";
import "./style.css";
import robot from "../../services/robot/index";

import { Spin, Form, Icon, Input, Button, Divider } from "antd";
const { Item } = Form;

class NormalLoginForm extends Component {
  state = {
    loading: false,
    title: "",
    browserWSEndpoint: "ws://127.0.0.1:4000",
    url: "https://example.com"
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchTitle();
  };

  componentDidMount() {
    // this.fetchTitle();
  }

  fetchTitle = async () => {
    this.setState({ loading: true, title: "Fetching..." });
    const { browserWSEndpoint, url } = this.state;
    const title = await robot({
      browserWSEndpoint,
      url
    });
    this.setState({ title, loading: false });
  };

  changeValue = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="ws://127.0.0.1:4000"
            onChange={this.changeValue}
            value={this.state.browserWSEndpoint}
            name="browserWSEndpoint"
          />
        </Item>
        <Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="https://example.com"
            onChange={this.changeValue}
            value={this.state.url}
            name="url"
          />
        </Item>
        <Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Get Title
          </Button>
        </Item>
        <Divider />
        <Item>
          <div>
            <Spin spinning={this.state.loading}>
              <b>Title: </b>
              {this.state.title || `Click "Get Title" above ^^`}
            </Spin>
          </div>
        </Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
