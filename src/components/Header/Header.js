import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    'Home',
    'Experience',
    'Projects',
    'Contact',
  ]
  return (
    <div className='Header'>
      <header>
        {/* <Link to='/' className='nav-link'>Home</Link> */}
        <div className='alma-warp'>
          <h1>Alma Hemmo</h1>
          <p>Writer | Director | Content Manager</p>
        </div>

        <nav className='navbar'>{navLinks.map((link, idx) =>
          <Link
            to={link.toLowerCase()}
            className='nav-link'
            key={`navlink-${idx}`}>{link}
          </Link>)}
        </nav>
      </header>
    </div>
  )
}

export default Header
