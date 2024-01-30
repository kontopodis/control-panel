import { useState, Link } from "react";
import { apiLogin } from "../lib/api";
import { contextService } from "../lib/context";
export default function Login() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(contextService);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    apiLogin(email, password)
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });

    setPassword("");
    setUsername("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
          value={email}
          type="text"
          placeholder="Email"
          id="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          value={password}
          type="password"
          placeholder="Password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
