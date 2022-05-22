import React from 'react';
import "./chat.css"
import SeearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Avatar, Icon } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFileTwoTone';

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

      <div className='chat-body'>
        <p className='chat-message'>
          <span className='chat-name'> Chimuanya </span>

          This is the message

          <span id='chat-timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className=' chat-message chat-reciever'>
          <span className='chat-name'> Chimuanya </span>

          This is the message

          <span id='chat-timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        
      </div>

      <div className='chat-footer'>
        <IconButton>
          < MoodIcon />
        </IconButton>

        <IconButton>
          < AttachFileIcon className='attach-file-icon' />
        </IconButton>

        <form>
          <input placeholder='Type a message' type="text"/>
          <button type='button'> Send Message</button>
        </form>

        <IconButton>
          < MicIcon />
        </IconButton>
      </div>


    </div>
  );
}
