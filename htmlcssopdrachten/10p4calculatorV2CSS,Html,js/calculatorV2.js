// const decimalSeparator = (1.1).toLocaleString(undefined, {useGrouping: false, decimal: ','}).substring(1, 2); // Get the decimal separator as a comma

const decimalSeparator = ',';

function addToScreen(value) {
  const screen = document.querySelector('.display');
  let current = screen.textContent.replace(/\./g, '').replace(',', '.');

  if (current === '0') {
    current = '';
  }

  if (current.toString().includes(',') && value === ',') {
    return;
  }

  if (value === '0' && current === '') {
    return;
  }

  // const decimalCount = (current.split('.')[1] || []).length;
  const newValue = addThousandSeparators(current.toString() + value.replace(',', '.'));
  screen.textContent = newValue;
}

function addThousandSeparators(value) {
  const parts = value.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const decimalSeparator = ',';
  if (parts.length > 1) {
    parts[1] = parts[1].replace(',', decimalSeparator);
  }
  return parts.join(decimalSeparator);
}

function isLastCharacterDot(str) {
  const lastCharacter = str.charAt(str.length - 1);
  return lastCharacter === '.';
}

function clearScreen() {
  const display = document.querySelector('.display');
  display.textContent = '0';
}

function calculate() {
  const screen = document.querySelector('.display');
  let equation = screen.textContent.replace(/\./g, '').replace(/\,/g, '.');
  let result;

  try {
    result = new Function('return ' + equation)();
    result = parseFloat(result.toFixed(7)); // round to 7 decimal places

    // check if result is almost equal to a whole number
    if (Math.abs(result - Math.round(result)) < 0.0000001) {
      screen.textContent = (Math.round(result).toString()).replace('.', ',');
    } else {
      screen.textContent = (result.toString().replace('.', ','));
    }
  } catch (error) {
    screen.textContent = 'SyntaxError';
  }
}


function addDecimal() {
  const display = document.querySelector('.display');
  display.textContent += ',';
}


function addOperator(value) {
  const display = document.querySelector('.display');
  const current = display.textContent.replace(/\./g, '').replace(',', '.');

  if (current.endsWith('+') || current.endsWith('-') || current.endsWith('*') || current.endsWith('/')) {
    display.textContent = current.slice(0, -1) + value;
  } else {
    display.textContent += value;
  }
}

function deleteLastValue() {
  const screen = document.querySelector('.display');
  let current = screen.textContent;

  if (current.length === 1) {
    screen.textContent = '0';
  } else {
    current = current.slice(0, -1);
    screen.textContent = current;
  }
}
