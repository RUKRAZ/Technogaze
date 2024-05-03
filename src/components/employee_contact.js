import './Contact.css';
import img1 from './about-us.jpg';
import {Button} from "@mui/material";
import React from "react";
import { SideNavDark } from "./sideNavDark";

export const EmployeeContact = (props) =>  {
  return (
  
    <div className='min-h-screen flex items-center justify-left' 
        style={{ 
           backgroundImage: `url(${img1})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
         }}>
      <div className="sideNavBar" style={{paddingRight: '200px'}}>
        <SideNavDark />
      </div>
      <div class='textOnImageContact'>
      <u>Contact Us</u>
        <p id="descriptionContact">
            <form action="https://formsubmit.co/baydevelops@gmail.com" method="Post"> 
                <label for="name">Enter Name </label>
                <br></br>
                <input class="fullName" type="text" name="name" size="60" required></input>
                <br></br>
                <label for="email">Enter Email </label>
                <br></br>
                <input class="email" type="email" name="email" size="60" required></input>
                <br></br>
                <fieldset>
                    <legend class="messageHeader">Message</legend>
                    <textarea class="message" rows="4" cols="62" name="message" required></textarea>
                </fieldset>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="http://localhost:3000/employee_contact"></input>
            <Button
              className="self-stretch"
              id="sendContact"
              color="error"
              size="large"
              type="submit"
              variant="contained">
              Send
            </Button>
            </form>
        </p>
      </div>
    </div>

  );
}

export default EmployeeContact;