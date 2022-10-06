import React, {useEffect} from 'react'
import "../Styles/Header/header.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='header'>
        <div className='header__content' data-aos="fade-right">
            <p className='header-title'><strong>Realtree</strong> Print Belt Bagn</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </section>
  )
}

export default Header