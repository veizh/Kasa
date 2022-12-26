import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/error.css';
import './styles/logement.css';


import App from './router';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


