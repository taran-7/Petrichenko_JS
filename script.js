// СЛАВА ІСУСУ ХРИСТУ!
/*jshint esversion: 6 */
"use strict";

const people = [
    { name: 'Vasyl', age: 33, hith: 177 },
    { name: 'Mykola', age: 54, hith: 157 },
    { name: 'Petro', age: 22, hith: 189 },
]

// // for

// for (let i = 0; i < people.length; ++i) {
//     console.log(people[i])
// }

// // for of

// for (let person of people) {
//     console.log(person)
// }

// forEach

// people.forEach(function (person, index, people) {
//     console.log(person)
//     console.log(index)
//     console.log(people)
// })

// people.forEach(person => console.log(person))


// Map 
const newPeople = people.map(person => {
    return person
})


// 20 методов массивов в JavaScript, которые вы должны знать.
// https://www.youtube.com/watch?v=ZcLGyy0YFwk

// const arr = [23,43,55,67,77,78,99]
// // 1. forEach перебор массива
//
// arr.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// 2. Перебор и возврат нового массива на основе текущего массива.

// const arr = [23,43,55,67,77,78,99]
//
// const newArr = arr.map((item,index,arr)=>{
// return `${index} ${item}${item}`
// })
// console.log(newArr)

// 3. reduce   Перебор элементов массива и возврат новой структуры данных

const arr = [23,43,55,67,77,78,99]

const newReduce = arr.reduce((acc, item,index, arr)=>{
acc[item] = index
    return acc;
},{})
console.log(newReduce)

