const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const checkButtonUK = document.getElementById("uk");
const checkButtonUS = document.getElementById("us");
let randomClick = false;
let originalStory = `It was 94 fahrenheit outside, 
so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. 
Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

const arrayNames = [`Willy the Goblin`, `Big Daddy`, `Father Christmas`]

const arrayItems = ["the soup kitchen","Disneyland","the White House"]

const arrayVerbs = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


randomize.addEventListener('click', () => {randomClick = true; result()});

checkButtonUK.addEventListener('click', result);
checkButtonUS.addEventListener('click', result);

customName.addEventListener('input', result);

let newString = originalStory;

function result() {
  if(randomClick){
    newString = originalStory;

    newString = newString.replace(/:insertx:/g, randomValueFromArray(arrayNames));

    newString = newString.replace(/:inserty:/g, randomValueFromArray(arrayItems));

    newString = newString.replace(/:insertz:/g, randomValueFromArray(arrayItems));
  }

  if(customName.value !== '') {
    const name = customName.value;

    newString = newString.replace(/Bob/g, name);

    story.textContent = newString;
    story.style.visibility = 'visible';
  }

  if(checkButtonUK.checked) {
    const weight = Math.round(300 / 2.205);
    const temperature =  Math.round((94 - 32) * 5/9);

    newString = newString.replace(/94 fahrenheit/g, temperature + ' degrees');
    newString = newString.replace(/300 pounds/g, weight + ' kilos');

    story.textContent = newString;

    if(!randomClick) return;
  }else if(checkButtonUS.checked) {
    const weight = Math.round(300 / 2.205);
    const temperature =  Math.round((94 - 32) * 5/9);

    newString = newString.replace(`${temperature} degrees`,  '94 fahrenheit');
    newString = newString.replace(`${weight} kilos`, '300 pounds');

    story.textContent = newString;
    
    if(!randomClick) return;
  }

  story.textContent = newString;
  story.style.visibility = 'visible';
  randomClick = false;
}