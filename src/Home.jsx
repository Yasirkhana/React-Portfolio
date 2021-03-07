import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import web from "../src/images/img1.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () =>{
    return(
        <> 
           <Common 
            name="Home"
            line="Grow Your business with Yasir Khana." 
            img={web}
            btn="Contact Now"
            />
            
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