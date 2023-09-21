// nested if else operators
let winningNumber=19;
let userGuess= +prompt("Guess a Number") // otherwise string 
if(userGuess===winningNumber){
    console.log("right!!")
}else if(userGuess < winningNumber){
console.log("too low!!")
} else if(userGuess > winningNumber){
    console.log("too high!!")
}