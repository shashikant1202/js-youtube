const marvel_heros = ["thor", "IronMan", "spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros) //it combine two or more array in existing array    //array can take any data like here it takes array itself
console.log(marvel_heros); 
console.log(marvel_heros[3][2]);    //here it prints 2nd Element of the 3rd Array   //it is not advisable to use this method to access any array by firstly pusing it in another array then accesing

const allHeros = marvel_heros.concat(dc_heros)    // merge/combine two or more more array and returns in new array
console.log(allHeros);

const all_new_heros = [ ...marvel_heros, ...dc_heros] //Spread operator // it is more advisable to use  spread operator instead of concat to combine two or more arrays instead of concat

console.log(all_new_heros);

 const another_array = [11,2,3,[4,5,6],7,[6,7,[4,5]]] //taking this to show that array in the array and many array in it can also be written in a single array 

 const real_another_array = another_array.flat(Infinity)  // all the values has been spread out without intervention of their position 

console.log(real_another_array);

console.log(Array.isArray("Hitesh")) // ---> false  here Array.isArray("Hitesh")is not the array

console.log(Array.from("Hitesh")) // this operation will convert Hitesh into array

console.log(Array.from({name: "hitesh"}))  // ---> empty array  //firstly we have to define ARRAY banana kiska hai iske keys(name) ka banana hai ya iske values(hitesh) ka array banana hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // array banane ka tarika
