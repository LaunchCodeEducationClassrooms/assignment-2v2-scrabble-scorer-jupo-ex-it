// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  let letterPoints = "\n";
  word = word.toUpperCase()
  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!\n");
  word = input.question("Enter a word to score:")
  return word
};

let simpleScore = function(word) {
  word = word.toUpperCase()
  let letterPoints = "";
  letterPoints += word.length

  return letterPoints;
};

let vowelBonusScore = function(word) {
  word = word.toUpperCase()
  let bonusScore = 0, vowels = ["A", "E", "I", "O", "U"];

  for (let i = 0; i < word.length; i++) {

    if (vowels.includes(word[i])) {

      bonusScore += 3;

    } else {

      bonusScore += 1;
    }

  } return bonusScore;
};

let scrabbleScore;

let simpleAlg = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
};

let vowelBonusAlg = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScore
};

let scrabbleAlg = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer
}
const scoringAlgorithms = [simpleAlg, vowelBonusAlg, scrabbleAlg];

let validChoices = ["0", "1", "2"]
function getValidInput(prompt) {
  let userInput = input.question(prompt)
  while (!validChoices.includes(userInput)) {
    console.log("Invalid input. Try again.")
    userInput = input.question(prompt);
  }
  return userInput
}

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n")
  console.log(`0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}`);
  console.log(`1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}`);
  console.log(`2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);

  let selectedScoringAlgorithm = getValidInput("Enter 0, 1, or 2: ");
  let x = selectedScoringAlgorithm
  console.log("Score for " + word + ": " + scoringAlgorithms[x].scorerFunction(word))
}

function transform() { };

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  initialPrompt();
  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};

