const numbers=[1,2,3,4,5,6,7,8]

function doubleMe(number){
    return number*2;
}

const doubledNumbers=numbers.map(doubleMe);

console.log("Original:",numbers);
console.log("Doubled:",doubledNumbers);

const squaredNumbers=numbers.map(number=>number*number)

console.log("SN:",squaredNumbers);

// --------------------------------------------

const users=[
    {id:1,name:'Tom',dept:"IT"},
    {id:2,name:'Mariam',dept:"IT"},
    {id:3,name:'Elizabeth',dept:"Finance"},
    {id:4,name:'Leanord',dept:"Finance"}
];


{/* <div>
    <h1>Name</h1>
    <h2>Dept</h2>
    <p>ID</p>
</div> */}

function transformToComponent(user){
    return `
    <div>
    <h1>${user.name}</h1>
    <h2>${user.dept}</h2>
    <p>${user.id}</p>
</div>
    `
}

const transformedUsers=users.map(transformToComponent);

console.log(transformedUsers);