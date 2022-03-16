import React from 'react'

import './App.css';

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {

  return (

    <div className="App">
      <Navigation />
      <div className="Content">
        <Home />
        <Projects />
        <About />
        <ContactForm />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
