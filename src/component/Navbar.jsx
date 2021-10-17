import React from 'react'
import { Link, useLocation } from "react-router-dom"; 
import "../styles/Navbar.css"; 

function Navbar() {
    const { pathname } = useLocation("");

    let links = (
        <React.Fragment>
            <Link to="/"> Logout </Link>
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
            <div className="leftSide">
                <h3 className="navbar-brand">myTODO</h3>
            </div>
            <div className="rightSide">
                {links}
            </div>
        </div>
    );
}

export default Navbar;
