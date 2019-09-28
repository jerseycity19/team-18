import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className = "ulh">
        <li className = "lih"><Link to='/'>Home</Link></li>
        <li className = "lih"><Link to='/roster'>Roster</Link></li>
        <li className = "lih"><Link to='/schedule'>Schedule</Link></li>
        <li className = "lih"><Link to='/getHelp'>Get Help</Link></li>
        <li className = "lih"><Link to='/communityFourm'>Community Fourm</Link></li>

      </ul>
    </nav>
  </header>
)

export default Header
