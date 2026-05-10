import Hero from './sections/Hero'
import { useState } from 'react'
import ChatBot from './components/ChatBot'
import TerminalSection from './sections/TerminalSection'
import ProjectsSection from './sections/ProjectsSection'
import GlobalEffects from './components/GlobalEffects'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'

function App( ) {
  const [openChat, setOpenChat] = useState(false)
  return (
    <div className="bg-black text-white relative overflow-hidden">
    <ChatBot open={openChat} setOpen={setOpenChat} />
      {/* BACKGROUND EFFECTS */}
      <GlobalEffects />

      {/* WEBSITE CONTENT */}
      <div className="relative z-20">

        <Hero setOpenChat={setOpenChat} />
        <AboutSection />
        <EducationSection />
      <TerminalSection />
     <ProjectsSection />
     <ContactSection />
     
      </div>

    </div>
  )
}

export default App