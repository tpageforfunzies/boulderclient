import React, { Component } from 'react'
class Routes extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      routes: [],
	      userId: this.props.userId,
	      apiError: 'no error yet'
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
		const { routes, apiError } = this.state;
		console.log(routes)
		console.log(apiError)
		return (
		  <div className="todoListMain bluebg">
		    <table class="table table-dark table-striped">
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
		  </div>
		)
	}
	
}

export default Routes