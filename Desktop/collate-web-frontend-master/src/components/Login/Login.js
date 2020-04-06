import React, { Component, useState, useEffect,useContext } from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useAlert} from 'react-alert';
import './Login.css';
import NavBar from '../UI/Navbar/Navbar'
import fblogo from '../../assests/icons-4.png';
import gologo from '../../assests/icons-5.png';
import * as actions from '../../firebase/script'
import {auth} from '../../firebase/firebase.utils'
import { Redirect } from 'react-router';
import {UserContext} from '../../contexts/UserContext';
import Loader from '../UI/Loader/Loader'
const Login=()=>{
    let history=useHistory();
    const alert=useAlert();
    const {state,dispatch}=useContext(UserContext);
    //console.log(context);
    if(state.isAuthenticated) history.push('/dashboard')
    // else if(!state.isAuthenticated && state.isUserSignedUp) history.push('/signupDetails')
    const initState={
        email: "",
        password: "",
        name: "",
        googleLogin:false,
        loading:false
    }
    let token="";
    const [data,setData]=React.useState(initState);
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.id]:e.target.value
        })
    }
    
    
    let [googleLogin,setGoogleLogin]=useState(false);
    let proceedToSignupDetails=false;
    let proceedToDashboard=false;
   
     const handleSubmit=(e)=>{
        e.preventDefault();
        let emptyFields=false;
        console.log(data.email,data.password);
         if(!data.email || !data.password){
         //setLoginError()
         emptyFields=true;
         alert.show('Please fill both the fields!');
         return;
         }  
         console.log(data);
         if(!emptyFields)
         return userLogin(e);
     }
     const userLogin=(e)=>{
       
        setData({
            loading:true
        })
        
        
            axios.post('https://collatesignup.herokuapp.com/loginuser',{
                email:data.email,
                password:data.password
            })
            
                .then(res=>{
                    console.log(res);
                    if(res.data.error){
                       alert.error(res.data.error[0].msg, {
                            timeout: 2000, // custom timeout just for this one alert
                           
                            onOpen: () => {
                              console.log('hey')
                            }, // callback that will be executed after this alert open
                            onClose: () => {
                              console.log('closed')
                            setData({
                                loading:false
                            })
                                return;
                            } // callback that will be executed after this alert is removed
                          })
                       
                    console.log('error!!!')
                    
                 
                   
                   // return;
                    }
                   
                    let token=res.data.token;
                    if(token){                     
                        axios.get('https://collatesignup.herokuapp.com/loginuser',{
                            headers: {"x-auth-token":token}
                        })
                        .then(res=>{
                            console.log(res);
                            alert.success(`Login successful for user ${res.data.name}`)  
                           setData({
                               ...data,
                               name:res.data.name,                            
                           })
                           proceedToDashboard=true; 
                           dispatch({
                               type:"LOGIN",
                               payload:{
                                    user:{
                                        name:res.data.name,
                                        email:res.data.email,
                                        phone:res.data.phone,
                                        sem:res.data.semester,
                                        college:res.data.collge,
                                        branch:res.data.branch
                                        
                                    },
                                    token
                               }
                           })
                           setData({
                               loading:false
                           })
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                    }
                })
            document.querySelector('form').reset();

        
   
    }
    const authgoogleLogin= e=>
    {
            e.preventDefault()
            actions.login()
            auth.onAuthStateChanged(user=>{
                if(!user){
                    return <div>Loading</div>
                }
                console.log('Users email: ',user.email)
                console.log('Users name: ',user.displayName)
                console.log('user: ',user);
                user.getIdToken().then((idToken)=>{
                    console.log(idToken)
                    axios.post("https://collatesignup.herokuapp.com/signingoogle",{
                        name:user.displayName,
                        email:user.email
                    },{headers: {"x-auth-token":idToken},}).then(res=>{
                        console.log('google auth res: ',res);
                        if(res.data.isdetails){
                           token=res.data.token;
                            
                            axios.get('https://collatesignup.herokuapp.com/loginuser',{
                                headers: {"x-auth-token":token}
                            })
                            .then(res=>{
                                console.log(res);
                                alert.success(`Login successful for user ${res.data.name}`)  
                               setData({
                                   ...data,
                                   name:res.data.name,                            
                               })
                               proceedToDashboard=true; 
                               dispatch({
                                   type:"LOGIN",
                                   payload:{
                                        user:{
                                            name:res.data.name,
                                            email:res.data.email,
                                            phone:res.data.phone,
                                            sem:res.data.semester,
                                            college:res.data.collge,
                                            branch:res.data.branch
                                            
                                        },
                                        token
                                   }
                               })
                               setData({
                                   loading:false
                               })
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                        }
                        else{
                            dispatch({
                                type:"SIGNUP_AUTH",
                                payload:{
                                    newUser:{
                                        name:user.displayName,
                                        email:user.email
                                    },
                                    token: idToken
                                }
                            })
                           
                            history.push('/signupDetails')
                        }
                                                  
                    })
                })
                
        })
       

    }
    const fblogin=e=>{
        e.preventDefault()
        actions.loginfb();
        auth.onAuthStateChanged(user=>{
            if(!user){
                return <div>Loading</div>
            }
            console.log('Users email: ',user.email)
            console.log('Users name: ',user.displayName)
            console.log('user: ',user);
            user.getIdToken().then((idToken)=>{
                console.log(idToken)
                axios.post("https://collatesignup.herokuapp.com/signingoogle",{
                    name:user.displayName,
                    email:user.email
                },{headers: {"x-auth-token":idToken},}).then(res=>{
                    console.log('google auth res: ',res);
                    if(res.data.isdetails){
                         const token=res.data.token;
                        axios.get('https://collatesignup.herokuapp.com/loginuser',{
                            headers: {"x-auth-token":token}
                        })
                        .then(res=>{
                            
                            console.log(res,'token: ',token);
                            alert.success(`Login successful for user ${res.data.name}`)  
                           setData({
                               ...data,
                               name:res.data.name,                            
                           })
                           
                           console.log('token:',token);
                           dispatch({
                               type:"LOGIN",
                               payload:{
                                    user:{
                                        name:res.data.name,
                                        email:res.data.email,
                                        phone:res.data.phone,
                                        sem:res.data.semester,
                                        college:res.data.collge,
                                        branch:res.data.branch
                                        
                                    },
                                    token
                               }
                           })
                           setData({
                               loading:false
                           })
                           proceedToDashboard=true; 
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                    }
                    else{
                        dispatch({
                            type:"SIGNUP",
                            payload:{
                                newUser:{
                                    name:user.displayName,
                                    email:user.email
                                },
                                token: idToken
                            }
                        })
                       
                        history.push('/signupDetails')
                    }
                                              
                })
            })
            
    })
    }
        if(data.loading) return <Loader/>
        if (state.isAuthenticated ) return <Redirect to='/dashboard'/>
        return(
            
            <div>
            <NavBar/>
            <div className="login">
            
              <div className="rotate-device-lock">
  <div className="phone">
  </div>
<div className="message" hidden>
  Please rotate your device!
</div>
</div>
<div className="full-login-page">
                <div className="container">
              
      <div className="row center greeting" id="login-greet">
        <div className="col l12 login-quote center" >
          <h1>Welcome Back!</h1>
         <h5> “The Secret of getting ahead is getting started.” 
              <br></br>
              - Mark Twain</h5>
        </div>
      </div>
      </div>
    <div className="container-fluid">
            <div className="row mh-100vh-login">
                <div className="col-10 col-sm-10 col-md-10 col-lg-6  offset-sm-1 offset-md-1 offset-lg-3  align-self-center d-lg-flex align-items-lg-center " id="login-block">
                    <div class="m-auto " id="login-bkgd">   
                        <form className="login-form">
                            <div className="login-form-fields shadow">
                            <div className="input-field row input-top">
                                <div className="col-sm-1 mt-1">
                                <i class="material-icons icon">mail</i>
                                </div>
                                <div className="col-sm-11 icons"> 
                                <input className="validate input-top"
                                  type="text" required="" id="email" placeholder="Email" onChange={(e)=>{
                                   
                                    handleChange(e)
                                    }}/>
                                </div>
                            </div>
                            <div className="input-field row">
                                <div className="col-sm-1 mt-2">
                                <i class="material-icons icon">lock</i>
                                </div>
                                <div className="col-sm-11">
                                <input className="validate" placeholder="Password" type="password" id="password" 
                                required="" onChange={(e)=>{
                                   
                                    handleChange(e)
                                    }} />
                                </div>
                                
                            </div>
                            </div> 
                            <div className="row suboptions" style={{color:"grey"}}><div className="col remember"><label><input type="checkbox" /><span>Remember Me</span></label></div>
                            <div className="col forgot"><span style={{cursor:"pointer"}} 
                            onClick={()=>{history.push('/forgotPassword')}}>Forgot password</span></div></div>  
                            <div className="container"> 
                            <div className="row login-final-btn">
                            <div className="col-md-6">
                            <button className="btn  mt-2 login-btn btn-large shadow" type="submit" onClick={handleSubmit}>LogIn</button>  
                            </div>
                            <div class="col-md-6">
                            <button className="btn btn-large new-act-btn shadow"  onClick={()=>history.push('/signup')}>Sign Up</button>  
                            </div>
                        </div>              
                        </div>
                        <div className="mt-3">
                            <span className="grey-text sign-text"> - or -</span>
                        </div>
                        <div className="mt-2">
                        <span className="grey-text sign-text">Sign Up with </span>
                        </div>
                        <div className="row">
                            <div className="col">
                            <button className=" btn-info mt-2 social-btn-fb" type="submit" onClick={(e)=>fblogin(e)}><img src={fblogo} className="social"/></button>  
                            </div>
                            <div className="col">
                            <button className=" btn-info mt-2 social-btn-go" type="submit" onClick={(e)=>authgoogleLogin(e)}><img src={gologo} className="social"/></button>  
                            </div>
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

export default Login;