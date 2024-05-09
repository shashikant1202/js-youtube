//arrays
// () ------> PARENTHESIS, {}  -----> CURLY BRACES, [] ----> BRACKETS

// *************** Array Declration **********
const myArr = [0, 1, 2, 3, 4, 5] // js array ---> storing multiple items under a single variable.
// js array ---> resizable, can be different data types in a one variable.
//js array copy operation create SHAllOW copies(in which the change i made in the copied array will also be happen in original array) & DEEP copies(copied array and original are independent to each other) 

const myHeros = ["shaktiman", "naagraj"] //array can be declared like this

const myArr2 = new Array(1, 2, 3, 4) // //array can also be declared like this

console.log(myArr[1]); // Indexes(position) in Js starts from 0 then 1 then 2 like this and last index is total length - 1


// **************Array Methods******************

myArr.push(6) //it is used to insert values in the array
myArr.push(7)
console.log(myArr); //printed the added arrays

myArr.pop()  // last value from the array will be removed
console.log(myArr);

myArr.unshift(9)  //add the value into the array to their starting  (....) -----> iske andar jo rahta hai use hum  arguments ya parameter
console.log(myArr);

myArr.shift()  // used to remove the starting value from the array
console.log(myArr);

console.log(myArr.includes(9)); // to check  value is included in the array or not
console.log(myArr.indexOf(4));  // position of that value in the array

const newArr = myArr.join() //adds all the elements of the array into the strings or changes the array into the strings

console.log(myArr);

console.log(typeof newArr);


// //*************slice, splice****************

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // it gives the values of array from the starting of the given reference/position  to the previous value of the given position/reference  //extract parts of arrays or strings without modifying the original data
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //it prints the arrays after removing the specified position ......or.......  method modifies arrays by adding or removing elements at specific positions.
console.log("C ", myArr);
console.log(myn2);
