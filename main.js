const mainText = document.querySelector('p')
const buttonDiv = document.getElementById('options')

// console.log(buttons)
// console.log(mainText);

//--CHARACTERS--
class Characters {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  introduction() {
  mainText.innerText = `Hi there! My name is ${this.name} and I am the ${this.position}. Nice to meet you!`
  }
}

let designer = new Characters('Christina', 'designer')
let headIntern = new Characters('Michaela', 'head intern')

//--ALL CHOICES---
const possibleChoices = [
  {
    id: 0,
    text: `Welcome to the studio`,
    options: [
      {
        text: 'I am ready!',
        setState: { getStarted: true },
        nextText: 1
      }
    ]
  },
  {
    id: 1,
    text: 'Here are some things I\'d like for you to get done today. Which would you like to do first?',
    options: [
      {
        text: 'Pick up dry cleaning.',
        requiredState: (currentState) => currentState.getStarted,
        setState: {getStarted: true, dryCleaningFirst: true},
        nextText:2
      },
      {
        text: 'Find swatches for a nude, sequin fabric.',
        requiredState: (currentState) => currentState.getStarted,
        setState: {getStarted: true, swatchesFirst: true},
        nextText:3
      }
    ]
  },
  {
    id: 2,
    text: 'You\'ve picked up the dry cleaning. Would you like to head back to the office first, or go find some fabric swatches?',
    options: [
      {
        text: 'Back to the studio',
        requiredState: (currentState) => currentState.dryCleaningFirst,
        setState: {getStarted:true, dryCleaningFirst: true, backToStudio: true},
        nextText: 4
      },
      {
        text: 'Find fabric swatches',
        setState: {getStarted:true, dryCleaningFirst: true, swatchesFirst: true},
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Michaela, the head intern, gave you a list of fabric stores that might have the fabric you are looking for. Which would you like to visit first?',
    options: [
      {
        text: 'Mood Fabrics',
        setState: {getStarted:true, dryCleaningFirst: false, swatchesFirst: true, moodFabrics: true},
        nextText: 4
      },
      {
        text: 'B&H Fabrics',
        setState: {getStarted:true, swatchesFirst: true, bHFabrics: true},
        nextText: 4
      },
      {
        text: 'Spandex World',
        setState: {getStarted:true, swatchesFirst: true, spandexWorld: true},
        nextText: 5
      }
    ]
  }

]

// console.log(possibleChoices[0]);
//--FUNCTIONS--
const state = {}
//created a game state as an empty object

// const mainGamePlay = () => {
//   //set the state as an empty object at first
//   state = {}
//   displayChoices(1)
//   //run the function displayChoiceText for the first object in the choiceTexts array.
//
// }

function showOption(option) {
  return true;
  // return option.state == null || option.requiredState(state)
}
//--THESE TWO PARTS ARE NOT WORKING--
function makeSelection(evt){

  // const nextText = option.nextText
  // state.decisions =
  // // Object.assign(state, option.setState)
  // displayChoices(nextText)
  console.log(evt);
}

//-- this part works!!! --
function displayChoices(possibleChoicesIndex) {
  //displaying the text from the option in the box
  const choiceText = possibleChoices.find(function(el) {
    return el.id === possibleChoicesIndex
  })
  mainText.innerText = choiceText.text
  //--displaying the buttons--
  possibleChoices[possibleChoicesIndex].options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      console.log(button);
      button.addEventListener('click', makeSelection)
      buttonDiv.appendChild(button)
    }
  })
}

displayChoices(1)
