import React from "react";
import { NavLink } from "react-router-dom";
import web1 from '../src/images/s1.jpg';
import web2 from '../src/images/s2.jpg';
import web3 from '../src/images/s3.jpg';
import web4 from '../src/images/s4.jpg';
import web5 from '../src/images/s5.jpg';
import web6 from '../src/images/s6.jpg';
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
                          
                    <Card imgs={web1}/>
                    <Card imgs={web2}/>
                    <Card imgs={web3}/>
                    <Card imgs={web4}/>
                    <Card imgs={web5}/>
                    <Card imgs={web6}/>
         
              
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
        </>
    )
}
export default Service ;