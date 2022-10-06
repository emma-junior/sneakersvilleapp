import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../hooks/Context';
import "../Styles/MobileNavModal/mobilenavmodal.css"
import {AiOutlinePlus} from "react-icons/ai"
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"
import {FaPinterestP} from "react-icons/fa"

const MobileNavModal = () => {
    const {setMobileNavModal} = useGlobalContext();
  return (
    <section className='mobilenavmodal'>
        <span className='times-icon' onClick={() => setMobileNavModal(false)} ><FaTimes /></span>
        <p className='free-shipping'><strong>FREE SHIPPING</strong> world wide for all orders over $199.</p>
        <hr />
        <input placeholder='Search here' />
        <hr />
        <div className='mobile-navlist'>
          <p>Home</p>
          <p><AiOutlinePlus /></p>
        </div>
        <div className='mobile-navlist'>
          <p>Shop</p>
          <p><AiOutlinePlus /></p>
        </div>
        <div className='mobile-navlist'>
          <p>Blog</p>
          <p><AiOutlinePlus /></p>
        </div>
        <div className='mobile-navlist'>
          <p>Contact Us</p>
          <p><AiOutlinePlus /></p>
        </div>
        <hr />
        <div className='icons'>
          <p className='facebook-icon'><FiFacebook /></p>
          <p className='twitter-icon'><FiTwitter /></p>
          <p className='pinterest-icon'><FaPinterestP /></p>
          <p className='instagram-icon'><FiInstagram /></p>
        </div>
    </section>
  )
}

export default MobileNavModal