let a = 300
// const b = 20
// var c = 30

// {} is called scope in function , if , else etc but in object it  is object declaration

if (true) {           // if ke andar jo code likha hai use kahte hai block scope and iske bahar ke code ko kahte hai global scope
    let a = 10 
    const b = 20
    // var c = 30/
   // console.log("INNER: ", a);   //block scope  // inside the curly braces
}


//console.log(a); // global scope  // outside the {}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];   
// }

// browser ke console aur code editor ka global space diffrenrt hota hai but  

// console.log(b);
// console.log(c);  //yaha par var jo if ke andaar hai wo bahar bhi c ka value de raha hai jo ki ek demerit hai isi karan we don't use var

// nested function me child function parent function ko access kar pata hai

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website);   yaha par local scope wala value global scope me execute nahi hoga

    two()

}

one()

if (true) {
    const username = "hitesh"
      if (username === "hitesh") {
            const website = " youtube"
           console.log(username + website);

        }
        // console.log(website);  //local scope se bahar nahi aayega

}
// console.log(username); // scope ke bahar ye execute nahi hoga

// ***********************INTERESTING*******************
        // same chig/function ko 2 diff diff tarike se likh hai

console.log(addone(5)); // ye line execute ho jayega bina pahle function ke declaration ke pahle hi 

function addone(num){
    return num + 1
}


// console.log(addTwo(5));   // ye line execute nahi hoga because ye line pahle hi ek const me hold kar diya hai jikse karan bina pahle function ke declaration ke execute nahi hoga
const addTwo = function (num) {
        return num + 2
}

console.log(addTwo(5)); 