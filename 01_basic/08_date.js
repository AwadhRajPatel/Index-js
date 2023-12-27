// DATE AND TIMES PROGRAM

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getHours())
// console.log(myDate.getTimezoneOffset())
// console.log(myDate.toJSON());
// console.log(myDate.to)
// console.log(typeof myDate);

// let myCreatedDate =  new  Date(2023,11,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
let myCreatedDate = new Date ("01-14-2023")
// console.log(myCreatedDate.toLocaleDateString)
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let  newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getTimezoneOffset());

newDate.toLocaleDateString(`default`,{
    weekday: "long"
})