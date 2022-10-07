import React from 'react'
import "../Styles/Navbar/navbar.css"
import {BsPerson} from "react-icons/bs"
import NavList from './NavList'
import { useGlobalContext } from '../hooks/Context';
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'

const Navbar = () => {  
  const {setCardModal} = useGlobalContext();

  return (
    <nav className='navbar'>
        <section className='navbar-header'>
          <p className='navbar-header__p'><strong>FREE SHIPPING</strong> worldwide for orders over <span className='p-span'>$150</span></p>
        </section>
        <section className='navbar-cover'>
          <div className='navbar-cover__wrapper'>
            <div>
              <input placeholder='Type anything and hit enter' />
            </div>
            <Link to="/"><h1>Sneakers<span className='ville'>Ville</span></h1></Link>           
            <div className='navbar-cart'>
            <Link to="/register"><h3 className='login-register'><BsPerson /></h3></Link>
            <Link to="/register"><p className='login-register'>Log In / Register</p></Link>
              <div onClick={() => setCardModal(true)} >
                <CartIcon />
              </div>
            </div>
          </div>
          <hr />
          <NavList />
        </section>
    </nav>
  )
}

export default Navbar