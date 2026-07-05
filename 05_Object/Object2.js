const MySymbol = Symbol("Hiii")

const MyObject = {
    id : 1,
    "Full Name" : "Akshar Mandaliya",
    [MySymbol] : "Hii MySymbol",
    email : "akshar@google.com",
    color : ["Red","Green","Blue"],
    Employee:{
        EmployeeId : 1,
        EmployeeName : "Salman Khan"
    },
    MyFunction : function(){
        console.log("My Function");   
    }
}
// console.log(MyObject);
// console.log(MySymbol);
console.log(MyObject[MySymbol]);
console.log(MyObject["id"]);
console.log(MyObject["Full Name"]);


