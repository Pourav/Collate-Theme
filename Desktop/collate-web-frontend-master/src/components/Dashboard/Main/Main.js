import React, { useEffect} from 'react';
import './Main.css';
import $ from 'jquery';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { SubjectList } from '../Subjects/SubjectList';


const Main=({username})=>{
   
    return(
        <div className="main">
            <div className='header'>
            <Header/>
            </div>
            <div className="sidebar">
            <Sidebar/>
            </div>
            <div className="main left-align">
            <h3 className="username">Hi {username}!</h3>
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

export default Main;