import React from 'react';
import './index.css';

let cars = [];

function rere() {
  window.addEventListener('DOMContentLoaded', () => {
    if (window.localStorage.getItem('addedCarsList')) {
      cars = JSON.parse(window.localStorage.getItem('addedCarsList'));
    }
  });

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newCar = Object.fromEntries(formData);
    cars.push(newCar);
    console.log(cars);
    localStorage.setItem('addedCarsList', JSON.stringify(cars));

    const inputs = document.querySelectorAll(
      '#brand, #model, #year, #engine, #class, #carColor, #carImage, #gearbox, #fuel, #mileage'
    );
    inputs.forEach((input) => {
      input.value = '';
    });
  });
}

function App() {
  return (
    <div className="app">
      <p>Suveskite automobilio duomenys</p>
      <div className="app2">
        <form className="form3" onSubmit={rere}>
          <div className="forms">
            <div className="form">
              <br />
              <label htmlFor="brand">Automobilio marke</label>
              <br />
              <input type="text" className="brand" name="brand" />
              <br />

              <label htmlFor="model">Modelis</label>
              <br />
              <input type="text" className="model" name="model" />
              <br />

              <label htmlFor="year">Metai</label>
              <br />
              <input type="text" className="year" name="year" />
              <br />

              <label htmlFor="engine">Varyklio turis</label>
              <br />
              <input type="text" className="engine" name="engine" />
              <br />

              <label htmlFor="engine">Pavaru Deze</label>
              <br />
              <input type="text" className="gearbox" name="gearbox" />
              <br />
            </div>
            <div className="form2">
              <label htmlFor="class">Tipas</label>
              <br />
              <input type="text" className="class" name="class" />
              <br />

              <label htmlFor="carColor">Spalva</label>
              <br />
              <input type="text" className="carColor" name="carColor" />
              <br />

              <label htmlFor="fuel">Kuro Tipas</label>
              <br />
              <input type="text" className="fuel" name="fuel" />
              <br />

              <label htmlFor="mileage">Rida</label>
              <br />
              <input type="text" className="mileage" name="mileage" />
              <br />

              <label htmlFor="carImage">Nuotrauka (irasykit URL)</label>
              <br />
              <input type="text" className="carImage" name="carImage" />
              <br />
              <br />
              <br />
            </div>
          </div>
          <button type="submit" className="submit">
            Ikelti
          </button>
        </form>
      </div>

      <div className="output"></div>
    </div>
  );
}

export default App;
