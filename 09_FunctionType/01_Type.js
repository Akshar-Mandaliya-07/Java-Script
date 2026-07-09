// Synchronous Function 
// Means Execute code line by line. Next Line Execute Must Before Execution.
function MyFunction1(){
    console.log("Inside MyFunction 1");
}
console.log("Start");
MyFunction1()

function MyFunction2(){
    console.log("Inside MyFunction 2");
}
MyFunction2()
console.log("End");
