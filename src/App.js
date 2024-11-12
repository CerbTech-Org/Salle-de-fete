import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Galerie from './components/Galerie';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Galerie />
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
