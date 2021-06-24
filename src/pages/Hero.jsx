import React from 'react';
import heroImg from '../assets/images/hero.svg';

export const Hero = () => {
  return (
    <section id='home' className='app_hero'>
      <div className='hero__content'>
        <h1 className='hero__title'>
          Front-end Developer
          <div className='hero__title-slider'>
            <div>React</div>
            <div>Ionic</div>
            <div>Angular</div>
          </div>
        </h1>
        <h2 className='hero__subtitle'>
          I code beautifully simple things, and I love what I do.
        </h2>
        <img className='hero__avatar' src={heroImg} alt='Image person coding' />
      </div>
    </section>
  );
};
