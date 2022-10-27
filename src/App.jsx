import React, {useCallback, useState} from 'react';
import {Route, Switch} from 'wouter';

import './styles/app.scss';
import {Navbar, Card} from './components/ui';
import {About, Building, Contact, Hero} from './pages';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <aside className='sidebar'>
          <Hero />
        </aside>
        <section>
          <Switch>
            <Route path='/'>
              <Card>
                <h1>Home</h1>
              </Card>
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/notification'>
              <Contact />
            </Route>
            <Route path='/group'>
              <Building />
            </Route>
          </Switch>
        </section>
        <aside>Mundo</aside>
      </main>
    </>
  );
};

export default App;
