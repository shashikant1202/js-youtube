const coding = ["js", "ruby", "java", "python", "cpp"]


//function name() {}  //function usually aise hote hai 
// but call back function aise nahi hote hai'
// call back function me function ka naam uda dete hai-----> function () {}
 
// coding.forEach( function (val1) {    //yah 
//     console.log(val1);
// } ) // yaha par val1 is name given to the values of coding's array

// coding.forEach( greet => { } ) //this is arrow function

// coding.forEach( (item) => { 
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)   // yaha par printMe ka reference diya gaya hai

// coding.forEach( (item, indx, arr) => {
//     console.log(item, indx, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },

    {
        languageName: "pythom",
        languagefileName: "py"
    },

    {
        languageName: "c++",
        languagefileName: "cpp"
    }
]

myCoding.forEach( ( item ) => {
    console.log(item.languageName);
})