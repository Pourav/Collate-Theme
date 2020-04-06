import React, { useEffect,useContext} from 'react';
import './Dashboard.css';
import $ from 'jquery';
import axios from 'axios';
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header';
import { UserContext } from '../../contexts/UserContext';
import { SubjectContext } from '../../contexts/SubjectContext';

const generateRandomColor=()=>
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

const Dashboard=()=>{
    
    const {state}=useContext(UserContext);
    const {user}=state;
    const {name}=user;
    const {token}=state;
   const {subjectState,dispatch}=useContext(SubjectContext);
   console.log(subjectState);
  
    useEffect(()=>{
        console.log(user.sem,user.branch);
        const semester=user.sem;
        const branch=user.branch;
        axios.post('https://collatesignup.herokuapp.com/subject',{
            semester,branch
        },{headers: {"x-auth-token":token}})
            .then(res=>{
                console.log('res from subject api: ',res);
              
            })
    })
    return(
        <div className="main">
            <div className='header'>
            <Header/>
            </div>
            <div className="sidebar">
            <Sidebar/>
            </div>
            <div className="main left-align">
            <h3 className="username">Hi {name}!</h3>
            <div className="row">
                            
              {/* <SubjectList></SubjectList> */}
                                <div>
                                    {/* <i className="material-icons arrow" >expand_more</i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                
    )
}

export default Dashboard;