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
  }
  return object;
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

const main = (obj,btname) => {
    let { next, operation, total } = obj
    if (isNaN(btname)===false){
        ({next, operation, total}=isNumber(obj,btname));
    }else{
        ({next, operation, total}=isOperator(obj,btname));
    }
    return {next, operation, total}
}
export default calculate;
