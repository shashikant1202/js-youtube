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


//Nullish Coalescing Operator (???): null undefined


let val1;
val1 = 5 ?? 10

 


lpgtauer;

