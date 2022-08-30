import React from 'react';
import {social} from '../data/contact';

export const Contact = () => {
  return (
    <section id='contact' className='app__section contact'>
      <div className='container'>
        <div className='contact__content'>
          <img className='avatar' src='https://avatars.githubusercontent.com/u/18251826?v=4' alt='my photo' />
          <h2 className='contact__title'>Eduardo Vergara</h2>
          <div className='links_content'>
            {social.map(s => (
              <a key={s.name} target='_blank' href={s.link} rel='noopener'>
                <div className='contact-card'>
                  <img src={s.icon} alt={s.name} className='card-avatar' />
                  <h3 className='card-title'>{s.name}</h3>
                  <i className='material-icons arrow'>arrow_forward_ios</i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
