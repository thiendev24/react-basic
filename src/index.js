import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './main/main';
import Car from './car/car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Main /> */}
    {/* <Car /> */}
  </React.StrictMode>
);

reportWebVitals();
