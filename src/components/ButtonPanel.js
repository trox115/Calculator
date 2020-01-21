import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
    handle = (btname) => {
        this.props.handle(btname);
  }

  render() {
    return (
      <div className="Buttons">
        <div className="group1">
          <Button
            btname="AC"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="+/-"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="%"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button btname="/" type="Button"
            color="gray"
            handle={this.handle} />
        </div>
        <div className="group2">
          <Button
            btname="7"
            type="Button"
            color="gray"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="8"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="9"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button btname="X" type="Button"
            handle={this.handle}
          />
        </div>
        <div className="group3">
          <Button
            btname="4"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="5"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="6"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button btname="-" type="Button" handle={this.handle}/>
        </div>
        <div className="group4">
          <Button
            btname="3"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="2"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="1"
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="+"
            type="Button"
            color="orange"
            handle={this.handle}
          />
        </div>
        <div className="group5">
          <Button
            btname="0"
            type="Button"
            wide={1}
            color="gray"
            handle={this.handle}
          />
          <Button
            btname="."
            type="Button"
            color="gray"
            handle={this.handle}
          />
          <Button btname="=" type="Button"
            handle={this.handle}
          />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
