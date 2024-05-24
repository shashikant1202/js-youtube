let score = true

console.log(typeof score);  // ------> boolean
console.log(typeof(score));  //----------> boolean

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //-------> number
console.log(valueInNumber); // -----> 1

// "33" ==> 33
// "33abc" ==> NaN
// true => 1: false => 0


let isLoggedIn = "0"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);  // ---------> true

// 1 ==> true; 0==> false
// "hitesh" ==> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);  // ----------> 33
console.log(typeof stringNumber);  // --------> string


// ******************* OPERATIONS *************************

let value = 3
let negValue = -value
console.log(negValue); // ----------> -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);  //----------> hello hitesh

console.log("1" + 2);  // --------> 12
console.log(1 + "2"); //--------> 12
console.log("1" + "2"); //--------> 12
console.log("1" + 2 + 2); // -------> 122 //conversion is done on the basis of first data types in the console 

// //if first Data Types of operation is string then the whole operation will be treated as same data types   
    
console.log(1 + 2 + "2");    // ----------> 32
// //  if string is in last then previous operation will be done on the basis of their data types

console.log((3 + 4) * 5 % 3); // ---------->  2


console.log(+true); //-------> 1
console.log(+""); //--------> 0
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCenter = 100
++gameCenter;
console.log(gameCenter);  //----------> 101


