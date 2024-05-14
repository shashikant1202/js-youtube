//const tinderUser = new Object()   //object declare  Singleton Object
const tinderUser = {}             //object declaration

//**********Assigning keys and values***********

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {                        // we can do as much as nesting in js
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// console.log(obj3); // it will gives the output as it written

// const obj3 = Object.assign( {} ,obj1,obj2 ,obj4 )  //assigning the values  Always use a blank object so that all the object comes into the 3rd obj

const obj3 = {...obj1, ...obj2, ...obj4} //most of the time we will use this spread operator

// console.log(obj3);

//**********When data values comes from the database*********  //from database data is in array of oject

const users = [
    {
        id: 1,
        email: "h@gmail.com",

    },

    {
        id: 1,
        email: "h@gmail.com",

    },

    {
        id: 1,
        email: "h@gmail.com",

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // we get the output in arrays which can be used further

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //   KSI BHI OBJECT KA PROPERTY CHECK KARNE KE LIYE KI USME WO SPECIFIC CHIG HAI KI NAHI

