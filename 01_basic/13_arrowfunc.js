const user = {
    username: "AwadhRaj",
    price: 999,
    WelcomeMessage: function(){
        console.log(`${this.username} , welcome to website `)
        console.log(this);
    }
}
// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username = "AwadhRaj"
//     console.log(this.user);
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log (addTwo(3, 4))


//+++++ implicity return concept++++ isme carlee bracess nhi use hote hai

// const addTwo = (num1, num2) =>  num1 +num2

// const addTwo = (num1, num2) => (num1 +num2)

// objects return
const addTwo = (num1, num2) => ({username: "Arpit"})

console.log(addTwo(3, 4))
