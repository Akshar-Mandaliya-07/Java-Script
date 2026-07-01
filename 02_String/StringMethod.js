let name = "      Akshar Mandaliya       "
// Find Length of String
console.log("Length is :- " , name.length);

// Upper Case
console.log("Upper Case :- " , name.toUpperCase());

// Lower Case
console.log("Lower Case :- " , name.toLowerCase());

// charAt Method Return Char. for Particular Index
console.log("Char At :- " , name.charAt(0));

// Return Ascii Value of Particular Index
console.log("charCodeAt :- " , name.charCodeAt(0));

// Concat
let ans = name + " Computer Engineer"
console.log("Concat of Two String :- " , ans);


// includes method
console.log("Chceck Present in String :- " , name.includes("Akshar"));

// Sub-String
console.log("Sub-String :- " , name.substring(0,4));

// Slice
let newString = name.slice(-16,13)
console.log("Slice :- " , newString);

// Replace
let NewString = name.replace("Mandaliya","mandaliya")
console.log("Replace :- " , NewString);

// Trim
console.log("Using Trim :- " , name.trim());

// Trim Start
console.log("Start Trim :- " , name.trimStart());

//Split Method
let text = "Akshar Mandaliya";
let result = text.split(" ");
console.log(result);

// StartsWith :- check string start with this character
console.log("strtasWith :- " , name.startsWith("Manda"));

// endsWith :- check string ends with this character
console.log("endsWith :- " , name.endsWith("   "));

// Replace all
let word = "apple apple apple"
let newResult = word.replaceAll("apple","mango")
console.log(newResult);
