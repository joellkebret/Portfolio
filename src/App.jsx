import React from 'react';
import './index.css';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Background from './components/Background.jsx';
import About from './sections/About.jsx';

const App = () => {
  return (
    <main className="relative max-w-full mx-auto overflow-y-auto no-scrollbar">
      <Background />
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;