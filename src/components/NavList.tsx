import React from 'react'
import "../Styles/Navbarlist/navbarlist.css"
import { Link } from 'react-router-dom'

const NavList = () => {
  return (
        <ul className='navbarList'>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/products"><li>SHOP</li></Link>
            <Link to="/coming-soon"><li>PAGES</li></Link>
            <Link to="/coming-soon"><li>BLOG</li></Link>
            <Link to="/coming-soon"><li>CONTACT</li></Link>
        </ul>
  )
}

export default NavList