import React from 'react';
import {Card} from '../ui';
import './identity.scss';

export const Identity = () => {
  return (
    <Card className='feed-identity'>
      <div class='feed-identity__bg'></div>
      <div class='feed-identity__content'>
        <img
          width='64'
          src='https://media-exp1.licdn.com/dms/image/C5603AQG8tEZ1lWqXcQ/profile-displayphoto-shrink_100_100/0/1517542456614?e=1672272000&amp;v=beta&amp;t=Qm5BlzLc6cptWkael5Hqm3djYxCOWjmRX5kV9UsXTVE'
          loading='lazy'
          height='64'
          alt='Foto de Eduardo Antonio Vergara Sanchez'
          className='feed-identity__photo'
        />
        <h1>Eduardo Antonio Vergara Sanchez</h1>
        <p>I code beautifully simple things, and I love what I do.</p>
      </div>
    </Card>
  );
};
