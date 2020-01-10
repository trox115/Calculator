let Big = require('big.js');

function operate(numberOne, numberTwo, operation) {
  const num1 = new Big(numberOne);
    const num2 = new Big(numberTwo);
  let result = 0;
  switch (operation) {
    case '-':
      return num1.minus(num2);
      break;

    case '+':
      result = num1.plus(num2);
      return result.toString;
      break;
    case 'X':
      result = num1.times(num2);
      return result.toString;
    case '/':
      result = num1.div(num2);
      return result.toString;
      break;
    case '%':
      result = num1.times(num2) / 100;
      return result.toString;
      break;
  }
  return '0';
}
export default operate;
