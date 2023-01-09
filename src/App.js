import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HeaderLogo from './images/zent-logo-png-car-22.png';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';
import Addedcars from './Pages/Addedcars';
import Addcar from './Pages/Addcar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header imgSrc={HeaderLogo} />
      <nav className="nav">
        <BrowserRouter>
          <Button>
            <Link to={'/Home'}> Pagrindinis</Link>
          </Button>
          <Button>
            <Link to={'/Addedcars'}> Pasirinkti automobilius</Link>
          </Button>

          <Button>
            <Link to={'/Addcar'}> Ikelti automobili</Link>
          </Button>

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Addedcars" element={<Addedcars />} />
            <Route path="/Addcar" element={<Addcar />} />
          </Routes>
        </BrowserRouter>
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
