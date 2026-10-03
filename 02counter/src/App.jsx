import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter] = useState(15)

const addValue =() => {
  console.log("value added",counter)
  setCounter(counter + 1)
}
   return (
    <>
     
      
   <h1>Chai and React</h1>
   <h2>Counter Value: {counter}</h2>
   <button onClick={addValue}>Add Value</button>
   <br/>
   <button>Remove Value</button>

    </>
  )
}


export default App
