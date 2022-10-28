import axios from "axios";
import { Header } from "semantic-ui-react";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
import { properties } from '../properties';




//const USER_RESTAPI_URL = 'http://localhost:8080/users'
//const USER_RESTAPI_POST_URL = 'http://localhost:8080/postusers'
//const USER_RESTAPI_POST_URL_TEST = 'http://localhost:8080/test'
//const USER_RESTAPI_URL_DELETEUSER = 'http://localhost:8080/DeleteUser/'
const USER_API_BASE_URL = 'http://localhost:8080/getUserById/'
//const USER_UPDATE_URL = 'http://localhost:8080/updateUser'
const USER_LOGIN = 'http://localhost:8080/login/'
//const GET_TOKEN = 'http://localhost:8080/authenticate'
const user = JSON.parse(localStorage.getItem("user"));


class UserService{

   
// downloadZipFile1(filename){

//     fetch("url",
//     { 
//         method: "GET",
//         headers: { "Content-Type": "application/json",'Authorization': 'Bearer ' + window.localStorage["Access_Token"]},
//         body:data
//     }).then(response => response.blob()).then(response => ...*your code for download*... )


// }

    downloadZipFile(filename) {
        console.log("REQUEST URL FOR DOWNLOAD FILE"+properties.DOWNLOAD_FILE_API + filename);
        let response;
        try{
      //  response = axios.get(properties.DOWNLOAD_FILE_API + filename);

        response = axios.get(properties.DOWNLOAD_FILE_API + filename, { responseType: 'blob',timeout: 30000,});

        }catch(e){
            console.log("=============EXCEPTION IN DOWNLOAD API==============")
            throw("Exceprion",e);
        }
        return response;
    }


    downloadZipFileThirdParty(filename) {
        console.log("REQUEST URL FOR DOWNLOAD FILE"+properties.DOWNLOAD_FILE_THIRDPARTY_API + filename);
        let response;
        try{
      //  response = axios.get(properties.DOWNLOAD_FILE_API + filename);

        response = axios.get(properties.DOWNLOAD_FILE_THIRDPARTY_API + filename, { responseType: 'blob',timeout: 30000,});

        }catch(e){
            console.log("=============EXCEPTION IN DOWNLOAD API==============")
            throw("Exceprion",e);
        }
        return response;
    }

    getDropDownData(){
        return axios.get("http://localhost:8080/fetchDataList");
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + userId);
    }

    deleteUser(id){
        console.log("REQEST COMES INSIDE DELETE USER");
        return axios.delete(properties.USER_RESTAPI_URL_DELETEUSER+id, { headers: authHeader() });
    }

    updateUser(){
        return axios.put(properties.USER_UPDATE_URL);
    }

    getUsers(){
        return axios.get(properties.USER_RESTAPI_URL);
    }

     getUsers1(){
        //alert("userService ke andae se"+JSON.stringify(authHeader()));
        console.log(JSON.stringify(authHeader()));
         return axios.get(properties.USER_RESTAPI_URL, { headers: authHeader() });
     }

    // getCall(){
    //     axios.interceptors.request.use(req => {
    //         // `req` is the Axios request config, so you can modify
    //         // the `headers`.
    //         req.headers.authorization = 'Bearer '+JSON.parse(user);
    //         return req;
    //       });
    // }
   

    
    postUsers_old(req){
        console.log("req",req)
        axios.post(properties.USER_RESTAPI_POST_URL,req, { headers: authHeader() }).then(response=>{
            return response.data
        })
    }

    postUsers(req){
        console.log("req",req)
        axios.post(properties.USER_RESTAPI_POST_URL_TEST,req, { headers: authHeader() }).then(response=>{
            return response.data
        })
    }


}

export default new UserService();