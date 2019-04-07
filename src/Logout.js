import React, { Component } from "react";

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.props.childProps.userHasAuthenticated(false, null);
    localStorage.setItem('boulderUserId', null);

    return (
        true
    );
  }
}