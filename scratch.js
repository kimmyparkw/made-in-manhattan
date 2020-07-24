//--CHARACTERS--
class Characters {
  constructor(name, position) {
    this.name= name;
    this.position= position
  }
  introduction() {
    console.log(`Hello, my name is ${this.name} and I am the ${this.position}.`);
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
let userChoices = []
//push the user's choices into this array to keep track of the game <-- need a function for this - when you select the option?

//how to hold the info for each day/decision?

[
  {
    text: 'Let\'s get started!',
    nextStep:
  }
]






//--FUNCTIONS--
function selectOption() {
  userChoices.push()
}
