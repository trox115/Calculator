import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) =>{
    const btname = props
        return(
            <button className = 'calc'>
                {btname}
            </button>
        );
};

Button.propTypes = {
  btname: PropTypes.string.isRequired,
};
