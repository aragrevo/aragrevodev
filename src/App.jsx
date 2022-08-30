import React, {useCallback, useState} from 'react';
import {About} from './pages/About';
import {Building} from './pages/Building';
import {Contact} from './pages/Contact';
import {Hero} from './pages/Hero';
import {Sidebar} from './components/Sidebar';

import './styles/app.scss';

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
      case 'contact':
        return <Contact />;
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
