// Immediately Invoked Function Expression (IIFE)

(function chai (){
    console.log (`DB CONNECTED`)
})();

( () => {
    console.log(`DB connected two`);
} )();

((name) =>{
    console.log(`DB Connected Two ${name}`);
})('Arpit')