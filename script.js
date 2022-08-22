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

for (let i = 0; i < 2; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 2; j++) {
        console.log(`Second level ${j}`);
        for (let t = 0; t < 2; t++) {
            if (t === 2) continue;
            console.log(`Third level ${t}`);
        }
    }
}





