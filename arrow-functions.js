
function sayHello(){
    console.log("Hello to Arrow Functions");
}

sayHello();


const myFirstArrow=()=>{
    console.log("Hello to Arrow Functions");
}

myFirstArrow()

function squareMe(number){
    return number*number;
}


(number)=>{
    return number*number;
}

//  If your arrow function have a single parameter 
// we can skip the ()

number=>{
    return number*number;
}

// if your function contains a single statement
//  we can get rid of {} and return keyword 
// {} and return are always either together or absent

//  if the statement is an executable statement console.log -- it will execute
//  if the statement is a value --- it will be returned

const arrowSquare=(number)=>number*number;



function addMe(a,b,c){
    return a+b+c;
}


(a,b,c)=> a+b+c;


function calculation(x,y,z){
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}

(x,y,z)=>{
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}

