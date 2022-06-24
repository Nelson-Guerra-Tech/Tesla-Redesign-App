import React, { useEffect } from 'react';

// CSS
import './App.css';

// import components
import Header from './components/Header';
import Home from './components/Home';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // initializing AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
