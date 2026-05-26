import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Explore from './sections/Explore'
import MeetTheMaker from './sections/MeetTheMaker'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <Explore />
      <MeetTheMaker />
      <Contact />
    </div>
  )
}

export default App