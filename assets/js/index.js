const display = document.getElementById('value');
const clearBut = document.getElementById('clear');
const histDisplay = document.getElementById('hist-value');
let firstNum;
let secondNum;
let operation;
let result;

const verifyDisplay = () =>{
    if (display.innerText.length > 6) {
        display.style.fontSize = '40px';
    } else {
        display.style.fontSize = '60px'
    }
}

const addNum = (arg)=> {
    if (display.innerText == 0) {
        display.innerText = arg;
        verifyDisplay()
    } else if (result && display.innerText == 0) {
        result = undefined;
        display.innerText = arg;
        verifyDisplay()
    } else {
        display.innerText += arg;
        verifyDisplay()
    }
}

const selectOperation = (arg) =>{
    firstNum = Number(display.innerText);
    display.innerText = 0;
    operation = arg;
    histDisplay.innerText = `${firstNum} ${arg}`
}

clearBut.addEventListener('click', () =>{
    display.innerText = 0;
    histDisplay.innerText = '';
    verifyDisplay()
})

const renderResult = () =>{
    secondNum = Number(display.innerText);
    if (operation === "+"){
        result = firstNum + secondNum;
        display.innerText = result;
        histDisplay.innerText += ` ${secondNum} = `;
        verifyDisplay()
    } else if (operation === '-'){
        result = firstNum - secondNum;
        display.innerText = result;
        histDisplay.innerText += ` ${secondNum} = `;
        verifyDisplay()
    } else if (operation === '*'){
        result = firstNum * secondNum;
        display.innerText = result;
        histDisplay.innerText += ` ${secondNum} = `;
        verifyDisplay()
    } else {
        result = firstNum / secondNum;
        display.innerText = result;
        histDisplay.innerText += ` ${secondNum} = `;
        verifyDisplay()
    }

}