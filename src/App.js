import React from 'react';
import { Article, Navbar, Brand, CTA, Feature } from './components';
import {Footer, WhatGPT3, Blog, Header, Possibility, Features} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App