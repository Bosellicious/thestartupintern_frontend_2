import React, {  } from "react";
import TodoItem from "../component/TodoItem.jsx";
import axios from "axios";
import { Redirect } from 'react-router-dom';


class Todos extends React.Component {
	constructor(){
		super();
		this.state = {
			todoList: [],
			redirect: false
		}
	}

	componentDidMount(){

		let config = {
			method: 'get',
			url: 'https://eventful-moments.herokuapp.com/api/v1/users/me',
			headers: {
				'Authorization': localStorage.getItem('token')
			}
		};

		axios(config)
		.then((response)=> {
			console.log(response.data);
			// console.log(response.data.data[0].moments)

			if(response.data.status_code === 200){
				this.setState(()=>({
					todoList: response.data.data[0].moments
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
			<div className="todos">
				{this.state.redirect && <Redirect to="/login" /> }
				<h6 className="todos-title">My Todo</h6>
	
				<div className="todoList">
					{this.state.todoList.length > 0 ?
						this.state.todoList.map((item, index)=>(
							<TodoItem 
								key={index}
								id={item._id}
								title={item.title}
								details={item.details}
								futureDate={item.futureDate}
								completed={item.completed}
							/>
						))
						:
						<h1 className="text-center">No Todos yet, please create one!</h1>
					}
				</div>
					
				{this.state.todoList.length > 0 && (
					<div className="todos-pagination">
						<span>1 2 3</span>
					</div>
				)}

			</div>
		);
	}
}

export default Todos;
