// for of // array specific loop 
 // array and object are very powerfull in js 

// ["", "", ""]
// [{},{},{}]



//for of

// for (const iterator of object) {   //yaha par object ka matlb mai kis chig par loop lagana hai

// iterator is name given to jispar hum loop lagayenge(object)
    
// }


const arr = [ 1,2,3,4,5]

for (const num of arr)  
{ 
    console.log(num);
    
}

const greetings = "Hellow World"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}


//Maps   // Used for unique values , // It doesn't repeat the same value // will be in the same order in which it is written in the code

const map = new Map()
map.set('IN',"India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('Fr', "France")

console.log(map);

// for (const key of map) {  // agar aise for of rahega to map ka value alag alag aayega
for (const [key, value] of map) {  // yaha par [key, value] ka use kar ke array ka destructure kiya gaya hai
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


