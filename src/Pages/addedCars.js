import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import HeaderLogo from '../images/zent-logo-png-car-22.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Addedcars from '../Pages/addedCars';
import Addcar from '../Pages/addCar';
import Button from '../Components/Button';

function App() {
  return (
    <div className="App">
      <Header imgSrc={HeaderLogo} />
      <nav className="nav">
        <BrowserRouter>
          <Button>
            <Link to={'/Pages'}> Pasirinkti automobilius</Link>
          </Button>

          <Button>
            <Link to={'/Pages'}> Ikelti automobili</Link>
          </Button>

          <Routes>
            <Route path="/Pages" element={<Addedcars />} />
            <Route path="/Pages" element={<Addcar />} />
          </Routes>
        </BrowserRouter>
      </nav>
      <div className="Hero">
        <h1>Labas</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
