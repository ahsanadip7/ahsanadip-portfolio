
import AboutMe from './AboutMe'
import './App.css'
import ContactSection from './ContactSection'
import Footer from './Footer'
import HeroSection from './HeroSection'
import NavBar from './NavBar'
import ProjectSection from './ProjectSection'
import Skills from './Skills'
import SocialLinks from './SocialLinks'

function App() {


  return (
    <>
     
     <NavBar />
    <section id="home">
      <HeroSection />
    </section>
    <section id="social-links">
      <SocialLinks />
    </section>
    <section id="about">
      <AboutMe />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <ProjectSection />
    </section>
    <section id="contact">
      <ContactSection />
    </section>
    <Footer />
      
    </>
  )
}

export default App
