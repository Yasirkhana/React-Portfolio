import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/s1.jpg';
import Card from './Card';
const Service = () =>{
    return(
        <> 
        <div className="my-5">
            <h1 className="text-center">
                Our Services
            </h1>
            <div className="container-fluid m-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                          
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
         
              
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
        </>
    )
}
export default Service ;