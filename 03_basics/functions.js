// functions :- it is the package of many lines of code in a packed form
// ***********WE PACK MANY LINES OF CODE IN A SINGLE LINE WHICH IS CALLED FUNCTION so that whenever we need that MANY LINES OF CODES WE CAN CALL IT BY A SINGLE NAME CALLED FUNCTIONS    
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S"); 
console.log("H");
}

// sayMyName() // only by taking the function it will execute the things which are in teh functions


function addTwoNumber(number1, number2){  //  funtions k andar jo input lete hai usko PARAMETER kahte hai, here number1 and number2 hai
    //console.log(number1+number2);

    // let result = number1 + number2

    // console.log("Hitesh");

   // return result //return ke baad functon me koi bhi code kaam nahi karega

   return number1 + number2 // aisa karne se code ka space to bachega hi sath hi sathhume koi naya variable nahi declare karna parega

}

addTwoNumber(3, 4)  // jab function ko call kiya jata hai to ukse andar jo value hoti hai use ARGUMENT kaha jata hai

const result = addTwoNumber(3, 4)  //function ko hum variable bana ka bhi likh sakte hai call kar sakte hai

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined) //it will run only when condition is true in professional code we use this
    if(!username){                // In JS ! it make true to false and false to true
       // console.log("Please enter a username");
        return //retun ke baad is block me kuch print hi n ahi hoga
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("hitesh"))

// **************shopping cart concept************
// from user we get many argument due to which we have to give to parameter to add the total price of the items 

function calculatorCartPrice(...num1){  //here in ...num1 REST operator is used which means jo jo chig num1 ke jagah hua hai usko ek bundle me add kar do jisse wo array bana kar de deta hai
     //calculatorCartPrice(val1, val2, ...num1)  & console.log(calculatorCartPrice(200, 400, 500)); then the output will be [500,2003]
     return num1
}

//console.log(calculatorCartPrice(200, 400, 500,2003));

const user = {
    usrname: "hitesh",
    price: 190
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

 handleObject(user){
    username:"sam"
    price 299
 }

 const myNweARray =[200, 400, 100,]

 function returnSecondValue(getArray)
 return getarray[1]
 }

 //  console.log(returnSecondValue(myNweARray));
 console.log(returnSecondValue(myNweARray)); //or array will also be ptint
 console.log(returnSecondValue([200,300,408]));