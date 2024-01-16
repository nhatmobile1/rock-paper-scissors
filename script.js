let compChoice;

// function to return computer's choice
function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3) + 1;
  if (choiceNum === 1) {
    compChoice = "Rock";
  } else if (choiceNum === 2) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissors";
  }
}

getComputerChoice();
console.log(compChoice);

let a = number(prompt("First number?", 1));
let b = number(prompt("Second number?", 2));

alert(a + b);
