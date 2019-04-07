import React, { Component } from 'react'
import axios from 'axios'
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
	    this.addRoute = this.addRoute.bind(this);
	  }

	addRoute(event) {
		event.preventDefault();
    	const data = new FormData(event.target);

		axios.post('http://localhost/v1/route/new', {
			name: data.get('routeName'),
			grade: data.get('routeGrade'),
			user_id: this.state.userId
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		const { routes, apiError } = this.state;
		console.log(routes)
		console.log(apiError)
		return (
		  <div className="todoListMain">
		    <div className="header">

		      <form onSubmit={this.addRoute}>
		        <input name="routeName" placeholder="Route Name" />
		        <input name="routeGrade" placeholder="Route Grade" />
		        <button type="submit"> Add Route </button>
		      </form>
		    </div>
		  </div>
		)
	}
	
}

export default Routes