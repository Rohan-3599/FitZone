import React, { Fragment } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
 export const Header = () => {
     return(
         <Fragment>
        
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/aboutus">About Us</NavLink></li>
            <li><NavLink exact activeClassName="active" to="./classes.html">Testing</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/blog">Blog</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li>
           
        
    </Fragment>
     );
 };
