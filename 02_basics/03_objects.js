// object declaration -----> (i). Literal (ii). Constructor
// singleton (by constructor   )
// not a singleton (by literals)
//js is all about objects and DOM events

// **************Object Declaration*****************

//Object.create  //constructotr

const mySym = Symbol("key1")  // IQ = take symbol and add it into the keys of object and and print it

const JsUser = {

    name: "Hitesh",  //here the key name is treated as "name" it is like string

    "full name" : "Hitesh Choudhry",

    //mySym: "mykey1",  //here it is not used as a symbol
    [mySym]: "mykey1", // now mySym is define as symbol

    age: 18,  //har objects me keys and values ke baad comma lagta hai 

    location: "halsi",

    email: "shashi@google.com",

    isLoggedIn: false,

    lastLoginDays: ["monday","saturday"]
}  //Object literals


// myArray = ["h","i"]
// myArray[1]

 //*************Now Accessing the value of objects*********** */  
 // dot notation & square bracket 
// Most of the time we access the objects by the dot like this ---> console.log(JsUser.email); , in some rare cases use square bracket and also like symbol --->console.log(JsUser[mySym])

console.log(JsUser.email); 

console.log(JsUser["email"]);   // jab double quote ke andar wale method se objects print rahe to jis key & values ko le rahe hai usko usi data tyes ke anusar likho jaise wo likha jata hai


console.log(JsUser["full name"]);  //here  will not be full name won't be printed with the help of dot(.) method ( JsUser."full name" )

// console.log(typeof JsUser.mySym);
console.log(JsUser[mySym])

// ***************Changing the values of objects******** or we say it overweriting of objects

JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser)  //furter Inputs In JsUser cant be changed

JsUser.email = "hitesh@microsoft.com" // we can see in the output email is not changed after the freezing of email 


console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); // in the (` `) -----> it is string interpulation  // we have to put (this)to refer the different objects 
}

// console.log(JsUser.greeting);  // it gives function return back  this is the only reference of function
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());