import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable no-unused-vars */
import main from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      operation: null,
      total: null,
    };
  }

  handle(btname) {
    const { next, operation, total } = main(this.state, btname);
    this.setState({
      operation,
      total,
      next,
    });
  }

  render() {
    const { next , operation, total }= this.state;
    let value = null;
    if (operation === null) {
      value = total ? total : '0';
    } else {
      value = next ? next : total;
    }
    return (
      <div id="main-div">
        <Display value={value.toString()} />
        <ButtonPanel onClick={btname => this.handle(btname)} />
      </div>
    );
  }
}

export default App;
