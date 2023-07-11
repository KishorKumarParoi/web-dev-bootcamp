"use strict";
document.body.style.color = 'cyan'
document.body.style.color = 'red'
document.body.style.backgroundColor = 'red'
document.body.style.color = 'blue'
document.getElementsByTagName('h1')

let a = document.getElementsByTagName('h1')
let li = document.getElementsByTagName('li')

for (let x of a) {
    console.log(x);
}


for (let x of a) {
    x.style.color = 'white';
    console.log(x);
}

for (x of li) {
    x.style.color = 'aqua'
}