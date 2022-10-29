import React from 'react';
import img from "../image/img.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { useState } from 'react';

const Register = () => {
  const [err,setErr]= useState(false);
  const handleSubmit =async(e)=>{
    e.preventDefault();
    // console.log(e.target[0].value)
    const displayName =e.target[0].value;
    const email =e.target[1].value;
    const password=e.target[2].value;
    const file =e.target[3].files[0];

try {
  
  const res = await createUserWithEmailAndPassword(auth, email, password)
} catch (error) {
  setErr(true)
}
      

  }
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className="logo">My Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name' />
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style={{display:"none"}} type="file" id='file' />
            <label htmlFor="file">
                <img src={img} alt="" />
                <span>Add an avatar</span>
                
            </label>

            <button>Sign Up</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account?  login</p>
        </div>
      
    </div>
  )
}

export default Register
