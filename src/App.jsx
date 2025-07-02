import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Component/Navber'
import SubNav from './Component/SubNav'
import HeroSection from './Component/HeroSection'
import TestimonialsSection from './Component/TestimonialsSection'
import UserGuidlineSection from './Component/UserGuidlineSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navber />
       <SubNav />
       <HeroSection />
       <TestimonialsSection />
       <UserGuidlineSection />
    </>
  )
}

export default App
