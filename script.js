

console.log("jeg er i guessnumber")
console.log("rydapie")
const lblMessage = document.querySelector(".message")
console.log(lblMessage)
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number")
console.log(lblNumber)

const lblScore = document.querySelector(".score")
console.log(lblScore)

const inpGuess = document.querySelector(".guess")
out(inpGuess)

const secretNumber = Math.random()

Math.trunc(Math.random()*20)

lblNumber.textContent = secretNumber