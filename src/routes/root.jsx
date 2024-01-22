import Login from "./login";
import { Link,Outlet } from "react-router-dom";
export default function Root() {
  let token = true
    if(token){
      return(
        <>
        <nav>
        <div id="menu">
          <div id="menu-item">
            <Link to={`/users`}>Users</Link>
          </div>
          <div id="menu-item">
            <Link to={`/articles`}>Articles</Link>
          </div>
          </div>
          </nav>
          <Outlet/>
          </>
  )
    }else{ 
      return(<Login/>)
     }
}
