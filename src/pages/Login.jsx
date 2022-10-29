import React from 'react';
import img from "../image/img.png"

const Login = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className="logo">My Chat</span>
        <span className="title">Register</span>
        <form >
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            
            <button>Sign In</button>
        </form>
        <p>You don't have an account?  Register</p>
        </div>
      
    </div>
  )
}

export default Login
