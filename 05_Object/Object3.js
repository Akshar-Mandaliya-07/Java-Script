const Myobject1 = {
    id : 1,
    name : "Akshar Mandaliya",
    email : "akshar@google.com",
    city : "Mumbai"
}
// console.log(Object.keys(Myobject1));
// console.log(Object.values(Myobject1));
// console.log(Object.entries(Myobject1));

// console.log(Object.);

// Java Script Allow Duplicate Keys
const MyDuplictaeObject = {
    id : 1,
    id : 2,
    id : 3
}
// console.log(MyDuplictaeObject);


// Assign() Method
const MyNewObject1 = {
    a : 1,
    b : 2
}
const MyNewObject2 = {
    c : 5,
    d : 3
}
const MyNewObject3 = Object.assign(MyNewObject1,MyNewObject2)
// console.log(MyNewObject3);


// Create() Method :- Is Create new Object Using Existing Object

const MyObj1 = {
    display(){
        console.log("Hello Guys!");
        console.log(`My name is ${this.name}`);
        
    }
}

const MyObj2 = Object.create(MyObj1)
MyObj2.name = "Akshar Mandaliya"
// MyObj2.display()

// Freeze() Method :- you can apply freeze method after can not change.
const MyNewOb1 = {
    id : 1
}
Object.freeze(MyNewOb1)
MyNewOb1.id = 2
// console.log(MyNewOb1);


// hasOwn() Method is used to check particular ket exist in object
console.log(Object.hasOwn(Myobject1,"id"));


