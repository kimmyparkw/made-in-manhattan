const mainText = document.querySelector('p')
const buttons = document.querySelectorAll('button')

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

//--CLICK EVENTS--
  for (let button of buttons) {
    button.addEventListener('click', makeSelection)
  }

//--FUNCTIONS--
let playersDecisions = []

const mainGamePlay = () => {

}

const displayDecisionText = (decisionIndex) => {

}

const makeSelection = (option) => {

}

mainGamePlay()
