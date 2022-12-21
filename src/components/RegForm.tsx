import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useForm } from "react-hook-form";
import { RegisterUser } from '../model';
import { publicRequest } from '../api';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Reg = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterUser>();

    const [visible, setVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>("password")

const togglePassword = () => {
    setVisible(!visible)
    setInput(visible ? "password" : "text")
}
    const navigate = useNavigate()
const submitHandler = async (data:RegisterUser) => {
    reset();
    setLoading(true)
    try {
        await publicRequest.post("/auth/register", data);
        navigate("/login")
        setLoading(false)
    } catch (err) {
        console.log(err)
        setLoading(false)
    }
};

  return (
        <div className='reg-form-container'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <h1>Welcome to sneakersVille</h1>
                <input 
                    type="text" 
                    placeholder='Username'
                    {...register("username", {
                    required: "username is required",
                    })}
                 />
                <input 
                    type="email" 
                    placeholder='Email Address'
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(value)
                        }
                    })}
                />
                {errors.email?.type === "required" && <p className="errorMsg">Email is required.</p>}
                {errors.email?.type === "matchPattern" && <p className="errorMsg">Email is not valid</p>}
                <div className='reg-password'>
                    <input 
                        type={input} 
                        placeholder="Password"
                        {...register("password", {
                            required: true,
                            validate: {
                                checkLength: (value) => value.length >= 6,
                                matchPattern: (value) =>
                                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value),
                            },
                        })} 
                    />
                    {visible ? <p onClick={togglePassword} className='shown-password'><AiOutlineEye /></p>: <p onClick={togglePassword} className='shown-password'><AiOutlineEyeInvisible /></p>}
                    {errors.password?.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password?.type === "checkLength" && (
                        <p className="errorMsg">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                    {errors.password?.type === "matchPattern" && (
                        <p className="errorMsg">
                            Password should contain at least one uppercase letter, lowercase
                            letter, digit, and special symbol.
                        </p>
                    )}
                </div>
                <button className='reg-btn'>{loading ? "Loading" : "SIGN UP"}</button>
                <div className='account'>
                    <p>Already have an account ? <Link to="/login"><span>LOGIN</span></Link></p>
                </div>
            </form>
        </div>
  )
}

export default Reg
