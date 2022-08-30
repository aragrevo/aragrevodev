import React from 'react';
import {about} from '../data/about';

export const About = () => {
  return (
    <section id='about' className='app__section'>
      <div className='container'>
        <div className='about__content'>
          <h2 className='about__title'>About me</h2>
          <h3 className='about__subtitle'>
            {about.map(item => (
              <li key={item}>{item}</li>
            ))}
          </h3>
        </div>
      </div>
    </section>
  );
};
