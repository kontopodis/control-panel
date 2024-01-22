import { useState } from "react"

export default function Login () {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(username,password)

        // login logic goes here
        setPassword("")
        setUsername("")
        
    }
    return (
        <>


    <form onSubmit={handleSubmit}>    
        <label for="username">Username</label>
        <input value={username} type="text" placeholder="Email or Phone" id="username" onChange={(event)=>{setUsername(event.target.value)}}/>
        <label for="password">Password</label>
        <input value={password} type="password" placeholder="Password" id="password" onChange={(event)=>{setPassword(event.target.value)}} />
        <button type="submit">Log In</button>
    </form >

        </>
    )
} 