import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj=
  {
    username:"Charvi",
    age: 21
  }
  let myArr=[1,2,3,4,5,6,7]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
    <Card userName="chaiaurcode" btnText="visit me" />
<Card userName="Charvi"/>

    </>
  )
}

export default App
