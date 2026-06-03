import React from 'react'
import { useState ,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username,setUsername]=UseState('');
    const [password,setPassword]=UseState('');
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>
    {
        e.prevemtDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'/>
        {"  "}
        <input type='text'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
        <buttom onClick={handleSubmit}>Submit</buttom>
    </div>
  )
}

export default Login