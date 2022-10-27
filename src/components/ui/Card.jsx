import React from 'react';
import classes from '../../styles/components/card.module.scss';

export const Card = props => {
  return <article className={classes.card}>{props.children}</article>;
};
