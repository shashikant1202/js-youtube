const Coding = ["js", "ruby","java","python","cpp"]

// const values = Coding.forEach( (item) => {
//     // console.log(item);
//     return item       //for each koi bhi value return nahi karta 
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {   //filter me call back function hota hai
//     return num > 4
// } )  
// console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( (bk) => bk.publish > 2000)

//yaha par jo 'bk' hai wo us value ka naam hai jo books se filter ho kar aa raha hai

// const userBooks = books.filter( (bk) =>{ return bk.publish > 2000})  


//jab scope laga dete hai tab return dete hai taki books.filter hume scope ke bahar bhi value taki hum print kar sake  

// const userBooks = books.filter( (bk) =>{ return bk.publish >= 1995 && bk.genre  ===  "History"}) 

const userBooks = books.filter( (bk) =>{ return bk.publish >= 1995 || bk.genre  ===  "History" || bk.genre === "Science" }) 


console.log(userBooks); 