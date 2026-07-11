const MyPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //console.log("Code is Runnind")
        reject("Resolved Successfully")
    } , 3000)
})
MyPromise.then(() => {
    console.log("Promise Consumed")
}).catch((error) => {
    console.log(error)
})