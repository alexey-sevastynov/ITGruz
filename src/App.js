import React from 'react';
import Header from './components/Header';
import Promo from './components/Promo';
import Translation from './components/Translation';

import './App.scss';



function App() {

  return (
    <div className="App" >
      <Promo />
      <Translation />
      <Header />
    </div>
  );

};

export default App;
