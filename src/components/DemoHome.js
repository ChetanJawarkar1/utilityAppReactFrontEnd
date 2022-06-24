import React, { useState,useHistory } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import userServices from '../services/userServices';
import { useNavigate } from 'react-router-dom';





//const sinin = () =>{
 // sininnavigate('/read');
//}





function DemoHome () {


  let navigate = useNavigate();
  const sinin = () =>{
    navigate('/login');
  }
 
  const sinup = () =>{
    navigate('/create');
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
  </div>
  );
};

export default DemoHome;