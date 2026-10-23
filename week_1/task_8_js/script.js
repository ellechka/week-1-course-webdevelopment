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

if (searchingInput == null || searchInput.trim() === "") {
  output.innerHTML += "<br>Please enter a valid number";
} else {
  const searchingNumber = Number(searchInput);

  if (numbers.includes(searchingNumber)) {
    output.innerHTML += "<br>Number " + searchingNumber + " is found in the array";
  } else {
    output.innerHTML += "<br>Number " + searchingNumber + " is not found in the array";
  }
}


