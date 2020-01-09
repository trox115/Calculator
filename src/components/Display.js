import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { value } = props;
  return <div className='total'>{value}</div>;
};
Display.defaultProps = {
  value: '0',
};
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
