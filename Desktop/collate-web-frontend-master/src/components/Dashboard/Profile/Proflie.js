import React,{useState,useContext} from 'react';
import './Profile.css';
import avatar1 from '../../../assests/avatar -2.png';
import SideBar from '../Sidebar/Sidebar'
import { UserContext } from '../../../contexts/UserContext';
import axios from 'axios';
import {useAlert} from 'react-alert'


const Profile=()=>{
    const alert=useAlert()
    const {state,dispatch}=useContext(UserContext);
    const [formData,setFormData]=useState({
        name:state.user.name,
        sem:state.user.sem,
        branch:state.user.branch,
        phone:state.user.phone
    })
    console.log(state.token)
    const onhandleChange=e=>{
        console.log('hey')
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    const onhandleSubmit=e=>{
        e.preventDefault()
        console.log("hi")
        axios.post('https://collatesignup.herokuapp.com/logindetails/update',
        {semester:formData.sem,
         branch:formData.branch,
         phone:formData.phone   

        },{headers:{"x-auth-token":state.token}})
        .then(res=>{
            console.log(res)
            alert.success('Profile Updated')
            dispatch({
                type:'EDIT_PROFILE',
                payload:{
                    user:{
                        name:state.user.name,
                        email:state.user.email,
                        phone:formData.phone,
                        branch:formData.branch,
                        sem:formData.sem
                    }
                }
            })
        }).catch(err=>{
            console.log(err)
        })

    }
    return(
        <div className="profile"> 
        <h4 className="left-align mb-4">Profile</h4>
        <SideBar/>
        <div className="row">
            <div className="col m6 s12">
                <div className="input-field col m6 s12">
                <label for="first_name">First Name</label>
                <input placeholder={state.user.name} id="name" type="text" className="validate" onChange={e=>onhandleChange(e)} />

                </div>
                <div class="input-field col m6 s12">
                <input placeholder={state.user.phone} id="first_name" type="text" className="validate" />
                <label for="first_name">Phone</label>
                </div>
            </div>
            <div className="col m6 s12">
                <img src={avatar1}/>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col m6 s12">
                <div className="input-field col m6 s12">
                <input placeholder={state.user.sem} id="sem" type="text" className="validate" onChange={e=>onhandleChange(e)}/>
                <label for="first_name">Semester</label>
                </div>
                <div class="input-field col m6 s12">
                <input placeholder={state.user.branch} id="branch" type="text" className="validate" onChange={e=>onhandleChange(e)} />
                <label for="first_name">Branch</label>
                </div>
            <button className="btn purple submit-btn left-align" onClick={(e)=>onhandleSubmit(e)}>Update</button>

            </div>
            <div className="col m6">

            </div>
        </div>
        </div>
    )
}
export default Profile