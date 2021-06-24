import React from 'react';
import heroImg from '../assets/images/hero.svg';

export const Hero = () => {
  return (
    <section id='home' className='app_hero'>
      <div className='hero__content'>
        <div className='hero__title'>
          <h1>Front-end Developer</h1>
          <div className='hero__title-slider'>
            <div>Angular</div>
            <div>React</div>
            <div>Ionic</div>
          </div>
        </div>
        <h2 className='hero__subtitle'>
          I code beautifully simple things, and I love what I do.
        </h2>
        <img className='hero__avatar' src={heroImg} alt='Image person coding' />
      </div>
    </section>
  );
};
