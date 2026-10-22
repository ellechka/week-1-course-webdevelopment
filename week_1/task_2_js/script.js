const coordinates1 = prompt("Enter coordinates of the first point using space between them, e.g. x1 y1:");
const coordinates2 = prompt("Enter coordinates of the second point using space between them, e.g. x2 y2:");

const [x1,y1] = coordinates1.trim().split(/\s+/).map(Number);
const [x2,y2] = coordinates2.trim().split(/\s+/).map(Number);

const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

document.getElementById("result").innerHTML = "Total distance: " + distance.toFixed(2);


