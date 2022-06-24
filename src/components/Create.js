import React, { useState,useHistory } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import userServices from '../services/userServices';
import { useNavigate } from 'react-router-dom';



 function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate();
    
    const postData = () => {
        
     //   console.log(firstName);
      //  console.log(lastName);
       // console.log(email);
        //console.log(checkbox);
        if(!email.includes('@')){
            alert("Please add @ symbole");
        }else if(!email.includes('.com')){
            alert(".com is missing please enter it");
        }
        else{
        userServices.postUsers({firstName,lastName,email})
        navigate('/read');
        alert("sucess");
    }
        
    }

    const backPage = () =>{
        navigate('/read');
   }

   
   const backhome = () =>{
     navigate('/');
   }



    return (
        <div>

    <Form>
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
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
        <Button  onClick={() => backPage()} >SEE ALL USERS</Button>
        <Button  onClick={() => backhome()} >Home</Button>
    </Form></div>
//)
    )}
export default Create;