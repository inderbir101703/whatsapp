import React from 'react';
import  { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import Pusher from 'pusher-js';
import axios from 'axios';

function App() {

  const [messages, setMessages]=useState([]);
  useEffect(() => {
axios.get('http://localhost:9000/messages/sync')
.then(response=>{

  setMessages(response.data);
}) } ,[]);    
;



  useEffect(() => {

    const pusher = new Pusher('e4885250b09e35511706', {
      cluster: 'ap2'
    });
    
    const channel = pusher.subscribe('messages');

    console.log(channel);
    channel.bind('inserted', function(newMessage) {
      console.log("was her");

      alert(JSON.stringify(newMessage));
     setMessages([...messages,newMessage])//show new with old one
    });
 
    return ()=>{//evertytime listenr join then toom uch burden
      channel.unbind_all();
      channel.unsubscribe(); 
    }; 
  }, [messages]);

  return ( 
    <div className="App">
<div className="App_container">
<Sidebar/>
<Chat messages={messages}/>
</div>

    </div>
  );
}

export default App;
