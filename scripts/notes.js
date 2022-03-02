               /////////////////////////////////////////////// Conditionals /////////////////////////////////////////////////////////////

// if else

const name = prompt('what is your name?');

if (name === 'nate') {
  alert('hey nate the great')
} else { 
alert(`hey ${name}`)
}

// else if

let name = prompt('what is your name?');

if (name === 'nate') {
  alert('hey nate the great')
} else if (name === 'jesus') { 
    console.log('it\'s jesus')
} else {
alert(`hey ${name}`)
}

// Nested if else

if (machineActive === true) {
    if (score >= 0 && score <= 19) {
        response = "That was a terrible score — total fail!";
    } else if (score >= 20 && score <= 39) {
        response = 'You know some things, but it\'s a pretty bad score. Needs improvement.';
    } else if (score >= 40 && score <= 69) {
        response = 'You did a passable job, not bad!';
    } else if (score >= 70 && score <= 89) {
        response = 'That\'s a great score, your eally know your stuff.';
    } else if (score >= 90 && score <= 100) {
        response = 'What an amazing score! Did you cheat? Are you for real?'
    } else if (score > 100 || score < 0) {
        response = 'This is not possible, an error has occured.'
    }} else {
        response = 'The machine needs to be switched on.'
    }


// Switch Statements

x = 1
switch (x) {
  case 1: 
    console.log('one')
    break;
  case 2:
    console.log('two')
    break;
  case 3:
    console.log('three')
    break;
  default:
    console.log("didn't work")

}

const color = 'blue';

switch (color) {
  case 'blue':
    console.log('it was blue');
    break;
  case 'red':
    console.log('it was red');
    break;
  case 'green':
    console.log('it was green');
    break;
  default:
    console.log('no color');
}

// Nested Switch Statements

let response;
let score = 50;
let machineActive = true;


if(machineActive) {
    switch (true) {
        case (score >= 0 && score <= 19):
            response = "That was a terrible score — total fail!"
            break;
            case (score >= 20 && score <= 39):
                response = 'You know some things, but it\'s a pretty bad score. Needs improvement.'
                break;
                case (score >= 40 && score <= 69):
                    response = 'You did a passable job, not bad!'
                    break;
                    case (score >= 70 && score <= 89):
                        response = 'That\'s a great score, your eally know your stuff.'
                        break;
                        case (score >= 90 && score <= 100):
                            response = 'What an amazing score! Did you cheat? Are you for real?'
                            break;
                            case (score > 100 || score < 0):
                                response = 'This is not possible, an error has occured.'
                                break;
    }} else {
        response = 'The machine needs to be switched on.'
    }

// ternary operator

(x === 'blue') ? console.log('yep') : console.log('nope');

//

const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));

// If else with ternary operator

if (season.includes('summer')) {
    response = 'It is most likely hot outside'
    } else {
        (season.includes('winter')) ? response = 'It is probaby cold outside.' : response = 'We don\'t know what season it is';
    }
    
//

let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

if (machineActive) {
machineResult = 'The machine is on.';
(pwd === 'cheese') ? pwdResult = "Log in Successful." : pwdResult = 'Incorrect Password';
} else {
machineResult = 'The machine is not on.';
}

// Else if with ternary operator

if (choice === 'January' || choice === 'March' || choice === 'May' || choice === 'July' || choice === 'August' || choice === 'October' || choice === 'December') {
    let days = 31;
} else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
    let days = 30;
} else {
    let days = 29;
}

























































                                    //////////////////////////////////////////////// Strings and Arrays ////////////////////////////////////////////////



// Map() and return

const numbers = [1,2,3,4];

function timesTwo(abc) {
    return abc * 2
}
console.log(numbers.map(timesTwo));

// return random value from array

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// indexOf

const colors = ['red', 'blue', 'green', 'purple'];

colors.indexOf('blue');

// join()

const colors = ['red', 'blue', 'green', 'purple'];

console.log(colors.join());
console.log(colors.join(''));
console.log(colors.join('-'));


// slice()

const colors = ['red', 'blue', 'green', 'purple'];

console.log(colors.slice(1, 3));

//

const fullName = 'Nathan Hamilton Davies';

const firstName = fullName.slice(0, 6);

// splice()

const numbers = [1,2,3,4,5];

console.log(numbers);
numbers.splice(1, 2, 7, 8)
console.log(numbers);

// split()

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str);

const words = str.split(' ');
console.log(words[3]);

const chars = str.split('');
console.log(chars);

const strCopy = str.split();
console.log(strCopy);

// map()

