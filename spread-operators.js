//  denoted by ...
// can be applied to object or arrays 
// arrays --- [...]
// objects -- {...}

const first=[1,2,3]
const second=[4,5,6]

const combined=[...first,...second]

console.log(first)
console.log(second)
console.log(combined)

// 1,2,3,a,4,5,6,b

const output=[...first,'a',...second,'b']
console.log(output)


const grades=['A','B','D','C']
console.log("Grades:",grades)
const sorted=[...grades].sort()
console.log("Sorted:",sorted)
console.log("Grades:",grades)


//objects 

const name={name:'Code With Z'}
const job={profile:'Corportate Trainer and Youtuber'}

const combinedObject={...name,...job}
console.log(combinedObject)

//React Component

{/* <ChildComponent data={abc} ...props> */}