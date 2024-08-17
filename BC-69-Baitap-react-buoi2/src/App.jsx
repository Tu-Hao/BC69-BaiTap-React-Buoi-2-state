import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BTReact } from './BTReact/BTReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BTReact/>
    </>
  )
}

export default App
