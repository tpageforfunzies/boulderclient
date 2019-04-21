import React, { Component } from 'react'
import axios from 'axios'

class DeleteComment extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      commentId: this.props.commentId,
	    };
	    this.deleteComment = this.deleteComment.bind(this);
	}

	deleteComment(commentId) {
	  	let url = "http://localhost/v1/comment/" + commentId;
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
		  <td onClick={() => this.deleteComment(this.state.commentId)}>
	        <ul className="header">
	          <li>
	            <a>DELETE</a>
	          </li>
	        </ul>  
	      </td>
		)
	}
}

export default DeleteComment