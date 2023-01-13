import React from 'react'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillHeart,
  AiFillContacts,
} from "react-icons/ai";
import {SiLeetcode} from "react-icons/si"

function Footer() {
  return (
    <>
    <div style={{display:"flex",alignItems: 'center',justifyContent: 'center',bottom:'0'}} >
    <a href="https://portfolio-six-chi-66.vercel.app/" target="_blank" rel="noreferrer"  ><AiFillContacts color='black' size={40} style={{margin:"10px"}}  /></a>
               <a href="https://twitter.com/AdityaShitale" target="_blank" rel="noreferrer"><AiFillTwitterCircle color='black' size={40} style={{margin:"10px"}} /></a>

               <a href="https://www.linkedin.com/in/aditya-shitale-664991214/" target="_blank" rel="noreferrer" ><AiFillLinkedin color='black'  size={40} style={{margin:"10px"}}/></a>

               <a href="https://github.com/Aditya-Shitale" target="_blank" rel="noreferrer"> <AiFillGithub color='black'  size={40} style={{margin:"10px"}} /></a>

               <a href="mailto:adityashitale4@gmail.com" target="_blank" rel="noreferrer"><AiFillMail color='black' size={40} style={{margin:"10px"}} /></a>
               <a href="https://leetcode.com/Adityashitale/" target="_blank" rel="noreferrer"><SiLeetcode color='black'  size={40} style={{margin:"10px"}}/></a>
          </div>
          <div style={{display:"flex",alignItems: 'center',justifyContent: 'center',bottom:'0'}}>
            <AiFillHeart /> Developed By Adi
          </div>
    </>
  )
}

export default Footer
