// Asynchronous Function
// Means Java script does not wait for any setTimeout() . that prints the next statement.
console.log("Start Execution");
setTimeout(() => {
    console.log("Inside Arrow Function");
},5000)
console.log("End Execution");

