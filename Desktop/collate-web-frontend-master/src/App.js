import React,{useEffect,useState,useContext,Component} from 'react';
import './App.css';
import { BrowserRouter, Switch} from 'react-router-dom';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Footer from './components/UI/Footer/Footer';
import {UserContextProvider, UserContext} from './contexts/UserContext';
// import LandingPage from './components/UI/LandingPage/LandingPage';
import AuthRoutes from './Routes/AuthRoutes'
import DashboardRoutes from './Routes/DashboardRoutes'
import { Home } from './components/Home';
import { SubjectContextProvider } from './contexts/SubjectContext';
import Dashboard from './components/Dashboard/Dashboard';
let options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};

export default class App extends Component{
  constructor(props){
    super(props)
    
    this.state={session:localStorage.length>0?JSON.parse(localStorage.getItem('state')).isAuthenticated:false}

  }
  componentDidUpdate(){
    console.log('triggered!')
    this.setState({
      session: JSON.parse(localStorage.getItem('state')).isAuthenticated
    })
  }
  render(){
    const {session}=this.state;
    console.log('session: ',session);
    
    return (     
      <div className="App"> 
        <Provider template={AlertTemplate} {...options}>
          <BrowserRouter>
            
                <Switch>
                  <UserContextProvider>
                      <AuthRoutes/>
                        <SubjectContextProvider>
                         <DashboardRoutes/>
                        </SubjectContextProvider>
                  </UserContextProvider>
                </Switch>
              </BrowserRouter>
              {/*<Footer></Footer>*/}
             
        </Provider> 
      </div>
    );
  
  }
   
  
}


