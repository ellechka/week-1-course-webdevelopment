const input = prompt("Enter a positive integer: ");
const output = document.querySelector("p");
if (input == null) {
  output.innerHTML = "Input cancelled.";
} else if (input.trim() === "") {
  output.innerHTML = "Please enter a positive integer.";
} else {
  const number = Number(input);

  if (!Number.isInteger(number)) {
    output.innerHTML = "Please enter an integer.";
  } else if (number <= 0) {
    output.innerHTML = "Number can not be negative.";
  } else {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    output.innerHTML = "Summa " + sum;
  }
}
