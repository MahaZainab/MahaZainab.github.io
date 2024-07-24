// src/App.js

import React from 'react';
import CustNavBar from './components/Navbar/CustNavBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <CustNavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
