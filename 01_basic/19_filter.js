
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter((num) =>{
//     return num > 4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10)

// const newNums = myNumbers.map( (num) => {return num + 10})


/* -----CHAING From------- */

// const newNums = myNumbers
//            .map( (num) => num * 10)
//            .map( (num) => num + 1)
//            .filter((num) => num >= 40 )
// console.log(newNums);


/*----Reduce------- */

const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal)