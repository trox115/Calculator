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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const { next, operation, total } = main(this.state, btn);
    this.setState({
      next,
      operation,
      total,
    });
  }

  render() {
    const { next, operation, total } = this.state;
    let value = null;
    if (operation === null) {
      value = total || '0';
    } else {
      value = next || total;
    }
    return (
      <div id="main-div">
        <Display value={value.toString()} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
