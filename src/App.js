import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './compenents/header/Header';
import NavPages from './compenents/NavPages';
// import css files



function App() {



  return (

    <BrowserRouter className="container">

      <Header />
      <NavPages />

    </BrowserRouter>

  );
}

export default App;

// activeClassName="active"
// activeClassName="active"