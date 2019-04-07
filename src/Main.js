import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Routes from "./Routes";
import AddRoute from "./AddRoute";
import Login from "./Login.js";
import Logout from "./Logout.js";


 
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userId: null
    };
  }

  userHasAuthenticated = (authenticated, userId) => {
    this.setState({
      isAuthenticated: authenticated,
      userId: userId
    });
    localStorage.setItem('boulderUserId', userId);
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
    };
    let userId = this.state.userId;

    if (this.state.isAuthenticated) {
      return (
        <HashRouter>
          <div>
            <h1>Boulder Client</h1>
            <ul className="header">
            <li><NavLink to="/logout">Logout</NavLink></li>
              <li><NavLink to="/routes">My Routes</NavLink></li>
              <li><NavLink exact to="/route/add">Add A Route</NavLink></li>
            </ul>
            <div className="content bluebg">
              <Route
                exact path="/logout" 
                component={() => <Logout childProps={childProps} />}
              />
              <Route 
                exact path="/route/add" 
                component={() => <AddRoute userId={userId} />}
              />
              <Route 
                path="/routes"
                component={() => <Routes userId={userId} />}
              />
            </div>
          </div>
        </HashRouter>
      );
    }

    return (
        <HashRouter>
          <div>
            <h1>Boulder Client</h1>
            <ul className="header">
              <li><NavLink to="/login">Log In</NavLink></li>
            </ul>
            <div className="content bluebg">
              <Route
                exact path="/login" 
                component={() => <Login childProps={childProps} />}
              />
            </div>
          </div>
        </HashRouter>
    );
  
  }
}


export default Main;