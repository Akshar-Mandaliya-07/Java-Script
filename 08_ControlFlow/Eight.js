const arr = [1,2,3,4,5]
const newNumber = arr.forEach( (nums) => {
    // console.log(nums);
    return nums
})
console.log(newNumber);

// Filter Method
const newArray = arr.filter( (nums) => nums > 4 )
console.log(newArray);

const newFunction = function(){
    console.log("");
}
