const numbers = [];
const evenNumbers = [];
const output = document.querySelector("p");

while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");

  if (input == null) {
    break;
  } else if (input === "done") {
    break;
  } else if (input.trim() === "" || isNaN(input)) {
    console.log("Please enter a valid number");
  } else {
    numbers.push(Number(input));
  }
}

for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

if (evenNumbers.length > 0) {
  output.innerHTML = "<br>Even numbers: " + evenNumbers.join(", ");
} else {
  output.innerHTML = "<br>Even numbers: None";
}

output.innerHTML += "<br>End of program";



