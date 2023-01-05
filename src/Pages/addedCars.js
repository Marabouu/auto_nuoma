import React from 'react';
import '../index.css';
import HeaderLogo from '../images/zent-logo-png-car-22.png';
import HeroLogo from '../images/car-gif-7.gif';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from '../Components/Button';

import addCar from '../Pages/addCar';
import addedCars from '../Pages/addedCars';

let selectedBrand = '';
let newCars = [];

let submit = document.getElementById('showCars');

function createElement(tag, props) {
  const newTag = document.createElement(tag);
  if (props && props.length) {
    props.forEach((singleProp) => {
      newTag[singleProp.name] = singleProp.value;
    });
  }
  return newTag;
}

function appendResult() {
  newCars

    .filter((car) => car.brand === selectedBrand || !selectedBrand)
    .forEach((car) => {
      const carContainer = createElement('div');
      carContainer.setAttribute('id', 'carContainer');

      const carContainer2 = createElement('div');
      carContainer2.setAttribute('id', 'carContainer2');

      const carContainer3 = createElement('div');
      carContainer3.setAttribute('id', 'carContainer3');

      const carContainer4 = createElement('div');
      carContainer4.setAttribute('id', 'carContainer4');

      const brandParagraph = createElement('p');
      brandParagraph.setAttribute('id', 'brandParagraph');

      const modelParagraph = createElement('p');
      modelParagraph.setAttribute('id', 'modelParagraph');

      const yearParagraph = createElement('p');
      yearParagraph.setAttribute('id', 'yearParagraph');

      const engineParagraph = createElement('p');
      engineParagraph.setAttribute('id', 'engineParagraph');

      const classParagraph = createElement('p');
      classParagraph.setAttribute('id', 'classParagraph');

      const carColorParagraph = createElement('p');
      carColorParagraph.setAttribute('id', 'carColorParagraph');

      const carPhotoImage = createElement('img');
      carPhotoImage.setAttribute('height', 200);
      carPhotoImage.setAttribute('width', 280);

      const gearboxParagraph = createElement('p');
      gearboxParagraph.setAttribute('id', 'gearboxParagraph');

      const fuelParagraph = createElement('p');
      fuelParagraph.setAttribute('id', 'fuelParagraph');

      const mileageParagraph = createElement('p');
      mileageParagraph.setAttribute('id', 'mileageParagraph');

      const space = createElement('br');

      brandParagraph.textContent = 'Marke :  ' + car.brand;
      modelParagraph.textContent = 'Modelis :  ' + car.model;
      yearParagraph.textContent = 'Metai :  ' + car.year;
      engineParagraph.textContent = 'Varyklio turis :  ' + car.engine;
      classParagraph.textContent = 'Kebulo Tipas :  ' + car.class;
      carColorParagraph.textContent = 'Spalva :  ' + car.carColor;
      gearboxParagraph.textContent = 'Pavaru Deze :  ' + car.gearbox;
      fuelParagraph.textContent = 'Kuro Tipas :  ' + car.fuel;
      mileageParagraph.textContent = 'Rida :  ' + car.mileage;
      carPhotoImage.src = car.carImage;

      carContainer.append(
        brandParagraph,
        modelParagraph,
        yearParagraph,
        engineParagraph,
        classParagraph
      );

      carContainer4.append(
        carColorParagraph,
        gearboxParagraph,
        fuelParagraph,
        mileageParagraph
      );

      carContainer2.append(carPhotoImage);

      carContainer3.append(carContainer, carContainer4, carContainer2);

      document.querySelector('#app').append(carContainer3, space);
      console.log(car);
    });
}
window.addEventListener('DOMContentLoaded', () => {
  if (window.localStorage.getItem('addedCarsList')) {
    newCars = JSON.parse(window.localStorage.getItem('addedCarsList'));
    appendResult();

    var select = document.getElementById('select');
    select.addEventListener('change', (e) => {
      selectedBrand = e.target.value;
      document.querySelector('#app').textContent = '';
      appendResult();
    });

    newCars
      .filter((v, i) => newCars.findIndex((car) => car.brand === v.brand) === i)
      .forEach((car) => {
        let o = document.createElement('option');
        o.textContent = car.brand;
        select.appendChild(o);
      });
  }
});

submit.addEventListener('click', function () {
  document.getElementById('select').selectedIndex = 0;
  document.querySelector('content').textContent = '';
  selectedBrand = null;
  appendResult();
});

function App() {
  return (
    <div className="App">
      <Header imgSrc={HeaderLogo} />
      <nav className="nav">
        <a href="/index.html">
          <button>Pagrindinis</button>
        </a>
        <a href="/addedCars/addedCars.js">
          <button>Rinktis Automobilius</button>
        </a>
        <a href="/addCar/addCar.html">
          <button>Ikelti Automobili</button>
        </a>
      </nav>
      <div className="adcars">
        <button className="showCars">Rodyti visus automobilius</button>
        <select className="select">
          <option>Pasirinkti Pagal Marke</option>
          <option value="">Visi automobiliai</option>
        </select>
      </div>
      <div className="content"></div>
      <Footer />
    </div>
  );
}
export default App;
