import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units'
import { Home } from './components/routes/Home';
import { Navigation } from './layout/Navigation';
import { Connect } from './components/Connect';
import { Projects } from './components/routes/Projects';

function App() {
  const { account, deactivate } = useEthers()
  const etherBalance = useEtherBalance(account)

  return (
    <>
      <div className='grid grid-cols-6 w-screen h-screen'>
        <Navigation />
        <Connect />

        <div className='col-span-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
