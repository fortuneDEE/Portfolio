
import Landing from './components/Landing'
import Services from './components/Services'
import Skills from './components/Skills'
import Works from './components/Works'
import Resume from './components/Resume'
import './index.css'
import Footer from './layout/Footer'
// import Header from './layout/Header'
// import Clients from './components/Clients'
import Contact from './components/Contact'
import NavLayout from './layout/NavLayout'

function App() {

  return (
    <>
    {/* <Header/> */}
    <NavLayout/>
    <Landing/>
    <Services/>
    <Works/>
    <Resume/>
    <Skills/>
    {/* <Clients/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
