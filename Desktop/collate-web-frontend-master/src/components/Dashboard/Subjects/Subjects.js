import React, { Component, useEffect } from 'react';
import M from 'materialize-css';
import './Subjects.css';
import Sidebar from '../Sidebar/Sidebar'



const Subjects=()=>{
    useEffect(()=>{
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
            
    })

    return(
        <div className="subject left-align">
            <div className="row">
                <div className="col s10">
                <div className="main-heading center-align">
                </div>
                <div className="heading">Theory Of Computation</div>
                </div>
                </div>
            <div className="row">
                <div className="button-first card darken-1 "><a class="modal-trigger black-text" href="#modal1">CollateNotes</a></div>
                <div className="button-first card darken-1 ">View Syllabus</div>
            </div>
            <div className="row">
            <div className="card darken-1 ">
                <div className="card-content center-align">
                    <div className="row">
                        <div className="left-part"> 
                            <div className="unit">Unit</div>
                            <div className="unit-no">01</div>
                        </div>
                        <div>
                        <div className="card-subhead">Lecture with <br/>Topic-wise Notes</div>
                        <div className="card-desp">
                            <div className="row">
                                <div className="unit-display">
                                    <div className="desp-subhead">Lectures</div>
                                    <div>70</div>
                                </div>
                                <div className="unit-display">
                                    <div className="desp-subhead">Notes</div>
                                    <div>200 <span className="pages">pages</span></div>
                                </div>
                            </div>
                            <div className="view-btn"><a href="#" className="purple-text">view</a> </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card darken-1 ">
                <div className="card-content center-align">
                    <div className="row">
                        <div className="left-part"> 
                            <div className="unit">Unit</div>
                            <div className="unit-no">02</div>
                        </div>
                        <div>
                        <div className="card-subhead">Lecture with <br/>Topic-wise Notes</div>
                        <div className="card-desp">
                            <div className="row">
                                <div className="unit-display">
                                    <div className="desp-subhead">Lectures</div>
                                    <div>70</div>
                                </div>
                                <div className="unit-display">
                                    <div className="desp-subhead">Notes</div>
                                    <div>200 <span className="pages">pages</span></div>
                                </div>
                            </div>
                            <div className="view-btn"><a href="#" className="purple-text">view</a> </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="card darken-1 ">
                <div className="card-content center-align">
                    <div className="row">
                        <div className="left-part"> 
                            <div className="unit">Unit</div>
                            <div className="unit-no">03</div>
                        </div>
                        <div>
                        <div className="card-subhead">Lecture with <br/>Topic-wise Notes</div>
                        <div className="card-desp">
                            <div className="row">
                                <div className="unit-display">
                                    <div className="desp-subhead">Lectures</div>
                                    <div>70</div>
                                </div>
                                <div className="unit-display">
                                    <div className="desp-subhead">Notes</div>
                                    <div>200 <span className="pages">pages</span></div>
                                </div>
                            </div>
                            <div className="view-btn"><a href="#" className="purple-text">view</a> </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card darken-1 ">
                <div className="card-content center-align">
                    <div className="row">
                        <div className="left-part"> 
                            <div className="unit">Unit</div>
                            <div className="unit-no">04</div>
                        </div>
                        <div>
                        <div className="card-subhead">Lecture with <br/>Topic-wise Notes</div>
                        <div className="card-desp">
                            <div className="row">
                                <div className="unit-display">
                                    <div className="desp-subhead">Lectures</div>
                                    <div>70</div>
                                </div>
                                <div className="unit-display">
                                    <div className="desp-subhead">Notes</div>
                                    <div>200 <span className="pages">pages</span></div>
                                </div>
                            </div>
                            <div className="view-btn"><a href="#" className="purple-text">view</a> </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/*modal*/}
            <div id="modal1" class="modal bottom-sheet">
                <div class="modal-content">
                <h4>CollateNotes</h4>

                </div>
            </div>
        </div>
    )
}

export default Subjects;