import React from 'react';

export const About = () => {
  return (
    <section id='about' className='app__section'>
      <div className='container'>
        <div className='about__content'>
          <h2 className='about__title'>Hi, I’m Eduardo. Nice to meet you.</h2>
          <h3 className='about__subtitle'>
            👨🏻‍💻 I beginning my journey as a front-end developer nearly{' '}
            {new Date().getFullYear() - 2018} years ago. 🤔 Exploring new
            technologies and developing software solutions and quick hacks. 🎓
            Studying Systems Engineering at University UNAD. 💼 Working as a
            Development and Analyst at Zoftinium S.A.S.
          </h3>
        </div>
      </div>
    </section>
  );
};
