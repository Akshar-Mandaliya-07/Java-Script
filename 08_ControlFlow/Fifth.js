// For-of Loop
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}


const country = "India"
for (const name of country) {
    // console.log(name);
}

// Map
const map = new Map()
map.set(1,"a")
map.set(2,"b")
// map.set(2,"c")
// console.log(map.get(2));
for (const [key,value] of map) {
    console.log(key , " : " , value);
    
}


