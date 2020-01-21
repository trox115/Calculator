import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handle = () => {
      console.log(this.props.btname)
    this.props.handle(this.props.btname);
  }
render (){
    const prps = this.props;
  const cssClass = ['calc'];
  const { btname, wide, color } = prps;
  if (wide) {
    cssClass.push('basis50');
  }
  if (color) {
    cssClass.push(color);
  }
  return (
    <button className={cssClass.join(' ')} type="button" onClick={this.handle}>
      {btname}
    </button>
  );
};
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
