import React from 'react';

import bitcoinImg from '../assets/icons/bitcoin.svg';

export const SkillItem = () => {
  return (
    <div className='skill__item'>
      <figure className='skill__item-image'>
        <img src={bitcoinImg} />
      </figure>
      <h1 className='title is-size-4 is-spaced'>Designer</h1>
      <p>
        I value simple content structure, clean design patterns, and thoughtful
        interactions.
      </p>
      <p className='list-title has-text-primary has-text-weight-normal'>
        Things I enjoy designing:
      </p>
      <p>UX, UI, Web, Mobile, Apps, Logos</p>
      <p className='list-title has-text-primary has-text-weight-normal'>
        Design Tools:
      </p>
      <ul>
        <li>Balsamiq Mockups</li>
        <li>Figma</li>
        <li>Invision</li>
        <li>Marvel</li>
        <li>Pen &amp; Paper</li>
        <li>Sketch</li>
        <li>Webflow</li>
        <li>Zeplin</li>
      </ul>
    </div>
  );
};
