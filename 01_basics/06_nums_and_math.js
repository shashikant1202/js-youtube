// Js me jo default hote hai wo hamesha Captail letter se suru hote hai 
const score = 400
console.log(score); // -------> 400 //js can automatically detect the data types but we can also define it

const balance = new Number(100) //exclusively define the object type which is the number
console.log(balance);  // ---------> [Number: 100]

console.log(balance.toString()); // ---> 100  // number to string

console.log(balance.toString().length); // ----> 3 //here we got the length of the convertd string from number

console.log(balance.toFixed(2)); // -----> 100.00 // it gives the precision value  means VALUE IN DECIMAL POINTS // here 2 gives the precision value till 2 decimal point

const otherNumber = 123.8987

console.log(otherNumber.toPrecision(4)); // ----> 123.9 // it also gives the precise value upto the given digits in the  .toPrecision from left(starting) side of the number

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // ------> 10,00,000// by default it is in the US standard but we can change it to our standard 'en-IN' 
//us standars 100,000,000  INDIAN standard 1,00,00,000 we make like this by toLocaleString

Number  // put it in the cosole of browser insepct
Number.MAX_VALUE   // it will give the maximum value of a number can be possible is 
Number.MAX_SAFE_INTEGER // it will give the maximum integer which can be stored

console.log("FROM HERE MATHS FOR JS IS STARTED");
 //   *********************** MATHS **************************

 //In js math library is automatically pre installed so we only need to activate by using Math in console log



console.log(Math);
console.log(Math.abs(-4));  //from negative value to positive value
console.log(Math.round(4.6));  //round of the number
console.log(Math.ceil(4.2));  // ---> 5  put the upper value of the number
console.log(Math.floor(4.2));  // ---> 4 put the down value of the number
console.log(Math.min(4,3,5,1));  // ---> 1 it find the minimum value of the array
console.log(Math.max(4,3,5,1));  // ---> 5 it find the maximum value of the array

console.log(Math.random()); // it Returns a pseudorandom number between 0 and 1
console.log(Math.random()*10 + 1); // multiply by 10 to higher value & we add 1 to it to manage the no. which is like 0.01443 to avoid the output to be 0 

console.log(Math.floor(Math.random()*10) + 1); // to get the lower value 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //to get the value which is between the min and max number
