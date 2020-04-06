import React ,{useState,ReactCom} from 'react';
import {useAlert} from 'react-alert';
import {useHistory} from 'react-router-dom';
import './ResetPassword.css';
import axios from 'axios'
import NavBar from '../UI/Navbar/Navbar'

const ResetPassword=(props)=>{
  const alert=useAlert();
  const history=useHistory();
  const [password,setPassword]=useState('');
  const [confirmpassword,setConfirmpassword]=useState('');
  
  const passwordSubmit=(e)=>{
    let isError=false,emptyFields=false;

    if(!password || !confirmpassword){
    alert.error('Please fill out the fields!')
    emptyFields=true;
    isError=true;
    }
    if(!emptyFields && password!=confirmpassword){
    alert.error('Passwords in both the fields should be same');
    isError=true;
    }
    e.preventDefault();
    document.querySelector('form').reset();
    if(!isError){
    const url="https://collatesignup.herokuapp.com/resetpassword/"+props.match.params.token
      
    axios.post(url,{
            password})
        .then(res=>{
          console.log(res);
          if(res.data.msg=="Succesfully changed"){
            alert.success('Password changed successfully!')
            history.push('/login');
          }
          else alert.error('Oops! There has been an error.')
        })                 
                               
              
      }
         
  }
        
    return(
        <div>
        <NavBar/>
        
        <div className="new-password">
<div className="rotate-device-lock">
  <div class="phone">
  </div>
<div class="message" hidden>
  Please rotate your device!
</div>
</div>
<div className="full-resetp-page">
        <div className="container reset-message">
              <div className="row center">
                <div className="col l12" >
                  <h1>Last Step!</h1>
                  Enter the new password 
                   and login.
                </div>
              </div>
              </div>
         <div className="container">
         <form className="reset-password-form shadow">
  <div class="input-field row">
  <div className="col-sm-1 mt-3 hide-on-small-only">
  <i class="material-icons icon">lock</i>
  </div>
  <div className="col-sm-11">
  <input type="password" class="form-control" placeholder="New Password" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setPassword(e.target.value)}></input>
  </div>
  </div>
  <div class="input-field row">
  <div className="col-sm-1 mt-3 hide-on-small-only">
  <i class="material-icons icon">lock</i>
  </div>
  <div className="col-sm-11">
  <input type="password" class="form-control" placeholder="Confirm Password" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setConfirmpassword(e.target.value)}></input>
  </div>
  </div>
</form>
<div className="text-center mt-3">
  <button type="submit" class="btn responsive-width  reset-pass-submit btn-lg shadow" onClick={(e)=>passwordSubmit(e)}>Submit</button>
  </div>
         </div>
        </div>
        </div>
        </div>
    )
}

export default ResetPassword;