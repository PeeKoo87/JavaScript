'use strict';

let name = prompt('What is your name?'),number = Math.floor(Math.random()*4)+1;
console.log(number)
console.log(name)

print1 = document.querySelector('#target')

if (number === 1){
    print1.innerHTML =  name + ', you are Gryffindor.';
}
if (number === 2){
    print1.innerHTML =  name + ', you are Hufflepuff.';
}
if (number === 3){
    print1.innerHTML =  name + ', you are Ravenclaw.';
}
if (number === 4){
    print1.innerHTML =  name + ', you are Slytherin.';
}
