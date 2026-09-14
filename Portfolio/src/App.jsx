import { useState } from 'react'
import {LoadingScreen} from './components/LoadingScreen';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoadingScreen/>
     
    </>
  )
}

export default App;
