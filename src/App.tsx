
import Landing from './components/Landing'
import Services from './components/Services'
import Skills from './components/Skills'
import Works from './components/Works'
import Resume from './components/Resume'
import './index.css'
import Footer from './layout/Footer'
import Contact from './components/Contact'
import NavLayout from './layout/NavLayout'

function App() {

  return (
    <>
    <NavLayout/>
    <Landing/>
    <Services/>
    <Works/>
    <Resume/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
