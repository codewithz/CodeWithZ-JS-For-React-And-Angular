const person={
    name:"Zartab Nakhwa",
    age:33,
    blog:"www.codewithz.com",
    letsCode(){
        console.log("Start Coding")
    }
}

// console.log(person)

person.letsCode();

// ----------- Modify an Object 

person.degree="Masters in Information Technology"

console.log("------------------------------------")

// console.log(person)

console.log("------------------------------------")

person["color"]="Black"
// console.log(person)

console.log("------------------------------------")

let propertyName="city";
let propertyValue="Mumbai";

person[propertyName]=propertyValue;

console.log(person)

 propertyName="techStack";
 propertyValue=["Java","JS","Big Data","Cloud","Devops","AI"];

person[propertyName]=propertyValue;

console.log(person)
