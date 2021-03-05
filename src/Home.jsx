import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import web from "../src/images/img1.svg";


const Home = () =>{
    return(
        <> 
            <section id="Header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1">
                                <h1> 
                                    Grow Your Business with <strong className="brand-name"> YasirKhana. </strong>
                               </h1>
                                <h2 className="my-3">
                                    We are the team of talented Developer.
                                </h2>
                                <div className="mt-3 ">
                                    <a href="" className="btn btn-outline-primary me-2">Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 pt-lg-5 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="Home Image"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Home ;

// <div className="container-fluid nav_bg">
// <div className="row">
//     <div className="col-10 mx-auto">

//     </div>
// </div>
// </div>