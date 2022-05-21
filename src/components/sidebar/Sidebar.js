import React from 'react';
import "./sidebar.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton, Avatar } from '@mui/material';

export default function Sidebar() {
  return (
   <div className='sidebar'>
       <div className='sidebar-header'>
          < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />

          <div className='sidebar-header-right'>
            <IconButton>
              < DonutLargeIcon />
            </IconButton>

            <IconButton>
              < ChatIcon />
            </IconButton>

            <IconButton>
              < MoreVertIcon />
            </IconButton>
          </div>
       </div>

       <div className='sidebar-search'>

       </div>

       <div className='sidebar-chats'>

       </div>
   </div>
  );
}
