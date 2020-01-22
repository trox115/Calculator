import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render(){
  const cssClass = ['calc'];
  if (this.props.wide) {
    cssClass.push('basis50');
  }
  if (this.props.color) {
    cssClass.push(this.props.color);
  }
  return (
    <button className={cssClass.join(' ')} type="button" onClick={() => this.props.handleClick(this.props.btname)}>
      {this.props.btname}
    </button>
  );
}
}

Button.defaultProps = {
  color: 'orange',
  wide: 0,
};
Button.propTypes = {
  btname: PropTypes.string.isRequired,
  wide: PropTypes.number,
  color: PropTypes.string,
};

export default Button;
