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
    console.log(`Hello, my name is ${this.name} and I am the ${this.position}.`);
  }
  impressed() {
    console.log(`I'm so impressed that you were able to get everything done so quickly! Good work today, we'll see you tomorrow.`);
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
//should I have separate arrays for the narration text and options?

const narrationTexts = [
  'Welcome to the studio!',
  'Here are a couple things I like for you to get done today. Which would you like to start with?',
  'You have picked up the dry cleaning. What would you like to do next?',
  'You become tired from carrying so much around New York. You quit because you did not realize there would be this much physical labor involved.',
  'You head back to the studio but the designer is disappointed that you did not bring back any swatches. You are fired!',
  'Michaela has given you a list of fabric stores that might have the nude sequin fabric you are looking for. Which one would you like to go to first?',
  `You head to Mood Fabrics. Here are the fabrics that have in store: ${moodFabrics.inventory}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to B&H Fabrics. Here are the fabrics they have in store: ${bHFabrics.inventory}. Looks like they don't have the fabric you are looking for. What would you like to do next?`,
  `You head to Spandex World. Here are the fabrics they have in store: ${spandexWorld.inventory}. Looks like they have what you want. You ask for a swatch and then leave the store.`,
  `Now that you have your swatch, would you like to head back to the studio or go pick up the dry cleaning?`,
  `You return to the studio, but the designer is disappointed that you did not pick up the dry cleaning. You are fired!`,
  `You pick up the dry cleaning and the return to the studio. End of day.`,
]

const userOptions = [
  'I am ready to work',
  ['go to the fabric store', 'pick up the dry cleaning']
]

class Options {
  constructor(narration, option1, option2) {
    this.narrationText= asdfkj;
    this.options= [option1, option2]
  }
}





//--FUNCTIONS--
function test() {
  narrationText.innerText = narrationTexts[0]
}

test()
