let a = 300
// const b = 20
// var c = 30

// {} is called scope in function , if , else etc but in object it  is object declaration

if (true) {           // if ke andar jo code likha hai use kahte hai block scope and iske bahar ke code ko kahte hai global scope
    let a = 10 
    const b = 20
    // var c = 30/
    console.log("INNER: ", a);   //block scope  // inside the curly braces
}


console.log(a); // global scope  // outside the {}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];   
// }

// browser ke console aur code editor ka global space diffrenrt hota hai but  

// console.log(b);
// console.log(c);  //yaha par var jo if ke andaar hai wo bahar bhi c ka value de raha hai jo ki ek demerit hai isi karan we don't use var
