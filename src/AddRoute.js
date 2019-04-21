import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class AddRoute extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      userId: this.props.userId,
	      redirect: false
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
		.then((response) => {
			console.log(response);
			this.setState({
                redirect: true
            })
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		const { redirect } = this.state;
		if (redirect === true) {
			return (
				<Redirect to="/routes" />
			)
            
        }
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

export default AddRoute