// Immesiately invoked funtions expressions(IFFE)
// used to execute the file which we have written immediately and it also make another scope
// to also prevent the code from global scope pollution 


//******normal function */
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// ********IFFE ********  //JS me IFFE ko end karne  ke liye semi-colon(;) ka use kiya jata hai

(function chai(){
    //named iffe
    console.log(`DB CONNECTED`);
})();

// ********Arrow function in the for of IFFE

(
    () => {
        //unnamed iffe
        console.log(`DB CONNECTED`);  // ye wala code nahi chal raha hai
    }
) ()

(
    (name) => {

        // iffe jisme argument bhi pass kiya gaya hai
        console.log(`DB CONNECTED ${name}`);  // ye wala code nahi chal raha hai
    }
) ('hitesh')//function yaha par execute kar raha hai aur argument pass kar raha hai