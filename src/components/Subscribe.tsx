import React from 'react'
import {IoMailOpenOutline} from 'react-icons/io5'
import '../Styles/Subscribe/subscribe.css'

const Subscribe = () => {
  return (
    <section className='subscribe'>
        <div className='subscribe__connected'>
            <p className='connected__title'><strong>Keep</strong> Connected</p>
            <p className='connected__para'>Get updates by subscribing to our weekly newsletter</p>
        </div>
        <div className='subscribe__mail'>
            <div className='mail'>
                <p className='mail-icon'><IoMailOpenOutline /></p>
                <input className='mail-input' type="text" placeholder='Enter your email address' />
                <p className='subscribe-btn'>SUBSCRIBE</p>
            </div>
            <hr />
        </div>
    </section>
  )
}

export default Subscribe