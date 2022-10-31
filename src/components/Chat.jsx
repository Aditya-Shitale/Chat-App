import React, { useContext } from 'react';
import Add from '../image/add.png'
import Video from '../image/video.png'
import More from '../image/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  
  const {data} =useContext(ChatContext);
  return (
    <div className='chat'>
        <div className="chatInfo">
        <div>{data.user?.displayName}</div>
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
