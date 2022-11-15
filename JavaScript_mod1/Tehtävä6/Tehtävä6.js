let query = confirm('Should i calculate the square root?');



print1 = document.querySelector('#target')


if (query === true){
    const number = parseInt(prompt('what number do you want to calculate?'))
    sqr = Math.sqrt(number)
    print1.innerHTML = 'the square root is ' + sqr
    if (number < 0){
    print1.innerHTML = 'the square root of a negative is not defined.'
}

}
if (query === false){
    print1.innerHTML = 'the square root is not calculated.'
}