function toUpper(string) {
  return string.toUpperCase();
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats.map(toUpper);

console.log(upperCats);

// filter()

function lcat(cat) {
  return cat.startsWith('L');
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const lcats = cats.filter(lcat);
console.log(lcats);

//

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);



















































                                         //////////////////////////////////////// Loops /////////////////////////////////



// for...of loop

const colors = ['red', 'blue', 'green'];

for (const color of colors) {
    console.log(`My favorite color is ${color}.`);
  }

// for loop

function calculate() {
    for (let i = 1; i < 10; i++) {
      const newResult = `${i} x ${i} = ${i * i}`;
      results.textContent += `${newResult}\n`;
    }
    results.textContent += '\n...finished!';
  }

//

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (i = 0; i < cats.length; i++) {
    console.log(cats[i]);
  }

// identifying end of a loop

const cats = ['Toes', 'Swirls', 'Ocelot'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {   
    myFavoriteCats = `${myFavoriteCats}and ${cats[i]}.`
  } else {
    myFavoriteCats = `${myFavoriteCats}${cats[i]}, `
  }
}

console.log(myFavoriteCats); 

// break from a loop

// <label for="search">Search by contact name: </label>
// <input id="search" type="text">
// <button>Search</button>

// <p></p>

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {                                                              // when the button is clicked, run this fuction
    const searchName = input.value.toLowerCase();                                                  // make input value a variable
    input.value = '';                                                                              // erase input value
    input.focus();                                                                                 // put cursor on the input  
    para.textContent = '';                                                                         // erase paragraph text
    for (const contact of contacts) {                                                              // loop through the contacts
      const splitContact = contact.split(':');                                                     // for each of the contacts, split them at the ':' and return what is left as an array (['Chris', 2232322])
      if (splitContact[0].toLowerCase() === searchName) {                                          // if the first postion in that new array is what the input value was
        para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';             // make the paragraph that person's name and number using second position of that new array
        break;                                                                                     // break from the loop
      }
    }
    if (para.textContent === '') {                                                                 // if you paragraph text is still blank then there was no match
     para.textContent = 'Contact not found.';                                                      // so display contact not found
   }
  });

  // continue through a loop

  //   <label for="number">Enter number: </label>
  //   <input id="number" type="text">
  //   <button>Generate integer squares</button>

  //   <p>Output: </p>

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  para.textContent = 'Output: ';                    
  const num = input.value;                 // make the input of the text field a variable
  input.value = '';                        // make input blank
  input.focus();                           // put the curse in the input
  for (let i = 1; i <= num; i++) {         // loop through all numbers up to the number put in, except 0 for this example
    let sqRoot = Math.sqrt(i);             // create variable that is the square root of the current iteration
    if (Math.floor(sqRoot) !== sqRoot) {   // if rounding that variable down to the nearest whole number is not the same as that variable itself
      continue;                            // then skip it
    }
    para.textContent += `${i} `;           // otherwise add that iteration to the list
  }
});

// while and do ... while loop

const cats = ['Toes', 'Swirls', 'Ocelot'];

let myFavoriteCats = 'My cats are called ';

let i = 0;                                        // initializer

while (i < cats.length) {                         // condition
  if (i === cats.length - 1) {                    // if the current iteration is the same as the last position in the array
    myFavoriteCats += `and ${cats[i]}.`;          // add 'and that cat name and a period to 'My cats are called
  } else {                                        // otherwise
    myFavoriteCats += `${cats[i]}, `;             // just add the cat name and a comma
  }

  i++;                                            // final-expression
}

console.log(myFavoriteCats);                      

// do ... while loop

const cats = ['Toes', 'Swirls', 'Ocelot'];

let myFavoriteCats = 'My cats are called ';

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;               // The main difference in a do ... while loop is that the code is run at least once because it comes before the conditional
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats);




                                //////////////////////////////// Loop live learning and test your skills examples ////////////////////////////////


// Launch Countdown with Loop and conditional

let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
const para = document.createElement('p');                // having para here made it only display 'BLAST OFF!', i guess because you only created it once then changed it 10 times, only displayed most recent iteration

while (i > -1) {
  if (i === 10) {                                       
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'BLAST OFF!';
  } else { 
    para.textContent = `${i}`;
  }

  output.appendChild(para);

  i--;

  };
  
  let i = 10;


while (i > -1) {
const para = document.createElement('p');                            // putting it here fixed it
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'BLAST OFF!';
  } else { 
    para.textContent = `${i}`;
  }

  output.appendChild(para);

  i--;

  };
  
// Guest list using for ... of loop keeping Phil and Lola out, and adding period at the end using slice()

  const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '


  for (const person of people) {
    if (person === 'Phil' || person === 'Lola') {
      refused.textContent += `${person}, `;
    } else {
      admitted.textContent += `${person}, `;
    }
  }

  refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';  // It is creating a new string, starting at first position, going all the way to -2 from the end, then adding '.' separately.
  admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.'; 

  // Create grocery list from array using for ... of loop

  const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

     // Add your code here

for (food of myArray) {
    var li = document.createElement('li');
    li.textContent = food.replace(food[0], food[0].toUpperCase());    // Added making the first letter to upper case for practice
    list.appendChild(li);
}

   // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);

    // Search array of objects for a given name and display that name and number

    const name = 'Mustafa';
    const para = document.createElement('p');

    const phonebook = [
      { name : 'Chris', number : '1549' },
      { name : 'Li Kang', number : '9634' },
      { name : 'Anne', number : '9065' },
      { name : 'Francesca', number : '3001' },
      { name : 'Mustafa', number : '6888' },
      { name : 'Tina', number : '4312' },
      { name : 'Bert', number : '7780' },
      { name : 'Jada', number : '2282' },
    ]

    // Add your code here

    for (i = 0; i < phonebook.length; i++) {
        if (phonebook[i].name === 'Mustafa') {
            para.textContent = `${phonebook[i].name}: ${phonebook[i].number}`;
            break;
        }

    }

    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(para);

    // List all prime numbers between 2 and 500

    let i = 500;
    const para = document.createElement('p');

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }

      return true;
    }


    // Add your code here


    while (i >= 2) {
        if (isPrime(i)) {
            para.textContent += `${i}, `;
        }
        i--;
    }
    

    // Don't edit the code below here!
    const section = document.querySelector('section');
    section.appendChild(para);
















































 ////////////////////////////////Functions ////////////////////////////////

 // Adding default parameters

