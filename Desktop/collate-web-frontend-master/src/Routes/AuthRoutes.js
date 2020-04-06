import React,{useContext,useEffect} from 'react';
import {Router,Route} from 'react-router-dom'
import Login from '../components/Login/Login';
import Signup from '../components/SignUp/Signup';
import SignupDetails from '../components/SignUp/SignupDetails';
import ActivationLink from '../components/UI/ActivationLink/ActivationLink';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import ResetPassword from '../components/ForgotPassword/ResetPassword'
import {UserContext} from '../contexts/UserContext';

const AuthRoutes=()=>{
    const {state,dispatch}=useContext(UserContext)
   useEffect(()=>{
    
    //console.log('from auth routes: ',state);
   })
    return(  
        <Route>
        <Route exact path="/signupDetails" component={SignupDetails}/>
    <Route exact path="/" component={Login}/> 
    <Route exact path="/signup" component={Signup}/> 
    <Route exact path="/activation" component={ActivationLink}/>
    <Route exact path="/forgotPassword" component={ForgotPassword}/>
    <Route exact path="/resetPassword/:token" component={ResetPassword}/>
    
    </Route>

    )
    
    
   
}
export default AuthRoutes