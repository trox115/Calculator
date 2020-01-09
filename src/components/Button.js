import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { btname } = props;
    if (btname==='0'){
  return <button className="calc basis50" type="button">{btname}</button>;
    }else{
  return <button className="calc" type="button">{btname}</button>;
    }
};

Button.propTypes = {
  btname: PropTypes.string.isRequired,
};

export default Button;
