import './App.scss'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
    return (
      <>
        <Nav />
        <Banner />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </>
    )
}

export default App
