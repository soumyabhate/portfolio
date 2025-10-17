import './styles/theme.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectsGrid from './components/ProjectsGrid'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsCloud from './components/SkillsCloud'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <>
      <Navbar/>
      <Hero/>
      <Section id="projects" title="Projects" subtitle="A few things I’ve built and shipped">
        <ProjectsGrid/>
      </Section>
      <Section id="experience" title="Experience" subtitle="Selected roles & outcomes">
        <ExperienceTimeline/>
      </Section>
      <Section id="skills" title="Skills" subtitle="Core, supporting, and what I’m learning">
        <SkillsCloud/>
      </Section>
      <Section id="contact" title="Contact">
        <Contact/>
      </Section>
      <Footer/>
    </>
  )
}
