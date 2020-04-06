import React,{useState, useEffect,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {useAlert} from 'react-alert';
import M from 'materialize-css';
import axios from 'axios';
import avatar1 from '../../assests/avatar -1.png';
import avatar2 from '../../assests/avatar -6.png';
import avatar3 from '../../assests/avatar -7.png';
import avatar4 from '../../assests/avatar -8.png';
import avatar5 from '../../assests/avatar -2.png';
import avatar6 from '../../assests/avatar -3.png';
import avatar7 from '../../assests/avatar -4.png';
import avatar8 from '../../assests/avatar -5.png';

import './SignupDetails.css'
import { UserContext } from '../../contexts/UserContext';
import { validate } from '@babel/types';
const SignupDetails=()=>{
    let history=useHistory();
    let alert=useAlert();
    const {state,dispatch}=useContext(UserContext);
    const username=state.user?state.user.name:'username';
    if(state.isAuthenticated) history.push('/dashboard')
    if(state.isUserSignedUp && state.isUserDetails) history.push('/');
    //if(!state.isUserSignedUp) history.push('/signup');
    const {user}=state;
    console.log(state);
    const initState={
        college:"",
        branch:"",
        semester:null,
        phone:null       

    }
    useEffect(()=>{
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
        console.log('state: ',state.user);
    })
    const [data,setData]=useState(initState);
    const handleChange=(e)=>{
        console.log(e.target.id,e.target.value)
        setData({
            ...data,
            [e.target.id]:e.target.value
        })
    }
   
    const [avatar,setAvatar]=useState('');
    let [proceedToActivation,setProceedToActivation]=useState(false);
    let token=localStorage.getItem('token'),name='',email='';
  

    const collegeList=[
         'Amity School of Engineering & Technology',
         'Ambedkar Institute of Advanced Communication Technologies',
         'Bhagwan Pashuram Institute of Technology(BPIT)',
         'Bharati Vidyapeeths College of Engineering(BVCOE)',
         'Delhi Technical Campus',
         'Ch.Brahm Prakash Govt.Engineering College',
         'Guru Teg Bahadur Institute of Technology(GTBIT)',
         'G.B Pant Govt. Engineering College',
         'HMR Institute of Technology',
         'JIMS Engineering Management Technical Campus',
         'Maharaja Surajmal Institute of Technology',
         ' Northern India Engineering College(NIEC)'
                      
    ]
    const semList=[1,2,3,4,5,6,7,8];
    const branchList=[
        'CSE',
        'IT',
        'ECE',
        'other'
    ]

    const colleges=[],semesters=[],branches=[];
    collegeList.forEach((college)=>{
       colleges.push( <option value={college} >{college}</option> )
    })
    semList.forEach(semester=>{
        semesters.push(<option value={semester} >{semester}</option>)
    })
    branchList.forEach(branch=>{
        branches.push(<option value={branch} >{branch}</option>)
    })
    const Validate=()=>{
        const {college,branch,semester,phone}=data;
      
        if(!college){
        alert.show('Please select a college from the dropdown!')
        return true;
        }
        if(!branch){
        alert.show('Please select your branch from the dropdown!')
        return true;
        }
        if(!semester){
        alert.show('Please select your current semester from the dropdown!')
        return true;
        }
        if(!phone){
        alert.show('Please enter your phone no!')
        return true;
        }
        if(!avatar){
        alert.show('Please select an avatar!')
        return true;
        }
    return false;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Data: ',data);
        const {college,branch,semester,phone}=data;
         const {user,token}=state;
         const email=user.email;
        if(validate()) return;
        else{
         document.querySelector('form').reset();
         
        console.log('inside post request: ',state.user);
        if(college && branch && semester && avatar){
            axios.post('https://collatesignup.herokuapp.com/logindetails',{
                
                email,college,semester,branch,phone},{headers: {"x-auth-token":token},
            })
            .then(res=>{
                console.log(res);
                //alert.success(`Details stored successfully for user ${name}`)
                if(state.isUserConfirmed){

                    console.log('user is confirmed!');
                    dispatch({
                        type:"LOGIN",
                        payload:{
                             user:{
                                 name:username,
                                 email,
                                 phone,
                                 sem:semester,
                                 college,
                                 branch
                                 
                             },
                             token
                        }
                    })
                    history.push('/dashboard')
                }
                else{
                    dispatch({
                        type:"SIGNUP_DETAILS",
                        payload:{
                             user:{
                                 name:username,
                                 email,
                                 phone,
                                 sem:semester,
                                 college,
                                 branch
                                 
                             },
                             token
                        }
                    })
                    history.push('/activation')
                }
                
            })
            .catch(err=>{
                console.log(err);
            })
           
        }
       
        console.log('User Details: ',college,branch,semester,avatar);
       
        }
    }
    return(
        <div className="signupd-details">
        <div className="rotate-device-lock">
  <div class="phone">
  </div>
<div class="message" hidden>
  Please rotate your device!
</div>
</div>

<div className="full-signupd-page">
            <div className="container">
                
            <div className="row center greeting center">
    <div className=" headin col l12 center">
      <h1>Hello {username}!</h1>
      <h5>You’re almost there.</h5>
    </div>
  </div>
  <div className="container-fluid">
        <div className="row mh-100vh-signupd">
            <div className="col-10 col-sm-10 col-md-10 col-lg-6  offset-sm-1 offset-md-1 offset-lg-3  align-self-center d-lg-flex align-items-lg-center bg-transparent rounded rounded-lg-0" id="login-block-signupd">
                <div className="m-auto w-lg-75 w-xl-50" id="login-bkgd">   
                <form className="signupd-form">

<div className="signupd-form-fields shadow">
  <div className="input-field row">
  <div className="col-sm-1 mt-3  hide-on-small-only">
    <i class="material-icons icon">school</i>
    </div> 
    <div className="col-sm-11">
    <select class="mb-3" id="college"  onChange={handleChange}>
  <option value="" className="deep-purple-text lighten-1" disabled selected>College</option>
  {colleges}
  </select>
    </div>
  </div>

  <div className="input-field row mt-1">
  <div className="col-sm-1 mt-3  hide-on-small-only">
    <i class="material-icons icon">people</i>
    </div> 
    <div className="col-sm-11">
    <select class=" mb-3" id="semester" onChange={handleChange}>
  <option value="" disabled selected>Semester</option>
  {semesters}
  </select>
    </div>
  </div>
  <div className="input-field row mt-1">
  <div className="col-sm-1 mt-3  hide-on-small-only">
    <i class="material-icons icon">subject</i>
    </div> 
    <div className="col-sm-11">
    <select class="mb-3" id="branch" onChange={handleChange}>
  <option value="" disabled selected>Branch</option>
  {branches}
  </select>
    </div>  
  </div>

   <div class="input-field phone-number row">
   <div className="col-sm-1 mt-3  hide-on-small-only">
    <i class="material-icons icon">call</i>
    </div> 
    <div className="col-sm-11">
    <input type="number" class="validate"  placeholder="Enter Phone Number" id="phone" onChange={handleChange}/>
    </div>
  </div>
  </div>  
  <div className="row">
  </div>
  <div className="container">
  <div className="choose-ava">
  <div className="row avatar-form">
    <div className="col">
      <h5 className="responsive-width avatar-title left-align">Choose Your Avatar</h5>
    </div>
    
    <div className="center">
  <form className="avatar-choose">
  <div className="row">
    <div className="col s3">
         <label for="a1"><input id="a1" type="radio" name="ava" value="" className="avatar-detail" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar1}/>
    </label>
    </div>
    <div className="col s3">
    <label for="a2"><input id="a2" type="radio" name="ava" value="" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar2}/>
    </label>
    </div>

    <div className="col s3">
       <label for="a3"><input id="a3" type="radio" name="ava" value="" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar3}/>
       </label>
    </div>

    <div className="col s3">
        <label for="a4"><input id="a4" type="radio" name="ava" value="" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar4}/>
        </label>
    </div>
    </div>

    <div className="row">
    <div className="col s3">
      <label for="a5"><input id="a5" type="radio" name="ava" value="" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar5}/>
       </label>
    </div>

    <div className="col s3">
        <label for="a6"><input id="a6" type="radio" name="ava" value="" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar6}/>
        </label>
    </div>
    <div className="col s3">
      <label for="a7"><input id="a7" type="radio" name="ava" value="" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar7}/>
      </label>
    </div>

    <div className="col s3">
        <label for="a8"><input id="a8" type="radio" name="ava" value="" onClick={(e)=>{setAvatar(e.target.id)}}/><img src={avatar8}/>
     </label>
    </div>

    </div>

    </form>
    </div>
 </div>
 </div>
 </div>
<div class="row">

    
    <div class="col">
    <button className="btn mt-0 act-btn btn-large shadow" type="submit" onClick={handleSubmit}>Let's Begin</button> 
    </div>
   <div class="col"/>

  </div>

<br/>                   </form>

                </div>

            </div>

        

        </div>

    </div>

            </div>

            <br/>

        </div>
        </div>

    )

}



export default SignupDetails;

