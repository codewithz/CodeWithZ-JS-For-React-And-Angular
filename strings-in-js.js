const name='Thomas'

const city="Mumbai"

console.log(name,"lives in",city)

const paragraph=`

Variable by definition is how you store values which can be changed later on.
 
When dealing with variables in JavaScript you must have heard about the keyword var which was used extensively (as it was the only way to declare a variable in JavaScript before ES6) and in latest versions we have got the option of let and const .
`

console.log(paragraph)

const nameOfEmployee='Thomas'
const company='Code With Z'
const employeeCode='CWZ0001'

//Thomas works for Code With Z, his employee code is CWZ0001

const line=name+' works for '+company+', his employee code is '+employeeCode
console.log(line)

const iLine=`${name} works for ${company} ,his employee code is ${employeeCode}`
console.log(iLine)