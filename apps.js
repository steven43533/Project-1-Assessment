let subtractButton = document.getElementById('subtract')
let addButton = document.getElementById('add')

let responsiveNumber = Number(document.getElementById('responsiveNumber').innerText)
console.log(responsiveNumber);


function add() {
    let numberInput = Number(document.getElementById('numberBox').value)
    responsiveNumber = responsiveNumber + numberInput
    console.log(responsiveNumber);
    updateValue()
}

function subtract() {
    let numberInput = Number(document.getElementById('numberBox').value)
    responsiveNumber = responsiveNumber - numberInput
    console.log(responsiveNumber);
    updateValue()
}

function updateValue() {
    document.getElementById('responsiveNumber').innerText = responsiveNumber
}


addButton.addEventListener('click', add)
subtractButton.addEventListener('click', subtract)