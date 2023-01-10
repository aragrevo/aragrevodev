import React from 'react';
import classes from '../../styles/components/card.module.scss';

export const Card = ({children, className}) => {
  return <article className={classes.card + ' ' + className}>{children}</article>;
};
