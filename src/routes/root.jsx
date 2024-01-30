import Login from "./login";
import { Link, Outlet } from "react-router-dom";
import { contextService } from "../lib/context";
import { useState } from "react";
export default function Root() {
  const [token, setToken] = useState(contextService);
  if (token) {
    return (
      <>
        <nav>
          <div className="menu">
            <div className="menu-item">
              <Link to={`/users`}>Users</Link>
            </div>
            <div className="menu-item">
              <Link to={`/articles`}>Articles</Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  } else {
    return <Login />;
  }
}
