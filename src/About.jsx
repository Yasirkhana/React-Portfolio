import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import web from "../src/images/img2.svg";
import Common from "./Common";

const About = () =>{
    return(
        <> 
           <Common 
           name="About" 
           line="We are a team of World Class Developers." 
           img={web}
           btn="Get Started"
            />
             
        </>
    )
}
export default About ;

// <div className="container-fluid nav_bg">
// <div className="row">
//     <div className="col-10 mx-auto">

//     </div>
// </div>
// </div>