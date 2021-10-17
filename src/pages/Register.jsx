import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
		<div className="box-center">
			<h6> Please Register to Continue</h6>

			<form method="POST">
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input name="email" type="email" />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input name="password" type="password" />
				</div>

				<div className="form-group">
					<label htmlFor="rePassword">Retype Password</label>
					<input name="rePassword" type="password" />
				</div>
				
				<Link to="/login" className="btn btn-dark">Register</Link>
			</form>
		</div>
    );

}

export default Register;