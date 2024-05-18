const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to the website`);  // yaha par this ka use kiya gaya hai because this ka use current context ke liye kiya jata hai
    }

}

user.welcomeMessage

