import React, { StrictMode } from 'react'
import { createRoot } from 'react-d om/client'
import {jsx as _jsx} from 'react'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>
        Custom App !
      </h1>
    </div>
  )
}

// const ReactElement=
// {
//     type:'a',
//    props:{
//     href:'https://google.com',
//     target:'_blanck'
//    },
//    children:'Click me to visit google'
// }
const anotherUser= "anotherUser"
const ReactElement=React.createElement(
  'a',
  {
    href:'https://google.com', target:'_blank'
  } ,'click me to visit google',anotherUser
)
const anotherElement=
(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
createRoot(document.getElementById('root')).render(
//<App/>
  // anotherElement
  ReactElement
)
