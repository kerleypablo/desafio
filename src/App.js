import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Desafio1 from './pages/desafio1';
import Desafio2 from './pages/desafio2';
import Labirinto from './pages/labirinto';
import Desafio3 from './pages/desafio3';


function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/desafiostartthegame" element={<Desafio1 />} />
          <Route exact path="/desafio470" element={<Desafio2 />} />
          <Route exact path="/desafio110" element={<Labirinto />} />
          <Route exact path="/desafioibis" element={<Desafio3 />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;