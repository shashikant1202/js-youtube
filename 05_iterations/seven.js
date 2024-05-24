const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => num + 10 )  // jab scope open karenge to value ko retun karte hai ----->  const newNumers = myNums.map( (num) => { return num + 10} ) 
// console.log(newNumers);

//chaining

const newNums = myNumers
.map( (num) => num * 10 )
.map( (num) =>  num + 1)  // ispar iske piche wala function lagega
.filter( (num) => num >= 40 )


console.log(newNums);

