import React from 'react';
import './SubjectList.css'

export const SubjectList=()=>{
    return(
        <div className="card-space">
        <div className="card darken-1 col m3 l3">
            <div className="card-content center-align">
                <span className={`btn class-title orange card-head`}>AM-4</span>
                <div className="card-subhead">Applied <br/> Mathematics - 4 </div>
                <div className="view-btn1"><a href="#" className="orange-text">view</a> </div>
                <div className="card-desp center-align">
                    <div className="ex-card mt-2" >
                        <p className="ex-head white-text">Exclusive Material</p>     
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}