import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units'
import { Home } from './components/routes/Home';
import { Navigation } from './layout/Navigation';
import { Connect } from './components/Connect';
import { Projects } from './components/routes/Projects';
import { Donate } from './components/routes/Donate';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const { account, deactivate } = useEthers()
  const etherBalance = useEtherBalance(account)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='grid sm:grid-cols-6 w-screen h-screen font-Rubik'>
        <Navigation />
        <Connect />

        <div className='sm:col-span-5 px-8 py-4 max-w-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
