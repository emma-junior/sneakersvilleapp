import React from 'react'
import "../Styles/Shipping/shipping.css"

const Select = () => {
  return (
    <select className='select' name="country" id="country">
        <option value="bangladesh">Bangladesh</option>
        <option value="albania">Albania</option>
        <option value="aland islands">Aland Islands</option>
        <option value="afghanistan">Afghanistan</option>
        <option value="belgium">Belgium</option>
    </select>
  )
}

export default Select