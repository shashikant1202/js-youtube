// reduce method


// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,      // the accumulator will be given the value of initialValue  in first time after that the sum of accumulator + currentValuewill be assign to the every next time
//   initialValue,
// );

// console.log(sumWithInitial);


const myNums = [1,2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {  // acc will be start with 0 initial value     // currval is directly associated with the myNums = [1,2,3]
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )
// console.log(myTotal);


const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0 )
console.log(myTotal);


const shoppingCart = 
   [ 
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]
const priceTopay = shoppingCart.reduce( (acc ,item) => acc + item.price , 0)  // here 0 is the initial value of shopping cart or accumulator value

console.log( priceTopay);