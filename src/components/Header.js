import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'


const Header= () => (
    <div class='topnav'>
      <img class="logo" color="background-white"width="150px" className="logo" src={logo} alt="logo"/>
      <nav>
        <ul className="ulh">
          <li className="lih"><Link to='/communityForum'>Community Forum</Link></li>
          <li className="lih"><Link to='/getHelp'>Get Help</Link></li>
          <li className="lih"><Link to='/'>Home</Link></li>
  
        </ul>
      </nav>
      
      
    </div>
);

export default Header