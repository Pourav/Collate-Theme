// import React,{useEffect,useState,useContext} from 'react';
// import { BrowserRouter, Switch} from 'react-router-dom';
// import Navbar from './UI/Navbar/Navbar';
// import Footer from './UI/Footer/Footer';
// import AuthRoutes from '../Routes/AuthRoutes';
// import DashboardRoutes from '../Routes/DashboardRoutes';
// import {UserContextProvider,UserContext} from '../contexts/UserContext';

// export const Home=()=>{
//     //const {state,dispatch}=useContext(UserContext);
//     //console.log('from home: ',state);
//     return(
//         <div className="home">
//         <BrowserRouter>
//             <Navbar/>
//                 <Switch>
//                   <UserContextProvider>
//                       <AuthRoutes/>
//                       <DashboardRoutes/>
//                   </UserContextProvider>
//                 </Switch>
//               </BrowserRouter>
//               <Footer></Footer>
//         </div>
//     )
// }