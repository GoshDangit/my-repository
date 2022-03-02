//       PART 1       //
// Examine the document object //
// console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 'Javascript DOM';
//console.log(document.doctype);
//console.log(document.all);
//console.log(document.forms[0]);
//console.log(document.images);
// Get Element By ID //
//console.log(document.getElementById('heady'));
//var headerTitle = document.getElementById('heady');
/*console.log(headerTitle);
console.log(document.getElementById('para'));
console.log(5* 6 * 5 * 4* 6 );
var img = document.createElement('img');
img.src = 'images/image.jpg';
img.height = 200;
img.width = 200;
document.getElementById('body').appendChild(img);
document.getElementById('para').innerHTML = 'Here is the paragraph altered through js';
document.getElementById('para').style.color = "blue";
var myButton = document.createElement('button');
myButton.id = 'myButton'
myButton.innerHTML = 'click me'
myButton.style.background = 'green'
document.getElementById('body').appendChild(myButton);
function myFunction() {
    alert('hey')
}
myButton.onclick = myFunction;
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';*/
//headerTitle.style.borderBottom = 'solid 3px #000';

// Get Elements By Class Name //
//var items = document.getElementsByClassName('listItem');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'yellow';
//items[1].style.color = 'yellow';
//items[0].style.color = 'blue';
//items[2].style.color = 'green';
//items[3].style.color = 'purple';
//items[2].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'black';

// Gives Error
//items.style.backgroundColor = '#f4f4f4'

//for (var i = 0; i < items.length; i++) {                            // Fixing the error utilizing a loop
//    items[i].style.backgroundColor = '#f4f4f4';
//}

// Get Elements By Tag Name //
//var li = document.getElementsByTagName('li');
//console.log(li); 
//console.log(li[2]);
//li[2].textContent = 'GREEN';
//li[2].style.color = 'green';
//li[2].style.backgroundColor = 'darkgreen';
//
//for(var i = 0; i < li.length; i++) {
//    li[i].style.backgroundColor = 'blue';
//}

// Query Selector //
//var header = document.querySelector('#heady');
//header.style.borderBottom = 'solid 4px #ccc';
//
//var input = document.querySelector('input')
//console.log(input);
//input.value = 'Hello World';
//
//var submit = document.querySelector('input[type="submit"]');   /// FOCUS    // using []'s to specify an attribute
//submit.value = 'Submit that shit';
//
//var item = document.querySelector('.listItem');
//item.style.color = 'blue';
//
//var lastItem = document.querySelector('.listItem:last-child');
//lastItem.style.color = 'purple';
//
//var secondItem = document.querySelector('.listItem:nth-child(2)'); // FOCUS
//console.log(secondItem);
//secondItem.style.color = 'red';
//
//var thirdItem = document.querySelector('.listItem:nth-child(3)');
//thirdItem.style.color = 'green';
//
//var headerThree = document.getElementById('buttonHeader');
//console.log(headerThree);

//Query Selector All //
//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'Hello';
//
//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');
//
//for(var i =0; i <odd.length; i++) {
//    odd[i].style.backgroundColor = '#f4f4f4';
//}
//
//for(var i =0; i <even.length; i++) {
//    even[i].style.backgroundColor = 'lightgreen';
//}









































//      PART 2       //
// Traversing The Dom //

//var itemList = document.querySelector('#list');
// Parent Node                                                          // Not so useful
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#ccc';
//console.log(itemList.parentNode.parentNode);

// Parent Element
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#ccc';
//console.log(itemList.parentElement.parentNode);
                                                // PARENT NODE, FIRST CHILD, CHILD NODE ALL SORT OF USELESS DUE TO TEXT BEING LISTED
//  Child Nodes                                                         // Not so useful
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[2]);
//itemList.children[2].style.backgroundColor = 'lightgreen';

// First Child                                                          // Not so useful
//console.log(itemList.firstChild);

// First Element Child
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'chartreuse'

// Last Child
//console.log(itemList.lastChild);

// Last Element Child
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'chartreuse'

// Siblings

//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);

// Previous Siblings

//console.log(itemList.previousSibling)
//console.log(itemList.previousElementSibling)
//itemList.previousElementSibling.style.backgroundColor = 'green';

// Create Element

// Create a Div                                    //FOCUS vvv
//var newDiv = document.createElement('div');
//
//console.log(newDiv)
//Add stuff to div
//newDiv.className = 'divClass';
//newDiv.id = 'divId'
//newDiv.setAttribute('title', 'Div Title');
//Create text node
//var newDivText = document.createTextNode('Yooooooooooooooo');
// Add text to divs 
//newDiv.appendChild(newDivText)
//
//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');
//
//container.insertBefore(newDiv, h1);
//
//newDiv.style.fontSize = '30px';
//
//var newElement = document.createElement('div');
//newElement.id = 'myElement';
//var newElementText = document.createTextNode('Here is the new thing.');
//newElement.appendChild(newElementText);
//var before = document.querySelector('form');
//var after = document.querySelector('input')
//
//before.insertBefore(newElement, after);

// Practicing creating divs some more ///

// var button = document.getElementById('button');

// console.log(button);

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// const element = document.getElementById("div1");
//element.appendChild(para);

// const para2 = document.createElement('p');
// const node2 = document.createTextNode('More new text');
// para2.appendChild(node2);
// element.appendChild(para2);

//const para1 = document.getElementById('p1');
//const otherPara = document.getElementById('p2');


//element.insertBefore(para, otherPara);  // When using insert before, you call the parent element of the element you're inserting before, not necessarily the element that comes right before it.

// Practicing creating divs some more ///