function hello(name= 'Nathan') {
  console.log(`hello ${name}!`);
}
hello();

hello('Nate');


// Anonymous Function

function () {
  alert('hello');
}


// Anonymous Function Example

function logKey(event) {
  console.log(`You pressed '${event}' key.`)
}

textBox.addEventListener('keydown', logKey);
//
textBox.addEventListener('keydown', function(event) {     /// Passing anonymous function into the addEventListener instead of making a separate logKey function.
  console.log(`You pressed "${event.key}".`);
});

// Arrow functions

textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
//
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`)); // Only one line can be shortened to this.
//
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));  // If there is only one line and only one parameter it can be shortened to this.

//

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]                    // Omitted return from map() due to only have one line

item => item * 2 // is the same as:

function doubleItem(item) {
  return item * 2;
}


// Functions inside functions

function myBigFunction() {
  const myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);                             // Doesn't work, has to be like below
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}

//

function myBigFunction() {
  const myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}




// Function live learning and test your skills examples

// Create your own function

const otherButton = document.getElementById('otherButton')

function displayMessage(msgText, msgType) {
const html = document.querySelector('html');

const panel = document.createElement('div');
panel.setAttribute('class','msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = msgText;
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));

if (msgType === 'warning') {
  msg.style.backgroundImage = 'url(icons/warning.png)';
  panel.style.backgroundColor = 'red';
} else if (msgType === 'chat') {
  msg.style.backgroundImage = 'url(icons/chat.png)';
  panel.style.backgroundColor = 'aqua';
} else {
  msg.style.paddingLeft = '20px';
}


      }


otherButton.addEventListener('click', () => displayMessage('Nathan: Hey there, would you like to chat?', 'chat'));


// Create a chooseName() function that prints a random name from the array and run it once

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function chooseName() {
const random = Math.floor(Math.random() * names.length);
para.textContent = names[random];
}

chooseName();

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
    

// Draw a rectangle and clear the canvas before doing so

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here

function draw() {
  ctx.clearRect(x,y,width,height);
  ctx.beginPath();
  ctx.fillStyle = color;                                     // This one works, but
  ctx.fillRect(x, y, width, height); 
}; 

draw(); 

//

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here

function draw(x, y, width, height, color) {
    ctx.clearRect(x,y,width,height);
    ctx.beginPath();                                           // This one is better because it passes in the parameters
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height); 
}; 

draw(x, y, width, height, color); 

// Test 3. Make the code in task 1 better. Had to look up this one and the one before

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.querySelector('p');

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseItem(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseItem(names);

//Test 4. Replace isShort() function with an arrow function.

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(isShort);
para.textContent = shortNames;

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);

// vvvvv //

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

const shortNames = names.filter(name => name.length < 5);
para.textContent = shortNames;

// struggling with parameters so it is important to note that

const shortNames = names.filter(name => name.length < 5);
//is the same as
const shortNames = names.filter(walrus => walrus.length < 5);










































////////////////////////// Events ///////////////////////////////////////

// addEventListener()

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', changeBackground);

// removeEventListener

btn.removeEventListener('click', changeBackground);

// Abort()

const controller = new AbortController();

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}, { signal: controller.signal }); // pass an AbortSignal to this handler


controller.abort(); // removes any/all event handlers associated with this controller

// Adding multiple Listeners

myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);  // They stack

// Event handler properties

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

//
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));     // Can't add multiple functions this way like you can above
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

// Inline event handlers - Don't use these - Bad practice

<button onclick="alert('Hello, this is my old-fashioned event handler!');">Press me</button>

// Adding listeners to every button a page

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', bgChange);
}

// Event objects

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol; // The target property of the event object is always a reference to the element the event occurred upon.
  console.log(e);
}

btn.addEventListener('click', bgChange);

// Extra properties of event objects (key is the special property in this case)

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);

// Preventing default behavior

form.addEventListener('submit', e => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});

// Listener on parent element

const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);  // Outputs 'clicked on DIV element'

// Bubbling example

const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick);
container.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);  // Outputs 'you clicked on' for each element, 'bubbles up' from innermost to outer

// Stop propogation

video.addEventListener('click', e => {
  e.stopPropagation();
  video.play();
});

// Bubbling is default, but to do capturing, make 3rd property of addEventListener 'true'

// Event delegation means setting event listener on a div ensures all contained will trigger event




// Events test your skills 1. Turn the machine on and off

const btn = document.querySelector('.off');

// Add your code here

function machineControl() {
  if (btn.innerText === 'Machine is off') {
    btn.innerText = 'Machine is on';
  } else {
    btn.innerText = 'Machine is off';                     // This was my attempt, it worked, below is the official.
  }
}

btn.addEventListener('click', machineControl);
//
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  if (btn.className === 'on') {
    btn.textContent = 'Machine is off';
    btn.className = "off";                                               // The assessment started with the button having a class name of '.off' so I get why they did this
  } else {
    btn.textContent = 'Machine is on';
    btn.className = "on";
  }
});
    



// Test your skills 2, move the circle around with WASD keys


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here

window.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    drawCircle((x -= 1), y, size);                         // Got help but was on the right track. Had 'canvas' instead of 'window' for the listener, and had 'x--' and 'x- 1' instead of -=. Also they used a switch statement.
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'w') {
    drawCircle(x, y -= 1, size);
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 's') {
    drawCircle(x, y += 1, size);
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    drawCircle((x += 1), y, size);
  }
})

// with switch statement

window.addEventListener('keydown', (event) => {
switch (event.key) {
case 'a': 
drawCircle((x -= 1), y, size);
break;
case 'w':
  drawCircle(x, y -= 1, size);
break;
case 's': 
drawCircle(x, y += 1, size);
break;
case 'd':
  drawCircle((x += 1), y, size);
break;
}});

//They simplified it to this:
window.addEventListener('keydown', e => {
  switch(e.key) {
    case 'a':
      x -= 2;
      break;
    case 'd':
      x += 2;
      break;
    case 'w':
      y -= 2;
      break;
    case 's':
      y += 2;
      break;
  }

  drawCircle(x, y, size);
});



// Test your skills 3, add listener to the buttons' parent that will change bg color of button bar to the color the button says


const buttonBar = document.querySelector('.button-bar');

// Add your code here

buttonBar.addEventListener('click', (event) => {
  buttonBar.style.backgroundColor = event.target.textContent;             // This worked and solved it within a few minutes. Totally smashed it but not sure it is correct yet
});

//


function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute('data-color');  // This was their solution, utilizing the getAtrribute() function
}

buttonBar.addEventListener('click', setColor);


























































// JavaScript Building Blocks Assessment

// Starting code

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */




// Finished Code

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */

for (image of images) {

const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
thumbBar.appendChild(newImage);
}

function displayImage(event) {
    displayedImage.src = event.target.src;
}

thumbBar.addEventListener('click', displayImage);    // Maybe needs ()


/* Wiring up the Darken/Lighten button */

function darkenImage() {
    if (btn.getAttribute('class') === 'dark') {
        //overlay.setAttribute('background-color', 'rgba(0,0,0,0.5)');         // This is wrong, 'background-color not an attribute on html element
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
    } else {
        //overlay.setAttribute('background-color', 'rgba(0,0,0,0.0)');         // This is wrong, 'background-color not an attribute on html element
        overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
    }
}

btn.addEventListener('click', darkenImage);
























































//////////////////////////////////  Objects  //////////////////////////////////////////

// An Object Literal

const person = {
  name: ['Nathan', 'Davies'],  // Property
  age: 29,                     // Property
  bio: function() {                                                                  //Method
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)    
},
introduceSelf: function() {                                                          //Method
  console.log(`Hi! I'm ${this.name[0]}.`); 
}
};
 // The functions can be shortened to, and the name can be lengthened to be an object itself:
 const person = {
  name : {
    first: 'Nathan',
    last: 'Davies',
  },
  age: 29,
  bio() {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name.first}.`);
  }
}                      ;

// Object Constructors

//This one is just a function
function createPerson(name, age, profession) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.profession = profession;
  obj.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}, I'm ${this.age} and I am a ${this.profession}.`)
  }
  return obj;
}
// nate.introduceSelf() prints 'Hi! I'm Nathan, I'm 29 and I am a Programmer.'

