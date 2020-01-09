import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const cssClass = ['calc'];
  const { btname, wide, color } = props;
  if (wide) {
    cssClass.push('basis50');
  }
  if (color) {
    cssClass.push(color);
  }
  return (
    <button className={cssClass.join(' ')} type="button">
      {btname}
    </button>
  );
};

Button.defaultProps = {
  color: 'gray',
  wide: '',
};
Button.propTypes = {
  btname: PropTypes.string.isRequired,
  wide: PropTypes.number,
  color: PropTypes.string,
};

export default Button;
