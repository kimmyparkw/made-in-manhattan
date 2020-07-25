//--DOM ELEMENTS--
const buttonDiv = document.getElementById('options')
const narrationText = document.querySelector('p')

//--CHARACTERS--
class Characters {
  constructor(name, position) {
    this.name= name;
    this.position= position
  }
  introduction() {
    return `My name is ${this.name} and I am the ${this.position}.`;
  }
  impressed() {
    return `I'm so impressed that you were able to get everything done so quickly! Good work today, we'll see you tomorrow.`;
  }
}

const christina = new Characters('Christina', 'designer')
const michaela = new Characters('Michaela', 'head intern')

// christina.introduction()
// michaela.introduction()

//--FABRIC STORES--
class FabricStores {
  constructor(name, item1, item2, item3, item4) {
    this.name= name;
    this.inventory = [item1, item2, item3, item4]
  }
  getSwatch() {
    console.log(`You got a swatch from ${this.name}`);
  }
  buyYardage() {
    console.log(`You bought fabric from ${this.name}`);
  }
}

const spandexWorld = new FabricStores('Spandex World', 'stretch nylon', 'spandex', 'nude sequin', 'yellow lace')
const bHFabrics = new FabricStores('B&H Fabircs', 'embroidered chiffon', 'suiting fabric', 'silk', 'red sequin')
const moodFabrics = new FabricStores('Mood Fabrics', 'mesh', 'tweed', 'floral jacquard', 'pleather')

// console.log(spandexWorld);
// console.log(bHFabrics);
// console.log(moodFabrics);

//--USER STORY--

const narrationTexts = [
  `Welcome to the studio! ${christina.introduction()} Are you ready to get started?`,
  'Here are a couple things I like for you to get done today. Which would you like to start with?',
  'You have picked up the dry cleaning. What would you like to do next?',
  'You become tired from carrying so much around New York. You quit because you did not realize there would be this much physical labor involved.',
  'You head back to the studio but the designer is disappointed that you did not bring back any swatches. You are fired!',
  `${michaela.introduction()} Here is a list of fabric stores that might have the nude sequin fabric Christina is looking for. Which one would you like to go to first?`,
  `You head to Mood Fabrics. Here are the fabrics that have in store: ${moodFabrics.inventory}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to B&H Fabrics. Here are the fabrics they have in store: ${bHFabrics.inventory}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to Spandex World. Here are the fabrics they have in store: ${spandexWorld.inventory}. Looks like they have what you want. Now that you have your swatch, would you like to head back to the studio or go pick up the dry cleaning?`,
  `You return to the studio, but the designer is disappointed that you did not pick up the dry cleaning. You are fired!`,
  `You have finished your tasks for today. Time to head back to the studio.`,
  `${christina.impressed()} - Christina says`,

]

const userOptions = [
  ['I am ready to work'],
  ['go to the fabric store', 'pick up the dry cleaning'],
  ['Go back to the studio', 'Go to the fabric store'],
  ['Mood Fabrics', 'B&H Fabircs', 'Spandex World'],
  ['Go back to the studio', 'Go to B&H Fabrics', 'Go to Spandex World'],
  ['Go back to the studio', 'Go to Mood Fabrics', 'Go to Spandex World'],
  ['Go back to the studio', 'Pick up the dry cleaning'],
  ['Go back to the studio']
]

//--FUNCTIONS--

function optionButtons(x, y, z, a, fun1, fun2, fun3) {
  let optionButton = document.createElement('button')

  optionButton.innerText = userOptions[x][y]
  buttonDiv.appendChild(optionButton)
  optionButton.addEventListener('click', fun1)
  if (z != null) {
    let optionButton2 = document.createElement('button')
    optionButton2.innerText = userOptions[x][z]
    buttonDiv.appendChild(optionButton2)
    optionButton2.addEventListener('click', fun2)
  }
  if (a != null) {
    let optionButton3 = document.createElement('button')
    optionButton3.innerText = userOptions[x][a]
    buttonDiv.appendChild(optionButton3)
    optionButton3.addEventListener('click', fun3)
  }
}

