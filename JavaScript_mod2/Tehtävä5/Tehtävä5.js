console.log('input numbers, duplicate will end the program');

/*
let numbers2 =[];
let numbers = [];


for (;;){
   const number = parseInt(prompt('enter number'));
    numbers.push(number)

    numbers2.push(number)
    if (numbers !== numbers2){
        break
    }
}

numbers.sort((a, b) => a - b)
console.log(numbers)
*/

const numberArr = [];
let programRunning = true;
while (programRunning) {
    const number = parseInt(prompt('Input number'));
    if (numberArr.includes(number)) {
        programRunning = false;
    } else {
        numberArr.push(number);
    }
    console.log(numberArr);
}
numberArr.sort((a,b) => a-b)
console.log(numberArr);