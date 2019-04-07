import React, { Component } from 'react'
import AverageAll from "./AverageAll.js"

class Routes extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      routes: [],
	      userId: this.props.userId,
	      apiError: 'no error yet',
	      averageGrade: 0,
	      count: 0,
	    };
	  }

	componentDidMount() {
		let url = "http://localhost/v1/user/" + this.state.userId + "/routes";
	    fetch(url)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            routes: result.routes,
	          });
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
	  }

	render() {
		let routes = this.state.routes;
		let userId = this.state.userId;
		return (
		  <div className="todoListMain bluebg">
		    <table className="table table-dark table-striped">
		      <tbody >
	            {routes.map(route => (
	              <tr key={route.ID}>
	                <td>route ID: {route.ID}</td>
	                <td>user ID: {route.user_id}</td>
	                <td>name: {route.name}</td>
	                <td>grade: {route.grade}</td>
	                <td>create date: {route.createdAt}</td>
	              </tr>
	            ))}
              </tbody>
            </table>
            <AverageAll userId={userId} />
		  </div>
		)
	}
	
}

export default Routes