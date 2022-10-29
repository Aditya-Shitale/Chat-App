import React from 'react';
import Add from '../image/add.png'
import Video from '../image/video.png'
import More from '../image/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
        <div>Aditya</div>
        <div className="chatIcons">
          <img src={Add} alt="" />
          <img src={Video} alt="" />
          <img src={More} alt="" />
        </div>
        </div>
     <Messages/>
     <Input/>
      
    </div>
  )
}

export default Chat
