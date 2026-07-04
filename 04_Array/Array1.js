// In Java Script Array Allows to Store the Different Types of Element.
let myArr = [1,2,3,4,5,"Akshar",true]
console.log("Type of Array is :- ",typeof myArr);
console.log("Length of Array :- ",myArr.length);
console.log("Array Element :- ",myArr);
console.log("Access Array Element :- ",myArr[0]);

// Second Way to Declare Array
/* const newArray = new Array(1,2,3,4,5)
console.log(newArray); */

// Push Element in Array
myArr.push("Akshar Mandaliya")
console.log("After Push Element :- ",myArr);

// Pop Element :- Remove Last Element
myArr.pop()
console.log("After Pop Element :- ",myArr)

// Unshift
myArr.unshift("Software Engineer")
console.log("After Un-Shift :- ",myArr); // Push Element First And Traverse Element in Right Side

myArr.shift()
console.log("After Shift :- ",myArr); // Remove First Element in Traverse Element in Left Side


console.log("Find Index of Element :- ",myArr.indexOf(1)); // Return Index of Element
console.log("Check Element Present :- ",myArr.includes(1)); // If Present then return true

// Join Method() :- Adds alls the element of array into a string.
const NewMyArray = myArr.join()
console.log("Using Join Method :- ", typeof NewMyArray , " ",  NewMyArray);

// Slice and Splice :- Important 
console.log("A " , myArr);
let Myn1= myArr.slice(1,3)
console.log(Myn1);
console.log("B " , myArr);

let Myn2 = myArr.splice(1,3)
console.log(Myn2);
console.log("C " , myArr);
 
// Difference :- If you can use Slice method then does not affect to the Main Array
// But if you can use the Splice() Method then remove the element between starting to ending index.



