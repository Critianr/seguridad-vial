import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
function Header () {
       
    
    return(
    <div className="Header">
        <div className="wrapperHeader">
        
        <div className="items-follows">
            <ul>
               <i class="fas fa-hashtag"></i>
               <li><i class="fab fa-facebook-f"></i></li> 
               <li><i class="fab fa-twitter"></i></li> 
               
            </ul>
        </div>
        <h1><NavLink to='/' className='title-first'>Seguridad viak</NavLink></h1>
        <div className="menu">
            <ul>
            <li><i class="fas fa-bars"></i></li> 
            
            </ul>
        </div>
    </div>
    </div>
        );
}

    export {Header}