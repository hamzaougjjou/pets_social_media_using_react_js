import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/Store';

import "./assets/css/framwork.css";
import "./assets/css/header.css";
import "./assets/css/main.css";
import "./assets/css/media.css";
import "./assets/css/normalize.css";
import "./assets/fontOwsome/css/all.css";
import "./assets/css/responsive.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

