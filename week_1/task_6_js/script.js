const input = prompt("Enter a positive integer: ");
const output = document.getElementById("output");

if (input == null) {
  output.innerHTML = "Input cancelled";
} else if (input.trim() === "") {
  output.innerHTML = "Please enter a positive integer";
} else {
  const number = Number(input);

  if (!Number.isInteger(number)) {
    output.innerHTML = "Please enter an integer";
  } else if (number <= 0) {
    output.innerHTML = "Number can not be negative or 0";
  } else {
    let table = "<table>";

    for (let i = 1; i <= number; i++) {
      table += "<tr>";
      for (let j = 1; j <= number; j++) {
        const result = i * j;
        table += "<td>" + result + "</td>";
      }
      table += "</tr>";
    }
    table += "</table>";
    output.innerHTML = table;
  }
}
