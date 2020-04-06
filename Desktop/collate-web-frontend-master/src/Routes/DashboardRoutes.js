import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Dashboard/Header/Header";
import Main from "../components/Dashboard/Main/Main";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Subjects from "../components/Dashboard/Subjects/Subjects";

import Dashboard from "../components/Dashboard/Dashboard";
import mainDash from "../components/Dashboard/dash-main/dashMain"
import Contact from "../components/Dashboard/Contact/Contact";
import Profile from "../components/Dashboard/Profile/Proflie";
import { SubjectList } from "../components/Dashboard/Subjects/SubjectList";

const DashboardRoutes=()=>{
    return (
        <Route>
            <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/dashboard/contact" component={Contact} />
    <Route exact path="/dashboard/profile" component={Profile} />
    <Route exact path="/dashboard/header" component={Header} />
    <Route exact path="/dashboard/main" component={Main} />
    <Route exact path="/dashboard/sidebar" component={Sidebar} />
    <Route exact path="/dashboard/subjects" component={SubjectList} />
    <Route exact path="/dashboard/dashmain" component={mainDash} />
    
        </Route>
    )
}
export default DashboardRoutes