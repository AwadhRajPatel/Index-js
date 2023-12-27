 const myArr = [0, 1, 2, 3, 4, 5]
 const myHeors =["shaktiman", "nagraj"]
 
 const Arr2 = new Array(1, 2, 3, 4)
// console.log(myArr[4]);
// console.log(myHeors);

// *******ARRAY METHODS+++++++

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2)


// console.log(newArr);