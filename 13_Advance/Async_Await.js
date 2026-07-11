const PromiseOne = new Promise(function(resolve,reject) {
    setTimeout(() => {
        // console.log("Hello Everyone...")
        let error = true
        if(!error){
            resolve(
                MyObject = {
                    id : 1,
                    name : "Akshar Mandaliya"
                }
            )
        }
        else{
            reject("Something Went Wrong!")
        }
    })
})
async function PromiseConsume(){
    try{
        const respose = await PromiseOne
        console.log(respose)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Code is Running...")
    }
}
PromiseConsume()
// PromiseOne.then((user) => {
//     console.log(user);
// }).catch((error) => {
//     console.log(error);
    
// })
