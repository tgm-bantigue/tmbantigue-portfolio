import { useState, useEffect } from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Certifications from './components/Certifications';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css'; // Import your CSS file

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false); // State for load animation

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Simulate loading effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay before triggering the fade-in

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    
    <div>
      <Navbar scrolled={scrolled} />
      <div className={`fade-in ${loaded ? 'fade-in-active' : ''}`}>
        <Hero />
        <Skills />
        <About />
        <Work />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;