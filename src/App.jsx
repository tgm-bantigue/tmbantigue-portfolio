import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState('light');

  // Load theme from local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.body.className = storedTheme; // Set initial theme
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to local storage
    document.body.className = newTheme; // Update body class
  };

  return (
    <div>
      <Navbar />
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;