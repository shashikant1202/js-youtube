//if

// if (true) {   //if true then go into it
    
// }

const isUserLoggedIn = true

if (2 == "2") {     
    console.log("executed");
}


// operator -----> 
// < // less than
// >  // greater than 
// <= // less than or equal to 
// >= // greater than or equal to
// == // Equal to,   It only checks the value inside or outside of the ".."
// === // strict equal, It checks the data type also
// !=  // not equal to 

// const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");
// } else{
// console.log("temperature is greater than 50");

// }
// console.log("execute");

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user powewr: ${power}`);
// }

// console.log(`user powewr: ${power}`);  // it is out of the scope of the if so it will not execute

// var is a global scope it will also work out of the local / block scope

// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"); // don't write like this

// if (balance < 500) {
//     console.log("less than");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// }  else {
//     console.log("less than 1200");
// }

const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
}
