import React from 'react'
import log from "../image/log.jpg"


const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src={log} alt="" />
        <div className="userChatInfo">
          <span>Omkar</span>
        </div>
      </div>

    </div>
  )
}

export default Search
