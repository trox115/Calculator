const calculate = (obj, btname) => {
  const {total, next, operation} = obj;
  if (btname === '+/-') {
    total = total * -1;
    obj.total = total;
  } else {
    obj.total = total;
  }
  return obj;
};