// Actual constructor

function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  }
}

const nate = new Person('Nate');
nate.name
nate.introduceSelf();




/// Test your skills Objects 2

let bandInfo;

// Put your code here

const band = {
  name: 'BLink182',
  nationality: 'American',
  genre: 'punk rock',
  members: 3,
  formed: 1993,
  split: 2008,
  albums: [ {
    name: 'album1',
    released: 1995,
  },
  {
    name: 'album2',
    released: 1997,
  }]}

bandInfo = `The ${ band.nationality } ${ band.genre } band ${ band.name } were active ${ band.formed }–${ band.split }. Their first album, ${ band.albums[0].name }, was released in ${ band.albums[0].released }.`;

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);



// Test your skills Objects 4

function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

const cat = new Cat('Bertie', 'cymric', 'white');

const cat2 = new Cat('Swirls', 'Gray','gray');

cat.greeting();
cat2.greeting();
























































////////////////////////////////////////////////////// Object Prototypes //////////////////////////////////////////////////////////////

//Shadowing Properties

const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function() {
  console.log('something else!')
};

console.log(myDate.getYear()); // 'something else!'



// Setting a prototype with object.create

const personPrototype = {
  greet() {
    console.log('hello!');
  }
}

const carl = Object.create(personPrototype);
carl.greet();  // hello!


// Setting a prototype using a constructor

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);       // Object literal
  }
}

function Person(name) {                                   // Constructor
  this.name = name;
}

Person.prototype = personPrototype;                       // Make prototype of constructor the object literal
Person.prototype.constructor = Person;                    // Make constructor of prototype of constructor the constructor itself, otherwise it would default to Object // Note: below still works

const nate = new Person('Nate');
nate.greet(); // hello, my name is Nate!        

// Own Properties - Properties defined directly in the object

const nate = new Person('Nate');

console.log(Object.hasOwn(nate, 'name')); // true
console.log(Object.hasOwn(nate, 'greet')); // false







































































