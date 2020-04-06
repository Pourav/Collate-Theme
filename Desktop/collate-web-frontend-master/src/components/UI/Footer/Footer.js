import React from 'react';
import './Footer.css';
const Footer=()=>{
    return(
        <div className="footer">
    
    <div style= {{background:'white', textalign:'center', margin:'0px', padding:'10px'}}>
        <p style={{fontfamily: 'raleway',textAlign:'center'}} className="grey-text">&copy; Collate <span id="beta">&nbsp;&nbsp;Beta v2&nbsp;&nbsp;</span> 2020</p>
    </div>
        </div>
    )
}

export default Footer;
