import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mode , setmode] = useState(true)
  const toogleMode = ()=>{
    setmode(!mode);
    document.body.style.background = mode ? "black" : "white"
  };

  return (
    <>
     <button style={{backgroundColor : mode ? "white": "Black" , 
    color : mode ? "black" : "white"}}onClick={toogleMode}>{mode ? "Dark mode": "Light mode"}</button>
      
    </>
  )
}

export default App
