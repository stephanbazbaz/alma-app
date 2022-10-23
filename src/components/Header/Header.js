import React from 'react'
import ALMA_CV from '../../assests/pics/Alma Hemmo CV 2022.pdf'
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    'Experience',
    'Projects',
    'Contact'
  ]
  return (
    <div className='Header'>
      <header>
        <Link to='/' className='nav-link'>Home</Link>
        <nav className='navbar'>{navLinks.map((link, idx) =>
          <Link
            to={link.toLowerCase()}
            className='nav-link'
            key={`navlink-${idx}`}>{link}
          </Link>)}
          <button>
            <a target='_blank'
              rel="noopener noreferrer"
              href={ALMA_CV}
            >CV
            </a>
          </button>

        </nav>
      </header>
    </div>
  )
}

export default Header
