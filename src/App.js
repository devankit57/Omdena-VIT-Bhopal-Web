import React from 'react';

import { Footer,Blog,Possibility,Features,WhatOmdena,Header} from './Containers';
import {Cta,Brand,Navbar} from './components';
import './App.css';
import './index.css';


const App = () => { 
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
        <Brand/>
        <WhatOmdena/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>

    </div>
  )
}

export default App