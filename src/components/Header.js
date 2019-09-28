import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'


const Header= () => (
    <div class='topnav'>
     
     <div id="sideContent1">

<img width = "150px" className="logo" src={logo} alt="logo" />


</div>


<div id="mainContent1">

  <header>

    <nav>
      <ul className = "ulh">
      <li className = "lih"><Link to='/login'>Login</Link></li>
        <li className = "lih"><Link to='/communityForum'>Community Forum</Link></li>
        <li className = "lih"><Link to='/getHelp'>Get Help</Link></li>
        <li className = "lih"><Link to='/'>Home</Link></li>

      </ul>
    </nav>
  </header>
</div>
      
      
    </div>
);

export default Header