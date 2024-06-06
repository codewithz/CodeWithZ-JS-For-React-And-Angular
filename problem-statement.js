console.log("Before")

const user=getUser(1001)
console.log(user)
console.log("After")

const repos=getReposForUser(user)



function getUser(id){
    setTimeout(()=>{
        console.log("Reading id from the database...")
        const gitUser={id:id,username:'codewithz'}
        return gitUser;
    },3000)
}

//Solutions

// 1. Callback
// 2. Promises
// 3. Async Await