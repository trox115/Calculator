import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="Buttons">
    <div className="group1">
      <Button btname="AC" type="Button" />
      <Button btname="+/-" type="Button" />
      <Button btname="%" type="Button" />
      <Button btname="/" type="Button" />
    </div>
    <div className="group2">
      <Button btname="7" type="Button" />
      <Button btname="8" type="Button" />
      <Button btname="9" type="Button" />
      <Button btname="X" type="Button" />
    </div>
    <div className="group3">
      <Button btname="4" type="Button" />
      <Button btname="5" type="Button" />
      <Button btname="6" type="Button" />
      <Button btname="-" type="Button" />
    </div>
    <div className="group4">
      <Button btname="3" type="Button" />
      <Button btname="2" type="Button" />
      <Button btname="1" type="Button" />
      <Button btname="+" type="Button" />
    </div>
    <div className="group5">
      <Button btname="0" type="Button" wide='1'/>
      <Button btname="." type="Button" />
      <Button btname="=" type="Button" />
    </div>
  </div>
);

export default ButtonPanel;
