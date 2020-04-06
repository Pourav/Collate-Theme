import React,{useState} from 'react';
import {useAlert} from 'react-alert';
import axios from 'axios';
import './ForgotPassword.css';
import ForgotPasswordMessage from './FogotPasswordMessage';
import Navbar from '../UI/Navbar/Navbar'
const ForgotPassword=()=>{
    const alert=useAlert();
    const [email,setEmail]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email){
            alert.error('Please enter the email associated with your account')
            return;
        } 
        document.querySelector('form').reset();
        alert.success(`An email has been sent to you on ${email} to set your new password`)
        console.log(email);
        axios.post('https://collatesignup.herokuapp.com/forgotpassword',{
            email
        }).then(res=>{
            console.log(res);
        })

    }
    return(
        <div>
        <Navbar/>
        <div className="forgot-password">
                <div className="rotate-device-lock">
  <div class="phone">
  </div>
<div class="message" hidden>
  Please rotate your device!
</div>
</div>
        <div className="full-forgotp-page">
        <ForgotPasswordMessage/>
         <div className="container">
         <form className="forgot-form shadow ">
  <div class="input-field row input-forgot">
  <div className="col-sm-1 mt-3 hide-on-small-only">
    <i class="material-icons icon">mail</i>
    </div>
    <div className="col s11">
    <input type="email" class="validate" placeholder="Enter Email"
    id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
  </div>
  <br/>
  </form>
  <div className="text-center">
  <button type="submit" class="btn responsive-width btn-primary forgot-submit btn-lg"
        onClick={handleSubmit}
  >Submit</button>
  </div>
  </div>
         </div>
        </div>
        </div>
    )
}

export default ForgotPassword;