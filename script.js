console.log("jeg er i guessnumber")

//bliver ved med at få "ReferenceError: document is not defined" når jeg kører program

const lblMessage = document.querySelector(".message")
console.log(lblMessage)
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number")
console.log(lblNumber)



const lblYouScore = document.querySelector(".youscore")
console.log(lblYouScore)

const lblComputerScore = document.querySelector(".computerscore")
console.log(lblComputerScore)



const inpGuess = document.querySelector(".guess")
//out(inpGuess) //fungerer ikke?

const secretNumber = Math.trunc(Math.random()*20)

lblNumber.textContent = secretNumber

let youscore = 0
let computerscore = 0

if (!guess) {
    lblMessage.textContent = '?? Try again'
    youLose(computerscore+1)
} else if (guess === secretNumber) {
    lblMessage.textContent = '?? You guessed correctly!'
    youWin(youscore+1)
} else if (guess > secretNumber) {
    lblMessage.textContent = "too high"
} else if (guess < secretNumber) {
    lblMessage.textContent = "too low"
}