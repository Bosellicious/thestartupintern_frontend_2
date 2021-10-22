import React from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";

class MyTodo extends React.Component {
	constructor(){
		super();
		this.state = {
			title: '',
			futureDate: '',
			details: '',
			redirect: false
		}
	}

	componentDidMount(){
		
		let config = {
			method: 'get',
			url: `https://eventful-moments.herokuapp.com/api/v1/moment/${this.props.match.params.id}`,
			headers: {
				'Authorization': localStorage.getItem('token')
			}
		};

		axios(config)
		.then((response)=> {
			console.log(response.data);

			if(response.data.status_code === 200){
				const { title, details, futureDate } = response.data.data;
				this.setState(()=>({
					title,
					details,
					futureDate
				}))
		  	}
		})
		.catch((error)=> {
			let err = error.message;
			
			console.log(err);

			if(err.match("401") !== null){
				this.setState(()=>({ redirect: true }))
			}
		});
	}

	render(){
		return (
			<div className="page todo">
				{this.state.redirect && <Redirect to="/login" /> }
			  	<h6 className="page-title"> My Todo - {this.state.title}</h6>
			  	<span> {this.state.futureDate.substring(0, 10)} </span>
  
			  	<p>
					{this.state.details}
			  	</p>
		  </div>
		);
	}
}

export default MyTodo;