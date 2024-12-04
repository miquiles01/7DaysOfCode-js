var currentNumber = '';
var previousNumber = '';
var operation = null;

function updateDisplay() {
  const result = document.getElementById('result');
  if (operation) {
    result.value = `${previousNumber} ${operation} ${currentNumber}`;
  } else {
    result.value = currentNumber || '0';
  }
}

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    calculate();
  }
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
  updateDisplay();
}

function calculate() {
  if (previousNumber === '' || currentNumber === '') return;
  var result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Erro';
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operation = null;
  previousNumber = '';
  updateDisplay();
}

function clearResult() {
  currentNumber = '';
  previousNumber = '';
  operation = null;
  updateDisplay();
}
