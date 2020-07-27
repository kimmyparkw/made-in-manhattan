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
}

const spandexWorld = new FabricStores('Spandex World', 'stretch nylon', 'spandex', 'nude sequin', 'yellow lace')
const bHFabrics = new FabricStores('B&H Fabircs', 'embroidered chiffon', 'suiting fabric', 'silk', 'red sequin')
const moodFabrics = new FabricStores('Mood Fabrics', 'mesh', 'tweed', 'floral jacquard', 'pleather')

// console.log(spandexWorld);
// console.log(bHFabrics);
// console.log(moodFabrics);

//--USER STORY--

const narrationTexts = [
  //day 1
  `"Welcome to the studio! ${christina.introduction()} Are you ready to get started?"`,
  '"Great! Here are a couple things I like for you to get done today. Which would you like to start with?"',
  'You have picked up the dry cleaning. What would you like to do next?',
  'You realize that carrying 15 pounds of clothes and wandering around NY when it is over 90 degrees is NOT fun. You pass out from heat exhaustion and the traumatic experience of passing out in the middle of a busy city makes you think this might not be the path for you.',
  `"What about the fabric?! I don't have time for interns that can't complete all their tasks. You're fired!" - Christina`,
  `"${michaela.introduction()} Here is a list of fabric stores that might have the nude sequin fabric Christina is looking for. Which one would you like to go to first?"`,
  `You head to Mood Fabrics. Here are the fabrics that have in store: ${moodFabrics.inventory[0]}, ${moodFabrics.inventory[1]}, ${moodFabrics.inventory[2]}, and ${moodFabrics.inventory[3]}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to B&H Fabrics. Here are the fabrics they have in store: ${bHFabrics.inventory[0]}, ${bHFabrics.inventory[1]}, ${bHFabrics.inventory[2]}, and ${bHFabrics.inventory[3]}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to Spandex World. Here are the fabrics they have in store: ${spandexWorld.inventory[0]}, ${spandexWorld.inventory[1]}, ${spandexWorld.inventory[2]}, and ${spandexWorld.inventory[3]}. Looks like they have what you want. Now that you have your swatch, would you like to head back to the studio or go pick up the dry cleaning?`,
  `"What about the dry cleaning?! I don't have time for interns that can't complete all their tasks. You're fired!" - Christina`,
  `You have finished your tasks for today. Time to head back to the studio.`,
  `${christina.impressed()} - Christina says`,
  //day 2 - starts with i = 12
  `"Welcome back to the studio! For today, I'd like you to drop off a garment to a client and buy the fabric that you had found swatches of yesterday." -Christina. Which would you like to do first?`,
  `You're on your way to the client and you can choose between the Essex subway station or the East Broadway station. Which one do you take?`,
  `Turns out the Essex station has way too many tunnels. You get lost in the station and you never make it to the client. You're fired!`,
  `The East Broadway station is really easy to navigate since there is only one platform. You make it to the client in a timely manner. Would you like to head back to the studio or buy the fabric?`,
  `Do you remember which fabric store you bought the swatch from?`,
  `You look around at the inventory: ${moodFabrics.inventory[0]}, ${moodFabrics.inventory[1]}, ${moodFabrics.inventory[2]}, and ${moodFabrics.inventory[3]}. Turns out it wasn't this store.`,
  `You look around at the inventory: ${bHFabrics.inventory[0]}, ${bHFabrics.inventory[1]}, ${bHFabrics.inventory[2]}, and ${bHFabrics.inventory[3]}. Turns out it wasn't this store.`,
  `You look around at the inventory: ${spandexWorld.inventory[0]}, ${spandexWorld.inventory[1]}, ${spandexWorld.inventory[2]}, and ${spandexWorld.inventory[3]}. You found the fabric! Time to head back to the studio.`
]

const userOptions = [
  ['I am ready to work'],
  ['go to the fabric store', 'pick up the dry cleaning'],
  ['Go back to the studio', 'Go to the fabric store'], //use this option for narrationTexts[15]
  ['Mood Fabrics', 'B&H Fabircs', 'Spandex World'], //use this for narrationTexts[16]
  ['Go back to the studio', 'Go to B&H Fabrics', 'Go to Spandex World'], //use this for narrationTexts[17]
  ['Go back to the studio', 'Go to Mood Fabrics', 'Go to Spandex World'], //use this for narrationTexts[18]
  ['Go back to the studio', 'Pick up the dry cleaning'],
  ['Go back to the studio'], //use this for narrationTexts[19]
  ['Drop off garments', 'Buy the fabric'],
  ['Essex station', 'East Broadway station'],
  ['Start next day']
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
  if (userChoices >= 3) {
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
  narrationText.innerText = narrationTexts[11]
  optionButtons(10, 0, null, null, startingDay2, null, null)
}

//starting day 2
function startingDay2() {
  let previousButtons = document.querySelector('button')
  buttonRemoval(previousButtons, 0, null, null)
  narrationText.innerText = narrationTexts[12]
  optionButtons(8, 0, 1, null, clientDropOff, buyYardageFirst)
}

function clientDropOff() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, null)
  narrationText.innerText = narrationTexts[13]
  optionButtons(9, 0, 1, null, essexStation, eastBroadway)
}

function buyYardageFirst() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, null)
  narrationText.innerText = narrationTexts[3]
  restart()
}

function essexStation() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, null)
  narrationText.innerText = narrationTexts[14]
  restart()
}

function eastBroadway() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, null)
  narrationText.innerText = narrationTexts[15]
  optionButtons(2, 0, 1, null, deadEnd1, buyYardageSecond)
}

function buyYardageSecond() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, null)
  narrationText.innerText = narrationTexts[16]
  optionButtons(3, 0, 1, 2, moodForYardage, bhForYardage, swForYardage)
}

function moodForYardage() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, 2)
  narrationText.innerText = narrationTexts[17]
  optionButtons(3, 0, 1, 2, moodForYardage, bhForYardage, swForYardage)
}

function bhForYardage() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, 2)
  narrationText.innerText = narrationTexts[18]
  optionButtons(3, 0, 1, 2, moodForYardage, bhForYardage, swForYardage)
}

function swForYardage() {
  let previousButtons = document.querySelectorAll('button')
  buttonRemoval(previousButtons, 0, 1, 2)
  narrationText.innerText = narrationTexts[19]
  optionButtons(7, 0, null, null, winningPage, null, null)
}

function winningPage() {
  let previousButtons = document.querySelector('button')
  buttonRemoval(previousButtons, 0, null, null)
  narrationText.innerText = 'Congratulations! Christina is so impressed with your hard work that she has appointed you as the head dresser for the fashion show! Would you like to play again?'
  restart()
}
