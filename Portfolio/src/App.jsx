import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from "./components/Navbar"
import { MobileMenu } from './components/MobileMoney';

import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}

      <div className={`min-h-screen transition-opacity duration-700
       ${isLoaded
          ? "opacity-100"
          : "opacity-0"}bg-black text-gray-100`} >

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      </div >

    </>
  )
}

export default App;
