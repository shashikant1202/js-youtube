// console.log(2>1)
// console.log(2>= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)


// console.log("2" > 1);
// console.log("02" > 1);


       // ************CONFUSING CONVERSION**************
     // *****Generally We Avoid These Type Conversion*****

console.log(null > 0);
console.log(null == 0); //comparison 
console.log(null >= 0); //here null is getting converted into 0

console.log(undefined == 0); 
console.log(undefined > 0); 
console.log(undefined < 0); 

//  ===   --> Strict check  By using (===) we strictly check the data types of this operation also because by using  (==) this conversion is being done 

console.log("2" === 2);