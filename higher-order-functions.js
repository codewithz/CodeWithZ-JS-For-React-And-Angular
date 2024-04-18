const numbers=[1,2,3,4,5,6,7,8]

const evenNumbers=[];

for(let index=0;index<numbers.length;index++){
    const number=numbers[index];

    if(number%2==0){
        evenNumbers.push(number);
    }
}

console.log("Original:",numbers);
console.log("Even Numbers:",evenNumbers)

// ----------Higher Order Function-----

// 1. What --- Filter -- Array.filter

// 2. How -- Filter Odd Numbers -- no --

function filterOdd(number){
    return number%2==1;
}

const oddNumbers=numbers.filter(filterOdd);

console.log("Odd Numbers:",oddNumbers)




const evenNumbersWithArrow=numbers.filter((number)=>number%2==0)

console.log("Even with +>",evenNumbersWithArrow)

