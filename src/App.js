import React from 'react';
import Header from './components/Header';
import Promo from './components/Promo';
import Translation from './components/Translation';
import Callback from './components/Callback';
import Cars from './components/Cars';

import './App.scss';
import { useState, createContext } from 'react';

export const MyContext = createContext('');

function App() {

  const [callBack, setCallBack] = useState(false)

  return (
    <div className="App" >

      <MyContext.Provider value={{ callBack, setCallBack }}>
        {callBack && <Callback />}
        <Promo />
        <Translation />
        <Header />

        <Cars />
      </MyContext.Provider>

    </div>
  );

};

export default App;
