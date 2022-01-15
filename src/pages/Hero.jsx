import React from 'react';
import Person from '../components/Person';

export const Hero = () => {
  return (
    <section id='home' className='app_hero'>
      <div className='hero__content'>
        <div className='hero__title'>
          <h1>Hi, I’m Eduardo Vergara.</h1>
          <h2>Front-end Developer</h2>
          <div className='hero__title-slider'>
            <div>Angular</div>
            <div>React</div>
            <div>Ionic</div>
          </div>
        </div>
        <h2 className='hero__subtitle'>I code beautifully simple things, and I love what I do.</h2>
        <Person className='hero__avatar' />
      </div>
    </section>
  );
};
