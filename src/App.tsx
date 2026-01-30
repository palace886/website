import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Gallery from './components/Gallery'
import FloorPlans from './components/FloorPlans'
import Amenities from './components/Amenities'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Gallery />
      <FloorPlans />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