//////////////////////////////////////////////////// Object Oriented Programming ///////////////////////////////////////////////////////////////////////

// Just read the documentation if needed, it is mostly theory







/////////////////////////////////////////////////// Classes in Javascript ////////////////////////////////////////////////////////////////////

// Classes and constructors

class Person {
  
  name;                       // This could be omitted but could help people see which properties are part of the class
  //name = '';                // add this for a default value

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi, I;m ${this.name}`);
  }
}

// Omitting Constructors

class Animal {

  sleep() {
    console.log('zzzzzzzzzz');            // The constructor was omitted and a default one was generated
  }
}

  const sparky = new Animal();

  sparky.sleep(); // 'zzzzzzzzzzz'


// Inheritance

class Professor extends Person {

  teaches;

  constructor(name, teaches) {
    super(name);                 // Must be called before initiallizing any new stuff
    this.teaches = teaches;
  }

  introduceSelf() {             // Overridden the above because we needed a different one
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * 5-1 + 1);
    console.log(grade);
  }
}

// Encapsulation

class Student extends Person {

  #year;                       // Private data property. Code outside the object cannot access it

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

// Private Methods

class Example {

  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log('You called me?');
  }

}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError


// Test your skills 1

class Shape {

  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

calcPerimeter() { 
  const perimeter = this.sides * this.sideLength;
  return perimeter;
}
}


// Shape.prototype.calcPerimeter = function() {
//   console.log(this.sides * this.sideLength);   MDN's solution
// }

const square = new Shape('square', 4, 5);

square.calcPerimeter();

const triangle = new Shape('triangle', 3, 3);

triangle.calcPerimeter();


// Test your skills 2

class Shape {

  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

calcPerimeter() { 
  const perimeter = this.sides * this.sideLength;
  return perimeter;                                // These should have been logged to console but the logic worked
}
}

class Square extends Shape {                  // This as your solution. Didn't quite figure out how to work 'super' correctly

  calcArea() {
    const area = Math.pow(this.sideLength, 2);  // Could have done this.sideLength * this.sideLength but tried this and it worked
    return area;
  }

    constructor(sideLength) {
        super('square', 4, sideLength)      // These two lines were MDN's solution
    }
// constructor(sideLength) {                // These 4 were yours
//   this.name = 'square';
//   this.sides = 4;
//   this.sideLength = sideLength;
// }
}

const square = new Square(10);

square.calcPerimeter();
square.calcArea();



































































//////////////////////////////////// Working with JSON Data ///////////////////////////////////////

// The heroes example. Took JSON data and used DOM manipulation to display it.

// 'The above example was simple in terms of accessing the JavaScript object, because we converted the network response directly into a JavaScript object using response.json().' From MDN

async function populate() {

  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
    header.appendChild(myPara);
}

function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj['members'];
  
    for (const hero of heroes) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
populate();

// Converting between objects and texts

parse(); // String to Object

stringify(); // object to string

// Test Your Skills JSON



const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

// Add your code here
// Your Attempt

const catString = JSON.parse(requestURL);   //  Didn't grasp this fully: 'The JSON is loaded into the page as a text string 
                                            //  and made available in the catString parameter of the displayCatInfo() function.'

const mothers = catString['name'];

for (mother of mothers) {
  motherInfo += `${mother}, `;
  if (mother = mothers.length - 1) {
    motherInfo += `and ${mother}.`
  }
}
}
const kittens = catString['kittens'];

for (kitten of kittens) {
//

// MDN solution

const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === 'm') {
        male++;
      }
    }

    if (i < (cats.length - 1)) {
      motherInfo += `${ cats[i].name }, `;
    } else {
      motherInfo += `and ${ cats[i].name }.`;
    }
  }

  kittenInfo  = `There are ${ total } kittens in total, ${ male } males and ${ total - male } females.`;


// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
// Your second attempt after looking at the solution. Errors marked.



const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

// Add your code here

const cats = JSON.parse(catString);

for (i = 0; i < cats.length; i++) {
  for (const kitten of cats[i].kittens) {       
    total++;
    if (kitten[i].gender === 'm') {             // This should just be kitten.gender, not kitten[i].gender
      male++;
    }
  }

  if (cats[i] === cats.length - 1) {            // This should be i, not cats[i], needs parentheses and could be:   if (i < (cats.length - 1))
    motherInfo += `and ${cats[i].name}.`;
  } else {
    motherInfo += `${cats[i].name}, `;
  }
}

kittenInfo = `There are ${total} kittens in total, and ${male} of them are male and ${total - males} are female.`;

// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);















































































// Bouncing Balls Active Learning

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');                                  // This represents the drawing area

const width = canvas.width = window.innerWidth;                       // This and below is chaining multiple assignments together, which is OK
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {                                           // You struggle with these, but this formula will give you a random number between and including those parameters. Trust it.
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

    constructor(x, y, velX, velY, color, size) {
       this.x = x;
       this.y = y;
       this.velX = velX;                                  // Horizontal 'Velocity'
       this.velY = velY;
       this.color = color;
       this.size = size;
    }

    draw() {
        ctx.beginPath();                                             // Draw a shape on the paper
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);          // Trace an arc shape on the paper  'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc'
        ctx.fill();                                                  // "finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle."
      } 
 
    update() {
      if ((this.x + this.size) >= width) {                // if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
         this.velX = -(this.velX);                        // change the velocity to a negative so it changes direction
      }
    
      if ((this.x - this.size) <= 0) {                    // if the x coordinate is smaller than 0 (the ball is going off the left edge).
         this.velX = -(this.velX);
      }
    
      if ((this.y + this.size) >= height) {               // if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
         this.velY = -(this.velY);
      }
    
      if ((this.y - this.size) <= 0) {                    // if the y coordinate is smaller than 0 (the ball is going off the top edge).
         this.velY = -(this.velY);
      }
    
      this.x += this.velX;                                // These two actually move the ball, the first 4 if statements just keep it in bounds
      this.y += this.velY;
     }
     
    collisionDetect() {
        for (const ball of balls) {
            if (!(this === ball)) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.color = this.color //= randomRGB();
                }
            }
        }
    }
 }

 const balls = [];

 while (balls.length < 25) {    // Was cool that one time it was dark geenish vs light greenish ands the blues came out of nowhere and won
     const size = random(10,20);
     const ball = new Ball(
         random(0 + size, width - size),                 // Ensures ball is created at least one ball length from edge
         random(0 + size, height - size),
         random(-3,3),
         random(-3,3),
         randomRGB(),
         size
     );

     balls.push(ball);
 }


function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, .25)';
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);

}

loop();


// Objects Assessment - Add the Evil Circle to the Bouncing Balls Demo

// setup canvas
const para = document.querySelector('p');
let count = 0;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');                                  // This represents the drawing area

const width = canvas.width = window.innerWidth;                       // This and below is chaining multiple assignments together, which is OK
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {                                           // You struggle with these, but this formula will give you a random number between and including those parameters. Trust it.
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


class Shape {

    constructor(x, y, velX, velY) {
       this.x = x;
       this.y = y;
       this.velX = velX;                                  // Horizontal 'Velocity'
       this.velY = velY;
    }
}



class Ball extends Shape {

    constructor(x, y, velX, velY, color, size) {
       super(x, y, velX, velY);
       this.color = color;
       this.size = size;
       this.exists = true;
    }

    draw() {
        ctx.beginPath();                                             // Draw a shape on the paper
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);          // Trace an arc shape on the paper  'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc'
        ctx.fill();                                                  // "finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle."
      } 
 
    update() {
      if ((this.x + this.size) >= width) {                // if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
         this.velX = -(this.velX);                        // change the velocity to a negative so it changes direction
      }
    
      if ((this.x - this.size) <= 0) {                    // if the x coordinate is smaller than 0 (the ball is going off the left edge).
         this.velX = -(this.velX);
      }
    
      if ((this.y + this.size) >= height) {               // if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
         this.velY = -(this.velY);
      }
    
      if ((this.y - this.size) <= 0) {                    // if the y coordinate is smaller than 0 (the ball is going off the top edge).
         this.velY = -(this.velY);
      }
    
      this.x += this.velX;                                // These two actually move the ball, the first 4 if statements just keep it in bounds
      this.y += this.velY;
     }

    collisionDetect() {
        for (const ball of balls) {
            if (!(this === ball) && ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
 }

class EvilCircle extends Shape {
    constructor(x, y) {
        super(x, y, 20, 20);
        this.color = 'white';
        this.size = 10;
        
        window.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'a':
                    this.x -= this.velX;
                    break;
                case 'd':
                    this.x += this.velX;
                    break;
                case 'w':
                    this.y -= this.velY;
                    break;
                case 's':
                    this.y += this.velY;
                    break;
            }
        });
    }

    draw() {
        ctx.beginPath();                                             // Draw a shape on the paper
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);          // Trace an arc shape on the paper  'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc'
        ctx.stroke();                                                  // "finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle."
        ctx.lineWidth = 3;
      }

    checkBounds() {
        if ((this.x + this.size) >= width) {                // if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
            this.x -= this.size;                        // change the velocity to a negative so it changes direction
         }
       
         if ((this.x - this.size) <= 0) {                    // if the x coordinate is smaller than 0 (the ball is going off the left edge).
            this.x += this.size;
         }
       
         if ((this.y + this.size) >= height) {               // if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
            this.y -= this.size;
         }
       
         if ((this.y - this.size) <= 0) {                    // if the y coordinate is smaller than 0 (the ball is going off the top edge).
            this.y += this.size;
         }
        
      }
    
    collisionDetect() {
        for (const ball of balls) {
            if (ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.exists = false;
                    console.log('Collision detected.');   // Added to find error. Helped because alerted me that all collisons were being detected, not just with evilCircle.
                    count--;
                    para.textContent = `Ball count: ${count}`;
                }
            } else {
                continue;
            }
        }
    }
  }

 const balls = [];

 while (balls.length < 25) {    // Was cool that one time it was dark geenish vs light greenish ands the blues came out of nowhere and won
     const size = random(10,20);
     const ball = new Ball(
         random(0 + size, width - size),                 // Ensures ball is created at least one ball length from edge
         random(0 + size, height - size),
         random(-7,7),
         random(-7,7),
         randomRGB(),
         size
     );

     balls.push(ball);
     count++;
     para.textContent = `Ball count: ${count}`;
 }

const evilCircle = new EvilCircle(500, 500); 

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, .25)';
    ctx.fillRect(0, 0, width, height);


    for (const ball of balls) {
        if (ball.exists) {                        // Maybe this.exists, also maybe check equality
        ball.draw();
        ball.update();
        ball.collisionDetect();
        }
        
    }

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    
    requestAnimationFrame(loop);

}

loop();

// window.addEventListener('click', e => {
//     const size = random(10,20);
//     const newBall = new Ball(
//         random(0 + size, width - size),                 // Ensures ball is created at least one ball length from edge
//         random(0 + size, height - size),
//         random(-7,7),
//         random(-7,7),
//         randomRGB(),
//         size
//     );

//     newBall.draw();
//     newBall.update();
//     newBall.collisionDetect();
//     console.log('click');
// });




// Upon first go, the evilCircle showed up, did not move, and collisions did not eat the balls. I suspect the exists property is wrong. 
// Not sure about movement yet. Also the ball count is not displaying which I again suspect is related to the exists property.
// Found 2 errors in event listener. A 'velx' that should have been capitalized and two instances of 'd' for switch statement.
// Didn't fix it so I think the logical error is that the circle is being recreated in original spot every iteration.
// Moving the evilCircle method calls for draw, checkBounds, and collisionDetect out of the ball populating loop yourself was correct.
// Could not figure this out. Referring to finished product to make corrections.


// Changes made listed below.


// 1) Instead of 'const count = (balls.length - 1), just initialize count at 0 and then do below
// instead of conditional for ball.exists = false and decrementer, just add 'count--' to the collision detect method.
// instead of contitional for ball.exists = true and incrementer, just add 'count++' to the ball populating loop.
// Without moving these, you got 'ball is not defined' error, because ball.exists couldn't be recognized outside of the loop.



// 2) !! You were correct in assuming the entire problem of the ball not being able to move was due to it being recreated over and over again. Moving the line that created it:
//  'const evilCircle = new EvilCircle(500, 500);' out of the loop() function completely was all that needed to be done. You moved it before, but because the instructions made
// it seem as if every change had to be to the function itself, you didn't try putting it outside which you would have if you weren't bearing to the instructions so hard. Good
// lesson there. 


// 3) Main issue persisting is can't get collisions to eat the balls. The other methods work so this one should be on the class. and be being called.
// Added 'console.log('Collision detected.');' to collissionDetect() and it was detected every collision of the balls, not sure if it was capturing the evilCircle's or not.
//
// Removed 'continue;' line as it wasn't in their final version and was unnecessary. added it due to: 'If it doesn't exist, it has already been eaten by the evil circle, so there is no need to check it again.'
// Upon fixing, put 'continue;' back and everything still worked so this potentially didn't stop anything from working properly.

// Fixed. The for...of loop that populated the balls had 'if (ball.exists = true)'  in it before checking to run the methods, and it needed to either be just 'ball.exists' or 'ball.exists === true'.
// This is something you actually made a note for yourself on but didn't go back and check.



























































/////////////////////////////////////////////////////// Asyncronous JavaScript //////////////////////////////////////////////////////////


setTimeout()

    // Execute a specified block of code once after a specified time has elapsed.
setInterval()

    // Execute a specified block of code repeatedly with a fixed time delay between each call.
requestAnimationFrame()

    // The modern version of setInterval(). Executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.



// SetTimeout()

const myGreeting = setTimeout(() => {
  alert('Hello, Mr. Universe!');
}, 2000);

//

// With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');                                      // All three of these are the same
}, 2000);

// With a function defined separately
function sayHi() {
  alert('Hello Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);

// Passing a parameter as a third 

let myGreeting = setTimeout((who) => {
  alert(`Hello, ${who}`);
}, 2000, 'Nate');

//

function sayHi(who) {
  alert(`Hello ${who}!`);
}

let myGreeting = setTimeout(sayHi, 2000, 'Nate');

// Clearing timeouts

clearTimeout(myGreeting);

// setInterval()

function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);         // Creates a clock that updates once per second

// Clearing interval

clearInterval(createClock);        // clearTimeout() and clearInterval are interchangeable but you should match them to be consistent

// Stopwatch active learning

const body = document.querySelector('body');
      const startButton = document.querySelector('#startButton');
      const pauseButton = document.querySelector('#pauseButton');
      const resetButton = document.querySelector('#resetButton');
      const clock = document.querySelector('.clock');
      
      let stopWatch;
      let origin = 0;
      let seconds = 0;
      let minutes = 0;
      let hours = 0;

      let startTime = Date.now();
      let elapsedTime = Date.now() - startTime;

       function incrementOrigin() {
           origin++;
           hours = Math.floor(origin / 3600);
           minutes = Math.floor((origin % 3600) / 60);
           seconds = (origin % 60);
           if (seconds < 10 && minutes < 10 && hours < 10) {                                    // all below 10
            clock.textContent = `Time Elapsed: 0${hours}:0${minutes}:0${seconds}`;       
           } else if (seconds >= 10 && minutes < 10 && hours < 10) {                            // minutes and hours below 10
            clock.textContent = `Time Elapsed: 0${hours}:0${minutes}:${seconds}`;
           } else if (seconds >= 10 && minutes >= 10 && hours < 10) {                           // only hours below 10
            clock.textContent = `Time Elapsed: 0${hours}:${minutes}:${seconds}`;
           } else if (seconds >= 10 && minutes < 10 && hours >= 10) {                           // only minutes below 10
            clock.textContent = `Time Elapsed: ${hours}:0${minutes}:${seconds}`;
           } else if (seconds < 10 && minutes >= 10 && hours >= 10) {                           // only seconds below 10
            clock.textContent = `Time Elapsed: ${hours}:${minutes}:0${seconds}`;
           } else if (seconds < 10 && minutes < 10 && hours >= 10) {                            // minutes and seconds below 10
            clock.textContent = `Time Elapsed: ${hours}:0${minutes}:0${seconds}`;   
           } else if (seconds < 10 && minutes >= 10 && hours < 10) {                            // hours and seconds below
            clock.textContent = `Time Elapsed: 0${hours}:${minutes}:0${seconds}`;
           } else if (seconds >= 10 && minutes >= 10 && hours >= 10) {                          // none below
            clock.textContent = `Time Elapsed: ${hours}:${minutes}:0${seconds}`;       
       }
    }

    // Their version did it like this:
        // let displayHours = (hours < 10) ? '0' + hours : hours;
        // let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
        // let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;


       function startStopWatch() {
        stopWatch = setInterval(incrementOrigin, 1000);
        body.removeChild(startButton);                                              // This and what follows needed to be changed to 'startButton.disabled = true (or false)'
       }

       function pause() {
         clearInterval(stopWatch);
         body.appendChild(startButton);
       }

       function reset() {
         origin = 0;
         clock.textContent = `Time Elapsed: 00:00:00`;
         clearInterval(stopWatch);
         body.appendChild(startButton);
       }

       startButton.addEventListener('click', startStopWatch);

       pauseButton.addEventListener('click', pause);

       resetButton.addEventListener('click', reset);

       // Overall good job on this one.


// Recursive setTimeout()

let i = 1;

setTimeout(function run() {                // Recursive setTimeout() guarantees the given delay between the code execution completion and the next call.
  console.log(i);                          // When your code has the potential to take longer to run than the time interval you've assigned, it's better to use recursive setTimeout()
  i++;
  setTimeout(run, 100);
}, 100);

// Immediate Timeouts

setTimeout(function() {
  alert('World');                  // No interval, runs immediately, but still not before the rest of the code is done running
}, 0);                             // useful in cases where you want to set a block of code to run as soon as all of the main thread has finished running

alert('Hello');               

// requestAnimationFrame()

function draw() {
  // Drawing code goes here                                 // Tries to get as close to 60 FPS as it can. 
  requestAnimationFrame(draw);
}

draw();                                                     // This would run continuously.

//Attempting to do the same thing using setInterval()

function draw() {
  // Drawing code goes here
}

setInterval(draw, 17);            // 17 comes from taking the 1,000 ms and dividing it by 60 fps

// Including a timestamp

let startTime = null;

function draw(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

   currentTime = timestamp - startTime;

   // Do something based on current time

   requestAnimationFrame(draw);
}

draw();


// The spinner active learning

const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
    if (!startTime) {
    startTime = timestamp;
    }
    rotateCount = (timestamp - startTime) / 3;
    rotateCount %= 360;
    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}

draw();

cancelAnimationFrame(rAF);           // Cancelling the spin

// Adding a click event to start and stop the spin

const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;
let spinning = false;                     // This was the important part I missed

function draw(timestamp) {
    if (!startTime) {
    startTime = timestamp;
    }
    rotateCount = (timestamp - startTime) / 3;
    rotateCount %= 360;                                       // Keeps us working within 360 degrees because it is easier.
    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
    spinning = true;
}

function cancel() {
  if (spinning === true) {
  cancelAnimationFrame(rAF);
  spinning = false;
  } else {
  requestAnimationFrame(draw);
  }
};

draw();

window.addEventListener('click', cancel)


// Reaction Game Active Learning

const spinner = document.querySelector('.spinner p');
const spinnerContainer = document.querySelector('.spinner');
let rotateCount = 0;
let startTime = null;
let rAF;
const btn = document.querySelector('button');
const result = document.querySelector('.result');

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function draw(timestamp) {
  if(!startTime) {
   startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;

  rotateCount %= 360;

  spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
  rAF = requestAnimationFrame(draw);
}

result.style.display = 'none';
spinnerContainer.style.display = 'none';

function reset() {
  btn.style.display = 'block';
  result.textContent = '';
  result.style.display = 'none';
}

btn.addEventListener('click', start);

function start() {
  draw();
  spinnerContainer.style.display = 'block';
  btn.style.display = 'none';
  setTimeout(setEndgame, random(5000,10000));
}

function setEndgame() {
  cancelAnimationFrame(rAF);
  spinnerContainer.style.display = 'none';
  result.style.display = 'block';
  result.textContent = 'PLAYERS GO!!';

  document.addEventListener('keydown', keyHandler);

  function keyHandler(e) {
    let isOver = false;
    console.log(e.key);

    if (e.key === "a") {
      result.textContent = 'Player 1 won!!';
      isOver = true;
    } else if (e.key === "l") {
      result.textContent = 'Player 2 won!!';
      isOver = true;
    }

    if (isOver) {
      document.removeEventListener('keydown', keyHandler);
      setTimeout(reset, 5000);
    }
  };
}