function buttonRemoval(previousButtons, button1, button2, button3) {
  if (button2 === null && button3 === null) {
    previousButtons.remove()
  } else {
    previousButtons[button1].remove()
    if (button2 != null) {
      previousButtons[button2].remove()
    }
    if (button3 != null) {
      previousButtons[button3].remove()
    }
  }
}

function restart() {
  let restart = document.createElement('button')
  restart.innerText = 'RESTART'
  buttonDiv.appendChild(restart)
  restart.addEventListener('click', gameStart)
  userChoices = 0
}

let startGame = true
let userChoices = 0

function gameStart() {
  if (startGame === true) {
    let previousButtons = document.querySelector('button')
    if (previousButtons) {
      previousButtons.remove()
    }
    narrationText.innerText = narrationTexts[0]
    optionButtons(0, 0, null, null, firstDecision, null, null)
    userChoices++
  }
}
gameStart()

//picked i am ready
function firstDecision() {
  if (userChoices === 1) {
    let previousButtons = document.querySelector('button')
    buttonRemoval(previousButtons, 0, null, null)
    narrationText.innerText = narrationTexts[1]
    optionButtons(1, 0, 1, null, thirdDecision, secondDecision, null)
    userChoices++
    }
  }


//picking up dry cleaning
function secondDecision() {
  if (userChoices === 2) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, null)
    narrationText.innerText = narrationTexts[2]
    optionButtons(2, 0, 1, null, deadEnd1, deadEnd2)
    userChoices++
  }
}

//going to the fabric store
function thirdDecision() {
  if (userChoices === 2) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, null)
    narrationText.innerText = narrationTexts[5]
    optionButtons(3, 0, 1, 2, fourthDecisionMood, fourthDecisionB, fourthDecisionS)
    userChoices++
  }
}

//head back to the studio after picking up dry cleaning
function deadEnd1() {
  if (userChoices === 3) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, null)
    narrationText.innerText = narrationTexts[4]
    restart()
  }
}

//go fabric shopping after picking up the dry cleaning
function deadEnd2() {
  if (userChoices === 3) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, null)
    narrationText.innerText = narrationTexts[3]
    restart()
  }
}

//fabric shopping first. Picked Mood.
function fourthDecisionMood() {
  if (userChoices >= 3) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, 2)
    narrationText.innerText = narrationTexts[6]
    optionButtons(4, 0, 1, 2, deadEnd3, fourthDecisionB, fourthDecisionS)
    userChoices++
  }
}

//dead end from when you go to a fabric store that doesn't have the nude sequin fabric
function deadEnd3() {
  if (userChoices >= 4) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, 2)
    narrationText.innerText = narrationTexts[4]
    restart()
  }
}

//pick b&h fabrics to find fabric swatches
function fourthDecisionB() {
  if (userChoices >= 3) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, 2)
    narrationText.innerText = narrationTexts[7]
    optionButtons(5, 0, 1, 2, deadEnd3, fourthDecisionMood, fourthDecisionS)
    userChoices++
  }
}

//pick sw to find fabric swatch
function fourthDecisionS() {
  if (userChoices >= 3) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, 2)
    narrationText.innerText = narrationTexts[8]
    optionButtons(6, 0, 1, null, deadEnd4, dryCleaningSecond, null)
    userChoices++
  }
}

//dead end from when you find swatches but don't pick up dry dryCleaning
function deadEnd4() {
  if (userChoices >= 4) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, null)
    narrationText.innerText = narrationTexts[9]
    restart()
  }
}

//picking up dry cleaning after finding fabric swatches
function dryCleaningSecond() {
  if (userChoices >= 4) {
    let previousButtons = document.querySelectorAll('button')
    buttonRemoval(previousButtons, 0, 1, null)
    narrationText.innerText = narrationTexts[10]
    optionButtons(7, 0, null, null, endOfDay, null, null)
    userChoices++
  }
}

//end of day 1
function endOfDay() {
  let previousButtons = document.querySelector('button')
  buttonRemoval(previousButtons, 0, null, null)
  narrationText.innerText = 'Congratulations! Christina was so impressed by your hard work that she has made you the head dresser for the fashion show!'
  restart()
}
