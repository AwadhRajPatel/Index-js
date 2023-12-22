// -********notes******
// *****stack is (primitive data)
// Heap is(Non-Primitive)

let myYoutubename = "PositiveImage.com"
let anothername =  myYoutubename

anothername = "PatelUP"

// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybi"

}
let userTwo  = userOne
userTwo.email = "Patel@google.com"

console.log(userOne.email);
console.log(userTwo.email);