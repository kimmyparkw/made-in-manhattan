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
    id: 1,
    text: `Welcome to the studio`,
    options: [
      {
        text: 'I am ready!',
        setState: { getStarted: true },
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Here are some things I\'d like for you to get done today. Which would you like to do first?',
    options: [
      {
        text: 'Pick up dry cleaning.',
        setState: {dryCleaningFirst: true},
        nextText:3
      },
      {
        text: 'Find swatches for a nude, sequin fabric.',
        setState: {swatchesFirst: true},
        nextText:4
      }
    ]
  }

]

console.log(possibleChoices[0]);
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
  return true
}

const makeSelection = (option) => {
  console.log('hello');
}

//-- this part works!!! --
function displayChoices(possibleChoicesIndex) {
  //displaying the text from the option in the box
  const choiceText = possibleChoices.find(function(el) {
    return el.id === possibleChoicesIndex
  })
  mainText.innerText = choiceText.text

  //displaying the options that are in the current decision in the box
  // for (let i = 0; i < possibleChoices.length; i++) {
  //
  //     const button = document.createElement('button')
  //     button.innerText = possibleChoices[possibleChoicesIndex].options.text
  //     console.log(button);
  //     //--- showing other options from other option nodes??? --
  //     button.addEventListener('click', makeSelection)
  //     buttonDiv.appendChild(button)
  //   }
possibleChoices[possibleChoicesIndex].options.forEach(option => {
  const button = document.createElement('button')
  button.innerText = option.text
  console.log(button);
  //--- showing other options from other option nodes??? --
  button.addEventListener('click', makeSelection)
  buttonDiv.appendChild(button)
})


}

displayChoices(1)
