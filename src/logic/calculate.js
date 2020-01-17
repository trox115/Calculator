import operate from './operate';

const calculate = (obj, btname) => {
  const { next, operation } = obj;
  let { total } = obj;

      console.log(total +"total")
      console.log(next +" next")
  if (btname === '+/-') {
    total *= -1;
    obj.total = total;
  } else {
    obj.total = operate(total, next, operation);
      obj.operation= operation
  }
  return obj;
};
const isNumber = (obj, btname) => {
    let { total, next } = obj
    const { operation  } =  obj
    switch(operation === null){
        case total === null:
            total = btname;
            break;
        default:
            total+=btname;
    }
    if (next === null){
        next =btname;
    }else{
        next+=btname;
    }
    return { next, operation, total }
}
const isOperator = (obj,btname) => {
    let { next, operation, total } = obj
    let operator = btname;
    const { total: tot} = calculate(obj,operator);
    if (operator === '='){
        next = null;
        total = tot;
    } else {
        next = null;
        operation =operator;
        total = tot
    }
    return {next,operation, total }
}
const main = (calculator, btnamee) => {
  let { next, operation, total } = calculator;

  if (btnamee === 'AC') {
    ({ next, operation, total } = { next: null, operation: null, total: null });
  } else if (isNaN(btnamee)=== false ) {
    ({ next, operation, total } =isNumber(calculator, btnamee));
  } else {
    ({ next, operation, total } =isOperator(calculator, btnamee));
  }

  return { next, operation, total };
};
export default main;

