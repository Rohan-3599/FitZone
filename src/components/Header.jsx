import React, { Fragment } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
 export const Header = () => {
     return(
         <Fragment>
        
            <li><NavLink exact activeclassName="active" to="/">Home</NavLink></li>
            <li><NavLink exact activeclassName="active" to="/aboutus">About us</NavLink></li>
            <li><NavLink exact activeclassName="active" to="./classes.html">Testing</NavLink></li>
            <li><NavLink exact activeclassName="active" to="./blog.html">Blog</NavLink></li>
            <li><NavLink exact activeclassName="active" to="/contact">Contact</NavLink></li>
           
        
    </Fragment>
     );
 };
