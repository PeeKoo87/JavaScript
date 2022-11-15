console.log('input numbers, 0 will end the program');

let numbers = [];
for (;;){
    const number = parseInt(prompt('enter number'));
    numbers.push(number)

    if (number === 0){
        break
    }
}
numbers.sort((a, b) => b - a)
console.log(numbers)




