import React, { Component } from 'react'
import axios from 'axios'

class DeleteRoute extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      routeId: this.props.routeId,
	    };
	    this.deleteRoute = this.deleteRoute.bind(this);
	}

	deleteRoute(routeId) {
	  	let url = "http://localhost/v1/route/" + routeId;
		axios.delete(url)
		.then((response) => {
			console.log(response);
			// one day i'll get this to rerender
			window.location.reload();
		})
		.catch(function (error) {
			console.log(error);
		  });
	}

	render() {
		return (
		  <td onClick={() => this.deleteRoute(this.state.routeId)}>
	        <ul className="header">
	          <li>
	            <a>DELETE</a>
	          </li>
	        </ul>  
	      </td>
		)
	}
}

export default DeleteRoute