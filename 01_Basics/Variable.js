const name = "Akshar Mandaliya"
console.log("Name is :- " , name)

/* name = "Computer"
console.log(name) */

// Let
console.log("Using Let :- ")
let personId = 1
{
    let personId = 2 // Let Keyword Allows To Declare Same Variable in Different Blocks.
    console.log("Updating Value :- " , personId)
}
console.log("Consistent Value :- " , personId)
console.log("Using Var :- ")

// Var
var personName = "akshar mandaliya"
{
    var personName = "AKSHAR MANDALIYA"
    console.log("Updating Value :- " , personName)
}
console.log("Inconsitent Value :- " , personName)

console.table([personId,personName])
