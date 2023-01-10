import React from 'react';
import {Redirect, Route, Switch} from 'wouter';

import './styles/app.scss';
import {Card, Layout} from './components/ui';
import {About, Building, Contact, Jobs} from './pages';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
          <Redirect to='/feed' />
        </Route>
        <Route path='/feed'>
          <Card>
            <h1>Home</h1>
          </Card>
        </Route>
        <Route path='/mynetwork'>Network</Route>
        <Route path='/jobs'>
          <Jobs />
        </Route>
        <Route path='/notifications'>
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route>
          <Building />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
