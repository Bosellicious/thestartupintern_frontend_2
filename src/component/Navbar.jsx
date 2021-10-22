import React, { useState } from 'react'
import { Link, useLocation, Redirect } from "react-router-dom"; 
import "../styles/Navbar.css"; 

function Navbar() {
    const { pathname } = useLocation("");
    const [ redirect, setRedirect ] = useState(false);

    const handleLogout = () =>{
        localStorage.removeItem('token');
        setRedirect(true);
    }

    let links = (
        <React.Fragment>
            <a href="#!" onClick={handleLogout}> Logout </a>
            <Link to="/new-todo">Create Todo</Link>
            <Link to="/todos">My Todos</Link>
        </React.Fragment>
    );

    if(pathname === "/"){
        links = (
            <Link to="/login"> Login </Link>
        );
    }else if(pathname === "/login"){
        links = (
            <Link to="/"> Register </Link>
        );
    }

    return (
        <div className="navbar">
            {redirect && <Redirect to="/login"/>}
            <div className="leftSide">
                <h3 className="navbar-brand">myToDo</h3>
            </div>
            <div className="rightSide">
                {links}
            </div>
        </div>
    );
}

export default Navbar;
