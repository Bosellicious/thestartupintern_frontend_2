import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

function Register() {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repassword, setPassword2] = useState('');
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = (e) =>{
		e.preventDefault();

		if(email === "" || password === ""){
			return alert("You seem to have some form errors!");
		}

		if(repassword !== password) return alert("Passwords must match!");
		
		let data = {
			"email": email, 
			"password": password,
			"fullname": "Test User"
		};

		alert("Loading, please wait!");

		let config = {
			method: 'post',
			url: 'https://eventful-moments.herokuapp.com/api/v1/users/signup',
			headers: {
				'Content-Type': "Application/json"
			},
			data : JSON.stringify(data)
		};
		
		axios(config)
		.then(function (response) {
		  	console.log(response.data);

		  	alert(response.data.message);
		  
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
			<h6> Please Register to Continue</h6>

			<form onSubmit={handleSubmit}>
			<div className="form-group">
					<label htmlFor="email">Email</label>
					<input name="email" type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input name="password" type="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
				</div>

				<div className="form-group">
					<label htmlFor="rePassword">Retype Password</label>
					<input name="rePassword" type="password" onChange={(e)=> setPassword2(e.target.value)} value={repassword} />
				</div>
				
				<button type="submit" className="btn btn-dark">Register</button>
			</form>
		</div>
    );

}

export default Register;