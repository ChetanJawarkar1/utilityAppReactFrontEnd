import React,{useRef, useState, useEffect, form} from 'react';
import userServices from '../services/userServices';
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
 
const LoginPage = () =>{

  const[username, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[token, setToken] = useState("");


  const[allentry, setAllEntry] = useState([]);
  const LOGIN_URL = "http://localhost:8080/authenticate"
  const LOGIN = "http://localhost:8080/hello"






  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "http://localhost:8080/authenticate";

  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState('');


  //function loginPass(email,password){
  //  const [allentry, setAllEntry] = useState([]);
   //  useEffect(() => {userServices.login(email,password).then((response) =>{
   //    alert(response.data);
   /////  }
    // )
   // },

  //[])
 // }

  const handleSubmit = async (e) => {
   // e.preventDefault();
   var response ="";
    try {
        
        const res = await fetch(LOGIN_URL, {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({
             // your expected POST request payload goes here
                    username,password
                    })
                 });
             const  op = await res.json();
              // enter you logic when the fetch is successful
                 console.log(JSON.stringify(op));
                 alert("hi upar"+JSON.stringify(op));
                window.localStorage.setItem('tokn', JSON.stringify(op));

             if(JSON.stringify(op)!= ""){

                navigate.push('/read');
            
            }

                 
} catch (err) {
      
   // } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }

   
}









  

return(
    <section>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
<>
 <form  onSubmit={handleSubmit}>
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

<button type='submit'>Login</button>
</form>
  
</>
</section>
  );


}

 

export default LoginPage;