import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const masClick = () =>{
    // incrementa el valor de count
    setCount(count + 1)
  }

  const menosClick = () =>{
    // disminuir el valor de count
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={masClick}>
          count + {count}
        </button>
        <button onClick={menosClick}>
          count - {count}
        </button>
        <button></button>
      </div>

    </>
  )
}

export default App
