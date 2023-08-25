let firstNumb;
let operator;
let secondNumb;

let theInput = Array();
let theAnswer = null;

let btnPushed;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}



function equals(input) {
    firstNum = parseFloat(input[0]);
    operator = input[1];
    secondNum = parseFloat(input[2]);

    if(operator === '+') {
        theAnswer = add(firstNum, secondNum);
        console.log(theAnswer);
    } else if(operator === '-') {
        theAnswer = subtract(firstNum, secondNum);
        console.log(theAnswer);
    } else if(operator === '*') {
        theAnswer = multiply(firstNum, secondNum);
        console.log(theAnswer);
    } else if(operator === '/') {
        theAnswer = divide(firstNum, secondNum);
        console.log(theAnswer);
    } else if(operator === '%') {
        theAnswer = modulo(firstNum, secondNum);
        console.log(theAnswer);
    }

    updateAnswerDisplay();

    theInput = [];
    console.log(theInput);
    theInput.push(theAnswer);
    theInput[1] = null;
    console.log(theInput);

}





const theInputDisplay = document.querySelector('#theInput');
const theAnswerDisplay = document.querySelector('#theAnswer');

const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach(btn => btn.addEventListener('click', inputNumber));


const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(btn => btn.addEventListener('click', inputOperator));



function inputNumber(e) {
    btnPushed = e.target.innerText;

    console.log(btnPushed);

    if(theInput.length === 0) {
        theInput.push(btnPushed);
        updateInputDisplay();
    } else if(theInput.length === 2 && theInput[1] === null) {

    } else if(theInput.length === 2) {
        theInput.push(btnPushed);
        updateInputDisplay();
        theAnswerDisplay.innerHTML = '&nbsp;'        
    } else if(theInput.length === 1 || theInput.length === 3) {
        theInput[theInput.length - 1] += btnPushed;
        updateInputDisplay();
    } 

    console.log(theInput);

}

function inputOperator(e) {
    btnPushed = e.target.innerText;

    console.log(btnPushed);

    if(btnPushed === 'C') {
        clearInput();
    } else if(theInput.length === 1 && btnPushed !== '=') {
        theInput.push(btnPushed);
        updateInputDisplay();
    } else if(theInput.length === 2 &&  btnPushed === '=') {
        
    } else if(theInput.length === 2 && theInput[1] === null) {
        theInput[1] = btnPushed;
        updateInputDisplay();
    } else if(theInput.length === 2) {
        theInput[1] = btnPushed;
        updateInputDisplay();
    } else if(theInput.length === 3 && btnPushed === '=') {
        equals(theInput);
    } else if(theInput.length === 3) {
        equals(theInput);
        theInput[1] = btnPushed;
        console.log(theInput + 'here');
        updateInputDisplay();
    }

    console.log(theInput);

}

function updateInputDisplay() {
    theInputDisplay.innerText = theInput.join(' ');
}

function updateAnswerDisplay() {
    theAnswer = theAnswer.toFixed(3);
    theAnswer = parseFloat(theAnswer);

    theAnswerDisplay.innerText = theAnswer;
}

function clearInput() {
    theInput = [];
    theAnswer = null;
    theInputDisplay.innerHTML = '&nbsp;';
    theAnswerDisplay.innerHTML = '&nbsp;';
}