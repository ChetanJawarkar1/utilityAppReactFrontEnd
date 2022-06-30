import axios from "axios";

const API_URL = "http://localhost:8080";

// const signup = (username, password) => {
//   return axios
//     .post(API_URL + "/authenticate", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };

const login = (username, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      username,
      password,
    })
    .then((response) => {
      if (JSON.stringify(response.data) != null) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  //signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
