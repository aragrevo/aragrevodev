import React from 'react';

export const Header = ({title, subtitle}) => {
  return (
    <div className='jobs-header'>
      <h2 className='jobs-header__title'>{title}</h2>
      <p className='jobs-header__subtitle'>{subtitle}</p>
    </div>
  );
};
