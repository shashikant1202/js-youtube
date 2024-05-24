
const name = "hitesh"
const repoCount = 50
// console.log(name + repoCount + " Value"); // --------> hitesh50 Value   // is type se humlog ab strings nahi likhte hai 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //by using STRINGS INTERPULATION we can add/inject strings in the placeholder directly  // {`in between the backticks`}      
//strings ko ab hum iss naye modern tarike se likhte hai 
// We can add methods in strings by putting (.) after string names  

const gameName = new String('hitesh-hc-com') // *edited hiteshhc
//here, This is the key value pairs of strings
// Key: Value
// 0: "h"
// 1: "i"
// 2: "t"
// 3: "e"
// 4: "s"
// 5: "h"
// 6: "h"
// 7: "c"
// length: 
console.log(gameName[0]);  // ----------> h //by using this we can get the key frame or 0th position character from the gameName variable

console.log(gameName.__proto__); // by using this we get the objects from it BY applying (.) after the __proto__ like gameName.__proto__.toUpperCase  // We don't use it in modern days because of the performance implications , readability and maitainability

console.log(gameName.length);  //It gives the length of the variable  

// console.log(gameName.toUpperCase());  //it convert the variable into upper case  //original value doesn't changes ------> interview question

console.log(gameName.charAt(2)); //it gives the character at 2nd palce
console.log(gameName.indexOf('t')); // it gives the position of character

const newString = gameName.substring(0, 4) //it gives the character from 0th position to 3rd position means till before 4th position
console.log(newString);

const anotherString = gameName.slice(-8, 4) //it starts from -ve  means the no. which is -ve it will start from that -ve counting from start

console.log(anotherString);

const newStringOne = "   hitesh    " // irt will write as it is written

console.log(newStringOne);

console.log(newStringOne.trim()); ////remove the extra space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //replce the given input by giving specific  word 

console.log(url.includes('sundar'))

console.log(gameName.split('-')); //splitting on the basis of {-} //it forms array



// **************STRING METHOD****************
// BLINK  -----> No longer in use

// BOLD   -----> use to bold the character

//charAt()  ------> to get the character at specified position

// concat    ------> used to merge two or more strings into one strings

// constructor  ------> used to create and initialize an object within a class

// endsWiths  -----> used to determine whether a string ends with the characters of a specified string