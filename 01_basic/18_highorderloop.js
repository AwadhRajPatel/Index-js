// for of loop

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings =  "hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

/* +++---MAP---+++++ */

const map  = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United states of America" )
map.set(`Fr`, "France")

map.set(`IN`, "India")
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-',value)
}

//  forin loop++++++++++++

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb:  "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming  = ["js","rb","py","java","cpp"]
for(const key in programming){
    // console.log(programming[key])
}

/*  ++--For Each loop--++ */
const coding = ["js", "ruby", "java","python","cpp"]

// coding.forEach( function(val){
//     console.log(val)
// })


// coding.forEach((item) => {
//     console.log(item);
// })


coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
})

const myCoding =[
    {
       languageName: "java",
       languageFileName : "java"
    },
    {
        languageName: "Python",
        languageFileName: "python"
    },
    {
        languageName: "C++",
        languageFileName: "C++"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})