export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
  //alert("token lel le"+JSON.stringify(user));
    if (user) {
            
        return { Authorization: 'Bearer '+JSON.stringify(user) };
      //return { "bearer": user.accessToken };
      //return { "x-auth-token": user.accessToken };
    } else {
      return {};
    }
  }
  