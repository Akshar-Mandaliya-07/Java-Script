function MyFirstFunction(){
    const id = 1
    function MySecondFunction(){
        const name = "Akshar Mandaliya"
        console.log("Outside Function :- " ,id);        
    }
    //console.log("Name is :- " , name) // Outer Function can not access the inside function properties.
    MySecondFunction()
}
// MyFirstFunction()

if(true){
    const name = "Akshar"
    if(name === "Akshar"){
        const id =  1
        // console.log(id + name);
    }
    // Error :-  console.log("Inside Function :- ",id); 
}
// Error :- console.log("Outside Function :- ",name);

// Create Function Has Two Ways :- 
console.log(MyNewFunction1(5));
function MyNewFunction1(num){
    return num + 1
}

//console.log(ans(5)); // Can not Use Ans Function Before Function Initialization
const ans = function(value){
    return value + 1
}


