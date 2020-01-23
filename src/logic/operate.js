const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result = 0;
  if (operation === '/' && numberTwo === '0') {
    result = 'Cannot divide by 0';
    return result;
  }
  switch (operation) {
    case '-':
      result = num1.minus(num2);
      break;
    case '+':
      result = num1.plus(num2);
      break;
    case 'X':
      result = num1.times(num2);
      break;
    case '/':
      result = num1.div(num2);
      break;
    case '%':
      result = num1.times(num2) / 100;
      break;
    default:
      result = 0;
      break;
  }
  return result.toString();
};

export default operate;
