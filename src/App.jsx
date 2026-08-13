import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Methodology from './components/Methodology'
import Differentials from './components/Differentials'
import Experience from './components/Experience'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Methodology />
        <Differentials />
        <Experience />
        <PreFooter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
