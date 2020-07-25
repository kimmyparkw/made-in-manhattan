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

//push the user's choices into this array to keep track of the game <-- need a function for this - when you select the option?

//how to hold the info for each day/decision?
//should I have separate arrays for the narration text and options?

const narrationTexts = [
  `Welcome to the studio! ${christina.introduction()} Are you ready to get started?`,
  'Here are a couple things I like for you to get done today. Which would you like to start with?',
  'You have picked up the dry cleaning. What would you like to do next?',
  'You become tired from carrying so much around New York. You quit because you did not realize there would be this much physical labor involved.',
  'You head back to the studio but the designer is disappointed that you did not bring back any swatches. You are fired!',
  'Michaela has given you a list of fabric stores that might have the nude sequin fabric that Christina is looking for. Which one would you like to go to first?',
  `You head to Mood Fabrics. Here are the fabrics that have in store: ${moodFabrics.inventory}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to B&H Fabrics. Here are the fabrics they have in store: ${bHFabrics.inventory}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to Spandex World. Here are the fabrics they have in store: ${spandexWorld.inventory}. Looks like they have what you want. You ask for a swatch and then leave the store.`,
  `Now that you have your swatch, would you like to head back to the studio or go pick up the dry cleaning?`,
  `You return to the studio, but the designer is disappointed that you did not pick up the dry cleaning. You are fired!`,
  `You pick up the dry cleaning and the return to the studio. End of day.`,

]

const userOptions = [
  ['I am ready to work'],
  ['go to the fabric store', 'pick up the dry cleaning'],
  ['Go back to the studio', 'Go to the fabric store'],
  ['Mood Fabrics', 'B&H Fabircs', 'Spandex World']
]

//
// //--FUNCTIONS--
// // function test() {
//   // narrationTexts.forEach(function(el) {
//   //   narrationText.innerText = el
//   // })
//   function narrate() {
//     for (let i = 0; i < narrationTexts.length; i ++) {
//         return narrationText.innerText = narrationTexts[i]
//     }
//   }
//
//
// function showOptions() {
//   for (let i = 0; i < userOptions.length; i ++){
//     let optionText = userOptions[i]
//     for (let j = 0; j < optionText.length; j ++) {
//       const optionButtons = document.createElement('button')
//       optionButtons.innerText = optionText[j]
//       buttonDiv.appendChild(optionButtons)
//     }
//   }
// }
//
// function makeDecision() {
//
// }
//   // const optionButtons = document.createElement('button')
//   // optionButtons.innerText = userOptions[0]
//   // buttonDiv.appendChild(optionButtons)
// // }
//
// narrate()
// showOptions()

let startGame = true
let userChoices = 0

if (startGame === true) {
  narrationText.innerText = narrationTexts[0]
  let optionButton = document.createElement('button')
  optionButton.innerText = userOptions[0][0]
  buttonDiv.appendChild(optionButton)
  optionButton.addEventListener('click', firstDecision)
  userChoices++
}
//picked let's get started
function firstDecision() {
  if (userChoices === 1) {
    let previousButtons = document.querySelector('button')
    previousButtons.remove()
    narrationText.innerText = narrationTexts[1]
    let optionButton = document.createElement('button')
    let optionButton2 = document.createElement('button')
    optionButton.innerText = userOptions[1][0]
    optionButton2.innerText = userOptions[1][1]
    buttonDiv.appendChild(optionButton)
    buttonDiv.appendChild(optionButton2)
    optionButton.addEventListener('click', thirdDecision)
    optionButton2.addEventListener('click', secondDecision)
    userChoices++
    }
  }

//picking up dry cleaning
function secondDecision() {
  if (userChoices === 2) {
    let previousButtons = document.querySelectorAll('button')
    previousButtons[0].remove()
    previousButtons[1].remove()
    narrationText.innerText = narrationTexts[2]
    let optionButton = document.createElement('button')
    let optionButton2 = document.createElement('button')
    optionButton.innerText = userOptions[2][0]
    optionButton2.innerText = userOptions[2][1]
    buttonDiv.appendChild(optionButton)
    buttonDiv.appendChild(optionButton2)
    optionButton.addEventListener('click', fourthDecision)
    optionButton2.addEventListener('click', fourthDecision)
    userChoices++
  }
}
//going to the fabric store
function thirdDecision() {
  if (userChoices === 2) {
    let previousButtons = document.querySelectorAll('button')
    previousButtons[0].remove()
    previousButtons[1].remove()
    narrationText.innerText = narrationTexts[5]
    let optionButton = document.createElement('button')
    let optionButton2 = document.createElement('button')
    let optionButton3 = document.createElement('button')
    optionButton.innerText = userOptions[3][0]
    optionButton2.innerText = userOptions[3][1]
    optionButton3.innerText = userOptions[3][2]
    buttonDiv.appendChild(optionButton)
    buttonDiv.appendChild(optionButton2)
    buttonDiv.appendChild(optionButton3)
    optionButton.addEventListener('click', fifthDecision)
    optionButton2.addEventListener('click', fifthDecision)
    optionButton3.addEventListener('click', fifthDecision)
    userChoices++
  }
}

function fourthDecision() {
  if (userChoices === 3) {
    let previousButtons = document.querySelectorAll('button')
    previousButtons[0].remove()
    previousButtons[1].remove()
    narrationText.innerText = `You did not complete your tasks for the day successfully. Game over!`
  }
}
