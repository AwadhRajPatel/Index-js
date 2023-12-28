//  let a = 10
//  const b = 20
//  var c = 300
 let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}

//  console.log(a);
//  console.log(b);
//  console.log(c);

function one(){
    const username = "AwadhRaj"
    
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const username = "AwadhRaj"
    if (username === "AwadhRaj") {
        const website = " Youtbe"
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);

// +++++++++ Interesting ++++++++++++

// console.log (addone(5)) ++ Not error show runtiming
function addone(num){
    return num + 1
}
addone(5)

// addTwo(5) ++ but runtiming error show 
const addTwo = function(num){
    return num + 2
}
addTwo(5)