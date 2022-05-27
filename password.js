const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})

let welcome = "Welcome to the password validator."
console.log(welcome);

reader.question("What password would you like to validate?", function(input){

    if(input.length < 10){
        console.log("Error. Password needs at least 10 characeters.")
    } else if(input.length >= 10){
        console.log("Password Successful!")
    }
})
