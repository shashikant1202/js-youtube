// ******DATA TYPES(On the basis of how the data is stored and how we accesses it)

// 1. Primitive  --> 7 categories : String, Number, Boolean, Null, Undefined, Symbol(to make uniqueness), BigInt(larger vallues)


//  ********JS IS DYNAMIC TYPED LANGUAGE (means it doesn't require to define which type of variable it is)  But in Statically typed languages It required to mention the type of variables*********

const score =  100 
const scoreValue =  100.3 

const isLoggedIn = false
const OutsideTemp = null
let userEmail; //value undefined without even mentioned

console.log();

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //false


const bigNumber = 8974072348874678463879438467846n  // Number greater than 2^53


// 2. Non Primitive(Reference Type) -->  Array, Objets,Functions   [ their Data Types is called Functions and for functions its called Object-functions]
    // *****ARRAYS*******
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = { 
    name: "hitesh",
    age: 22,
}
//arrays aare written in square brackets

    // ******FUNCTIONS********

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof Symbol);


// ******************(To Master JS OBJECTS AND WEB/BROWSER EVENTS)*******************

// you can get types of operator in ECMA vaues docs