import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const btname = props;
  return <button className="calc" type="button" >{btname}</button>;
};

Button.propTypes = {
  btname: PropTypes.string.isRequired,
};

export default button;
