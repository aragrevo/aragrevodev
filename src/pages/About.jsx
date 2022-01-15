import React from 'react';

export const About = () => {
  return (
    <section id='about' className='app__section'>
      <div className='container'>
        <div className='about__content'>
          <h2 className='about__title'>About me</h2>
          <h3 className='about__subtitle'>
            <li>
              👨🏻‍💻 I beginning my journey as a front-end developer nearly {new Date().getFullYear() - 2018} years ago.{' '}
            </li>
            <li>🤔 Exploring new technologies and developing software solutions and quick hacks.</li>
            <li>🎓 Systems Engineering at University UNAD</li>
            <li>💼 Working as a Solution Consultant II at Sophos Solutions S.A.S.</li>
          </h3>
        </div>
      </div>
    </section>
  );
};
