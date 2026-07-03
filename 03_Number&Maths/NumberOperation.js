const balance = new Number(100)
console.log("Balance is :- " , balance)
console.log("Type is :- " , typeof balance)

// Number Convert String
let NewStringNumber = balance.toString().length
console.log("After Conversion Type is :- " , typeof NewStringNumber);

// toFixed() Method
console.log("Using 3 Precision Value :-",balance.toFixed(3));
console.log("Using 2 Precision Value :-",balance.toFixed(2)); // Main Used for E-Commerce Website 

// precision() Method
const otherNumber = 123.5966
console.log(otherNumber.toPrecision(3));

const LongNumber = 1000000
console.log(LongNumber.toLocaleString('en-IN'));

console.log("Max Value :- ",Number.MAX_VALUE);
console.log("Min Value :- ",Number.MIN_VALUE);
console.log(Number.isInteger("Akshar"));

console.log(Number.isNaN(NaN)) // It Returns True When Not a Nuber


console.log(Number.parseInt("123")); // Convert String to Number

