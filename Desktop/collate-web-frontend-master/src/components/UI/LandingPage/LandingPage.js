import React from 'react';
import './LandingPage.css';
import mainImg from '../../../assests/collate main@2x.png';
const LandingPage=()=>{
    return(
        <div>
        {/* <!--Header:Start--> */}
          <div className="headr">
          {/*     <!--Navbar:Start--> */}
  <div className="header-navbar">
  <nav className="transparent lighten-1 navbr navbar-fixed" role="navigation">
    <div className="nav-wrapper well"><a id="logo-well" href="#" className="brand-logo"><img src={mainImg}/></a>
      <ul className="right hide-on-med-and-down topnav">
        <li><a href="#">Lectures by Collate</a></li>
        <li><a href="#">CollateNotes</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
      </ul>
    

      <ul id="nav-mobile" className="sidenav">
        <li><a href="#">Navbar Link</a></li>
        <li><a href="#">Navbar Link</a></li>
        <li><a href="#">Navbar Link</a></li>
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
  </nav>
</div>
{/* <!--Navbar:End--> */}
  <div className="section no-pad-bot" id="index-banner">
    <div className="well">
      <br/><br/>
      <div className="row">
        <div className="col s5">
      <h1 className="header left"><b>Hassle free <span className="deep-purple-text lighten-1">preperation </span>for exams</b></h1>
        <h5 className="light left"> A modern responsive front-end framework based on Material Design</h5>
        <a href="#" id="download-button" className="btn-large waves-effect waves-light deep-purple lighten-1">Get Started</a>
        <br/><br/><br/><br/>
        <span className="header-small-text"><b>A modern responsive front-end framework based on Material Design</b></span>
        <br/>
        <span className="header-small-text">A modern responsive front-end framework based on Material Design</span>
      </div>
      <div className="col s7"></div>
    </div>
    </div>
      <br/><br/>

    </div>
  </div>
{/* <!--Header:End--> */}

{/* <!--App Download Section: Start--> */}
  <div className="well join-us">
    <div className="container app-download center">
      <div className="row">
        <div className="col s12 m4 l2"><p></p></div>
        <div className="col s12 m4 l8"><p>Join Us</p></div>
        <div className="col s12 m4 l2"><p></p></div>
      </div>
      <div className="row">
        <div className="col s12 m6 l3"><p></p></div>
        <div className="col s12 m6 l3 green white-text playstore"><p>Playstore Tab</p></div>
        <div className="col s12 m6 l3 blue white-text istore"><p>Applestore Tab</p></div>
        <div className="col s12 m6 l3"><p></p></div>
      </div>
    </div>
  </div>

  {/* <!--App Download Section:End--> */}


  {/* <!--Lec and Vid Section:Start--> */}
  <div className="well">
    <div className="basic-1">
      <div className="well">
          <div className="row">
              <div className="col l5">
                  <div className="text-container">
                    <h5 className="deep-purple-text lighten-1"><b>Lectures By Collate</b></h5>
                      <h2><b>The New Way of Learning</b></h2>
                      <hr className="seperate"/>
                      <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</p>
        <a href="#" id="download-button" className="btn-large waves-effect waves-light deep-purple lighten-1">Get Started</a>
                  </div> 
              </div>
              <div className="col l7">
                  <div className="image-container">
                      <img className="img-fluid" src="../../assests/lecture@4x.png" alt="alternative"/>
                  </div>
              </div> 
          </div> 
      </div> 
  </div> 

  
  <div className="basic-2">
    <div className="well">
        <div className="row">
            <div className="col l5 right">
                <div className="text-container">
                  <h5 className="deep-purple-text lighten-1"><b>CollateNotes</b></h5>
                    <h2><b>Notes Like Never Before</b></h2>
                    <hr className="seperate"/>
                    <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</p>
      <a href="#" id="download-button" className="btn-large waves-effect waves-light deep-purple lighten-1">Get Started</a>
                </div> 
            </div> 
            <div className="col l7">
                <div className="image-container">
                    <img className="img-fluid" src="../../assests/notes2@4x.png" alt="alternative"/>
                </div> 
            </div> 
        </div> 
    </div> 
</div>

<div className="basic-1">
  <div className="well">
      <div className="row">
          <div className="col l5">
              <div className="text-container">
                <h5 className="deep-purple-text lighten-1"><b>VIDEO</b></h5>
                  <h2><b>The New Way of Learning</b></h2>
                  <hr className="seperate"/>
                  <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</p>
    <a href="#" id="download-button" className="btn-large waves-effect waves-light deep-purple lighten-1">Get Started</a>
              </div> 
          </div> 
          <div className="col l7">
              <div className="image-container">
                  <img className="img-fluid" src="../../assests/notes&vid@4x.png" alt="alternative"/>
              </div> 
          </div> 
      </div> 
  </div> 
</div>
  </div>
  {/* <!--Lec and Vid Section: End--> */}

  {/* <!--Get Started Section:Start--> */}

<div className="well join-us blue-grey lighten-5">
  <div className="container center">
    <div className="row lets-begin">
      <div className="col s12 center"><p><b><span className="deep-purple-text lighten-1">Join</span> the thousands and start your exam preperation today</b><br/><br/>
        <a href="#" id="begin-button" className="btn-large waves-effect waves-light deep-purple lighten-1">Get Started</a></p>
      </div>
    </div>
  </div>
</div>
{/* <!--Get Started Section:End--> */}



{/* <!--Footer:Start--> */}


  <footer className="page-footer deep-purple lighten-1">
    <div className="well">
      <div className="row main-footer">
        <div className="col l3 s12">
          <h5 className="white-text">Company Bio</h5>
        </div>
        
        <div className="col l3 s12">
          <ul>
            <li><a className="white-text" href="#!">COURSE</a></li>
            <li><a className="white-text" href="#!">FAQ</a></li>
            <li><a className="white-text" href="#!">ABOUT</a></li>
            <li><a className="white-text" href="#!">CONTACT</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <ul>
            <li><a className="white-text" href="#!">Blogs</a></li>
            <li><a className="white-text" href="#!">Partner Program</a></li>
            <li><a className="white-text" href="#!">About</a></li>
            <li><a className="white-text" href="#!">Contact</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <ul>
            <li><a className="white-text blue" href="#!">Playstore Icon</a></li>
            <li><a className="white-text green" href="#!">Apple Store Icon</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="well">
      <div className="container">
        <div className="row center copy-footer">
          <div className="col s2">&copy; 2020 Collate</div>
          <div className="col s2"/>
          <div className="col s2"/>
          <div className="col s2">facebook</div>
          <div className="col s2">youtube</div>
          <div className="col s2">twitter</div>
        </div>
      </div>
    </div>
  </div>
  </footer>

  {/* <!--Footer:End--> */}
</div>
    )
}

export default LandingPage