import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';

const Navbar = () =>{
    return(
        <> 
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <NavLink  className="navbar-brand " to="/">YASIRKHANA.    </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/service">Services </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="contact">Contact </NavLink>
                    </li>
                   
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar ;