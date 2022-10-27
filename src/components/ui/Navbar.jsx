import React from 'react';
import {Link, useRoute} from 'wouter';
import {menu} from '../../data';

import classes from '../../styles/components/navbar.module.scss';
import {HomeIcon, MessageIcon, MyNetworkIcon, NotificationIcon, WorkIcon} from '../icons';

const getIcon = icon => {
  switch (icon) {
    case 'home':
      return <HomeIcon />;
    case 'network':
      return <MyNetworkIcon />;
    case 'work':
      return <WorkIcon />;
    case 'message':
      return <MessageIcon />;
    case 'notification':
      return <NotificationIcon />;

    default:
      return <HomeIcon />;
  }
};
export const Navbar = () => {
  return (
    <header className={classes['global-nav']}>
      <div className={classes['global-nav__content']}>
        <div className={classes['global-nav__branding-logo']}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            data-supported-dps='24x24'
            fill='currentColor'
            className='mercado-match'
            width='40'
            height='40'
            focusable='false'>
            <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
          </svg>
        </div>
        <div className={classes['global-nav__search']}>
          <span className='material-symbols-rounded'>search</span>
          <input type='text' placeholder='Buscar' />
        </div>
        <nav className={classes['global-nav__nav']}>
          <ul className={classes['global-nav__primary-items']}>
            {menu.map(item => (
              <li key={item.path} className={classes['global-nav__primary-item']}>
                <ActiveLink href={item.path}>
                  {getIcon(item.icon)}
                  <span>{item.title}</span>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const ActiveLink = props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={classes['global-nav__primary-link'] + (isActive ? ' ' + classes['active'] : '')}>
        {props.children}
      </a>
    </Link>
  );
};
