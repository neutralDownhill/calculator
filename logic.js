// GLOBAL VARIABLES
let firstNumb;
let operator;
let secondNumb;

let theInput = Array();
let theAnswer = null;

let btnPushed;


// FORMULAS
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




// EVENT LISTENERS
const theInputDisplay = document.querySelector('#theInput');
const theAnswerDisplay = document.querySelector('#theAnswer');

const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach(btn => btn.addEventListener('click', screenNumberBtnHander));


const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(btn => btn.addEventListener('click', screenOperatorBtnHandler));

document.addEventListener('keydown', keyPressHandler);



// PARSE INPUT
function keyPressHandler(e) {
    const key = e.key;
    console.log(key);

    if(key.includes('0') || key.includes('1') || key.includes('2')
    || key.includes('3') || key.includes('4') || key.includes('5')
    || key.includes('6') || key.includes('7') || key.includes('8')
    || key.includes('9') || key.includes('.')) {
        inputNumber(key);
    } else if(key.includes('=') || key.includes('+') || key.includes('-')
    || key.includes('*') || key.includes('/') || key.includes('%')) {
        inputOperator(key);
    } else if(key.includes('Enter')) {
        inputOperator('=');
    } else if(key.includes('Backspace')) {
        inputOperator('C');
    }
}

function screenNumberBtnHander(e) {
    btnPushed = e.target.innerText;
    inputNumber(btnPushed);
}

function screenOperatorBtnHandler(e) {
    btnPushed = e.target.innerText;
    inputOperator(btnPushed);
}



// INPUT NUMBERS & DECIMALS
function inputNumber(btnPushed) {
    console.log(btnPushed);

    if((theInput.length === 0 && btnPushed === '.') || (theInput.length === 2 && btnPushed === '.')) {
        theInput.push('0' + btnPushed);
        updateInputDisplay();
    } else if(theInput.length === 0) {
        theInput.push(btnPushed);
        updateInputDisplay();
    } else if(theInput.length === 2 && theInput[1] === null) {

    } else if(theInput.length === 2) {
        theInput.push(btnPushed);
        updateInputDisplay();
        theAnswerDisplay.innerHTML = '&nbsp;'        
    } else if((theInput.length === 1 && theInput[theInput.length - 1].includes('.') && btnPushed === '.')
            || (theInput.length === 3 && theInput[theInput.length - 1].includes('.') && btnPushed === '.')) {
        
    } else if(theInput.length === 1 || theInput.length === 3) {
        theInput[theInput.length - 1] += btnPushed;
        updateInputDisplay();
    } 

}



//INPUT OPERATORS & EQUALS
function inputOperator(btnPushed) {
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


// UPDATE DISPLAY
function updateInputDisplay() {
    theInputDisplay.innerText = theInput.join(' ');
}

function updateAnswerDisplay() {
    theAnswer = theAnswer.toFixed(3);
    theAnswer = parseFloat(theAnswer);

    theAnswerDisplay.innerText = theAnswer;
}


// CLEAR DISPLAY
function clearInput() {
    theInput = [];
    theAnswer = null;
    theInputDisplay.innerHTML = '&nbsp;';
    theAnswerDisplay.innerHTML = '&nbsp;';
}