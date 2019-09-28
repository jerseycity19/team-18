import React from 'react'
import Iframe from 'react-iframe'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './GetHelp.css';



const Home = () => (



  
  <div>
    
    <div id="header">
    <h1>Help is close by!</h1>
    </div>

    <div id="sideContent">
    
    <p>Shatterproof’s Substance Use Disorder Treatment Task Force has worked hard to create a universal standard of care for addiction and found locations that meets these requirements.</p>

    

    <Iframe 
    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.130728637721!2d-74.05051713150046!3d40.73380495773597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25754031f991f%3A0xecdb9dbbff731347!2sJP%20Morgan!5e0!3m2!1sen!2sus!4v1569634178474!5m2!1sen!2sus" 
    width="100%" 
    height="450px" 
    frameborder="0" 
    style="border:0;" 
    allowfullscreen="1">
    </Iframe>
    </div>

  

    <div id = "mainContent">
    <p>Here are the characteristics we prioritized:</p>
    <p>#1: Routine screenings in every medical setting.</p>
    <p>#2: A personal plan for every patient.</p>
    <p>#3: Fast access to treatment.</p>
    <p>#4: Long-term disease management.</p>
    <p>#5: Coordinated care for every illness.</p>
    <p>#6: Behavioral health care from legitimate providers.</p>
    <p>#7: Medications for addiction treatment.</p>
    <p>#8: Support for recovery outside the doctor’s office.</p>
    </div>



  </div>
)

export default Home
