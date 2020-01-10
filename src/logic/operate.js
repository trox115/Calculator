let Big = require('big.js');

function operate(numberOne, numberTwo, operation) {
  let result = 0;
  switch (operation) {
    case '-':
      return numberOne - numberTwo;
      break;

    case '+':
      result = numberOne + numberTwo;
      return result.toString;
      break;
    case 'X':
      result = numberOne * numberTwo;
      return result.toString;
    case '/':
      result = numberOne / numberTwo;
      return result.toString;
      break;
    case '%':
      result = (numberOne * numberTwo) / 100;
      return result.toString;
      break;
  }
  return '0';
}
export default operate;
