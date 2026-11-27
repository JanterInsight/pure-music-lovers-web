import { useRef } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Events from './components/Events/Events'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const mainRef = useRef<HTMLElement>(null)

  return (
    <div className="app">
      <Navbar mainRef={mainRef} />
      <main ref={mainRef}>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
