console.log("----------------Var-----------------------")

function understandVar(){
    for(var i=1;i<=10;i++){
        console.log("I=",i)
    }

    console.log("Outside Loop")
    console.log("I=",i)
}

understandVar()

// var ---> let or const

console.log("---------------let ------------------")

function understandLet(){
    for(let i=1;i<=10;i++){
        console.log("I=",i)
    }

    // console.log("Outside Loop")
    // console.log("I=",i)

    let name="Code With"
    console.log(name)
    name=name+" Z";
    console.log(name)
}

understandLet()

console.log("---------------- const ------------------")

const employeeCount=2000;
console.log(employeeCount)

employeeCount=employeeCount+1000;

// employeeCount=employeeCount+1000;
//              ^

// TypeError: Assignment to constant variable.


// console.log("I=",i)
// ^

// ReferenceError: i is not defined