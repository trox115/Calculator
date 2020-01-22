import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const cssClass = ['calc'];
      const { btname, wide, color } = this.props;
    if (wide) {
      cssClass.push('basis50');
    }
    if (color) {
      cssClass.push(color);
    }
    return (
      <button
        className={ cssClass.join(' ') }
        type="button"
        onClick={() => this.props.handleClick(btname)}>
        { btname }
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
