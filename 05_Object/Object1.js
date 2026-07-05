// In Java Script Objects are Non Primitive Data types.
// Objects Stores key-value pairs.
// Object are Mutable. Means you can add , update and delete operation performed after object creation.
// Objects store any data type like array , function and objects.

// Objects declare are two ways : 1) Single ton 2) non single ton

// 1) Single ton means create object using object literal. (Modern ways)
const MyObject = {
    id : 1,
    name : "Akshar Mandaliya",
    city : "Surendranagar"
}
// console.log(MyObject);
MyObject.id = 2
// console.log(MyObject.id);
MyObject.education = "Computer Engineering"
// console.log(MyObject);

delete MyObject.education
// console.log(MyObject);

// Second Way to Create Object is Using new Keyword.
const MyObject1 = new Object()
MyObject1.id = 1
MyObject1.name = "Akshar"
// console.log(MyObject1);

const MyObject2 = {} // Empty Object
MyObject2.id = 10
console.log(MyObject2);







