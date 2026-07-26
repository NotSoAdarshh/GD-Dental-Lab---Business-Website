import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import OurStory from './components/story'
import OurTeam from './components/team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurStory></OurStory>
      <OurTeam></OurTeam>
    </div>
  )
}

export default App
