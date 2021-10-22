import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';


function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);


	const handleSubmit = (e) =>{
		e.preventDefault();
		
		if(email === "" || password === ""){
			return alert("You seem to have some form errors!");
		}

		let data = {
			"email": email, 
			"password": password,
		};

		alert("Loading, please wait!");

		let config = {
		  method: 'post',
		  url: 'https://eventful-moments.herokuapp.com/api/v1/users/login',
		  headers: {
			'Content-Type': "Application/json"
		  },
		  data : JSON.stringify(data)
		};
		
		axios(config)
		.then(function (response) {
		  console.log(response.data);
		  
		  if(response.data.status_code === 200){
			localStorage.setItem('token', response.data.token);
			setRedirect(true);
		  }

		})
		.catch(function (error) {
		  console.log(error);
		  alert("Somethign went wrong, please try again!");
		});
	}


    return (
		<div className="box-center">
			{redirect ? <Redirect to="/todos" /> : null}
			<h6> Please Login to Continue</h6>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input name="email" type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input name="password" type="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
				</div>
				
				<button type="submit" className="btn btn-dark">Login</button>
			</form>
		</div>
    );

}

export default Login;