// let a = 10 
// const b = 20
// var c = 30

// {} is called scope in function , if else etc but in object it  is object declaration

if (true) {           // if ke andar jo code likha hai use kahte hai block scope and iske bahar ke code ko kahte hai global scope
    let a = 10 
    const b = 20
    var c = 30
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
     
}

// browser ke cosole codimg envitomen6 g0 [[me  global space diffrenrt hota hai but  

// console.log(a);
// console.log(b);
console.log(c);  //yaha par var jo if ke andaar hai wo baharbhi c ka value de raha hai jo ki ek denerit hai isi karan we dont use var
