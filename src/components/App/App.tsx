import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../../pages/Main';
import Breed from '../Breed/Breed';

function App() {
  return (
    <BrowserRouter>
      <header className='bg-slate-500'>
        <Header />
      </header>
      <main className='bg-slate-800'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:page" element={<Main />} />
          <Route path="/breed/:cat" element={<Breed />} />
          {/* <Route path="/likes" element={<Likes />} />  */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
