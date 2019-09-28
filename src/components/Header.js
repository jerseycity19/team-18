import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import logo from './logo.png';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
<div id="parent">


<div id="sideContent1">

<img width="150px" className="logo" src={logo} alt="logo" />


</div>


<div id="mainContent1">

  <header>

    <nav>
      <ul className="ulh">
        <li className="lih"><Link to='/roster'>Roster</Link></li>
        <li className="lih"><Link to='/communityForum'>Community Forum</Link></li>
        <li className="lih"><Link to='/getHelp'>Get Help</Link></li>
        <li className="lih"><Link to='/'>Home</Link></li>

      </ul>
    </nav>
  </header>
</div>

</div>

)

export default Header
