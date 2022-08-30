import React from 'react';
import {SkillItem} from './SkillItem';

export const Skills = () => {
  const skills = [1];
  return (
    <section className='skills'>
      <div className='skills__container'>
        <div className='skills__box'>
          <div className='skills__content'>
            {skills.map(skill => (
              <SkillItem key={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
