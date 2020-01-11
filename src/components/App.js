import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint no-unused-vars: "error" */
import calculate from '../logic/calculate';

function shutError() {
  const button = 'X';
  const obj = {
    next: 1,
    operation: 'X',
    total: '1',
  };
  calculate(obj, button);
  return null;
}
const App = () => (
  shutError(),
  (
    <div id="main-div">
      <Display />
      <ButtonPanel />
    </div>
  )
);

export default App;
