console.log("Before")

getUser(1001,callbackFunctionWhereTheIdIsReturned)

console.log("After")





function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading id from the database...")
        const gitUser={id:id,username:'codewithz'}
         callback(gitUser);
    },3000)
}

function callbackFunctionWhereTheIdIsReturned(gitUser){
    console.log("This is my callback function...")
    console.log(gitUser)
    const repos=getReposForGitUser(gitUser,callbackFunctionWhereTheReposAreReturned);
    console.log(repos)
}

function getReposForGitUser(gitUser,callback){
    setTimeout(()=>{
        console.log("Fetching repos from github.com for ",gitUser.username,"...")
        const repos=['repo1','repo2','repo3']
        callback(repos);
    },5000)
}

function callbackFunctionWhereTheReposAreReturned(repos){
    console.log("Repos:",repos)
}

//Solutions

// 1. Callback
// 2. Promises
// 3. Async Await