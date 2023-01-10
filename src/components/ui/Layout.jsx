import React from 'react';
import {Hero} from '../../pages';
import {Identity} from '../identity';
import {Card, Navbar} from './';

export const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main>
        <aside className='sidebar'>
          <Identity />
        </aside>
        <section className='main'>{children}</section>
        <aside className='aside'>
          <Card>
            <Hero />
          </Card>
        </aside>
      </main>
    </>
  );
};
