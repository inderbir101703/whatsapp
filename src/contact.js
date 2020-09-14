import React from 'react'
import { Button ,Avatar} from '@material-ui/core';
import './contact.css';
function contact() {
    return (
        <div className="slidebar_contacts_contact">
  <div className="slidebar_contacts_contact_avatar">
  <Avatar src="http://theworldclass.club/resume/image/my_image.jpg"/>
  </div>
  <div className="slidebar_contacts_contact_box">
      <h2>Contact</h2> 
      <p>message</p>     
       </div>
        </div>
    )
}

export default contact
