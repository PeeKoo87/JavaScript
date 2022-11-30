const button = document.querySelector('button')
button.onclick = calculate

function calculate() {
    let operation = document.getElementById('operation').value
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    if (operation === 'add') {
        document.getElementById('result')
            .innerText = parseInt(num1) + parseInt(num2)
    }
    else if (operation === 'sub') {
        document.getElementById('result')
            .innerText = parseInt(num1) - parseInt(num2)
    }
    else if (operation === 'multi') {
        document.getElementById('result')
            .innerText = parseInt(num1) * parseInt(num2)
    }
    else if (operation === 'div') {
        document.getElementById('result')
            .innerText = parseInt(num2) / parseInt(num2)
    }
}