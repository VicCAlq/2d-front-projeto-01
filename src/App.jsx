import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const estilo = {
  botao: {
    backgroundColor: "blue",
    color: "white",
  }
}

function App() {
  const [count, setCount] = useState(true)

  return (
    <>
      <button 
        onClick={() => setCount(!count)}
        style={
          {
            ...estilo.botao,
            backgroundColor: count ? "blue" : "green"
          }
        }
      >
        Me clique
      </button>
    </>
  )
}

export default App
