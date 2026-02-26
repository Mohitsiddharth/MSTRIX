import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useSmoothScroll();

  useEffect(() => {
    const sections = gsap.utils.toArray('section');

    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0.8 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-light-white dark:bg-dark transition-colors duration-300">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
