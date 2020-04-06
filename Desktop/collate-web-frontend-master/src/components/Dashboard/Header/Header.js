import React from 'react';
import './Header.css';
import Avatar from '../../../assests/avatar -3.png';

const Header=()=>{
    return(
        <div className="header">
            
            <div className="row header-side">
                <div className=" div-pad hide-on-small-only dash">Dashboard</div>
                <div className="div-pad hide-on-small-only ">
                    <input type="text" name="box" className="searchbar"/>
                        <a href="#" className="search-btn"><i className="material-icons">search</i></a>
                </div>
                <div className="div-pad">
                    <img src={Avatar} className="avatar-header"/>
                   
                </div>
            </div>
        </div>
    )
}

export default Header;