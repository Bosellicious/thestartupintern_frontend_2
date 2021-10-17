import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
		<div className="box-center">
			<h6> Please Login to Continue</h6>

			<form method="POST">
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input name="email" type="email" />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input name="password" type="password" />
				</div>
				
				<Link to="/todos" className="btn btn-dark">Login</Link>
			</form>
		</div>
    );

}

export default Login;