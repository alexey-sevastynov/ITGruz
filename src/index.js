import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18next';
import { Suspense } from 'react';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div>...Loading</div>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

