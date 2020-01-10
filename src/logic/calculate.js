import operate from './operate';

const calculate = (obj, btname) => {
  let object = obj;
  const { next, operation } = object;
  let { total } = object;

  if (btname === '+/-') {
    total *= -1;
    object.total = total;
  } else {
    object.total = operate(total, next, operation);
  }
  return object;
};
export default calculate;
