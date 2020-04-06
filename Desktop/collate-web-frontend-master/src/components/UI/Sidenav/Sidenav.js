import React,{useEffect} from 'react';
import './Sidenav.css';
import { NavigationSubdirectoryArrowLeft } from 'material-ui/svg-icons';

const Sidenav=()=>{
    useEffect(()=>{
        const menu = document.querySelector('#toggle');  
        const menuItems = document.querySelector('#overlay');  
        const menuContainer = document.querySelector('.menu-container');  
        const menuIcon = document.querySelector('i');
        const toggleMenu=(e)=>{
            menuItems.classList.toggle('open');
            menuContainer.classList.toggle('full-menu');
            menuIcon.classList.toggle('fa-th');
            menuIcon.classList.add('fa-times');
            e.preventDefault();
        }
        menu.addEventListener('click', toggleMenu,true);
        
    })
    
    return(
        <div className="navbar">
        <div class="container">
            <div class="menu-container" id="toggle">
            <a href="#" class="menu" ><i class="fa fa-th" aria-hidden="true"></i></a>
            </div>
            </div>
            <div class="overlay" id="overlay">
            <nav class="overlay-menu">
                <ul>
                <li ><a href="#">Home</a></li>
                <li><a href="#">Tour</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            </div>
    </div>
    )
}

export default Sidenav;