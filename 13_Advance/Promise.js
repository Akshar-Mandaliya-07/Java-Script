let PromiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("Task Is Complete");
        resolve()
    },1000)
})
// then() method direct connection of resolve method
PromiseOne.then(function(){
    // console.log("Promise Consumed")
})



new Promise((resolve,reject) => {
    setTimeout(() => {
        // console.log("Task is Complete")
        resolve()
    },3000)
}).then(() => {
    // console.log("Promise Consumed")
})

const PromiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username : "Akshar Mandaliya"})
    },3000)
})
PromiseThree.then((user) => {
    // console.log(user)
})
// PromiseThree.then(function(user) {
//     console.log(user)
// })

let PromiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({email : "Aksharmandaliya@google.com" , password : "ak@google"})
        }
        else{
            reject("Something went wrong..")
        }
    } , 1000)
})
PromiseFour.then((user) => {
    console.log(user);  
    return user.email

}).then((email) => {
    console.log(email)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("My task is complete")
})