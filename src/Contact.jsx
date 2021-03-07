import React, { useState } from "react";

const Contact = () =>{

    const [ data,setdata] = useState({
        fullname:"",
        phonenumber:"",
        email:"",
        message:"",
    })

    const InputEvent = (ev) =>{
        const {name,value} = ev.target;

        setdata((preVal)=>{
            return{
                ...preVal,  
                [name]: value,
            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Hello, ${data.fullname} your message has been submitted`)
    }

    return(
        <> 
            <div className="m-5">
                <h1 className="text-center">Contact US</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                       <form onSubmit={formSubmit}>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input 
                            type="text" 
                            name="fullname"
                            Value={data.fullname}
                            onChange={InputEvent}
                            class="form-control" 
                            id="exampleFormControlInput1"
                            placeholder="fullname"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input 
                            type="text" 
                            name="phonenumber"
                            Value={data.phonenumber}
                            onChange={InputEvent}
                           
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="mobile number"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input 
                            type="email" 
                            name="email"
                            Value={data.email}
                            onChange={InputEvent}
                           
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                            <label 
                             type="text" 
                             name="message"
                             Value={data.message}
                             onChange={InputEvent}
                            for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea 
                            class="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3">

                            </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                       </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact ;