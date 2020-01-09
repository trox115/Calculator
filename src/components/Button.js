import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
   let cssClass=['calc'];
  const { btname,wide } = props;
    if(wide){
        cssClass.push('basis50');
    }
  return <button className={cssClass.join(' ')} type="button">{btname}</button>;
};

Button.propTypes = {
  btname: PropTypes.string.isRequired,
};

export default Button;
