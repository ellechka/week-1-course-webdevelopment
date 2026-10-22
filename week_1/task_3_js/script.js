const sides = prompt("Enter the lengths of three sides using space, e.g. 3 6 5: ");
const output = document.querySelector("p");

if (sides === null) {
  output.innerHTML = "Input cancelled";
} else {
  const parts = sides.trim().split(/\s+/);
  const [a, b, c] = parts.map(Number);

  const isThreeValues = parts.length === 3;
  const isValidNumbers = Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c);

  if (!isThreeValues || !isValidNumbers) {
    output.innerHTML = "Please enter exactly three numbers";
  } else if (a <= 0 || b <= 0 || c <= 0) {
    output.innerHTML = "Sides must be positive";
  } else if (!(a + b > c && a + c > b && b + c > a)){
    output.innerHTML = "These sides can't form a triangle";
  } else {
    let nameSide;

    if (a === b && b === c) {
      nameSide = "equilateral";
    } else if (a === b || b === c || a === c) {
      nameSide = "isosceles";
    } else {
      nameSide = "scalene";
    }

    output.innerHTML = "Triangle is " + nameSide;
  }
}


