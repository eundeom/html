// Sample array of numbers
const num = [1, 2, 3, 4, 5];

// Define a function to square a number
function myFunc(num) {
  return num * num;
}

// Use the map() function to square every number in the array
const newArr = num.map(myFunc);

console.log(newArr);
