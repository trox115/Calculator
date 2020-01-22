import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const cssClass = ['calc'];
    const {
      btname,
      wide,
      color,
      handleClick,
    } = this.props;
    if (wide) {
      cssClass.push('basis50');
    }
    if (color) {
      cssClass.push(color);
    }
    return (
      <button
        className={cssClass.join(' ')}
        type="button"
        onClick={() => handleClick(btname)
        }>
        {btname}
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
  handleClick: PropTypes.func.isRequired,
};

export default Button;
