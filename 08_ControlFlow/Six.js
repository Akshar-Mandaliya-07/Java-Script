const myObject = {
    id : 1,
    name : "Akshar",
    city : "Ahmedabad"
}
for (const element in myObject) {
    console.log(`Key is :- ${element} and Value is :- ${myObject[element]}`);
}

const arr = [1,2,3]
for (const key in arr) {
    console.log(`${key} and value is :- ${arr[key]}`);
    
}

// for in loop is not work in Map.
// const map = new Map()
// map.set(1,"a")
// map.set(2,"b")
// for (const key in map) {
//     console.log(key);
// }