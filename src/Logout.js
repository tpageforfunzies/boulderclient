import { Component } from "react";

export default class Logout extends Component {
  render() {
    this.props.childProps.userHasAuthenticated(false, null);
    localStorage.setItem('boulderUserId', null);
    return (
        true
    );
  }
}