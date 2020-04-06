import React from 'react';
import  './dashMain.css';
import Sidebar from '../Sidebar/Sidebar';
import Exclusiveimg from '../../../assests/exclusive.png';
import lectureimg from '../../../assests/lecture.png';
import notesimg from '../../../assests/notes.png';
 

const dashMain=()=>{
    return(
        <div>
             <Sidebar/>
             <div className="dash-main">
                 <div className="dash-heading left-align">
                 <span><strong>Hello</strong> Username!</span>
                 </div>
                 <div className="dash-exclusive card">
                     <div className="row">
                         <div className="">
                         <img src={Exclusiveimg} className="dash-ex-img"/>
                         </div>
                         <div className="dash-body col s12">
                         <p className="left-align mt-3 dash-intro ">Introducing</p>
                         <h5 className="left-align dash-head mb-3">Exclusive Content</h5>
                         <div className="row dash-in-body">
                             <div className="mr-4 dash-lec">
                             <img src={lectureimg} className="dash-lecture"/>
                             <p className="lecture-desp">Detailed & well-explained exclusive Video Lectures, enveloping every topic of the University’s Curriculum.</p>
                             </div>
                             <div className="dash-lecture">
                             <img src={notesimg} className="dash-notes"/>
                             <p className="lecture-desp1 left-align"> The most elegant and adequate exclusive Notes available for University’s Examinations, covering each & every topic of the Curriculum.</p>
                             </div>
                         </div>
                         </div>
                         <div className="row mt-2 white-text">
                             <div className="card down-card col-sm-12 col-md-6">
                             <p className="left-align ml-4 mt-3">Introducing</p>
                             <h5 className="newcard-heading ml-4">Personalized Platform</h5>
                             <p className="new-desp left-align ml-4"> For the very first time, a 
                                personalized platform 
                                showcasing the study material in 
                                a very organized & distinctive 
                                way, facilitating with a highly 
                                time-efficient & structural way of 
                                preparation for exams.
                             </p>
                             </div>
                             <div className="card down-card1 col s12">
                             <p className="left-align ml-4 mt-3">Introducing</p>
                             <h5 className="newcard-heading ml-4">Curated Material</h5>
                             <p className="new-desp left-align ml-4"> A study material which is 
                                collected from external resources 
                                like Youtube’s Videos, references 
                                & Teacher’s Notes, and refined by 
                                Academic Experts to make it 
                                precise & highly organized.
                            </p>
                             </div>
                         </div>
                     </div>

                 </div>
             </div>
       
        </div>
       
    )
}

export default dashMain;