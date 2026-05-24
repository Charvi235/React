import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App()
{
  let [counter,setCounter]=useState(15)
 // let counter=15
  const removeValue = () =>
  {
    if(counter <0) 
      setCounter(0)
    else
    {
      setCounter(counter-1)
    }
  }
  const addValue = () =>
  {
    setCounter(prevCounter=>
    prevCounter+1)
    if(counter >20) setCounter(20)
    else setCounter(counter+1);
  }
  return (
    <>
     <h1>Charvi aur React</h1>

     <h2>counter value: {counter} </h2>

     <button onClick={addValue}>Add value {counter} 
     </button>
     <br/>
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p> footer : {counter}</p>
    </>
  )
}
export default App
