import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [inspectorOpen, setInspectorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 selection:bg-sky-200 selection:text-sky-950 font-serif relative">
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenInspector={() => setInspectorOpen(true)}
      />

      {/* Hero Section */}
      <Hero 
        onOpenInspector={() => setInspectorOpen(true)}
      />

      {/* Projects Showcase */}
      <Projects 
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Professional Experience & Achievements */}
      <Experience />

      {/* Skills Matrix */}
      <Skills />

      {/* Contact Section with Yazish Safa & Uneeb Zia Details */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {inspectorOpen && (
        <TerminalModal 
          isOpen={inspectorOpen}
          onClose={() => setInspectorOpen(false)}
        />
      )}

    </div>
  );
}
