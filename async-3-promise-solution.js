console.log("Before")

const promise=getUser(1001);

promise
    .then((gitUser)=>{
        console.log(gitUser);
        const reposPromise=getReposForGitUser(gitUser);
        return reposPromise;
    })
    .then((repos)=>{
        console.log("Repos for User are: ",repos)
    })
    .catch((error)=>{
        console.log(error)
    })






function getUser(id){

    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Reading id from the database...")
            const gitUser={id:id,username:'codewithz'}
             resolve(gitUser);
            //  reject(new Error("Some issues while fetching username from db"))
        },3000)
    });

    return p;
  
}

function getReposForGitUser(gitUser){

    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching repos from github.com for ",gitUser.username,"...")
            const repos=['repo1','repo2','repo3']
            // resolve(repos);
            reject(new Error("Some issues while fetching repos from github server"))
        },5000)
    });

    return p;
   
}