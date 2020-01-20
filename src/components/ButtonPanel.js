import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types'

class ButtonPanel extends React.Component {
 static propTypes = {
   btname: PropTypes.string,
 };

  handle(btname) {
    const prps = this.props;
    prps.onClick(btname);
  }

  render() {
    return (
      <div className="Buttons">
        <div className="group1">
          <Button
            btname="AC"
            type="Button"
            color="gray"
            onClick={() => this.handle('AC')}
          />
          <Button
            btname="+/-"
            type="Button"
            color="gray"
            onClick={() => this.handle('+/-')}
          />
          <Button
            btname="%"
            type="Button"
            color="gray"
            onClick={() => this.handle('%')}
          />
          <Button btname="/" type="Button" onClick={() => this.handle('/')} />
        </div>
        <div className="group2">
          <Button
            btname="7"
            type="Button"
            color="gray"
            onClick={() => this.handle(7)}
          />
          <Button
            btname="8"
            type="Button"
            color="gray"
            onClick={() => this.handle('8')}
          />
          <Button
            btname="9"
            type="Button"
            color="gray"
            onClick={() => this.handle('9')}
          />
          <Button btname="X" type="Button" onClick={() => this.handle('X')} />
        </div>
        <div className="group3">
          <Button
            btname="4"
            type="Button"
            color="gray"
            onClick={() => this.handle('4')}
          />
          <Button
            btname="5"
            type="Button"
            color="gray"
            onClick={() => this.handle('5')}
          />
          <Button
            btname="6"
            type="Button"
            color="gray"
            onClick={() => this.handle('5')}
          />
          <Button btname="-" type="Button" onClick={() => this.handle('-')} />
        </div>
        <div className="group4">
          <Button
            btname="3"
            type="Button"
            color="gray"
            onClick={() => this.handle('3')}
          />
          <Button
            btname="2"
            type="Button"
            color="gray"
            onClick={() => this.handle('2')}
          />
          <Button
            btname="1"
            type="Button"
            color="gray"
            onClick={() => this.handle('1')}
          />
          <Button
            btname="+"
            type="Button"
            color="orange"
            onClick={() => this.handle('+')}
          />
        </div>
        <div className="group5">
          <Button
            btname="0"
            type="Button"
            wide={1}
            color="gray"
            onClick={() => this.handle('0')}
          />
          <Button
            btname="."
            type="Button"
            color="gray"
            onClick={() => this.handle('.')}
          />
          <Button btname="=" type="Button" onClick={() => this.handle('=')} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
