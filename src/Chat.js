import React from 'react'
import { Button ,Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css'
function Chat() {
    return (
        <div className="chat_container">
           <div className="chat_container_header">
                     <div className="chat_container_header_avatar">
                     <Avatar src="http://theworldclass.club/resume/image/my_image.jpg"/>
                     </div>

                     <div className="chat_container_header_details">
                         <h3>DAnce room</h3>
                         <p>last seen:12.56.8</p>
                         </div>

                     <div className="chat_container_header_options">
                                    <IconButton>
                     <SearchIcon />
                     </IconButton>
                     <IconButton>
                     <MoreVertIcon />
                     </IconButton>
                     <IconButton>
                     <AttachFileIcon/>
                    </IconButton>
                     </div>
           </div>

     
           <div className="chat_container_chatBox">



                   <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>

            
           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>


           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>


           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>

           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>

           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>



           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>

           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>heysadsadasdsadsadasdde</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>

           
           <div className="chat_container_chatBox_outermessage chat_reciever">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message ">
                <p>hey ther d f  is d d d e willbeadissater</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>




           <div className="chat_container_chatBox_outermessage">
           <h6>NAme</h6>
                 
               <div className="chat_container_chatBox_message">
                <p>ok</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>


           <div className="chat_container_chatBox_outermessage chat_reciever">
           <h6>NAme</h6>   
                    
               <div className="chat_container_chatBox_message ">
                <p>whta the fuck</p>
                <span>{new Date().toLocaleTimeString()}</span>
                  
           </div>
           </div>
</div>
           <div className="chat_container_input">

<IconButton>
< MicIcon />
</IconButton>
<form>
<input placeholder="Type something..."/>
<Button type="submit">Send</Button>
</form>

<IconButton><InsertEmoticonIcon/>
</IconButton>

           </div>
        </div>
    )
}

export default Chat
