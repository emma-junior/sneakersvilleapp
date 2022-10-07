import React, { useState } from 'react'
import fadeOut from '../helper/fadeOut'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import "../Styles/Reg/reg.css"

const Reg = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>("password")

const togglePassword = () => {
    setVisible(!visible)
    setInput(visible ? "password" : "text")
}
  return (
    <div className='reg-page'>
        <div className='reg'>
            <div className='reg-img-container'>
                <div className='reg-img-cover'></div>
                <img onLoad={fadeOut} className="reg-img" src='/assets/images/regimg.jpg' />
                <div className='reg-img-loader'>
                    <img src='/assets/svgs/loader.svg' />
                </div>
            </div>
            <div className='reg-form-container'>
                <form>
                    <h1>Welcome to sneakersVille</h1>
                    <input type="text" placeholder='First Name' />
                    <input type="email" placeholder='Email Address' />
                    <div className='reg-password'>
                        <input type={input} placeholder="Password" />
                        {visible ? <p onClick={togglePassword} className='shown-password'><AiOutlineEye /></p>: <p onClick={togglePassword} className='shown-password'><AiOutlineEyeInvisible /></p>}
                    </div>
                    <button className='reg-btn'>SIGN UP</button>
                    <div className='account'>
                        <p>Already have an account ? <span>LOGIN</span></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Reg