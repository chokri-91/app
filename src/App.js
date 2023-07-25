import React from 'react'
import { Article, Brand, Cta, Feature, Navbar } from './components';
import { Blog, Possibility, Footer, Header, WhatGPT3, Features } from './container';

import './App.css';

const App = () => {
  return (
    <div className='App'>

        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />

    </div>
  )
}

export default App