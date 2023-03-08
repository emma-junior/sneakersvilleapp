import React, { useState } from 'react'
import CartIcon from './CartIcon'
import {BsPerson} from "react-icons/bs"
import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../hooks/Context';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducers';
import { CurrentUser } from '../model';
import "../Styles/MobileNav/mobilenav.css"
import { useAppDispatch } from '../helper/appDispatch';
import { logOut } from '../redux/actions/user'
import Logo from './Logo'

const MobileNav = () => {
    const User:CurrentUser | null = useSelector((state:State) => state.user.currentUser);
    const {setMobileNavModal, setCartModal} = useGlobalContext()
    const [noUserDropdown, setNoUserDropdown] = useState<boolean>(false)
    const [userDropdown, setUserDropdown] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    // console.log(User)
    const letter = User?.username.charAt(0).toUpperCase()
  return (
    <nav className='mobilenav'>
        <Link to="/"><Logo /></Link>
        <div className='mobilenav-icons'>
            {User && 
              <div className='account'>
                <p className='letter' onClick={() => setUserDropdown(!userDropdown)}>{letter}</p>
                {userDropdown && <div className='dropdown'>
                  <Link to="/profile"><p>PROFILE</p></Link>
                  <p onClick={() => dispatch(logOut())}>LOG OUT</p>
                </div>}
              </div>
            }
            {!User &&
              <div className='account'>
                <h4 className='icon' onClick={() => setNoUserDropdown(!noUserDropdown)}><BsPerson /> Account</h4>
                {noUserDropdown && <div className='dropdown'>
                  <Link to="/register"><p>REGISTER</p></Link>
                  <Link to="/login"><p>LOGIN</p></Link>
                </div>}
              </div>
            }
            
            <h3 className='icon' onClick={() => setCartModal(true)}><CartIcon /></h3>
            <h2 className='icon' onClick={() => setMobileNavModal(true)}><FaBars /></h2>
        </div>
    </nav>
  )
}

export default MobileNav