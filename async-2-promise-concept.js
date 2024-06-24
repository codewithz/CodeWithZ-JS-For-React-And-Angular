// const p=new Promise((functionToBeInvokedWhenPromiseIsKept,functionToBeInvokedWhenPromiseIsBroken)=>{
//     //Asynchronius Task
//     console.log("Task to be performed")

//     const taskIsSuccessful=0;

//     if(taskIsSuccessful){
//         functionToBeInvokedWhenPromiseIsKept("Number:"+taskIsSuccessful)
//     }else{
//         functionToBeInvokedWhenPromiseIsBroken("Number is Zero")
//     }

// })

const p=new Promise((resolve,reject)=>{
    //Asynchronius Task
    console.log("Task to be performed")

    const taskIsSuccessful=20;

    if(taskIsSuccessful){
        resolve("Number:"+taskIsSuccessful)
    }else{
        reject("Number is Zero")
    }

})

// Promise is Asynchronous

// p
// .then((valueReturnedWhenPromiseIsKept)=>{
//     console.log("Promise is Kept")
//     console.log(valueReturnedWhenPromiseIsKept)
// })
// .catch((valueReturnedWhenPromiseIsBroken)=>{
//     console.log("Promise is Broken")
//     console.log(valueReturnedWhenPromiseIsBroken)
// })

p
.then((value)=>{
    console.log("Promise is Kept")
    console.log(value)
})
.catch((error)=>{
    console.log("Promise is Broken")
    console.log(error)
})


