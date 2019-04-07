import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    try {
      let id = null;
      id = axios.post('http://localhost/v1/user/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        alert("Logged in");
        this.props.childProps.userHasAuthenticated(true, response.data.user.ID);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("2 " + id);
      
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}