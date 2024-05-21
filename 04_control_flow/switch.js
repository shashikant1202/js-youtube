// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 //yaha month me number hai to isi hisab se switch case me bhi number diya gaya hai 
// agar month me string rahta to switch case me bhi no rahta ".." iske andar

switch (month) {   //key = wo value jo hume baar baar check karna hai
    case 1:
        console.log("january");
        break;          // Agar break nahi lagta hai to uske aage ka sara code run ho jayega jab tak break na aa jaye excep default value  -----> break control flow ko brea kar deta hai

    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;


    default:                   // kuch match nahi hua to  default value print ho jayega  like else in-else
        console.log("default case match");  
        break;
}
