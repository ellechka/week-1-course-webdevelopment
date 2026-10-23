const numbers = [];
const output = document.querySelector("p");

while (numbers.length < 5) {
  const input = prompt('Enter a number');

  if (input == null || input.trim() === "") {
    console.log('Please enter a number');
  } else if (isNaN(input)) {
    console.log('Please enter a number, not string');
  } else {
    numbers.push(Number(Number(input)));
  }
}

output.innerHTML = "Numbers: " + numbers;

const searchInput = prompt("Enter a Number to Search: ");

if (searchInput == null || searchInput.trim() === "" || isNaN(searchInput)) {
  output.innerHTML += "<br>Please enter a valid number";
} else {
  const searchingNumber = Number(searchInput);
  const index = numbers.indexOf(searchingNumber);

  if (numbers.includes(searchingNumber) && index !== -1) {
    output.innerHTML += "<br>Number " + searchingNumber + " is found in the array at Index " + index;
  } else {
    output.innerHTML += "<br>Number " + searchingNumber + " is not found in the array";
  }
}

numbers.pop();
output.innerHTML += "<br>Updated Numbers: " + numbers;

numbers.sort((a, b) => a - b);
output.innerHTML += "<br>Sorted Numbers: " + numbers;


