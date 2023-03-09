import React, { FormEvent, useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { login } from '../redux/apiCalls';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../helper/appDispatch';
import { State } from '../redux/reducers';
import Logo from './Logo';



const LoginForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const dispatch = useAppDispatch()
    
    const { isFetching, error } = useSelector((state:State) => state.user);
    console.log(error)

    const [visible, setVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>("password")

    const togglePassword = () => {
        setVisible(!visible)
        setInput(visible ? "password" : "text")
    }

    const handleClick = (e:FormEvent) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };
    const disabledBtn = (e:FormEvent) => {
        e.preventDefault();
    }

  return (
    <div className='reg-form-container'>
            <form>
                <Logo />
                {error && <div className='error'>Please enter your correct credentials !!</div>}
                <div className='input-wrap'>
                    <input 
                        type="text" 
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                 </div>
                <div className='input-wrap reg-password'>
                    <input
                     type={input} 
                     value={password}
                     placeholder="password"
                     onChange={(e) => setPassword(e.target.value)}
                    />
                    {visible ? <p onClick={togglePassword} className='shown-password'><AiOutlineEye /></p>: <p onClick={togglePassword} className='shown-password'><AiOutlineEyeInvisible /></p>}
                </div>
                {username && password ? <button className="reg-btn" onClick={handleClick}>
                    {isFetching ? "Loading..." : "LOGIN"}
                </button>: <button onClick={disabledBtn} className='disabled-btn'>LOGIN</button>}
            </form>
        </div>
  )
}

export default LoginForm
