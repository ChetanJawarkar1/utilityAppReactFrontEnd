import React,{useRef, useState, useEffect, form} from 'react';
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { render } from '@testing-library/react';
 
function LoginPage (){


   
    const navigate = useNavigate();
  const[username, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[token, setToken] = useState("");
 // const { setAuth } = useAuth();

  

  
  //const[allentry, setAllEntry] = useState([]);
  const LOGIN_URL = "http://localhost:8080/authenticate"
 // const LOGIN = "http://localhost:8080/hello"


     
    //  useEffect(() => {
    //      setErrMsg('');
    //  }, [username, password])
 



  
  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/read";

  //const userRef = useRef();
  //const errRef = useRef();
 // const [errMsg, setErrMsg] = useState('');



// const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const response = await axios.post(LOGIN_URL,
//             JSON.stringify({ username, password }),
//             {
//                 headers: { 'Content-Type': 'application/json' },
//                 //withCredentials: true
//             }
//         );
//         console.log(JSON.stringify(response?.data));
//         //console.log(JSON.stringify(response));
//         const accessToken = response?.data?.accessToken;
//         const roles = response?.data?.roles;
//         setAuth({ username, password, roles, accessToken });
//         setEmail('');
//         setPassword('');
//         navigate(from, { replace: true });
//     } catch (err) {
//         if (!err?.response) {
//             setErrMsg('No Server Response');
//         } else if (err.response?.status === 400) {
//             setErrMsg('Missing Username or Password');
//         } else if (err.response?.status === 401) {
//             setErrMsg('Unauthorized');
//         } else {
//             setErrMsg('Login Failed');
//         }
        
//     }
// }

const readPage = () =>{
    navigate('/read');
}

let navigate1 = useNavigate();
    const createUser = () =>{
         navigate('/create');
    }
    

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

            // if(JSON.stringify(op)!= ""){

                //navigate(from, { replace: true });
                readPage();
            
          //  }

                 
} catch (err) {
      
   // } catch (err) {
    //     if (!err?.response) {
    //         setErrMsg('No Server Response');
    //     } else if (err.response?.status === 400) {
    //         setErrMsg('Missing Username or Password');
    //     } else if (err.response?.status === 401) {
    //         setErrMsg('Unauthorized');
    //     } else {
    //         setErrMsg('Login Failed');
    //     }
    //     errRef.current.focus();
     }

   
}


  

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


 

export default LoginPage;