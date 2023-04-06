import './App.css';

import { BrowserRouter } from 'react-router-dom';
import NavPages from './NavPages';
import { useEffect, useState } from 'react';
import Connection from './compenents/popups/Connection';


// let store = createStore(reducer);
function App() {

  // Online state
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    // Listen to the online status
    window.addEventListener('online', handleStatusChange);
    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);
    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  return (

    <BrowserRouter>
    
      {/* {isOnline ? (
        <h1 className='online'>You Are Online</h1>
      ) : (
        <Connection />
      )} */}
      
      <NavPages />
      
    </BrowserRouter>


  );
}

export default App;
