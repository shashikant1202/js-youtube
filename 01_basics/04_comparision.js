console.log(2>1) // ------> true
console.log(2>= 1) // --------> true
console.log(2 < 1) // --------> false
console.log(2 == 1) // ----------> false
console.log(2 != 1)  // ---------> true


console.log("2" > 1);  // ----------> true
console.log("02" > 1);  // ---------> true

console.log("Now Next Part");
       // ************CONFUSING CONVERSION**************
     // *****Generally We Avoid These Type Conversion*****

console.log(null > 0);  // -----------> false
console.log(null == 0); //comparison   // ------> false
console.log(null >= 0); //here null is getting converted into 0  //----------> true

console.log(undefined == 0); 
console.log(undefined > 0); 
console.log(undefined < 0); 

//  ===   --> Strict equal to check  By using (===) we strictly check the data types and value of this operation also because by using  (==) this only value is being check  

console.log("2" === 2);  // --------> false