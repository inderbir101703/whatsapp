import React from 'react';
import Contact from './contact';
import { Button ,Avatar} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import './Sidebar.css';
 
function Sidebar({users ,data}) {
    const url="http://localhost:9000/"+data;
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <div className="sidebar_Avatar">
      
                    
                    <Avatar src={url}/> 
               
               </div>
                    <div className="header_options">
                        <IconButton>
         <DonutLargeIcon />
         </IconButton>
         <IconButton>   
         <MessageIcon/>
         </IconButton>

         <IconButton>
                      <MoreVertIcon/>
                      </IconButton>
         </div>
            </div>



            <div className="sidebar_input">
                <div className="slidebar_iconSearch">
                <IconButton >
            <SearchIcon />
            </IconButton>
          </div>
                <input placeholder="Type something"/>
             
            </div>
            <div className="sidebar_contacts">
            <h2> All The Users</h2>

{   users.map((User)=>(




   
<Contact  className="contactList" data={User}/>






))}

</div>






         
          
        </div>
    )
}

export default Sidebar
