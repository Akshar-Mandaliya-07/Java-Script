const error = new Error()
console.log(typeof error)

// Syntax Error
// const name = "Akshar Mandaliya 
// console.log(name) // Syntax Error

// Reference Error
// console.log(a)
const a = 12

// Type error
// console.log(a.toUpperCase())

// Custom error
const age = 20
if(age <= 18){
    throw new Error("Age is not valid")
}
else{
    console.log("age is valid")
}