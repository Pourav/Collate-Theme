import React, { useEffect, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom'
import './Sidebar.css';
import M from 'materialize-css';
import $ from 'jquery';
import logo from '../../../assests/collate main@2x.png';
import { UserContext } from '../../../contexts/UserContext';

const Sidebar=()=>{
    const {state,dispatch}=useContext(UserContext);
    let history=useHistory();
    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav');
       M.Sidenav.init(elems, {});        
    })

    return(
        <div className="sidebar">
            <ul id="slide-out" className="sidenav sidenav-fixed center-align "> 
                <li className="logo-list"><img src={logo} className="dash-logo"/></li>
                <li className="dash-list left-align" ><Link to='/dashboard'><i className="material-icons">dashboard</i>Dashboard</Link></li>
                <li className="dash-list left-align" ><Link to='/dashboard/profile'><i className="material-icons">face</i>Profile</Link></li>
                <li className="dash-list left-align" ><Link to='/dashboard/subjects'><i className="material-icons">list</i>Subjects</Link></li>
                <li className="dash-list left-align" ><Link to='/dashboard/contact'><i className="material-icons">headset_mic</i>Contact Us</Link></li>
                <li className="log-list left-align" ><Link to="/"  onClick={()=>{
                    dispatch({
                    type:"LOGOUT"
                    })
                    history.push('/');
                    }
                   
                    }><i className="material-icons" 
               
                >logout</i>logout</Link></li>
                <li className="" ></li>
            </ul>
            <a data-target="slide-out" className="sidenav-trigger app-sidenav hide-on-large-only toggle-button left-align"><i className="material-icons app-side">apps</i></a>
        </div>
    )
}

export default Sidebar;