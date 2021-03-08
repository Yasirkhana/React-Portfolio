import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/s1.jpg';


const Card = (props) =>{
    return(
        <> 
     
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgs} className="card-img-top" alt="Card Image"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-outline-primary" type="submit">Go somewhere</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Card ;