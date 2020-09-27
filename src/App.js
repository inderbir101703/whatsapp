import React from 'react';
import  { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import Pusher from 'pusher-js';
import axios from 'axios';
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
axios.defaults.headers.post['Access-Control-Allow-Orgin']="http://localhost:9000";
function App() {









  

  
  
  







 const[name,setName]=useState([]);

 const [password,setPassword]=useState([]);
 const [data,setData]=useState([]);
const [res,setres]=useState([]);
const[test,settest]=useState({});

const[he,sethe]=useState([]);

const [loginUsername, setLoginUsername] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [signingup, setsigningup] = useState("");
const [signingin, setsigningin] = useState("");
const [Users, setUsers] = useState([]);










  const submitKaro= async function(event){
    console.log("hoho");
    event.preventDefault();
console.log(name);

await axios.post('http://localhost:9000/signin',{
  email:name,
  password:password
}).then((res) => console.log(res));


  }
  
   
  
  








  const [messages, setMessages]=useState([]);
  axios.defaults.headers.post['Access-Control-Allow-Orgin']="http://localhost:9000";
  useEffect(() => {
axios.get('http://localhost:9000/messages/sync')
.then(response=>{

  setMessages(response.data);
}) } ,[]);    

useEffect(() => {
  axios.get('http://localhost:9000/getallusers')
  .then(response=>{
  
    setUsers(response.data);
  }) } ,[]);    
  



useEffect(() => {
var OPTIONS = {
  url: "http://localhost:9000/getuser",
  method: "GET",
  withCredentials: true,

}
 axios(OPTIONS).then((res)=>{ 
  setData(res.data)});
console.log(data);
 },[]);


const fill = () =>  { 
  var OPTIONS = {
    url: "http://localhost:9000/getuser",
    method: "GET",
    withCredentials: true,

  }
   axios(OPTIONS).then((res)=>{ 
    console.log(res.data)});
}
const createsigningin=function(){
  setsigningin("1");
  setsigningup("0");
  }
  const createsigningup=function(){
    setsigningup("1");
    setsigningin("0");
    }
  useEffect(() => {
    const pusher = new Pusher('e4885250b09e35511706', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
     setMessages([...messages,newMessage])//show new with old one
    });
 



    return ()=>{//evertytime listenr join then toom uch burden
      channel.unbind_all();
      channel.unsubscribe(); 
    }; 
  }, [messages]);





  






if(data.email){
  return ( 
    <div className="App">
<div className="App_container">

<Sidebar users={Users} data={data.avatar}/>
<Chat messages={messages} data={data}/>
</div>

    </div>
  );
}




else{

if(signingup=="1"){ 
  return (

    <div className="App">
<div className="App_container">
  <div className="App_container_sign">
<form action="http://localhost:9000/signup" enctype="multipart/form-data"  method="post">
  <h3>Email</h3>
<input  name="email"  type="email" placeholder="Please Enter your Mail "/>
<h3>Name</h3>
<input name="name" type="text" placeholder="Enter Your Name"/>

   <h3>Password</h3>
<input name="password" type="password" placeholder="Enter password"/>
<h3>Confirm password</h3>
<input name="confirm_password" type="password" placeholder="Enter password again"/>
<h3>Profile Picture</h3>
<input type="file" name="avatar" placeholder="profile picture"/>
<button type="submit">SignUp</button>
</form>
<h6>OR</h6>
<button className="signButton" onClick={createsigningin}>SignIn</button>
</div>
</div>
</div>
  );
}
else{
  return (

    <div className="App">
<div className="App_container">
<div className="App_container_sign">
<form action="http://localhost:9000/signin" method="post">
<h3>Email</h3>
<input value={name} name="email" onChange={e=>setName(e.target.value)} type="email" placeholder="Enter mail"/>
<h3>Password</h3>
<input value={password} name="password" onChange={e=>setPassword(e.target.value)} placeholder="Enter your password"/>

<button type="submit">signin</button>
</form>
<h6>OR</h6>
  <button className="signupButton" onClick={createsigningup}> SignUp</button>
  </div>

</div>
</div>
  );

  
}



}



   
}
export default App;
//