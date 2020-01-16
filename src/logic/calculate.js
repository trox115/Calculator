import operate from './operate';

const calculate = (obj, btname) => {
    console.log(obj)
  const { next, operation } = obj;
  let { total } = obj;

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
        total = tot.toString();
    } else {
        next = null;
        operation =operator;
        total = tot
    }
    return {next,operation, total }
}
const main = (obj,btname) => {
    let { next, operation, total } = obj
    if (isNaN(btname)===false){
        ({next, operation, total}=isNumber(obj,btname));
    }else{
        ({next, operation, total}=isOperator(obj,btname));
    }
    return {next, operation, total}
}
export default main;
