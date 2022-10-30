import React from 'react';
import img from "../image/img.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from '../firebase'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from 'react-router-dom';



const Register = () => {
  const [err,setErr]= useState(false);
 const navigate =useNavigate();


  const handleSubmit =async(e)=>{
    e.preventDefault();
    // console.log(e.target[0].value)
    const displayName =e.target[0].value;
    const email =e.target[1].value;
    const password=e.target[2].value;
    const file =e.target[3].files[0];

try {
  
  const res = await createUserWithEmailAndPassword(auth, email, password);

//Create a unique image name
const date = new Date().getTime();
const storageRef = ref(storage,`${displayName+date}`);

const uploadTask = uploadBytesResumable(storageRef, file);

await uploadBytesResumable(storageRef,file).then(()=>{
  getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    try {
      //update profile
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      });
      //create user on firestore
      await setDoc(doc(db,"users",res.user.uid),{  
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      });
   //create empty user chats on firebase
      await setDoc(doc(db,"userChats",res.user.uid),{});
     navigate("/");
    } catch (error) {
      setErr(true);
    }  
});
});

 
} catch (err) {
  setErr(true);
}
      

  };
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
        <p>You do have an account? <Link to="/login">login</Link> </p>
        </div>
      
    </div>
  )
}

export default Register
