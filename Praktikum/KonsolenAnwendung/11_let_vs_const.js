let number = 1;
const constantNumber = 1;

number = 2;
// this will trow an error since the variable is a constant and therefor cannot be reassigned
constantNumber = 2;

console.log(number);
console.log(constantNumber);