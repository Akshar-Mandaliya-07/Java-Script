// Stack Memory :- Stack Memory Srotes only Primitive Data Types Value and Pass the Copy not Reference.
// Number , String , Boolean , Null , Undefined , Symbol , BigInt
// code
console.log("Stack Memory :- ");
let FirstName = "Akshar"
let SecondName = FirstName
SecondName = "Akshar Mandaliya"
console.log("First Name :- " , FirstName);
console.log("Second Name :-  ", SecondName);


// Heap Memory :- Heap Memory Stores Only Non-Primitive Values.
// Arrays , Object and Function
console.log("Heap Memory");
let UserOne = {
    id:1,
    name:"Akshar"
}
let UserTwo = UserOne
console.log("Before Updating User One Value :-" ,UserOne.name);

UserTwo.name = "Akshar Mandaliya"
console.log("After Updating User One Value :-" ,UserOne.name);
