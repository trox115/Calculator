import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="buttons">
    <div className="group1">
      <button btname="AC" type="button" />
      <button btname="+/-" type="button" />
      <button btname="%" type="button" />
      <button btname="/" type="button" />
    </div>
    <div className="group2">
      <button btname="7" type="button" />
      <button btname="8" type="button" />
      <button btname="9" type="button" />
      <button btname="X" type="button" />
    </div>
    <div className="group3">
      <button btname="4" type="button" />
      <button btname="5" type="button" />
      <button btname="6" type="button" />
      <button btname="-" type="button" />
    </div>
    <div className="group4">
      <button btname="3" type="button" />
      <button btname="2" type="button" />
      <button btname="1" type="button" />
      <button btname="+" type="button" />
    </div>
    <div className="group5">
      <button btname="0" type="button" />
      <button btname="," type="button" />
      <button btname="." type="button" />
      <button btname="=" type="button" />
    </div>
  </div>
);

export default ButtonPanel;
