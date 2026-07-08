const num = [1,2,3,4,5,6,7,8,9,10]
const num1 = []
// const ans = num.map( (value) => {
//     return value += 10
// })
// console.log(ans);

// First Multiply with 10 and after add with 1
// console.log(num);
const answer = num.map( (value) => value * 10).map( (value) => value + 1).filter( (value) => { return value >= 30}) // Is called Chaining.
console.log(answer);




// const ans = num.filter( (value) => {
//     return value += 10
// })

// num.forEach( (value) => num1.push(value + 10) )
// console.log(num1);
