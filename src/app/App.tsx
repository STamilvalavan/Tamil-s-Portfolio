import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';
import { Navbar } from '@/app/components/Navbar';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Toaster position="top-center" richColors />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}