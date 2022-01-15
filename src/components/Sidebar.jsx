import React from 'react';

const menu = [
  {
    path: 'home',
    icon: 'person',
    title: 'Home',
  },
  {
    path: 'about',
    icon: 'fingerprint',
    title: 'About',
  },
  {
    path: 'portfolio',
    icon: 'image',
    title: 'Portfolio',
  },
  {
    path: 'contact',
    icon: 'alternate_email',
    title: 'Contact',
  },
];
const MySidebar = ({toPage, page}) => {
  console.log('Sidebar', page);
  return (
    <nav>
      <ul className='sidebar'>
        {menu.map(item => (
          <li className='nav-item' key={item.path}>
            <a href='#' className='nav-link' onClick={toPage(item.path)}>
              <i className={`material-icons ${item.path === page ? 'active' : ''}`}>{item.icon}</i>
              <span className='title'>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Sidebar = React.memo(MySidebar);
