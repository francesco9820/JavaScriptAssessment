const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
let storyString = `It was 94 fahrenheit outside, 
so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. 
Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

const arrayNames = [`Willy the Goblin`, `Big Daddy`, `Father Christmas`]

const arrayItems = ["the soup kitchen","Disneyland","the White House"]

const arrayVerbs = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
  }

  storyString = storyString.replace(":insertx:", randomValueFromArray(arrayNames))
  

  story.textContent = storyString;
  story.style.visibility = 'visible';
}