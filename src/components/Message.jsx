import React from 'react'
import Log from '../image/log.jpg'

const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
          <img src={Log} alt="" />
          <span>Just Now</span>
        </div>
        <div className="messageContent">
          <p>Hello</p>
          <img src={Log} alt="" />
        </div>
    </div>
  )
}

export default Message
