// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './assets/component/ButtonComponent'
import ImageComponent from './assets/component/ImageComponent'

function App() {
  // const [count, setCount] = useState(0)

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
      <ButtonComponent text="Cliccami!" />
      <ImageComponent src="https://cdn.pixabay.com/photo/2024/05/26/15/27/kid-8788962_1280.jpg" alt ="Img" style={{ width: '400px' }}/>
    </>
  )
}

export default App
