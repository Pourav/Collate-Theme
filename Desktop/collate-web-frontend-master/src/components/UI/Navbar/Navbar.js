import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assests/go.png';
import M from 'materialize-css'
import menuicon from '../../../assests/icons8-squared_menu.png';
const Navbar=()=>{
      useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
          M.Sidenav.init(elems,{})
      }, )
        
    return(
        <div className="header-nav">
                {/* <nav className="navbar navbar-dark navbar-expand-md" id="app-navbar">
        <div className="container-fluid"><a className="navbar-brand" href="#"><i id="brand-logo"><img src={logo}/></i></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><img src={menuicon}/></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item space" role="presentation"><Link  to="/">Home</Link></li>
                    <li className="nav-item space" role="presentation"><Link  to="/signup">Sign Up</Link></li>
                    <li className="nav-item" role="presentation"><Link  to="/" >Login</Link></li> */}
                    {/* <li className="nav-item" role="presentation"><Link  to="/signupDetails" >Signup Details</Link></li> */}
                    {/* <li className="nav-item" role="presentation"><Link  to="/forgotPassword" >Forgot Password</Link></li> */}
                    {/* <li className="nav-item" role="presentation"><Link  to="/resetPassword/:token" >Reset Password</Link></li> */}
                    {/* <li className="nav-item" role="presentation"><Link  to="/loader" >Loader</Link></li> */}
                    {/* <li className="nav-item" role="presentation"><Link to="/dashboard">Dashboard</Link></li> */}
                {/* </ul>
        </div>
        </div>
    </nav> */}
    <div className="header-navbar">
  <nav className="navbr " role="navigation">
    <div className="nav-wrapper well"><a id="logo-well" className="brand-logo" href="#" ><img  src={logo}/></a>
      <ul className="right hide-on-med-and-down topnav">
      <li className="nav-item space" role="presentation"><Link  to="/">Home</Link></li>
       <li className="nav-item space" role="presentation"><Link  to="/signup">Sign Up</Link></li>
       <li className="nav-item" role="presentation"><Link  to="/" >Login</Link></li>
      </ul>
    

      <ul id="slide-out" className="sidenav">
        <li><Link  to="/">Home</Link></li>
        <li><Link  to="/signup">Sign Up</Link></li>
        <li><Link  to="/" >Login</Link></li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger toggle-button right"><i className="material-icons">apps</i></a>
    </div>
  </nav>
</div>
        </div>
    )
}

export default Navbar;
