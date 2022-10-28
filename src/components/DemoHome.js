import React, { useState,useHistory } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import userServices from '../services/userServices';
import { useNavigate } from 'react-router-dom';




// coomend added
//const sinin = () =>{
 // sininnavigate('/read');
//}





function DemoHome () {


  let navigate = useNavigate();
  const sinin = () =>{
    navigate('/login1');
  }
 
  const sinup = () =>{
    navigate('/createtest');
  }

  const utility = () =>{
    navigate('/utilityServices');
  }

  const downloadUtil = () =>{
    navigate('/downloadUtil');
  }

  return (
  <div>
    <h2>Home</h2>
    This is Chetan My Home page!
  <div>If you arleady registered user
    <Button  onClick={() => sinin()} type='submit'>SIN IN</Button>
    </div>
    <div>If You New User Please reister
    <Button  onClick={() => sinup()} type='submit'>SIN UP</Button>
    </div>
    <div>Utility Services
    <Button  onClick={() => utility()} type='submit'>SERVICES</Button>
    </div>
    <br/>
    <div>Download Services
    <Button  onClick={() => downloadUtil()} type='submit'>DOWNLOAD SERVICES</Button>
    </div>
  </div>
  );
};

export default DemoHome;