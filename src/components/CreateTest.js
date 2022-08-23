import React, { useState,useHistory } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import userServices from '../services/userServices';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import authHeader from "../services/auth-header";
import { properties } from '../properties';



//const USER_RESTAPI_POST_URL_WITH_TOKEN = 'http://localhost:8080/insertUserWithToken'
const USER_RESTAPI_POST_URL_WITH_TOKEN = properties.insertUserData


 function CreateTest() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [imagefile, setImageFile] = useState('');

    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    
     const postData = (e) => {
    

   // onFileChangeHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName',firstName );
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('imagefile', imagefile);
        //Append the rest data then send
        axios({
           method: 'post',
           url: USER_RESTAPI_POST_URL_WITH_TOKEN,
           data: formData,
           headers: {'Content-Type': 'multipart/form-data', Authorization: 'Bearer '+JSON.stringify(user)  }
        })
        .then(function (response) {
           //handle success
           console.log(response);
           alert("SUCCESFULLY REGISTERED");
        }, 
        function(error) { 
           // handle error 
        });


 //  }
        
     }

    const backPage = () =>{
        navigate('/read');
   }

   
   const backhome = () =>{
     navigate('/');
   }



    return (
        <div>

    <Form encType="multipart/form-data">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='lastName' onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Email Id</label>
            <input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
        <label>Photos: </label>
          <input type="file" name="imagefile" className='form-control'  onChange={(e) => setImageFile(e.target.files[0])} />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
        <Button  onClick={() => backPage()} >SEE ALL USERS</Button>
        <Button  onClick={() => backhome()} >Home</Button>
    </Form></div>
//)
    )}
export default CreateTest;