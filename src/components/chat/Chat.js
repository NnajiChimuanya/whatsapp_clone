import React from 'react';
import "./chat.css"
import SeearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Avatar } from '@mui/material';

export default function Chat() {
  return (
    <div className='chat'>
      <div className='chat-header'>
        < Avatar />

        <div className='chat-header-info'>
          <h3> Room name</h3>
          <p> Last seen 12:34pm</p>
        </div>

        <div className='chat-header-right'>
          < IconButton>
            < SeearchIcon />
          </IconButton>

          <IconButton>
            < MoreVertIcon />
          </IconButton>
          
        </div>
      </div>  
    </div>
  );
}
