// const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     const searchName = input.value.toLowerCase();
//     input.value = '';
//     input.focus();
//     para.textContent = '';
//     for (const contact of contacts) {
//       const splitContact = contact.split(':');
//       if (splitContact[0].toLowerCase() === searchName) {
//         para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
//         break;
//       }
//     }
//     if (para.textContent === '') {
//      para.textContent = 'Contact not found.';
//    }
//  });



const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  para.textContent = 'Output: ';
  const num = input.value;
  input.value = '';
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
