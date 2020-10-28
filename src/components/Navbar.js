import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CustomizedMenus from './Burger';

const Navbar = () => {
  return (
    <header>
      <nav className="menu" role="navigation">
        <div className="inner">  
          <div className = "navBarLeft">
          <img className="logo" src={require("../pictures/logo.png")} alt="logo" width="70px" height="70px" />
          </div>
          
          <div className="navBarRight">
          <div><CustomizedMenus/></div>
            <ul class="lien-navbar">
            <li><Link className="liste" to='/'>Accueil </Link></li>
            <li ><Link className="liste" to='/ou-partir'>Où partir ?</Link></li>
            </ul>
          </div>   
        </div>     
      </nav>
    </header>
  ); 
};

export default Navbar;
