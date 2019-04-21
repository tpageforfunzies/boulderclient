import React, { Component } from 'react'
import DeleteComment from './DeleteComment.js'

class Comments extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      comments: [],
	      userId: this.props.userId,
	      apiError: 'no error yet',
	    };
	  }

	componentDidMount() {
		let url = "http://localhost/v1/user/" + this.state.userId + "/comments";
	    fetch(url)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            comments: result.comments,
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
		let comments = this.state.comments;
		let userId = this.state.userId;
		return (
		  <div className="todoListMain bluebg">
		    <table className="table table-dark table-striped">
		      <tbody >
	            {comments.map(comment => (
	              <tr key={comment.ID}>
	                <td>comment ID: {comment.ID}</td>
	                <td>user ID: {comment.user_id}</td>
	                <td>route ID: {comment.route_id}</td>
	                <td>message: {comment.content}</td>
	                <td>create date: {comment.CreatedAt}</td>
	                <DeleteComment commentId={comment.ID} />
	              </tr>
	            ))}
              </tbody>
            </table>
		  </div>
		)
	}
	
}

export default Comments