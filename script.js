'use strict'

// Övning 1

// function getStringLength(str) {
//   return str.length;
// }
// const str = getStringLength("Hey");
// console.log(`your word has ${str} letters`);

///////////////////////////////////////////////////////////////

// Övning 2

// function getYear(str) {
//   return str.substring(0, 4);
// }
// const getCurrentYear = getYear("2022-10-17");
// console.log(getCurrentYear); // 2022

///////////////////////////////////////////////////////////////

// Övning 3

// function getSum(num1, num2, operator) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     return "Enter a valid number";
//   }
//   if (operator === "+") {
//     return num1 + num2;
//   }
//   if (operator === "-") {
//     return num1 - num2;
//   }
//   if (operator === "/") {
//     return num1 / num2;
//   }
//   if (operator === "*") {
//     return num1 * num2;
//   } else {
//     return "Enter a valid operator";
//   }
// }
// console.log(getSum(5, 5, "+")); // 10
// console.log(getSum("f", "f", "-")); // Enter a valid number
// console.log(getSum("f", "f", "k")); // Enter a valid number
// console.log(getSum(4, 5, "d")); // Enter a valid operator

///////////////////////////////////////////////////////////////

/*

// Övning 4

const getMyChoice = function (input) {
  if (input === "rock" || input === "paper" || input === "scissor") {
    return input;
  } else {
    return `${input} is not a valid input, please try again!`;
  }
};

const getComputerChoice = function () {
  const randomNumber = Math.round(Math.random() * 2);
  // console.log(randomNumber);
  if (randomNumber === 0) {
    return "rock";
  }
  if (randomNumber === 1) {
    return "paper";
  }
  if (randomNumber === 2) {
    return "scissor";
  }
};

const getWinner = function (myChoice, computerChoice) {
  if (myChoice === computerChoice) {
    return "Drawn";
  }
  if (myChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!🤖";
    } else {
      return "You won!🙆‍♂️";
    }
  }
  if (myChoice === "paper") {
    if (computerChoice === "scissor") {
      return "Computer Won!🤖";
    } else {
      return "You won!🙆‍♂️";
    }
  }
  if (myChoice === "scissor") {
    if (computerChoice === "rock") {
      return "Computer won!🤖";
    } else {
      return "You won!🙆‍♂️";
    }
  } else {
    return "Please try again!";
  }
};
// console.log(getWinner("rock", getComputerChoice()));

const playRockPaperScissorGame = function () {
  const question = prompt("Choose wisely: Rock, Paper or Scissor?");
  const myChoice = getMyChoice(question);
  const computerChoice = getComputerChoice();
  const winner = getWinner(myChoice, computerChoice);

  console.log(`You picked ${myChoice}`);
  console.log(`Computer picked ${computerChoice}`);
  console.log(winner);
// };
playRockPaperScissorGame();

*/

///////////////////////////////////////////////////////////////

// Övning 5

const textInner = document.querySelector('.section-text')
const nextBtn = document.querySelector('.btn--next')
const backBtn = document.querySelector('.btn--back')
const optionBtns = document.querySelectorAll('.option-btns button')
const optionBtnContainer = document.querySelector('.option-btns')
const sectionBtnContainer = document.querySelector('.section-btn')
const delar = [
  'The Story of Goldilocks and the Three Bears',
  'Once upon a time, there was a little girl named Goldilocks.She went for a walk in the forest. Pretty soon, she came upon a house. She knocked and, when no one answered, she walked right in.At the table in the kitchen, there were three bowls of porridge. Goldilocks was hungry',
  [
    'She tasted the porridge from the first bowl. "This porridge is too hot!" she exclaimed.',
    'So, she tasted the porridge from the second bowl. "This porridge is too cold," she said.',
    'So, she tasted the last bowl of porridge.  "Ahhh, this porridge is just right," she said happily and she ate it all up.',
  ],

  "After she'd eaten the three bear' breakfasts, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs.",
  [
    ' Goldilocks sat in the first chair to rest ."This chair is too big!" she exclaimed.',
    'So she sat in the second chair.  "This chair is too big, too!" she whined.',
    'So she tried the last and smallest chair.  "Ahhh, this chair is just right," she sighed. But just as she settled down into the chair to rest, it broke into pieces!',
  ],
  'Goldilocks was very tired by this time, she went upstairs to the bedroom.',
  [
    'She lay down in the first bed, but it was too hard.',
    ' Then she lay in the second bed, but it was too soft.',
    ' Then she lay down in the third bed and it was just right',
  ],
  'Goldilocks fell asleep.   As she was sleeping, the three bears came home.',
  '"Someone\'s been eating my porridge," growled the Papa bear.',
  '"Someone\'s been eating my porridge," said the Mama bear.',
  '"Someone\'s been eating my porridge and they ate it all up!" cried the Baby bear.',
  '"Someone\'s been sitting in my chair," growled the Papa bear.',
  '"Someone\'s been sitting in my chair," said the Mama bear.',
  '"Someone\'s been sitting in my chair and they\'ve broken it to pieces," cried the Baby bear.',
  'They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled,',
  '"Someone\'s been sleeping in my bed.”',
  '"Someone\'s been sleeping in my bed, too" said the Mama bear.',
  '"Someone\'s been sleeping in my bed and she\'s still there!" exclaimed the Baby bear.',
  'Just then, Goldilocks woke up. She saw the three bears. She screamed, "Help!" And she jumped up and ran out of the room. Goldilocks ran down the stairs, opened the door, and ran away into the forest. She never returned to the home of the three bears.',
  'THE END',
]

let step = 0
let selectedOption
textInner.innerHTML = delar[step]
optionBtnContainer.style.display = 'none'
if (step == 0) {
  backBtn.style.display = 'none'
  sectionBtnContainer.classList.add = 'active'
}

nextBtn.addEventListener('click', () => {
  if (step == delar.length - 1) {
    nextBtn.style.display = 'none'
    returng
  }
  step += 1
  if (typeof delar[step] == 'object') {
    showOptions()
    return
  }
  if (step != 0) {
    nextBtn.textContent = 'Next'
    backBtn.style.display = 'block'
    sectionBtnContainer.classList.remove('active')
  }

  textInner.innerHTML = delar[step]
})

backBtn.addEventListener('click', () => {
  if (step < delar.length) {
    nextBtn.style.display = 'block'
  }
  if (step == 0) {
    backBtn.style.display = 'none'
    return
  }
  if (typeof delar[step] == 'object') {
    showOptions()
    return
  }
  step -= 1
  if (step < 1) {
    nextBtn.textContent = 'Start'
  }
  showOptions()

  textInner.innerHTML = delar[step]
})

function showOptions() {
  if (typeof delar[step] == 'object') {
    sectionBtnContainer.style.display = 'none'
    optionBtnContainer.style.display = 'block'
    optionBtns.forEach((option, optionIndex) => {
      option.addEventListener('click', () => {
        textInner.innerHTML = delar[step][optionIndex]
        optionBtnContainer.style.display = 'none'
        sectionBtnContainer.style.display = 'flex'
      })
    })
  } else {
    optionBtnContainer.style.display = 'none'
  }
}
