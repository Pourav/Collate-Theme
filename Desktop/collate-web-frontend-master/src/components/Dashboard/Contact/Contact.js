import React from 'react';
import  './contact.css';
import Sidebar from '../Sidebar/Sidebar';


const Contact=()=>{
    return(
        <div>
             <Sidebar/>
        <div className="contact left-align">
            <h4>Contact Us</h4>
            <div className="row">
                <div className="inputs">
                    <span>Send your feedback so we can make this platform better and serve you with more <br/> good features.</span>
                </div>
            </div>
            <div>
            <span for="last_name">Your msg</span>
            </div>
            <div>
            <textarea id="last_name" type="text" class="validate msg-box" />
            </div>
            <a href="#" className="btn purple submit-btn">Submit</a>
        </div>
        </div>
       
    )
}

export default Contact;