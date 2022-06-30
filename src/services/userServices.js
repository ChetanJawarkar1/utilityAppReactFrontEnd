import axios from "axios";
import { Header } from "semantic-ui-react";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";



const USER_RESTAPI_URL = 'http://localhost:8080/users'
const USER_RESTAPI_POST_URL = 'http://localhost:8080/postusers'
const USER_RESTAPI_URL_DELETEUSER = 'http://localhost:8080/DeleteUser/'
const USER_API_BASE_URL = 'http://localhost:8080/getUserById/'
const USER_UPDATE_URL = 'http://localhost:8080/updateUser'
const USER_LOGIN = 'http://localhost:8080/login/'
//const GET_TOKEN = 'http://localhost:8080/authenticate'
const user = JSON.parse(localStorage.getItem("user"));


class UserService{

   

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + userId);
    }

    deleteUser(id){
        console.log("REQEST COMES INSIDE DELETE USER");
        return axios.delete(USER_RESTAPI_URL_DELETEUSER+id, { headers: authHeader() });
    }

    updateUser(){
        return axios.put(USER_UPDATE_URL);
    }

    getUsers(){
        return axios.get(USER_RESTAPI_URL);
    }

     getUsers1(){
        //alert("userService ke andae se"+JSON.stringify(authHeader()));
        console.log(JSON.stringify(authHeader()));
         return axios.get(USER_RESTAPI_URL, { headers: authHeader() });
     }

    // getCall(){
    //     axios.interceptors.request.use(req => {
    //         // `req` is the Axios request config, so you can modify
    //         // the `headers`.
    //         req.headers.authorization = 'Bearer '+JSON.parse(user);
    //         return req;
    //       });
    // }
   

    
    postUsers(req){
        console.log("req",req)
        axios.post(USER_RESTAPI_POST_URL,req, { headers: authHeader() }).then(response=>{
            return response.data
        })
    }
}

export default new UserService();