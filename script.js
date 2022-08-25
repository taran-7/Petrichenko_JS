// СЛАВА ІСУСУ ХРИСТУ!
/*jshint esversion: 6 */
"use strict";

// Циклы та мітки. Урок 23 Івана Петриченко

// for (let i = 0; i <3; i++){
//     console.log(i, 'i')
//     for(let j=0; j<4;j++){
//         console.log(j, 'j')
//             }
// }


// // Завдання з додаванням ялинки зірочками.
//
// let result = ''
// const length = 7
//
// for (let i = 1; i<length; i++) {
//
//     for (let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n';
// }
// console.log(result)

// // Цикл у циклі. Мітки.
// for (let i = 0; i < 2; i++) {
//   console.log(`First level ${i}`);
//   for (let j = 0; j < 2; j++) {
//     console.log(`Second level ${j}`);
//     for (let t = 0; t < 2; t++) {
//       if (t === 2) continue;
//       console.log(`Third level ${t}`);
//     }
//   }
// }

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label



// foo: {
//   console.log('привет');
//   break foo;
//   console.log('эта строка не будет исполнена');
// }
// console.log('спацювало');
//
// // Вывод:
// //   "привет"
// //   "спацювало"

let i, j;

loop1:
for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
  loop2:
  for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log('i = ' + i + ', j = ' + j);
  }
}

// Вывод:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"

// forEach 

let data = [
  {
    'name': 'Olex',
    'age': 34,
    'email': 'top@i.ua'
  },
  {
    'name': 'Olex',
    'age': 37,
    'email': 'topjsdfjkdsf@i.ua'
  },
  {
    'name': 'Oikdfd',
    'age': 34,
    'email': 'tsdfdsfop@i.ua'
  },
  {
    'name': 'Terui',
    'age': 38,
    'email': '8324ewrtop@i.ua'
  },
]

const emailGet = []
const userGet = []


data.forEach((el) => {
  emailGet.push(el.email)
  userGet.push(el.name)

})
console.log(emailGet)
console.log(userGet)




const ar = [1, 2, 3, 4, 5, 6, 7]
const newArr = []

ar.forEach((item) => {
  newArr.push((`${item}${item}`))
})
console.log(newArr)


// map
const ar1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = ar1.map((item, index, ar1) => {
  return item = `${item}${item}`
})
console.log(arr2)


const ar3 = [1, 2, 3, 4, 5, 6, 7]



console.log()