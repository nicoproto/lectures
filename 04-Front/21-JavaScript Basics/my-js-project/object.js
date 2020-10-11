const student = { firstName: "Nico", lastName: "Proto" };
console.log(typeof student);

console.log(student);

// Reading/Setting a property
console.log(student.firstName);

console.log(student['firstName']); // Another way

student.firstName = "Nacho";
console.log(student.firstName);
