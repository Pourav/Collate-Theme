import React,{useContext,useState,useEffect} from 'react';
import axios from 'axios';
import {useAlert} from 'react-alert';
import {useHistory} from 'react-router-dom';
import './Signup.css';
import {Redirect} from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import Loader from '../UI/Loader/Loader'
import NavBar from '../UI/Navbar/Navbar'
const Signup =()=>{
    let history=useHistory();
    const alert=useAlert();
    const {state,dispatch}=useContext(UserContext);
    if(state.isAuthenticated) history.push('/dashboard')
    // else if(!state.isAuthenticated && state.isUserSignedUp) history.push('/signupDetails')
    const initState={
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        loading:false
    }
    const [data,setData]=useState(initState);
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.id]:e.target.value
        })
    }
  
    const [token,setToken]=useState('');
    let [ proceedToLogin,setProceedToLogin]=useState(false);
    let [proceedToSignupDetails, setProceedToSignupDetails]=useState(false);
   
    const regexPatterns = {
 
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        password: /^[\w@-]{8,}$/
      }
   
    const validate=()=>{
        console.log('reached validate')
        const {name,email,password,confirmPassword}=data;
        let isError=false;
        let error="";
       
        if(!name || !email || !password || !confirmPassword){
            //error for empty name field
            
            isError=true;
            console.log('Field missing error');
            alert.error('Please fill all the fields!');   
            return isError;    
            
        }
       
        if(!regexPatterns["email"].test(email)){
            //error for invalid email
            isError=true;
            alert.error("Please type in a valid email");
            return isError;
           
        }
        if(!regexPatterns["password"].test(password)){
            //error for invalid password
            isError=true;
            alert.error('Password should be at least 8 characters long!');
            return isError;
          
        }
        if(password!==confirmPassword){
            //error for mismatch password in both the fields
            isError=true;
            alert.error("Passwords in both the fields should be same!");
            return isError;
           
        }
        console.log('Error: ',isError);
        return isError;
        
    }
   
    const userSignup=(e)=>{
         
        
        e.preventDefault();
        console.log(data);
       
       
        const {name,email,password,confirmPassword}=data;
        if(validate()) return;
        else{
            setData({loading:true})
            axios.post('https://collatesignup.herokuapp.com/registeruser',{
                name,email,password
            })
            .then(res=>{
                console.log(res);
                const token=res.data.token;
                if (res.data.errors && res.data.errors.length>0) {
                    const errMsg=res.data.errors[0].msg;
                    setData({loading:false})
                    if(errMsg=='User already exists'){
                        alert.show("Looks like you already have an account!");
                        console.log("redirecting to login page");
                            setProceedToLogin(true);                        
                    }
                    
                }else{
                    axios.post('https://collatesignup.herokuapp.com/email',{
                        email
                    })
                    .then(res=>{
                        console.log(res);
                       
                        
                        const t=dispatch({
                            type:"SIGNUP",
                            payload:{
                                newUser:{
                                    name:data.name,
                                    email:data.email
                                },
                                token
                            }
                        })
                        console.log(t);
                        history.push('./signupDetails');
                    })
                   
                }
            })
            .catch(err=>{
                console.log(err);
            })
        document.querySelector('form').reset();
        
        }              
        
        
    }
 

        if(data.loading) return <Loader/>
        if(proceedToSignupDetails) return <Redirect to="/signupDetails"/>
      
        if(proceedToLogin)  return( <Redirect to="/"/>)
        return(
            <div>
            <NavBar/>
            <div className="signup">  
                          <div className="rotate-device-lock">
  <div class="phone">
  </div>
<div class="message" hidden>
  Please rotate your device!
</div>
</div>
            <div className="full-signup-page">              
            <div className="container greeting">
            <div className="row center" id="signup-greet">
              <div className="col l12" >
                <h1>Welcome Back!</h1>
                <h5>“The Secret of getting ahead is getting started.” 
                    <br></br>
                    - Mark Twain</h5>
              </div>
            </div>
            </div>
          <div className="container-fluid">
                  <div className="row mh-100vh-signup">
                      <div className="col-10 col-sm-10 col-md-10 col-lg-6  offset-sm-1 offset-md-1 offset-lg-3  align-self-center d-lg-flex align-items-lg-center bg-transparent rounded rounded-lg-0" id="signup-block">
                          <div className="m-auto w-lg-75 w-xl-50" id="login-bkgd">   
                              <form >
                                <div className="signup-details-fields shadow">
                              <div className="input-field row">
                                <div className="col-sm-1 mt-3 hide-on-small-only">
                                    <i class="material-icons icon">face</i>
                                    </div>
                                    <div className="col-sm-11">
                                    <input className="validate"   
                                      placeholder="Name" type="text" required="" id="name" 
                                      onChange={handleChange} />
                                    </div>
                                    </div>
                                    <div className="input-field row">
                                  <div className="col-sm-1 mt-3 hide-on-small-only">
                                          <i className="material-icons icon">mail</i>
                                      </div>
                                      <div className="col-sm-11">
                                      <input className="validate" type="email" 
                                      placeholder="Email" required=""  id="email" name="passwor" 
                                      onChange={handleChange}/>
                                      </div>
                                      
                                      
                                      <small id="passwordHelpInline" class="text-muted" hidden>
                                        Must be 8-20 characters long.
                                        </small>
                                        
                                      <p className="validation-text" hidden>Password can be alphanumeric but must be at least 8 characters long</p>
                                    </div>
                                  <div className="input-field row">
                                  <div className="col-sm-1 hide-on-small-only mt-3">
                                          <i className="material-icons icon">lock</i>
                                      </div>
                                      <div className="col-sm-11">
                                      <input className="validate" type="password" 
                                      placeholder="Password" required=""  id="password" name="passwor" 
                                      onChange={handleChange}/>
                                      </div>
                                      
                                      
                                      <small id="passwordHelpInline" class="text-muted" hidden>
                                        Must be 8-20 characters long.
                                        </small>
                                        
                                      <p className="validation-text" hidden>Password can be alphanumeric but must be at least 8 characters long</p>
                                    </div>
                                  <div className=" input-field row">
                                  <div className="col-sm-1 hide-on-small-only mt-3">
                                          <i className="material-icons icon">lock</i>
                                      </div>
                                      <div className="col-sm-11">
                                      <input className="validate" type="password" 
                                      placeholder="Confirm Password" required=""  id="confirmPassword" name="confirm-password" 
                                      onChange={handleChange}/>
                                      </div>
                                      <p className="validation-text" hidden>Passwords in both the fields should be the same</p>
                                    </div>
                                    </div>
                                    <br></br>   
                                    <div className="container"> 
                                  <div class="row signup-final-btn">
              <div className="col-lg-6">
                <button className="btn  mt-2 login-btn btn-large shadow" type="submit"
                   onClick={userSignup} >Sign Up</button>  
              </div>
              <div className="col-lg-6">
                <button className="btn  mt-2 new-act-btn btn-large shadow" type="submit" onClick={() => history.push("/")}
               >Login</button>
              </div>
              </div>
            </div>              
            <br></br>
            {/* -or- */}
            <br></br>
            {/* Sign Up with */}
            <br></br><div className="row">
    {/* <div className="col">
    <button className="btn btn-info mt-2 social-btn-fb" type="submit"><img src={fblogo} style={{width:'50px',height:'50px'}}/></button>  
    </div> */}
    {/* <div className="col">
    <button className="btn btn-info mt-2 social-btn-go" type="submit" onClick={(e)=>_component(e)}><img src={gologo}/></button>  
    </div> */}
  </div> 
                              </form>
                          </div>
                      </div>
                  
                  </div>
              </div>
            </div>
            </div>
            </div>
        )
    }
    
export default Signup;

