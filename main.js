const mainText = document.querySelector('p')
const buttons = document.querySelectorAll('button')

// console.log(buttons)
// console.log(mainText);

//--Characters--
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
// mainGamePlay = () => {
//
// }
