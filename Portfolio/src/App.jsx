import { useState } from 'react'
import {LoadingScreen} from './components/LoadingScreen';
import "./index.css";

import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
     
    </>
  )
}

export default App;
