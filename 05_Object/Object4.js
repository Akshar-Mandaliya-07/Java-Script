// Without Destructuring
const MyObject1 = {
    id : 1,
    name : "Akshar",
    email : "akshar@google.com"
}
/* const id = MyObject1.id
const name = MyObject1.name */
// console.log(id , name);

// with Destructure
const {id , name} = MyObject1
// console.log(id , name);
 
// Rename Variable
const {name : userName} = MyObject1
console.log(userName);

// Default Values
const {age = 15} = MyObject1
console.log(age);

console.log(MyObject1);
