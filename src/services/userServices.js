import axios from "axios";

const USER_RESTAPI_URL = 'http://localhost:8080/users'
const USER_RESTAPI_POST_URL = 'http://localhost:8080/postusers'
const USER_RESTAPI_URL_DELETEUSER = 'http://localhost:8080/DeleteUser/'
const USER_API_BASE_URL = 'http://localhost:8080/getUserById/'
const USER_UPDATE_URL = 'http://localhost:8080/updateUser'
const USER_LOGIN = 'http://localhost:8080/login/'
//const GET_TOKEN = 'http://localhost:8080/authenticate'


class UserService{


    login(email,password){
        return axios.get(USER_LOGIN+email+password);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + userId);
    }

    deleteUser(id){
        console.log("REQEST COMES INSIDE DELETE USER");
        return axios.delete(USER_RESTAPI_URL_DELETEUSER+id);
    }

    updateUser(){
        return axios.put(USER_UPDATE_URL);
    }

    getUsers(){
        return axios.get(USER_RESTAPI_URL);
    }
    postUsers(req){
        console.log("req",req)
        axios.post(USER_RESTAPI_POST_URL,req).then(response=>{
            return response.data
        })
    }
}

export default new UserService();