//******Primityvus sprendimas 1

//let input1 = document.getElementById("brand");
//let input2 = document.getElementById("model");
//let input3 = document.getElementById("year");
//let input4 = document.getElementById("engine");
//let input5 = document.getElementById("class");
//let input6 = document.getElementById("carColor");
//let input7 = document.getElementById("carImage");
//let input8 = document.getElementById("gearbox");
//let input9 = document.getElementById("fuel");
//let input10 = document.getElementById("mileage");
//let submit = document.getElementById("submit");
//let output = document.getElementById("output");
let cars = [];

window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("addedCarsList")) {
    cars = JSON.parse(window.localStorage.getItem("addedCarsList"));
  }
});

// Geresnis sprendimas 2
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newCar = Object.fromEntries(formData);
  cars.push(newCar);
  console.log(cars);
  localStorage.setItem("addedCarsList", JSON.stringify(cars));

  const inputs = document.querySelectorAll(
    "#brand, #model, #year, #engine, #class, #carColor, #carImage, #gearbox, #fuel, #mileage"
  );
  inputs.forEach((input) => {
    input.value = "";
  });
});

//********Primityvus sprendimas 1

////submit.addEventListener("click", function () {
////function submit() {
////const newCar = {
//// brand: input1.value,
//// model: input2.value,
////year: input3.value,
////engine: input4.value,
////class: input5.value,
////carColor: input6.value,
//// carImage: input7.value,
////gearbox: input8.value,
////fuel: input9.value,
////mileage: input10.value,
//// };
////cars.push(newCar);

////localStorage.setItem("addedCarsList", JSON.stringify(cars));

////const inputs = document.querySelectorAll(
//"#brand, #model, #year, #engine, #class, #carColor, #carImage, #gearbox, #fuel, #mileage"
////);
////inputs.forEach((input) => {
//// input.value = "";
////});
////}

////submit();
////});
