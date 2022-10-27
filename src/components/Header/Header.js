import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    'Experience',
    'Projects',
    'Contact',
  ]
  return (
    <div className='Header'>
      <header>
        <Link to='/'>
          <div className='alma-warp'>
            <h1>Alma Hemmo</h1>
            <div className='flx-spc-b '>
              <p>Writer</p>
              <div style={{
                fontSize: '10px'
              }}>|</div>
              <p>Director</p>
              <div style={{
                fontSize: '10px'
              }}>|</div>
              <p>Content Manager</p>
            </div>
          </div>
        </Link>

        <nav className='navbar'>{navLinks.map((link, idx) =>
          <Link
            to={link.toLowerCase()}
            className='nav-link expand'
            key={`navlink-${idx}`}>{link}
          </Link>)}
        </nav>
      </header>
    </div>
  )
}

export default Header
