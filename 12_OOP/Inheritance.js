// Single Level Inheritance
// class MyFirstClass
// {
//     message()
//     {
//         console.log("Inside Firstclass");
//     }
// }
// class MySecondClass extends MyFirstClass
// {
//     display()
//     {
//         let a = 12
//         console.log(a);
//     }
// }
// let print = new MySecondClass()
// print.display()
// print.message()



// *************************Multi-level Inheritance***************************
// class Firstclass
// {
//     message(){
//         console.log("inside message method")
//     }
// }
// class secondclass extends Firstclass
// {
//     display(){
//         console.log("inside display method")
//     }
// }
// class thirdclass extends secondclass
// {
//     show(){
//         console.log("inside show method")
//     }
// }
// let result = new thirdclass()
// result.display()
// result.show()
// result.message()


// *************************Hierarchical Inheritance ************************
// class MyFirstClass{
//     display(){
//         console.log("inside display method")
//     }
// }
// class MySecondClass extends MyFirstClass{
//     message(){
//         console.log("inside message method");
//     }
// }
// class MyThirdClass extends MyFirstClass{
//     show(){
//         console.log("Inside show method")
//     }
// }
// let result1 = new MySecondClass()
// let result2 = new MyThirdClass()
// result1.message()
// result1.display()

// result2.display()
// result2.show()


// **************************** Hybrid Inheritance *****************************
class MyFirstClass{
    display(){
        console.log("inside display method")
    }
}
class MySecondClass extends MyFirstClass{
    message(){
        console.log("inside message method");
   }
}
class MyThirdClass extends MySecondClass{
    show(){
        console.log("Inside show method")
    }
}
class MyFourthClass extends MySecondClass{
    text(){
        console.log("Inside text Method")
    }
}
let first = new MyThirdClass()
first.show()
first.message()
first.display()

let second = new MyFourthClass()
second.text()
second.message()
