
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
    <div className='bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]'>
     
    <section id="about">
      <AboutMe />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <ProjectSection></ProjectSection>
    </section>
    <section id="contact">
      <SocialLinks></SocialLinks>
    </section>
    

    </div>
    <Footer />
  </>
  )
}

export default App
