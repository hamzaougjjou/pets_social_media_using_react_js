import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/css/framwork.css";
import "./assets/css/header.css";
import "./assets/css/main.css";
import "./assets/css/media.css";
import "./assets/css/normalize.css";
import "./assets/fontOwsome/css/all.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

