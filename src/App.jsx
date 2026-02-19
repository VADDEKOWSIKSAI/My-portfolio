import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function App() {
  return (
    <div className="bg-midnight text-text-primary min-h-screen font-sans selection:bg-accent-primary selection:text-midnight relative">
      {/* Background Stars - Persistent across scrolling */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Sections Placeholder */}
        <main>
          <Hero />

          <About />

          <Skills />

          <Projects />

          <Timeline />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
