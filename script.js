
const calculator = () => {
    let firstOperand = document.getElementById('first-operand').value;
    let secondOperand = document.getElementById('second-operand').value;
    let operator = document.getElementById('operators').value;
    console.log(operator);
    let result;
    switch (operator) {
        case '+':
            result = Number(firstOperand) + Number(secondOperand);
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case 'x':
            result = firstOperand * secondOperand;
            break;
        case '÷':
            result = firstOperand / secondOperand;
            break;
    
        default:
            result = 'ERROR';
            break;
    }
    document.getElementById('result').innerHTML = result;
}
