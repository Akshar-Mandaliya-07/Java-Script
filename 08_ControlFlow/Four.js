// Break
let arr = [1,2,3,4,5]
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == 3){
        break;
    }
    else{
        // console.log(arr[i]);
    }
}

// Using Continue Statement
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == 3){
        continue;
    }
    else{
        console.log(arr[i]);
    }
}