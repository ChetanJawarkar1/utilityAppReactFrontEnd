import React,{useRef, useState, useEffect, form} from 'react';
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { render } from '@testing-library/react';
import authService from '../services/auth.service';
 
function Login (){


   
    const navigate = useNavigate();
  const[username, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[token, setToken] = useState("");
 // const { setAuth } = useAuth();

  

  
  //const[allentry, setAllEntry] = useState([]);
 // const LOGIN_URL = "http://localhost:8080/authenticate"
 // const LOGIN = "http://localhost:8080/hello"


const readPage = () =>{
    navigate('/read');
}

let navigate1 = useNavigate();
    const createUser = () =>{
         navigate('/create');
    }
    

 	  const handleSubmit = async (e) => {
    // alert("Call from Login"+username);
    // e.preventDefault();
     try {
       await authService.login(username, password).then(
         () => {
           navigate("/read");
           window.location.reload();
         },
         (error) => {
           console.log(error);
        }
       );
     } catch (err) {
       console.log(err);
     }
   };

   



  

return(
    <section>
   
<>
 <form>
   <div>
      <label htmlFor='email'>Email</label>
      <input type='text' name="email" id = "email"
      value = {username}
      onChange = {(e) => setEmail(e.target.value)}
      />
   </div>

   <div>
      <label htmlFor='password'>Password</label>
      <input type='password' name="password" id = "password"
      value = {password}
      onChange = {(e) => setPassword(e.target.value)}
      />
   </div>

<button type='submit' onClick={() => handleSubmit()}>Login</button>
</form>
  
</>
</section>
  );

}



 

export default Login;