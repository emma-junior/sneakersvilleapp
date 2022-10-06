import React from 'react'
import "../Styles/Shopnow/shopnow.css"

const Shopnow = () => {
  return (
    <section className='shopnow'>
        <div className='adidas'>
            <div className='adidas__imgwrapper'><img className='adidas-img' src='/assets/images/shopnow-two.jpg' alt='' /></div>
            <div className='adidas-content'>
                <p className='adidas-content-title'>Lorem ipsum dolor sit amet</p>
                <p className='adidas-content-para'>Sed ut perspiciatis unde omnis iste natus</p>
                <p className='adidas-content-start'>START FROM</p>
                <p className='adidas-content-price'>$59.25</p>
                <button className='adidas-content-btn'>Shop Now</button>
            </div>
        </div>
        <div className='nike'>
            <div className='nike__imgwrapper'><img className='nike-img' src='/assets/images/shopnow.jpg' alt='' /></div>
            <div className='nike-content'>
                <p className='nike-content-title'>Lorem ipsum dolor</p>
                <p className='nike-content-para'>Sed ut perspiciatis unde</p>
            </div>
        </div>
    </section>
  )
}

export default Shopnow