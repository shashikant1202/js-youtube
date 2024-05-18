const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to the website`);  // yaha par this ka use kiya gaya hai because this ka use current context ke liye kiya jata hai
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" // current context is changing here , so instead of hitesh it will print sam //jitni baar current context change kiya jayega utni baar wo same function ko repeat karega
// user.welcomeMessage()

// console.log(this); //if this run only then this will give current context of blank {} curly braces
 

// In earlier days the java script engin which runs it are only present browser in which they give current context as a Window but in now days there are many engines BUN , DINO , NODE

// Browser ke andar jo global object hai wo hai WINDOW OBJECT 




// *********now come to the main topic************




// function chai(){   // this function will give access to many info about function  
//     let username = "hitesh"
//     console.log(this.username); // after adding username  this functin will give undefined without username it will give access to many info about function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  // undefined
// }

// chai()

// **********Arrow Function**********


// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


// Syntax of arrow function

// const addTwo = (num1 + num2) => {  // {} rahega to return keyword use hoga // explicit return
//     return num1 + num2 
// }

// const addTwo = (num1 + num2) =>  (num1 + num20) 
  // implicit return (without curly braces and return keyword)

// const addTwo = (num1 + num2) =>  (num1 + num2)
 // agar {}nahi hai to return keyword use nahi hoga   
    
 // const addTwo = (num1 + num2) =>  (num1 + num2) // jab object return karna ho tab
                             
 // jab object return karna hota hai tab kya karte hai
 const addTwo = (num1 , num2) =>  ({username: "hitesh"})  

 console.log(addTwo(3,4))

 // will be discussed in loop
//  const myArray = [3,5,7,2,5,]

//  myArray.forEach(function () {} )

//  myArray.forEach( () => ())
