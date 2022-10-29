import React from 'react';
import log from "../image/log.jpg"


const Chats = () => {
  return (
    <div className='chats'>
     <div className="userChat">
        <img src={log} alt="" />
        <div className="userChatInfo">
          <span>Omkar</span>
          <p>Hello</p>
        </div>
      </div>
     <div className="userChat">
        <img src={log} alt="" />
        <div className="userChatInfo">
          <span>Omkar</span>
          <p>Hello</p>
        </div>
      </div>
     <div className="userChat">
        <img src={log} alt="" />
        <div className="userChatInfo">
          <span>Omkar</span>
          <p>Hello</p>
        </div>
      </div>
     <div className="userChat">
        <img src={log} alt="" />
        <div className="userChatInfo">
          <span>Omkar</span>
          <p>Hello</p>
        </div>
      </div>

    </div>
  )
}

export default Chats
