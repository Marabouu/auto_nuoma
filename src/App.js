import React from 'react';
import './index.css';
import HeaderLogo from './images/zent-logo-png-car-22.png';
import HeroLogo from './images/car-gif-7.gif';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import addCar from './Page/addCar';
import addedCars from './Page/addedCars';

function App() {
  return (
    <div className="App">
      <Header imgSrc={HeaderLogo} />
      <nav className="nav">
        <BrowserRouter>
          <Routes>
            <Route path="/Page" element={<addedCars />} />
          </Routes>
        </BrowserRouter>
        <a href="/index.html">
          <Button>Pagrindinis</Button>
        </a>

        <a href="/addedCars/addedCars.js">
          <Button>Rinktis Automobilius</Button>
        </a>
        <a href="/addCar/addCar.html">
          <Button>Ikelti Automobili</Button>
        </a>
      </nav>
      <div className="Hero">
        <img
          src={require('./images/car-gif-7.gif')}
          alt=""
          className="mainPageImage"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
