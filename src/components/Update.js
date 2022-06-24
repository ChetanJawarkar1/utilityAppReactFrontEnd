import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form,Link,Table } from 'semantic-ui-react'
import userServices from '../services/userServices';
import axios from "axios";
import { useNavigate } from 'react-router-dom';









export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate();

    const updateAPIData = () => {
        axios.put(`http://localhost:8080/updateUser`, {
            id,    
            firstName,
             lastName,
             email
          
        }).then(() => {
            navigate('/read')
        })
        
    }
   
    


    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
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
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
              
            </Form>
        </div>
    )
}