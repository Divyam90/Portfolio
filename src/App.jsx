import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'

function App() {

  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
