import React, { useState } from 'react';
import { Hero } from './pages/Hero';
import { Sidebar } from './components/Sidebar';
import { About } from './pages/About';

import './styles/app.scss';
import { Skills } from './components/Skills';

const App = () => {
  return (
    <main>
      <Hero />

      <About />
      <Skills />

      <section id='gallery' className='app__section'>
        <h2>gallery</h2>
      </section>
      <section id='contact' className='app__section'>
        <h2>contact</h2>
      </section>
      <Sidebar />
    </main>
  );
};

export default App;
