import './styles/theme.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectsGrid from './components/ProjectsGrid'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsCloud from './components/SkillsCloud'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkillsMarquee from './components/SkillsMarquee'
import useSectionSpy from './hooks/useSectionSpy'

export default function App(){
  const sectionIds = ['projects','experience','skills','contact']
  const active = useSectionSpy(sectionIds)

  return (
    <>
      <Navbar active={active}/>
      <Hero/>
      <Section id="projects" title="Projects" subtitle="A few things I’ve built and shipped">
        <ProjectsGrid/>
      </Section>
      <Section id="experience" title="Experience" subtitle="Selected roles & outcomes">
        <ExperienceTimeline/>
      </Section>
      <Section id="skills" title="Skills" subtitle="Hover to pause · Smooth scrolling chips">
        <SkillsMarquee/>
        <div style={{height:12}}/>
        <SkillsCloud/>
      </Section>
      <Section id="contact" title="Contact">
        <Contact/>
      </Section>
      <Footer/>
    </>
  )
}
