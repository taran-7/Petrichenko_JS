// СЛАВА ІСУСУ ХРИСТУ!
/*jshint esversion: 6 */
// "use strict";

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
//     console.log(`First level ${i}`);
//     for (let j = 0; j < 2; j++) {
//         console.log(`Second level ${j}`);
//         for (let t = 0; t < 2; t++) {
//             if (t === 2) continue;
//             console.log(`Third level ${t}`);
//         }
//     }
// }

// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label


// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }

// }

// firstTask();


// Место для второй задачи

// При помощи цикла for вывести числа от 20 до 10 в консоль. 
// В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) {
//             break;
//         }
//         console.log(i);
//     }
// }
// secondTask();

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
thirdTask();

// // Место для четвертой задачи

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let i = 2;

while (i <= 16) {

    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

// // Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


// function fourthTask() {
//     // Пишем решение вот тут


// }

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {

        arrayOfNumbers[i - 5] = i;

    }
    console.log(arrayOfNumbers);

    // Не трогаем
    return arrayOfNumbers;
}

fifthTask();


