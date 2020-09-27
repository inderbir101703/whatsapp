import React from 'react'
import { Button ,Avatar} from '@material-ui/core';
import './contact.css';
function contact({data}) {
    const url="http://localhost:9000/"+data.avatar;
    return (
        <div className="slidebar_contacts_contact">
  <div className="slidebar_contacts_contact_avatar">
   
  <Avatar src={url}/>
  </div>
  <div className="slidebar_contacts_contact_box">
      <h2>{data.name}</h2> 
    <p>{data.email}</p>     
       </div>
        </div>
    )
}

export default contact
