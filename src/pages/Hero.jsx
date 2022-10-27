import React from 'react';
import Person from '../components/Person';
import {Card} from '../components/ui';
import {languages} from '../data/skills';

export const Hero = () => {
  return (
    <Card>
      <div className='hero__content'>
        <div className='hero__title'>
          <h1>Hi, I’m Eduardo Vergara.</h1>
          <h2>Front-end Developer</h2>
          <div className='hero__title-slider'>
            <div className='slider'>
              <span className='text'>
                {languages.map(l => (
                  <span key={l.name}>
                    <img src={l.icon} />
                    {l.name}
                    <br />
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
        <h2 className='hero__subtitle'>I code beautifully simple things, and I love what I do.</h2>
        <Person className='hero__avatar' />
      </div>
    </Card>
  );
};
