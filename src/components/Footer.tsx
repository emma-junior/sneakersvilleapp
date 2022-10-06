import React from 'react'
import {BiCopyright} from 'react-icons/bi'
import '../Styles/Footer/footer.css'

const Footer = () => {
  return (
    <section className='footer'>
        <ul className='footer__list'>
            <li>HOME</li>
            <li>SHOP</li>
            <li>PRODUCT</li>
            <li>CONTACT</li>
            <li>BLOG</li>
        </ul>
        <div className='footer__address'>
            <h1>Sneakers<span className='ville'>Ville</span></h1>
            <p className='address'>200 Madison Ave Str, Floor 25th, New York, NY 10010 , USA</p>
            <p className='tel'>(+0024)-222-333-4444</p>
            <p className='email'>hello@sneakersville.com</p>
        </div>
        <p className='footer__copyright'>Copyright <span className='copyright-icon'><BiCopyright /></span> 2021 SneakersVille | Built by Emmanuel Eze</p>
    </section>
  )
}

export default Footer