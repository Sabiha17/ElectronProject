const display = document.getElementById('calculator-display');
const buttons = document.querySelectorAll('.calculator-buttons button');
let currentInput = '';
let lastInput = '';
let operator = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'AC') {
      currentInput = '';
      lastInput = '';
      operator = '';
      result = '';
      display.value = '0';
    } else if (value === '=') {
      if (operator && lastInput) {
        try {
          currentInput = eval(`${lastInput} ${operator} ${currentInput}`);
          display.value = currentInput;
          operator = '';
          lastInput = '';
        } catch (error) {
          display.value = 'Error';
          currentInput = '';
          lastInput = '';
          operator = '';
        }
      }
    } else if (['+', '-', '*', '/', '%'].includes(value)) {
      if (currentInput) {
        lastInput = currentInput;
        currentInput = '';
        operator = value;
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
