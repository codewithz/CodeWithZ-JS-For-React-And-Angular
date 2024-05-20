const state='MH'


const address={
    city:'Mumbai',
    state: 'Maharashtra',
    pincode:400001,
    country:'India'
}

// Traditional Way 

// const city=address.city;
// const st=address.state;
// const pincode=address.pincode;
// const country=address.country;

//Object Destructuring

const {city,state:st}=address;

const {pincode,country}=address;


console.log(city,"--",state,'--',st,'--',pincode,'--',country);


console.log("----------------------- function and destructuring ------------")
function displayAddress(address){
    console.log(address.state);
    console.log(address.city);
    console.log(address.pincode);
}

displayAddress(address)


function displayAddressNewWay({state,city,country,pincode}){
    console.log("-------- Inside function---")
    console.log(city,'--',state,'--',country,'--',pincode);
}

displayAddressNewWay(address)