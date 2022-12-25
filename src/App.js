import './App.css';

import { BrowserRouter } from 'react-router-dom';
import NavPages from './NavPages';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './auth/reducer/Reducer';
// import css files



// let store = createStore(reducer);
function App() {

  return (

    <BrowserRouter>
      {/* <Provider stire={ store }> */}
        <NavPages />
      {/* </Provider> */}
    </BrowserRouter>


  );
}

export default App;
