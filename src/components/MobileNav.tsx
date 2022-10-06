import React from 'react'
import CartIcon from './CartIcon'
import {BsPerson} from "react-icons/bs"
import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../hooks/Context';
import "../Styles/MobileNav/mobilenav.css"

const MobileNav = () => {
    const {setMobileNavModal, setCardModal} = useGlobalContext()
  return (
    <nav className='mobilenav'>
        <Link to="/"><h1>Sneakers<span className='ville'>Ville</span></h1></Link>
        <div className='mobilenav-icons'>
            <h2 className='icon'><BsPerson /></h2>
            <h3 className='icon' onClick={() => setCardModal(true)}><CartIcon /></h3>
            <h2 className='icon' onClick={() => setMobileNavModal(true)}><FaBars /></h2>
        </div>
    </nav>
  )
}

export default MobileNav