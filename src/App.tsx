import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './index.sass'
import Page from './pages/Page';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Page img='images/1.jpg' title='Модель 01' />}/>
        <Route path='/shop' element={<Page img='images/2.jpg' title='Модель 02' />}/>
        <Route path='/products' element={<Page img='images/3.jpg' title='Модель 03' />}/>
        <Route path='*' element={<Page img='images/4.jpg' title='Not found 404' />}/>
      </Routes>
    </div>
  );
}

export default App;
