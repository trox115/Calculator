import React from 'react';

const ButtonPanel = () => (
  <div className="buttons">
    <div className="group1">
      <button name="AC" type="button" />
      <button name="+/-" type="button" />
      <button name="%" type="button" />
      <button name="/" type="button" />
    </div>
    <div className="group2">
      <button name="7" type="button" />
      <button name="8" type="button" />
      <button name="9" type="button" />
      <button name="X" type="button" />
    </div>
    <div className="group3">
      <button name="4" type="button" />
      <button name="5" type="button" />
      <button name="6" type="button" />
      <button name="-" type="button" />
    </div>
    <div className="group4">
      <button name="3" type="button" />
      <button name="2" type="button" />
      <button name="1" type="button" />
      <button name="+" type="button" />
    </div>
    <div className="group5">
      <button name="0" type="button" />
      <button name="," type="button" />
      <button name="." type="button" />
      <button name="=" type="button" />
    </div>
  </div>
);

export default ButtonPanel;
