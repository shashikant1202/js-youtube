const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    switch: "switch by apple"
}

// for in

// for (const key in myObject) {  // yaha par keval keys print hoga isse 
//     console.log(key);
// }

for (const key in myObject ){
   console.log(`${key} shortcuts is for ${myObject[key]}`);
}

const programming = ["js", "rb", "pv", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


//trying for in  in map
const map = new Map()   // map iterable nahi hai jaise hum for in me likh rahe hai waise iterate nahi kiya jata hai

// map.set('IN',"India")
// map.set('USA', "United State Of America")
// map.set('Fr', "France")
// map.set('Fr', "France")
// for (const key in map) {
//     console.log(key);
// }