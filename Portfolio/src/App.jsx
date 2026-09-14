import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from "./components/Navbar"

import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}

      <div className={`min-h-screen transition-opacity duration-700
       ${isLoaded
          ? "opacity-100"
          : "opacity-0"}bg-black text-gray-100`} >

        <Navbar />

      </div >

    </>
  )
}

export default App;
