import React from 'react'
import "../Styles/Shopnow/shopnow.css"

const Shopnow = () => {
  return (
    <section className='shopnow'>
        <div className='adidas'>
            <div className='adidas-content'>
                <p className='adidas-content-title'>Great price you can count on</p>
                <p className='adidas-content-para'>We sell sneakers at the best rate</p>
                <p className='adidas-content-start'>START FROM</p>
                <p className='adidas-content-price'>$59.25</p>
                <button className='adidas-content-btn'>Shop Now</button>
            </div>
        </div>
        <div className='nike'>
            <div className='nike-content'>
                <p className='nike-content-title'>Give your foot the best</p>
                <p className='nike-content-para'>Shop with us now</p>
            </div>
        </div>
    </section>
  )
}

export default Shopnow