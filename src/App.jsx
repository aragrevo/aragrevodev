import React, {useCallback, useState} from 'react';
import {Hero} from './pages/Hero';
import {Sidebar} from './components/Sidebar';
import {About} from './pages/About';

import './styles/app.scss';
import {Skills} from './components/Skills';
import {Building} from './pages/Building';

const App = () => {
  const [page, setPage] = useState(() => {
    const {pathname} = window.location;
    const currentPage = pathname.slice(1);
    return currentPage;
  });

  const toPage = useCallback(
    newPage => event => {
      event.preventDefault();

      window.history.pushState(null, null, `/${newPage}`);
      setPage(newPage);
    },
    [],
  );

  const getContent = () => {
    switch (page) {
      case 'about':
        return <About />;
      case '':
        return <Hero />;
      default:
        return <Building />;
    }
  };
  return (
    <main>
      <div className='app_container'>
        {getContent()}
        <Sidebar toPage={toPage} page={page} />
      </div>
    </main>
  );
};

export default App;
