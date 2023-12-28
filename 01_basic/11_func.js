

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

// console.log(loginUserMessage("Raja"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500 ,1000))

const user = {
    username: "Awadhraj",
    price:199
}

function handleObject(anyobject){
    console.log (`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));