// const div1 = document.getElementById('div1');
// const para1 = document.getElementById('p1');
// const para2 = document.getElementById('p2');

// const newDiv = document.createElement('div');

// const newDivText = document.createTextNode('Here is the new shit');

// newDiv.appendChild(newDivText);

//div1.insertBefore(newDiv, para2); Option to place in between something

//div1.appendChild(newDiv);  Option to put it at end

// section.innerHTML = ' ';
// let para1 = document.createElement('p');
// para1.textContent = response;
// section.appendChild(para1);

// Practicing with arrays

// const myArray = ['blue', 'red', 'green', 'purple'];
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[2]);

// const para = document.getElementById('para');

// para.innerText = myArray;

// const nate = {firstName: 'Nathan', lastName: 'Davies', Age: 29};

// for (i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// const brandi  = {firstName: 'Brandi', lastName: 'Bethune', Age: 28};

// console.log(brandi.firstName)

// console.log(brandi.lastName)
// console.log(brandi.Age)

// const theArray = []
// theArray[0] = 'green';
// theArray[1] = "blue";
// theArray[2] = 'red';

// console.log(theArray);
































//        PART 3     //
// Events //



//    document.getElementById('heady').textContent = 'Changed.'
//    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//


//button = document.getElementById('button').addEventListener('click', function(){
//    console.log('Success!');
//});

// or //


//button = document.getElementById('button').addEventListener('click', buttonClick);

//function buttonClick(e) {
   //console.log(e);
   //console.log(e.target);
   //console.log(e.target.id);
   //console.log(e.target.className);
   //console.log(e.target.classList);
   //var output = document.getElementById('output');
   //output.innerHTML = '<h3>'+e.target.id+'</h3>';
//
   //console.log(e.type);

   //console.log(e.clientX);
   //console.log(e.clientY);

   //console.log(e.offsetX);
   //console.log(e.offsetY);

   //console.log(e.altKey);
   //console.log(e.ctrlKey);
   //console.log(e.shiftKey);


//}

alert('Once you enter the blue box with your mouse, please do not leave it.');

//var button = document.getElementById('button');
var box = document.getElementById('box');
// var output = document.getElementById('output');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);
//box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent); 
box.addEventListener('mouseleave', boxExitAlert);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);
   
//box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector('form');
// var select = document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);


// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

//  itemInput.addEventListener('cut', runEvent);
//  itemInput.addEventListener('paste', runEvent);
 
 
 //itemInput.addEventListener('cut', runEvent);
 //itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

//form.addEventListener('submit', runEvent);

function runEvent(e){
    //e.preventDefault();  // prevents the form from fully submitting to the page so that you can see it in the console
    console.log('event type: '+e.type);
    //document.body.textContent = '';
    //console.log(e.target.value)
    //output.innerHTML = '<h3>'+e.target.value+'</h3>'

    //output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    //document.body.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)';

}
function boxExitAlert() {
    alert('You have exited the box, please return your mouse to the box.');
}

//Practicing with Events 

// function myFunction() {
//     console.log('Success!!111!!');
// };

//function buttonClick(e) {
//    console.log(e.type);
//}

//const button = document.getElementById('button')

//button.addEventListener('click', myFunction);
//button.addEventListener('click', buttonClick);


//const box = document.getElementById('box');

//function runEvent(e) {
    //console.log('Event Type: '+e.type);
    //document.getElementById('output').textContent = "Event Type: "+e.type;
    //document.body.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)';
//}

//box.addEventListener('mousemove', runEvent);


































// //Final Project


// var form = document.getElementById('addForm');

// var itemList = document.getElementById('items');

// var filter = document.getElementById('filter');

// //Form Submit Event
// form.addEventListener('submit', addItem);

// //Delete Event

// itemList.addEventListener('click', removeItem)

// // Filter Event

// filter.addEventListener('keyup', filterItems)

// // Add Item
// function addItem(e){
//     e.preventDefault();


// //Get input value
// var newItem = document.getElementById('item').value;

// // Create New li Element
// var li = document.createElement('li');
// li.className = 'listItem';
// // Add Text Node with Input Value
// li.appendChild(document.createTextNode(newItem + ' '));

// //Create Delete Button Element
// var deleteButton = document.createElement('button');
// deleteButton.className = 'xButton';

// // Append Text Node
// deleteButton.appendChild(document.createTextNode('X'));
// //or this maybe? this is what you thought when you jumped ahead
// deleteButton.innerText = 'X';

// //Append button to li
// li.appendChild(deleteButton);

// //Append li to list
// itemList.appendChild(li);
// }

// // Remove Item

// function removeItem(e) {
//     if(e.target.classList.contains('xButton')){
//         if(confirm('Are you sure?')){
//             var li = e.target.parentElement;  //the list item is the parent of the x button
//             itemList.removeChild(li); 
//         }
//     }
// }

// // Filter Items

// function filterItems(e) {

//     //Convert text to lowercase
//     var text = e.target.value.toLowerCase();
    
//     //Get li's
//     var items = itemList.getElementsByTagName('li');

//     // Convert to an array
//     Array.from(items).forEach(function(item){
//         var itemName = item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
        
//     })
// }


//The Machine (Click Event with if/else and equality operator)


const button = document.getElementById('theButton');
const text = document.getElementById('thePara');

button.addEventListener('click', machineStart)

function machineStart() {
    if(button.innerText === 'Start machine') {
        button.textContent = 'Stop machine';
        text.textContent = 'The machine has started.';
    }
    else {
        button.textContent = 'Start machine';
        text.textContent = 'The machine is stopped.';
    }
}