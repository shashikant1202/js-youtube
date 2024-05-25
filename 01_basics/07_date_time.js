// every new feature in JS is defined by the TC39 like Fetch and other promises
 
//  ***************DATES******************
// date is object
let myDate = new Date()  //we are declaring Date variable 
console.log(myDate); // printing date ---> 2024-05-05T19:18:40.769Z

console.log(typeof myDate);  // object

console.log(myDate.toString());  // printing date in string  ---> Sun May 05 2024 19:18:40 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());  // ----> Sun May 05 2024  date in string

console.log(myDate.toISOString()); //----> 2024-05-05T19:18:40.769Z

console.log(myDate.toJSON()); // ----> 2024-05-05T19:18:40.769Z

console.log(myDate.toLocaleDateString());  // ----> 5/5/2024

console.log(myDate.toLocaleString()); // ----> 5/5/2024, 7:18:40 PM

console.log(myDate.toLocaleTimeString());  // ----> 7:18:40 PM

console.log(myDate.toTimeString()); 

console.log(myDate.toUTCString()); 

console.log(myDate.toISOString()); 

// **********TO CREATE DATE*************

let myCreatedate = new Date(2023, 0, 23)  // in Js everthing start with 0 so here the january start with 0
console.log(myCreatedate.toDateString());

// **********To Create Date With Time**********
let myCreatedateWithTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedateWithTime.toLocaleString());

// ***********Date In foemat Like mm/dd/yy , yy/mm/dd, dd/mm/yy*******
let myCreateDateInFormat = new Date("2023-01-23")
console.log(myCreateDateInFormat.toLocaleString()); // 1/23/2023, 12:00:00 AM

// ********* Time Stamp*************
let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1jan 1970 se abhi tak time in milli second ---------------> 1714938564486  it is in milli second

console.log(myCreateDateInFormat.getTime());  // ------------> 1674432000000 It is in second

console.log(Date.now()); // ----------> 1714938678767 millisecond

console.log(Date.now()/1000); // ----------> 1714938767.201

console.log(Math.floor(Date.now()/1000)); // ----------> 1714938808 it is in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `The Todays date is ${newDate.getDay()} and the time is ${newDate.getTime}`

newDate.toLocaleString('default',{ // customized format of the newDate   //here we customize the date, time,  timezone etc
    weekday: "long", timeZone: 'Europe/Andorra'
})
console.log(newDate);