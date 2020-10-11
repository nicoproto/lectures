// Testing LET
let counter = 1;
console.log(counter);

counter = counter + 1;
console.log(counter);

// Testing CONST
const firstName = "John";
console.log(firstName);

// firstName = "Paul";

// String Length
firstName.length;

// Character access
firstName[0];

// Print all characters starting at index 1
firstName.substring(1);

// Case Manipulation
firstName.toUpperCase();
firstName.toLowerCase();

// Split
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthString.split(",");

months.length;

const lastName = "Starr";
const message = `${firstName} ${lastName} is a drummer`;

console.log(message)
