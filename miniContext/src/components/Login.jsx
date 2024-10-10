/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Login = () => {

    const [userName , setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(userName)
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        placeholder='username'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        />
        {" "}
        <input type="password"
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button 
        onClick={handleSubmit}
        type='submit'>Submit</button>
    </div>
  )
}

export default Login