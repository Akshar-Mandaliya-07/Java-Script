// Declare Function
function MyFunction(){
    console.log("My Function");
}
// MyFunction()

// Add Two Number
function AddTwoNumber(number1 , number2)
{
    return number1 + number2
}
const result = AddTwoNumber(10,20)
// console.log(result);

function LoginMessage(username)
{
    return `${username} just Logged in`
}
const ans = LoginMessage("Akshar")
// console.log(ans)

function LoginUserMessage(userName){
    if(!userName){
        console.log("Please Enter Valid name");
        return
    }
    return `${userName} Just Logged in`
}
// console.log(LoginUserMessage())

function ShoppingCart(val1,val2,... num1){
    return num1;
}
// console.log(ShoppingCart(200,400,500));

// console.log(ShoppingCart(200,400,500,2000));

const MyObject = {
    id : 1,
    name : "Akshar"
}
function myFunction2(MyObj){
    console.log(`id is ${MyObj.id}`);
    
}
myFunction2({
    id : 1,
    name : "Akshar"
})

const myArray = [1,2,3,4,5]
function returnSecondElement(getAray){
    //return getAray[1]
}
console.log(returnSecondElement([myArray]))

