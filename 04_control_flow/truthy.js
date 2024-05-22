const userEmail = []

if (userEmail) {
    console.log("got user email");
} else{
    console.log("Don't have user");
}

// falsy values
//these are falsy values which will be always false

// false, 0, -0, BigInt 0n, "", null, undefined,NaN

//truthy values
// these will be always true
// "0"(string ke andar 0 hai), 'false', " " (string ke andar space), [](empty arrays) , {}(empty object), function(){} (jab function aise likha jata hai to bhi truthy value hota hai)


// detecting array is empty or not
if (userEmail.length === 0) {  
    console.log("Array is empty");
}


// detecting object is empty or not
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


//Nullish Coalescing Operator (???): null  & undefined

 //Is operatoe me sabse pahle sefty  check j=hota hai  jisme agar null ya undefined aa jaye to usko skip kar ke next value ya jo next valid value rahta hai usi ko execute kar deta hai

 // agar kabhi error aaye to hum use kis tarah handle kare usi pr ye  Nullish coalescing operator based hai

let val1;
// val1 = 5 ?? 10  // -----> 5
val1 = null ?? 10  // -----> 10 
// val1 = undefined ?? 15  // ------> 15
// val1 = null ? 10 ?? 15 // ------> 10

console.log(val1);

// Terniary Operator

// condition ? true : false

const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");



