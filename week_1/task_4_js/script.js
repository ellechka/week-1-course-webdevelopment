const input = prompt("Please enter a grade: ");
const output = document.querySelector("p");

if (input == null) {
  output.innerHTML = "Input cancelled";
} else if (input.trim() === "") {
  output.innerHTML = "Please enter a grade.";
} else {
  const score = Number(input);
  const isValidGrade = Number.isFinite(score);

  if (!isValidGrade) {
    output.innerHTML = "Grade should be written as number";
  } else if (score < 0 || score > 100) {
    output.innerHTML = "Grade can not be negative or more than 100";
  } else if (score < 40) {
    output.innerHTML = "Your grade is 0";
  } else if (score < 52) {
    output.innerHTML = "Your grade is 1";
  } else if (score < 64) {
    output.innerHTML = "Your grade is 2";
  } else if (score < 76) {
    output.innerHTML = "Your grade is 3";
  } else if (score < 88) {
    output.innerHTML = "Your grade is 4";
  } else {
    output.innerHTML = "Your grade is 5";
  }
}
