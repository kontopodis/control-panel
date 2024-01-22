import axios from "axios"
import strings from "./strings"
const apiLogin = async  (email,password)=>{

   return  await axios.post(strings.url + "/admin/login",{
    email:email,
    password:password
   },{
    headers:{
        "Access-Control-Allow-Origin": "http://localhost:5173"
    }
   })

}

export {apiLogin}