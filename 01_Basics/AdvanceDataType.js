// Primitive
let mySymbol = Symbol("12%4323")
console.log(typeof mySymbol);

let BigNumber = 5433453452342342342342342342342343454765784678653467864756784675678346573784576724657643785786473856724656784656247657467562784578n
console.log(typeof BigNumber);

// Non Primitive :- Arrays , Function , Objects
const marks = [100,99,98,97]
for(let i = 0 ; i < 4 ; i++){
    console.log(marks[i])
}

console.log(typeof marks);


const MyObject = {
    id : 1,
    name : "Akshar", // Object Create
}
console.log(typeof MyObject);


function My(a , b , c){
    //console.log(a + b + c)
    return a + b + c
}
let ans = My(10,20,30)
console.log(typeof My);

console.log(ans);

