import React, { Component } from 'react'

class AverageAll extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      averageGrade: 10,
	      count: 10,
	      routes: [],
	      userId: this.props.userId
	    };
	}

	calculate() {
		let icount = 0;
		let sum = 0;
		for (var i = this.state.routes.length - 1; i >= 0; i--) {
			sum += parseInt(this.state.routes[i].grade);
			icount += 1;
		}
		this.setState({
          averageGrade: Math.round(sum / icount),
          count: icount,
        });
	}

	componentDidMount() {
		let url = "http://localhost/v1/user/" + this.state.userId + "/routes";
	    fetch(url)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            routes: result.routes,
	          });
	          this.calculate();
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          console.log(error);
	        }
	      )
	  }

	render() {
		// this.calculate()
		return (
		  <div className="bluebg">
		    <h4>Average:</h4>
		    <br />
		    <h5>{this.state.averageGrade}</h5>
		    <br />
		    <h5>{this.state.count}</h5>
		  </div>
		)
	}
	
}

export default AverageAll