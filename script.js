// СЛАВА ІСУСУ ХРИСТУ!
/*jshint esversion: 6 */
"use strict";

const people = [
    { name: 'Vasyl', age: 33, hith: 177 },
    { name: 'Mykola', age: 54, hith: 157 },
    { name: 'Petro', age: 22, hith: 189 },
]

for (let i = 0; i < people.length; ++i) {
    console.log(people[i])
}

for (let person of people) {
    console.log(person)
}

