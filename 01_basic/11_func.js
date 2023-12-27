

function sayMyNmae(){
    console.log("A");
    console.log("W");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("R");
    console.log("A");
    console.log("j");
}
// sayMyNmae()

// function addTwoNumbers(number1,number2){
//    console.log (number1 + number2);
// }

// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result  = addTwoNumbers(3, 5)
// console.log("Result:",  result);

function loginUserMessage(username = "sam"){

    // if(username === undefined){
        if(!username){
        console.log("Please enter a username")
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("AwadhRaj"))

console.log(loginUserMessage("Raja"))