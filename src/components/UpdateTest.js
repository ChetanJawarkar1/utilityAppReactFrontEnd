import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form,Link,Table } from 'semantic-ui-react'
import userServices from '../services/userServices';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const USER_UPDATE_URL = 'http://localhost:8080/updateUser'



export default function UpdateTest() {
    //const [uid, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [imagefile, setImageFile] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate();


    const updateAPIData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id',id );
    formData.append('firstName',firstName );
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('imagefile', imagefile);
    //Append the rest data then send
    axios({
       method: 'put',
       url: USER_UPDATE_URL,
       data: formData,
       headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
       //handle success
       console.log(response);
       alert("Successfully Updated");
       navigate('/read');
    }, 
    function(error) { 
       // handle error 
    });

    }



    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setImageFile(localStorage.getItem('Image File'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);


    return (
        <div>
            <Form className="create-form">
            <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Photos: </label>
                    <input type="file" name="imagefile" className='form-control'  onChange={(e) => setImageFile(e.target.files[0])} />
                 </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
              
            </Form>
        </div>
    )
}