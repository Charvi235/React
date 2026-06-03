import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <UserContextProvider>
      <h1> React Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
