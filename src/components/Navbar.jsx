import React from 'react'
import log from "../image/log.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">My chat</span>
        <div className='user'>
          <img src={log} alt="" />
          <span>
            Aditya
          </span>
          <button>logout</button>
        </div>

      
    </div>
  )
}

export default Navbar
