// if
// operater < lessthan, >gratestthan, <=lessequl,
// equlto ==, != not equlto, ===

// const isUserloggedIn = true
//  const temperature =41

// if (temperature > 40) {
//     console.log("less than 50");
// } 
// else{
//      console.log("temperature is greater than 50");
// }

// console.log("execute")

// const score = 200
// if (score > 100) {
//     const power = "fly"  **** but ya [var] ka use karte toh code run karta jo ki sahi nhi tha
//     console.log(`User Power: ${power}`);
// }

// console.log (`User power: ${power}`) ++ error throw show kare ga

// ****INPLICITY SCOPE
const balance = 1000

// if(balance > 500) console.log("test");
// if (balance < 500) {
//     console.log("less than 500");

// }else if(balance < 750){
//     console.log("less than 750 ");

// }else if (balance < 900) {
//     console.log("less than 750");

// } else{
//     console.log("less than 1200") ; 
// }
 
const userloggedIn = true 
const  debitCard = true

// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userloggedIn && debitCard && 2 == 2){
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }


// *** SWITCH CASE

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const  month = 3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;

//     case 2:
//         console.log("Fab")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     default:
//         console.log("default case match");
//         break;
// }


// ************------- new topic-------+++++++++

const userEmil = "A@Raj.com"
// const userEmil = ""

if (userEmil) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

//  what is falsy values
/*
false , 0, -0, BigInt on , "", null, undefined, NaN
 */

// What is truthy values
/*
"0" , "False", " ", [],  {}, function(){}
*/

if (userEmil.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing operator (??)
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

// console.log(val1);


//  ***---Terniary Operator----****

// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log
("more than 80")