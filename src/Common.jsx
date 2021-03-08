import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { NavLink } from "react-router-dom";


const Common = (props) =>{
    return(
        <> 
            <section id="Header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> 
                                    Welcome to {props.name} Page <strong className="brand-name"> YasirKhana. </strong>
                               </h1>
                                <h2 className="my-4">
                                   {props.line}
                                </h2>
                                <div className="mt-2 ">
                                    <NavLink to="/service" className="btn btn-outline-primary me-2">{props.btn}</NavLink>
                                </div>
                            </div>
                            <div className="Hero col-lg-6 order-1  order-lg-2 header-img">
                                <img src={props.img} className="img-fluid animated" alt="Common Image"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Common ;

// <div className="container-fluid nav_bg">
// <div className="row">
//     <div className="col-10 mx-auto">

//     </div>
// </div>
// </div>