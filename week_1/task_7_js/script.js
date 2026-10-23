const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const vegetables = [];

console.log(fruits);
console.log("Length of Fruits: " + fruits.length);
console.log("Element at Index 2: " + fruits[2]);
console.log(fruits[fruits.length - 1]);

while (vegetables.length < 3) {
  const vegetable = prompt("Enter vegetable name");

  if (vegetable === null || vegetable.trim() === "") {
    console.log("Please enter vegetable name");
  } else if (!isNaN(vegetable)) {
    console.log("Please enter vegetable name, not number");
  } else {
    vegetables.push(vegetable);
  }
}

console.log(vegetables);
console.log("Length of Vegetables: " + vegetables.length);



