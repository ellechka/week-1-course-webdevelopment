let temperatureInCelsius = Number(prompt("Please enter the temperature in Celsius: "));

let temperatureInFahrenheit = (temperatureInCelsius * (9/5)) + 32;
let temperatureInKelvin = temperatureInCelsius + 273.15;

document.getElementById("C").innerHTML = "Temperature in Celsius: " + temperatureInCelsius;
document.getElementById("F").innerHTML = "Converted temperature in Fahrenheit: " + temperatureInFahrenheit;
document.getElementById("K").innerHTML = "Temperature in Kelvin: " + temperatureInKelvin;

