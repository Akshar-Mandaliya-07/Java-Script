// Revised Concept
// (function MyFunction(){
//     console.log("Inside MyFunction");
// })();

// (() => {
//     console.log("Inside MySecond Function");
    
// })();

// const MySecndd = (name) => {
//     console.log(`my name is ${name}`);
// }
// MySecndd("Akshar Mandaliya")



// const addTwo = (num1 , num2) => ({username : "Akshar"})
// console.log(addTwo(1,2));

// arr = [1,2,3,4,5]
// arr.forEach( function (num) {
//     console.log(num);
// } )
// arr.forEach( (num3)  => {
//     console.log(num3);
    
// })

// Filter Method :- For each loop not return any array element . so introduce filter method.
arr = [1,2,3,4,5,6,7,8,9,10]
const newNumber = arr.filter( (nums) => (nums > 4))
// console.log(newNumber);

arr1 = []
arr.forEach( (nums) => {
    if(nums > 0){
        arr1.push(nums)
    }
})
// console.log(arr1);

arr.forEach( function (nums) {
    if(nums > 0){
        // arr1.push(arr)
    }
})
console.log(arr1);

