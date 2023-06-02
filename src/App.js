import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Desafio1 from './pages/desafio1';


function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/desafioSTARTTHEGAME" element={<Desafio1 />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;