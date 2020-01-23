import operate from './operate';

const calculate = (obj, btname) => {
  const object = obj;
  const { next, operation } = object;
  let { total } = object;

  if (btname === '+/-') {
    total *= -1;
    object.total = total;
  } else {
    object.total = operate(total, next, operation);
    object.operation = operation;
  }
  return obj;
};

const isNumber = (calculator, btname) => {
  let { total, next } = calculator;
  const { operation } = calculator;
  if (operation === null) {
    if (total === null) {
      total = btname;
    } else {
      total += btname;
    }
  } else if (next === null) {
    next = btname;
  } else {
    next += btname;
  }
  return { next, operation, total };
};

const isOperator = (calculator, btname) => {
  let { next, operation, total } = calculator;
  if (operation === null || next === null) {
    if (btname === '+/-') {
      const { total: tot } = calculate(calculator, btname);
      total = tot;
    } else {
      operation = btname;
    }
  } else {
    const { total: tot } = calculate(calculator, btname);
    if (btname === '=') {
      next = null;
      total = tot;
    } else {
      next = null;
      operation = btname;
      total = tot;
    }
  }
  return { next, operation, total };
};
const main = (calculator, btname) => {
  let { next, operation, total } = calculator;

  if (btname === 'AC' || total === 'Cannot divide by 0') {
    ({ next, operation, total } = { next: null, operation: null, total: null });
    // eslint-disable-next-line no-restricted-globals
  } else if (!isNaN(btname)) {
    ({ next, operation, total } = isNumber(calculator, btname));
  } else {
    ({ next, operation, total } = isOperator(calculator, btname));
  }

  return { next, operation, total };
};
export default main;
