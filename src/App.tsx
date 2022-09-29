import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import MainRoutes from './router/MainRoutes';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <MainRoutes/>
    </div>
  );
}

export default App;
