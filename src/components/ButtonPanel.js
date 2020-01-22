import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonPanel extends React.PureComponent {
  render() {
    const { handleClick } = this.props
    return (
      <div className="Buttons">
        <div className="group1">
          <Button
            btname="AC"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="+/-"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="%"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="/"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
        </div>
        <div className="group2">
          <Button
            btname="7"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="8"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="9"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="X"
            type="Button"
            handleClick={handleClick}
          />
        </div>
        <div className="group3">
          <Button
            btname="4"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="5"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="6"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="-"
            type="Button"
            handleClick={handleClick}
          />
        </div>
        <div className="group4">
          <Button
            btname="3"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="2"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="1"
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="+"
            type="Button"
            color="orange"
            handleClick={handleClick}
          />
        </div>
        <div className="group5">
          <Button
            btname="0"
            type="Button"
            wide={1}
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="."
            type="Button"
            color="gray"
            handleClick={handleClick}
          />
          <Button
            btname="="
            type="Button"
            handleClick={handleClick}
          />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
