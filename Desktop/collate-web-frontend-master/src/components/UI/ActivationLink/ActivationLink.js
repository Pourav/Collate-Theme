import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom';
import './ActivationLink.css'
import NavBar from '../Navbar/Navbar'
import {UserContext} from '../../../contexts/UserContext';

const ActivationLink=()=>{
  const {state}=useContext(UserContext);
  const history=useHistory();
  if(!state.isUserDetails) history.push('/');
    return(
      <div>
        <NavBar/>
        <div className="activation-linl well">
  <div className="rotate-device-lock">
  <div class="phone">
  </div>
<div class="message" hidden>
  Please rotate your device!
</div>
</div>
            <div className="activation-message"><div class="card">
  <div class="card-header">
    <h5>An activation link has been sent to your email</h5>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <h6><p>The journey of a thousand miles begins with one step.</p>
      <footer class="blockquote-footer">Lao Tzu </footer></h6>
    </blockquote>
  </div>
</div>
            </div>
        </div>
        </div>
    )
}

export default ActivationLink;