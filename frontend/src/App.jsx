import React from 'react';
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer /> 
    </div>
  );
}

export default App;