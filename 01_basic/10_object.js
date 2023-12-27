// singleton
// Object.create


// object literals
const mySym = Symbol("key1")


const jsUser = {
    name: "AwadhRaj",
    "full name": "Awadhraj Patel",
    [mySym]: "myKey1",
    age: 18,
    location: "Lucknow",
    email:"awadh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "awadh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "google@php.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// +++++ OBJECT PART2 *******
// CONST TRINDERUSER = NEW OBJECT()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
   email: "some@gmail.com",
   fullname:{
    userfullname: {
        firstname: "AwadhRaj",
        lastname: "Patel"
    }
   }
}

// console.log(regularUser.fullname.userfullname.firstname );

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 ,obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users =[
   {
     id:  1,
    email: "raja@google.com"
   }, 
   {
    id: 2,
    email: "patel@google.com"
   },
   {
         id: 3,
         email: "kallu@fackebool.com"

   },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// ****** objects part3++++++++

const course = {
    coursename: "js in hindi",
    price: "6666",
    courseInstructor: "Patel"
}

// course.courseInstructor
const {courseInstructor} = course

console.log(courseInstructor);

// {
//    "name": "AwadhRaj",
//     "coursename": "Js in hindi",
//     "price":  "free"
// }

[
    {},
    {},
    {}
]