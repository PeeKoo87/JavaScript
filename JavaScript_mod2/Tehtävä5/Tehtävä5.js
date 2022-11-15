console.log('input numbers, duplicate will end the program');
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
