import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from "./App.js";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Hello/>
  </React.StrictMode>
);
reportWebVitals();