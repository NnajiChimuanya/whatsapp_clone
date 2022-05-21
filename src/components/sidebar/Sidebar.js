import React from 'react';
import "./sidebar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton } from '@mui/material';

export default function Sidebar() {
  return (
   <div className='sidebar'>
       <div className='sidebar-header'>
          < AccountCircleIcon />

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
