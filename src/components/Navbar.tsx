import React from 'react'
import "../Styles/Navbar/navbar.css"
import {BsPerson} from "react-icons/bs"
import NavList from './NavList'
import { useGlobalContext } from '../hooks/Context';
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'
import { useSelector } from 'react-redux';
import { CurrentUser } from '../model';
import { useAppDispatch } from '../helper/appDispatch';
import { State } from '../redux/reducers';
import { logOut } from '../redux/actions/user';



const Navbar = () => {  
  const {setCardModal} = useGlobalContext();
  const User:CurrentUser | null = useSelector((state:State) => state.user.currentUser);


  const dispatch = useAppDispatch()

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
              {User ? <div className='login-logout'>
                <Link to="profile"><h3 className='login-register'><BsPerson className='person-icon' /> {User.username}</h3></Link>
                <p className='login-register' onClick={() => dispatch(logOut())}>Logout</p>
              </div> : <div className='login-logout'>
                  <Link to="/login"><p className='login-register'>Login</p></Link><p className='login-register'>/</p>
                  <Link to="/register"><p className='login-register'>Register</p></Link>
                </div>}
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