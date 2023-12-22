// primitive
// 7 type : String , Number, Boolean, null, undefined, symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol('123') 
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Reference (non primitive)
// Array ,objects ,functions

const heros  = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Awadhraj",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);