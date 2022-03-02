const scores = [45, 64, 100, 49, 87, 02, 39, 99, 83, 29, 54, 95];

const output = document.querySelector('.output');

for (score of scores) {
    if (score <= 60) {
        output.textContent += `${score}, `;
    }
}


// 1. Take format data comes in copy and pasted 
// 2. toString(), slice, splice, etc to get the data into an array in a format you can work with
// 3. Then modify the code below. 


 // Search array of objects for a given name and display that name and number

//  const name = 'Mustafa';
//  const para = document.createElement('p');

//  const phonebook = [
//    { name : 'Chris', number : '1549' },
//    { name : 'Li Kang', number : '9634' },
//    { name : 'Anne', number : '9065' },
//    { name : 'Francesca', number : '3001' },
//    { name : 'Mustafa', number : '6888' },
//    { name : 'Tina', number : '4312' },
//    { name : 'Bert', number : '7780' },
//    { name : 'Jada', number : '2282' },
//  ]

//  // Add your code here

//  for (i = 0; i < phonebook.length; i++) {
//      if (phonebook[i].name === 'Mustafa') {
//          para.textContent = `${phonebook[i].name}: ${phonebook[i].number}`;
//          break;
//      }

//  }

//  // Don't edit the code below here!

//  const section = document.querySelector('section');
//  section.appendChild(para);


